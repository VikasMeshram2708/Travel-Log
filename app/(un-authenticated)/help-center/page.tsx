import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function HelpCenter() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Help Center</h1>
        <p className="text-muted-foreground mb-8">
          Got questions about Travel Log? You’re in the right place. Explore our
          frequently asked questions or reach out to us directly.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Travel Log?</AccordionTrigger>
                <AccordionContent>
                  Travel Log is a simple yet powerful platform that helps you
                  document, organize, and relive your travel experiences — all
                  in one place.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I need an account to use Travel Log?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you’ll need to create a free account to start logging
                  your journeys and syncing them across devices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I use Travel Log offline?
                </AccordionTrigger>
                <AccordionContent>
                  At the moment, Travel Log requires an internet connection.
                  We’re actively working on adding offline support in future
                  releases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How is my data secured?</AccordionTrigger>
                <AccordionContent>
                  We use industry-standard encryption to protect your data, and
                  we never sell your personal information. Your memories are
                  yours — always.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                  You can reach our support team via the contact form below or
                  email us directly at support@travellog.com.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="bg-muted p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
          <p className="text-muted-foreground mb-4">
            Our support team is here for you. Get in touch and we’ll get back
            within 24 hours.
          </p>
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </main>

      <div className="pt-5">
        <Footer />
      </div>
    </>
  );
}
