import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import ContactForm from "./contact-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | TravelPass - Get in Touch",
  description:
    "Reach out to our team for support, partnerships, or general inquiries. We're here to help with your travel needs.",
};

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? {"We'd"} love to hear from you. Our team
            typically responds within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Details Card */}
          <Card className="p-6 h-full">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Headquarters</h3>
                      <p className="text-muted-foreground text-sm">
                        123 {"Traveler's"} Way
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        +1 (800) 555-0199
                        <br />
                        Mon-Fri, 9am-5pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        hello@travelpass.com
                        <br />
                        support@travelpass.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Twitter</span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
