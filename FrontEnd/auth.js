import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { signInSchema } from "./app/lib/login/schema";

const getUserFromDb = async () => {
  try {
    const User = {
      name: "Rassiel",
      email: "rassiel@email.com",
      password: "123456",
    };
    return User;
  } catch (error) {}
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth, request }) => {
      const isLoggedIn = !!auth?.user;

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
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        //TODO: logic to salt and hash password
        //const pwHash = saltAndHashPassword(password);
        const pwHash = password;

        // logic to verify if the user exists
        user = await getUserFromDb(email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        console.log("Auth success!");
        // return user object with their profile data

        return user;
      },
    }),
    Google,
  ],
});
