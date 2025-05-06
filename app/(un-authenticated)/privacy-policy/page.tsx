import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TravelPass - Your Data Security",
  description:
    "Learn how TravelPass collects, uses, and protects your personal information. Last updated January 2025.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last Updated: January 2025</p>
        </div>

        <Card className="p-6 md:p-8">
          <section className="mb-10">
            <p className="mb-6">
              At <strong>TravelPass</strong>, we prioritize your privacy and
              data security. This Privacy Policy explains how we collect, use,
              disclose, and protect your personal information when you use our
              services.
            </p>
            <p>
              By accessing or using TravelPass, you agree to the terms outlined
              below. If you disagree with any part of this policy, please
              discontinue use of our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              1. Information We Collect
            </h2>

            <h3 className="font-medium mb-2">A. Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <strong>Account Data</strong> - Name, email address, profile
                picture
              </li>
              <li>
                <strong>Travel Preferences</strong> - Destinations, trip
                history, saved places
              </li>
              <li>
                <strong>Payment Information</strong> - Processed securely via
                third-party providers (Stripe, PayPal)
              </li>
              <li>
                <strong>Device & Usage Data</strong> - IP address, browser type,
                app interactions
              </li>
            </ul>

            <h3 className="font-medium mb-2">B. Media & Content</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Photos and videos you upload</li>
              <li>Location tags and travel logs</li>
              <li>Trip descriptions and reviews</li>
            </ul>

            <h3 className="font-medium mb-2">
              C. Automatically Collected Data
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cookies and similar tracking technologies</li>
              <li>Log files (access times, pages viewed)</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide and maintain our services (trip planning, media storage)
              </li>
              <li>Improve and personalize user experience</li>
              <li>Develop new features and offerings</li>
              <li>Prevent fraud and enhance security</li>
              <li>
                Communicate with you about updates and offers (opt-out
                available)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              3. Data Sharing & Disclosure
            </h2>
            <p className="mb-4">We may share information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Service Providers</strong> - Payment processors, cloud
                storage, analytics
              </li>
              <li>
                <strong>Business Partners</strong> - Only with your explicit
                consent
              </li>
              <li>
                <strong>Legal Authorities</strong> - When required by law or to
                protect rights
              </li>
            </ul>
            <p>
              We <strong>do not sell</strong> your personal data to third
              parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication protocols</li>
              <li>GDPR and CCPA compliance measures</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access, update, or delete your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Lodge complaints with regulatory authorities</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <strong>privacy@travelpass.com</strong>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              6. International Data Transfers
            </h2>
            <p>
              Your data may be transferred to and processed in countries outside
              your residence. We ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>EU Standard Contractual Clauses</li>
              <li>Adequacy decisions</li>
              <li>Other lawful transfer mechanisms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              7. {"Children's"} Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 16. We do not
              knowingly collect personal information from children without
              parental consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">8. Policy Updates</h2>
            <p>
              We may update this policy periodically. Material changes will be
              notified via email or in-app notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact our Data Protection Officer
              at:
            </p>
            <p className="mt-2">
              <strong>TravelPass Privacy Team</strong>
              <br />
              privacy@travelpass.com
              <br />
              123 Privacy Lane, Suite 100
              <br />
              San Francisco, CA 94107
            </p>
          </section>
        </Card>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </>
  );
}
