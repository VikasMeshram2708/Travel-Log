"use client";
import { contactQuery } from "@/app/dal/contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Send, Terminal, X } from "lucide-react";
import { useActionState } from "react";

export default function ContactForm() {
  const [state, contactAction, isPending] = useActionState(contactQuery, null);
  function hideElement() {
    const notifierElement = document.querySelector("#notifier");
    if (notifierElement) {
      notifierElement.classList.add("hidden");
    }
  }
  return (
    <Card className="p-6 h-full">
      {state?.success && (
        <Alert id="notifier">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="flex items-center justify-between">
            Success
            <span>
              <X color="red" onClick={hideElement} className="cursor-pointer" />
            </span>
          </AlertTitle>
          <AlertDescription>
            Thank you. Our team will connect with you shortly.
          </AlertDescription>
        </Alert>
      )}
      <h2 className="text-xl font-semibold mb-6">
        {isPending ? "Processing..." : "Send Us a Message"}
      </h2>
      <form action={contactAction} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <Input name="name" id="name" placeholder="Your name" required />
            {state?.formErrors?.name && (
              <small className="text-red-500 text-xs font-bold">
                {state?.formErrors?.name}
              </small>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="your@email.com"
              required
            />
            {state?.formErrors?.email && (
              <small className="text-red-500 text-xs font-bold">
                {state?.formErrors?.email}
              </small>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <Input
            name="subject"
            id="subject"
            placeholder="What's this about?"
            required
          />
          {state?.formErrors?.subject && (
            <small className="text-red-500 text-xs font-bold">
              {state?.formErrors?.subject}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            name="message"
            id="message"
            rows={5}
            placeholder="How can we help you?"
            required
          />
          {state?.formErrors?.message && (
            <small className="text-red-500 text-xs font-bold">
              {state?.formErrors?.message}
            </small>
          )}
        </div>

        <div className="pt-2">
          <Button
            disabled={isPending}
            type="submit"
            className={cn(
              "w-full",
              isPending ? "cursor-not-allowed bg-gray-400" : ""
            )}
          >
            <Send className="h-4 w-4 mr-2" />
            {isPending ? "submitting..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
