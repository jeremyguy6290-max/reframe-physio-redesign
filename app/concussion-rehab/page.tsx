import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Concussion Rehab | Reframe Physio Wellington",
  description:
    "Evidence-based concussion rehabilitation in central Wellington. Specialist assessment and graded recovery for headaches, dizziness, brain fog, and post-concussion symptoms.",
};

export default function ConcussionRehabPage() {
  return (
    <ServicePage
      serviceLabel="Specialist Physiotherapy"
      title="Concussion Rehabilitation"
      intro="Evidence-based rehabilitation for concussion symptoms including headaches, dizziness, brain fog, balance problems, and exercise intolerance — paced carefully to support a safe and complete recovery."
      ctaText="Book a concussion assessment"
      whatItIs={{
        heading: "What is a concussion?",
        body: [
          "Concussion is a mild brain injury caused by a blow or jolt to the head or body. It temporarily changes how the brain functions, even when imaging appears normal. Most people recover fully, but some experience symptoms that persist beyond the expected timeframe.",
          "Symptoms can vary widely and may include headache, dizziness, nausea, fatigue, sensitivity to light or noise, memory or concentration difficulties, mood changes, and disrupted sleep. Some people also experience exercise intolerance — finding that physical or cognitive effort significantly worsens their symptoms.",
          "Recovery is not just a matter of rest. Current evidence supports a gradual, guided return to activity, with treatment tailored to the specific symptoms driving ongoing difficulties.",
        ],
      }}
      approach={{
        heading: "Our treatment approach",
        body: [
          "At Reframe, concussion assessment goes beyond symptom management. We look at the full clinical picture, including multiple systems that commonly contribute to prolonged concussion symptoms:",
        ],
        bullets: [
          "Brain and central nervous system assessment",
          "Cervical and thoracic spine — neck and upper back dysfunction can directly drive headaches and dizziness after concussion",
          "Vestibular system — inner ear involvement is common and responds well to targeted treatment",
          "Balance and coordination",
          "Autonomic function and exercise tolerance",
        ],
      }}
      whyReframe={{
        heading: "Experience across acute and community concussion care",
        body: [
          "John has worked with concussion presentations in both acute Emergency Department settings and community rehabilitation. This range of experience means he understands the full arc of concussion recovery — from the acute phase through to more persistent, complex presentations.",
          "One area worth highlighting is the role of the cervical spine. Neck and upper thoracic dysfunction frequently contribute to prolonged concussion symptoms, particularly headaches and dizziness, and is sometimes overlooked in standard concussion management. Addressing this as part of a comprehensive assessment often makes a meaningful difference.",
          "Reframe can also work alongside ACC concussion rehabilitation services, providing additional assessment and support where that is helpful.",
        ],
      }}
      whatToExpect={{
        heading: "What to expect at your appointment",
        body: [
          "Your first appointment begins with a detailed injury history — how and when the concussion occurred, what symptoms you experienced initially, and how things have changed over time.",
          "Assessment covers the central nervous system, cervical spine, vestibular system, balance, and autonomic function. Depending on symptom severity, testing may be spread across sessions to avoid provoking a significant symptom flare.",
          "From the assessment, you will receive a clear explanation of what is contributing to your symptoms and a graded plan for recovery. Where appropriate, we can coordinate with your GP, ACC, or other healthcare providers to ensure a joined-up approach.",
        ],
      }}
    />
  );
}
