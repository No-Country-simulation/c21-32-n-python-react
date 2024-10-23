const ITEMS_PER_PAGE = 8;
export async function fetchRequestsFiltered(query, currentPage) {
  try {
    let requests = [
      {
        name: "Juan",
        lastName: "Perez",
        email: "juan.perez@gmail.com",
        date: "13-05-2024",
        status: "aprovada",
      },
      {
        name: "Juan",
        lastName: "Perez",
        email: "juan.perez@gmail.com",
        date: "13-05-2024",
        status: "denegada",
      },
      {
        name: "Juan",
        lastName: "Perez",
        email: "juan.perez@gmail.com",
        date: "13-05-2024",
        status: "denegada",
      },
      {
        name: "Juan",
        lastName: "Perez",
        email: "juan.perez@gmail.com",
        date: "13-05-2024",
        status: "aprovada",
      },
    ];
    let totalPages = 4;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    //Call Api using query and offset
    //Get Requests
    return { requests, totalPages };
  } catch (error) {}
}

export const getTokenFromDb = async (email, pwHash) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/user/login/", {
      method: "POST",
      body: JSON.stringify({ email: email, password: pwHash }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();

    if (jsonResponse.detail) return null;
    //console.log(jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserFromDb = async (token) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/user/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonResponse = await response.json();
    //if (jsonResponse.detail) return null;
    //console.log(jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
};
