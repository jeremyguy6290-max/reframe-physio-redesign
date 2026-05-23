import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Manual Therapy | Reframe Physio Wellington",
  description:
    "Specialist manual therapy physiotherapy in central Wellington. Hands-on treatment for pain, stiffness, and movement problems — integrated with active rehabilitation.",
};

export default function ManualTherapyPage() {
  return (
    <ServicePage
      serviceLabel="Specialist Physiotherapy"
      title="Manual Therapy"
      intro="Skilled, hands-on physiotherapy to reduce pain, restore movement, and support a more complete recovery — integrated with active rehabilitation rather than used as a standalone quick fix."
      ctaText="Book a manual therapy appointment"
      whatItIs={{
        heading: "What is manual therapy?",
        body: [
          "Manual therapy is hands-on physiotherapy used to assess and treat pain, stiffness, reduced range of movement, and soft tissue dysfunction. It covers a range of techniques that are applied directly to joints, muscles, and connective tissue.",
          "Techniques may include joint mobilisation, manipulation, soft tissue release, myofascial work, and stretching. The aim is to reduce pain and stiffness, improve joint mechanics, and help restore normal movement.",
          "Manual therapy is most effective when it is part of a broader treatment plan. At Reframe, we use hands-on techniques to create the conditions for active recovery — not as an end in themselves.",
        ],
      }}
      approach={{
        heading: "Our treatment approach",
        body: [
          "We take an integrated approach to manual therapy. Hands-on treatment is used thoughtfully and purposefully, always in combination with exercise, movement retraining, and patient education.",
          "This matters because the research consistently shows that combining manual therapy with active rehabilitation produces better long-term outcomes than passive treatment alone. Our goal is to help you move and function better — not to create dependence on treatment.",
          "Depending on your presentation, treatment may include:",
        ],
        bullets: [
          "Joint mobilisation or manipulation of the spine, neck, or limbs",
          "Soft tissue techniques for muscle tension and myofascial restriction",
          "Dry needling for trigger point management",
          "Thoracic and cervical spine assessment and treatment",
          "Targeted exercise and movement retraining",
          "Education about posture, load, and activity management",
        ],
      }}
      whyReframe={{
        heading: "Postgraduate training and broad clinical experience",
        body: [
          "John holds postgraduate training in orthopaedic manipulative therapy through the University of Otago, giving him a strong technical foundation in manual assessment and treatment across the spine and peripheral joints.",
          "His clinical experience spans acute injury and post-operative care through to complex, longstanding presentations where pain and movement difficulty have become entrenched. This breadth means he can apply manual therapy appropriately — knowing when it is likely to help, and when another approach would serve you better.",
          "If anything of concern is identified during your assessment, Reframe can help facilitate onward referral to the appropriate specialist.",
        ],
      }}
      whatToExpect={{
        heading: "What to expect at your appointment",
        body: [
          "Your first appointment begins with a detailed history of your injury or condition — how it started, what it affects, and what you have already tried. This is followed by a physical assessment of movement, strength, joint mechanics, and soft tissue findings.",
          "We will explain what we find in plain language, including what may be driving your discomfort and what the treatment plan will involve. You will not be left guessing.",
          "Treatment typically begins in the first session, combining hands-on techniques with advice and exercises you can do at home. Follow-up appointments build on this, adjusting the plan as your condition improves.",
        ],
      }}
    />
  );
}
