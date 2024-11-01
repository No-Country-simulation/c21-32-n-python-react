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
    //console.log("response getting token: ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    //console.log("Error getting Token: ", error);
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
    if (jsonResponse.detail) return null;
    //console.log("response getting user: ",jsonResponse);
    return jsonResponse;
  } catch (error) {
    //console.log("Error getting User: ", error);
    return null;
  }
};

export const createRefuge = async (refuge) => {
  try {
    
    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/refugio/refugio/",
      {
        method: "POST",
        body: refuge,
      }
    );
    const jsonResponse = await response.json()
    console.log("Error Creating refuge: ", jsonResponse);

    return response;
  } catch (error) {
    console.log("Error Creating refuge: ", error);
    return null;
  }
};

export const createPet = async (pet) => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/pets/mascotas/",
      {
        method: "POST",
        body: pet,
      }
    );

    return response;
  } catch (error) {
    //console.log("Error Creating Pet: ", error);
    return null;
  }
};

export const getFilteredPets = async (search, page, filter) => {
  //console.log("Filter: ", filter);
  //console.log("Search: ", search);
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/pets/mascotas/`,
      { method: "GET" }
    );

    const pets = await response.json();
    //console.log(pets);

    const filteredData = pets.filter((pet) => {
      if (search) {
        return pet.nombre.toUpperCase().includes(search.toUpperCase());
      }
      return true;
    });

    const filterData2 = filteredData.filter((pet) => {
      if (filter) {
        return pet.tipo === Number(filter);
      }
      return true;
    });
    // .filter((pet) => {
    //   return pet.tipo.includes(filter);
    // });
    return filterData2;
  } catch (error) {
    //console.log("Error Creating Pet: ", error);
    return null;
  }
};
