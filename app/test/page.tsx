"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/lib/useDebounce";
// import { CountryDetails } from "@/types";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TestPage() {
  const [value, setValue] = useState("");
  // const [countryDetails, setCountryDetails] = useState<CountryDetails[]>([]);
  const debounceQuery = useDebounce(value);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch("/api/getcity", {
          method: "POST",
          body: JSON.stringify({ q: debounceQuery }),
        });
        const json = await response.json();
        // console.log("json", json);
      } catch (e) {
        console.error(e);
        // throw alert(e);
      }
    }
    if (debounceQuery.length > 0) {
      fetchCountry();
    }
  }, [debounceQuery]);
  return (
    <div className="bg-stone-200 text-muted-foreground mx-auto px-6 py-4 h-screen flex flex-col items-center justify-center">
      <form action="" className="w-full max-w-lg">
        <label htmlFor="country">
          Country
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            name="country"
            className="border-red-400 mt-2"
          />
        </label>
        <Button className="mt-5" type="submit">
          Submit
        </Button>
      </form>
      {/* {countryDetails?.length > 0 && (
        <ul className="space-y-4">
          {countryDetails?.map((cnt, idx) => (
            <li key={idx} className="p-2 rounded-lg bg-amber-400 text-black">
              <Image
                src={cnt.flags?.png}
                alt={cnt?.name?.common}
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
              {cnt?.name?.common}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
