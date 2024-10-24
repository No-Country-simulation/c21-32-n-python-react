import NextAuth, { CredentialsSignin } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { getTokenFromDb, getUserFromDb } from "./app/lib/data";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.access;
        token.refreshToken = user.refresh;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
    authorized: async ({ auth, request }) => {
      const isLoggedIn = !!auth?.user;

      //console.log("auth: ", auth);

      const isOnAdoptionPage = request.nextUrl.pathname.startsWith("/adoption");
      const isOnLogin = request.nextUrl.pathname.startsWith("/login");

      if (isOnAdoptionPage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isOnLogin) {
        if (isLoggedIn) {
          const newUrl = new URL("/adoption", request.nextUrl.origin);
          return Response.redirect(newUrl);
        }
        return false;
      }

      return true;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async ({ email, password }) => {
        try {
          let user = null;
          //TODO: logic to salt and hash password
          //const pwHash = saltAndHashPassword(password);
          const pwHash = password;

          // logic to verify if the user exists

          const token = await getTokenFromDb(email, pwHash);
          if (!token) throw new Error("Credenciales invalidas");
          //console.log("token from db:", token);

          user = await getUserFromDb(token.access);
          if (!user) throw new Error("Data base Error");
          //console.log("User from db: ", user);
          user = {
            ...user,
            ...token,
          };
          //console.log("User with token: ", user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
    Google,
  ],
});
