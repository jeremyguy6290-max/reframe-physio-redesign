import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Pain Management | Reframe Physio Wellington",
  description:
    "Specialist pain management physiotherapy in central Wellington. Whole-person, evidence-based care for chronic and complex pain conditions.",
};

export default function PainManagementPage() {
  return (
    <ServicePage
      serviceLabel="Specialist Physiotherapy"
      title="Pain Management"
      intro="Chronic pain affects more than the body. At Reframe Physio, we take a whole-person approach to help you understand your pain, rebuild confidence, and return to the activities that matter to you."
      ctaText="Book a pain management assessment"
      whatItIs={{
        heading: "Understanding chronic pain",
        body: [
          "Chronic pain is pain that continues beyond the normal healing window — typically longer than three months. It is not simply a sign that something is still damaged. Over time, the nervous system can become sensitised, meaning pain signals are amplified even when tissue has healed.",
          "Chronic pain is influenced by many factors beyond the physical: sleep quality, stress, mood, lifestyle, relationships, and fear of movement all play a role. This is not to say the pain is imagined — it is very real. But it does mean that effective treatment needs to address more than just the painful area.",
          "At Reframe, we aim to explain your pain in a way that helps you feel informed and in control, not blamed or dismissed.",
        ],
      }}
      approach={{
        heading: "Our treatment approach",
        body: [
          "We use a biopsychosocial approach to pain management. This means we look at the full picture — not just the physical presentation, but also how sleep, stress, work, activity levels, and emotional wellbeing are affecting your experience of pain.",
          "Assessment begins with a thorough history and physical examination. From there, treatment is tailored to your specific situation and goals. This may include:",
        ],
        bullets: [
          "Pain education — helping you understand what is happening and why",
          "Graded exposure to movement — gently rebuilding confidence",
          "Exercise and active rehabilitation",
          "Manual therapy where clinically appropriate",
          "Lifestyle strategies for sleep, stress, and pacing",
          "Goal-setting aligned with what matters most to you",
        ],
      }}
      whyReframe={{
        heading: "Specialist experience in pain management",
        body: [
          "John has experience across a wide range of pain presentations — from acute post-operative pain and flare-ups, to complex chronic nociplastic pain. He understands that no two presentations are the same, and takes the time to understand yours.",
          "John holds postgraduate training in pain management through the University of Otago, giving him a strong foundation in the current evidence base and clinical frameworks used to understand and treat persistent pain.",
        ],
      }}
      whatToExpect={{
        heading: "What to expect at your appointment",
        body: [
          "Your first appointment will include a detailed history of your pain — when it started, what makes it better or worse, and how it is affecting your daily life. We will also ask about relevant lifestyle factors such as sleep, stress, and activity.",
          "A physical assessment will follow, looking at movement, strength, and any specific physical findings relevant to your presentation. You will leave with a clear explanation of what we found and a plan tailored to your goals and tolerance.",
          "Follow-up reviews allow us to monitor your progress, adjust the plan as needed, and support you through the different stages of recovery.",
        ],
      }}
    />
  );
}
