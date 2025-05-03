import { NextRequest } from "next/server";

const ApiKey = process.env.WEATHER_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { q } = body;
    const query = `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${q}&aqi=no`;

    const response = await fetch(query);
    if (!response.ok) {
      return new Response(JSON.stringify("City not found"), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const json = await response.json();
    return new Response(JSON.stringify(json), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (e) {
    console.error(e);
    const err = e as unknown as Error;
    return new Response(
      JSON.stringify(
        err?.message ?? "Something went wrong. City fetch failed try again."
      ),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
