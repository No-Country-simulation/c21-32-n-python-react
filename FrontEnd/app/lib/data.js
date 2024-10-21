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
