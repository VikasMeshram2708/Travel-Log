"use client";

import { subscribe } from "@/app/dal/news-letter";
import { useActionState } from "react";

export default function NewsLetterForm() {
  const [state, formAction] = useActionState(subscribe, {
    message: "",
    isError: false,
  });

  return (
    <div className="space-y-2">
      <form action={formAction} className="flex space-x-2">
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Join
        </button>
      </form>

      {state.message && (
        <p
          className={`text-sm ${
            state.isError ? "text-destructive" : "text-green-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
