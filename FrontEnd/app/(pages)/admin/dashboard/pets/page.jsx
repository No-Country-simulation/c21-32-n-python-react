import PetsCreateForm from "@/app/ui/admin/pets/pets-create-form";
import React from "react";

export default async function pages() {
  const refugesResponse = await fetch(
    "http://127.0.0.1:8000/api/v1/refugio/refugio/"
  );
  const refuges = await refugesResponse.json();

  return (
    <div>
      <PetsCreateForm refuges={refuges} />
    </div>
  );
}
