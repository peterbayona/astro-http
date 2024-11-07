import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  const person = {
    name: "John Doe",
    age: 30,
    job: "Software Developer",
  };

  return new Response(JSON.stringify(person), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
