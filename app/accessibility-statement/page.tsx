import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement | Reframe Physio Wellington",
  description:
    "Reframe Physio's commitment to physical and digital accessibility for all clients and visitors.",
};

export default function AccessibilityStatementPage() {
  return (
    <LegalPage
      label="Accessibility"
      title="Accessibility Statement"
      intro="Reframe Physio is committed to ensuring digital and physical accessibility for people of all abilities. We strive to comply with accessibility standards and provide an inclusive environment for clients, visitors, and staff."
      sections={[
        {
          heading: "Physical Accessibility",
          content: (
            <ul className="flex flex-col gap-2 list-none">
              {[
                "Our premises feature step-free access and accessible entryways.",
                "Adjustable equipment is available where appropriate to accommodate clients' needs.",
                "Staff are trained to assist clients with mobility, sensory, or cognitive impairments.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-fern mt-[9px] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "Digital Accessibility",
          content: (
            <>
              <p>
                Our website is designed to meet recognised accessibility
                standards to ensure information is available to all users.
              </p>
              <p>
                We continuously review and update our digital content to improve
                accessibility.
              </p>
            </>
          ),
        },
        {
          heading: "Feedback and Assistance",
          content: (
            <>
              <p>
                If you encounter any barriers to accessibility, or have
                suggestions for improvement, please contact us:
              </p>
              <div className="flex flex-col gap-1.5 pl-1">
                <p>
                  <span className="font-medium text-forest">Phone: </span>
                  <a
                    href="tel:0272414888"
                    className="text-grove underline underline-offset-2 hover:text-forest transition-colors"
                  >
                    027 241 4888
                  </a>
                </p>
                <p>
                  <span className="font-medium text-forest">Email: </span>
                  <a
                    href="mailto:reframephysio@gmail.com"
                    className="text-grove underline underline-offset-2 hover:text-forest transition-colors"
                  >
                    reframephysio@gmail.com
                  </a>
                </p>
              </div>
              <p>
                We are committed to addressing accessibility concerns promptly
                and continuously improving our services.
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
