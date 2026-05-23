import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "FND Rehab | Reframe Physio Wellington",
  description:
    "Specialist physiotherapy for Functional Neurological Disorder (FND) in central Wellington. Evidence-based rehabilitation to retrain movement and rebuild confidence.",
};

export default function FndRehabPage() {
  return (
    <ServicePage
      serviceLabel="Specialist Physiotherapy"
      title="FND Rehabilitation"
      intro="Specialist physiotherapy support for Functional Neurological Disorder — helping you understand your symptoms, retrain movement patterns, and rebuild confidence with a calm, informed approach."
      ctaText="Book an FND rehab assessment"
      whatItIs={{
        heading: "What is Functional Neurological Disorder?",
        body: [
          "Functional Neurological Disorder (FND) is a condition in which the brain and nervous system have difficulty processing and sending signals correctly — even when there is no structural damage visible on scans. The symptoms are real, not imagined, and can be significantly disabling.",
          "Symptoms vary widely between individuals and may include weakness or paralysis, tremor, changes to walking, problems with speech or vision, altered sensation, seizure-like episodes, or difficulty with movement control. FND can develop suddenly or gradually, and symptoms may fluctuate over time.",
          "Understanding that symptoms come from a functional change — how the nervous system is working rather than a structural injury — is often a helpful and important first step in recovery.",
        ],
      }}
      approach={{
        heading: "Our treatment approach",
        body: [
          "Treatment at Reframe begins with education. We take the time to explain FND in a way that is clear and free of blame, helping you feel informed rather than confused. Understanding the condition is genuinely part of getting better.",
          "Physiotherapy for FND focuses on retraining normal movement patterns using strategies that work with the nervous system rather than against it. Treatment is paced carefully according to your tolerance and may include:",
        ],
        bullets: [
          "Clear, patient-centred education about FND",
          "Movement retraining using distraction and sensory feedback techniques",
          "Graded functional activity and confidence-building",
          "Balance and coordination rehabilitation where relevant",
          "Autonomic system support",
          "Coordination with your GP, specialists, and wider healthcare team",
        ],
      }}
      whyReframe={{
        heading: "Experience with complex neurological presentations",
        body: [
          "John first encountered FND in Emergency Department settings, where patients often arrived with sudden, frightening symptoms that were difficult to understand. This experience gave him the ability to explain FND clearly and calmly, which matters enormously when patients and families are anxious and uncertain.",
          "His background in pain management is also relevant: pain is a common feature of FND presentations, and the skills involved in treating persistent pain and neurological sensitisation translate well to FND rehabilitation.",
          "John understands the importance of working collaboratively — FND is best managed as part of a wider team, and he is experienced in coordinating care with other health professionals.",
        ],
      }}
      whatToExpect={{
        heading: "What to expect at your appointment",
        body: [
          "Your first appointment will include a detailed history of your symptoms, how they developed, and how they are affecting your life. We will also discuss broader health factors such as sleep, stress, support networks, and any other conditions that may be relevant.",
          "Physical assessment looks at brain and central nervous system function, the body, movement patterns, and autonomic function. From this, we develop a clear picture of the presentation and a plan for treatment.",
          "Treatment is paced according to your tolerance. We do not push through symptoms — instead, we work within your window of tolerance, gradually building from there. Follow-up reviews allow the plan to adapt as your condition changes.",
        ],
      }}
    />
  );
}
