import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfUsePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">Terms of Use</h1>
      <Card>
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-6">
          <p>Effective Date: May 4, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Travel Log (“we”, “our”, or “the platform”),
            you agree to be bound by these Terms of Use. If you do not agree to
            these terms, please do not use the platform.
          </p>

          <h2>2. Use of the Platform</h2>
          <p>
            Travel Log is intended for personal, non-commercial use. You may
            create, view, and share your travel experiences, but you may not
            misuse the platform in ways that violate laws, infringe on
            intellectual property rights, or disrupt {"others'"} experience.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features, you must create an account. You are
            responsible for keeping your credentials confidential and for all
            activities that occur under your account.
          </p>

          <h2>4. Content Ownership</h2>
          <p>
            You retain ownership of the content you upload. By posting content,
            you grant Travel Log a non-exclusive license to display and store
            your content solely for the purpose of providing our services.
          </p>

          <h2>5. Prohibited Conduct</h2>
          <ul>
            <li>Posting harmful, offensive, or unlawful content</li>
            <li>Attempting to access accounts or data without permission</li>
            <li>
              Using automated systems to access or interact with the platform
            </li>
          </ul>

          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate these Terms of Use or misuse the platform in any way.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            Travel Log is provided “as is” without warranties of any kind. We do
            not guarantee uninterrupted service or the accuracy of content
            created by users.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Travel Log shall not be liable for
            any indirect, incidental, or consequential damages arising from your
            use of the platform.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Any changes will be
            posted on this page, and your continued use of the platform
            signifies acceptance.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about these Terms of Use, please contact us at{" "}
            <a href="mailto:support@travellog.com">support@travellog.com</a>.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
