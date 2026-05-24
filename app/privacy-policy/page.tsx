import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Reframe Physio Wellington",
  description:
    "How Reframe Physio collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      subtitle="A legal disclaimer"
      intro="At Reframe Physio, we respect your privacy and are committed to protecting your personal information. This Privacy Statement explains how we collect, use, and safeguard your information when you visit our website."
      sections={[
        {
          heading: "Information We Collect",
          content: (
            <p>
              Personal details you provide, such as your name, email, or phone
              number, when you contact us or book an appointment. Basic website
              usage data, such as pages visited, to help us improve our site.
            </p>
          ),
        },
        {
          heading: "How We Use Your Information",
          content: (
            <>
              <p>
                To respond to enquiries and provide our services. To confirm or
                manage your appointments. To improve your experience on our
                website.
              </p>
              <p>
                We may share information with your GP or other healthcare
                providers, but only with your consent and for your care.
              </p>
            </>
          ),
        },
        {
          heading: "Storage & Security",
          content: (
            <p>
              We take reasonable steps to keep your information safe and secure.
              Your personal data will not be sold, rented, or shared with third
              parties for marketing purposes.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          content: (
            <p>
              You have the right to access, correct, or request deletion of your
              personal information. To do so, please contact us at{" "}
              <a
                href="mailto:reframephysio@gmail.com"
                className="text-grove underline underline-offset-2 hover:text-forest transition-colors"
              >
                reframephysio@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="tel:0272414888"
                className="text-grove underline underline-offset-2 hover:text-forest transition-colors"
              >
                027 241 4888
              </a>
              .
            </p>
          ),
        },
        {
          heading: "Updates",
          content: (
            <p>
              This Privacy Statement may be updated from time to time. Any
              changes will be published on this page.
            </p>
          ),
        },
        {
          heading: "Cookies",
          content: (
            <>
              <p>
                We use cookies to improve your browsing experience and to
                understand how our website is used. This may include anonymous
                analytics data to help us make our services better.
              </p>
              <p>
                By continuing to use this site, you consent to the use of
                cookies. You can disable cookies in your browser settings at any
                time.
              </p>
            </>
          ),
        },
      ]}
      ctaHeading="Ready to book?"
      ctaBody="No referral required. Book your initial assessment with John Lee online through our Cliniko booking system."
    />
  );
}
