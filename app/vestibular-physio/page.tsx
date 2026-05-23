import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Vestibular Physiotherapy | Reframe Physio Wellington",
  description:
    "Specialist vestibular physiotherapy for dizziness, vertigo, and balance problems in central Wellington. Vesticam technology, evidence-based treatment.",
};

export default function VestibularPhysioPage() {
  return (
    <ServicePage
      serviceLabel="Specialist Physiotherapy"
      title="Vestibular Physiotherapy"
      intro="Targeted physiotherapy for dizziness, vertigo, and balance problems — helping you understand what is causing your symptoms and regain confidence in movement."
      ctaText="Book a vestibular assessment"
      whatItIs={{
        heading: "What is vestibular physiotherapy?",
        body: [
          "The vestibular system — made up of the inner ear and its connections to the brain — is responsible for your sense of balance and spatial orientation. When it is not working correctly, the effects can be significant: dizziness, vertigo, nausea, a sense of unsteadiness, and difficulty coping with movement or busy environments.",
          "Common vestibular conditions include BPPV (benign paroxysmal positional vertigo), where tiny calcium crystals in the inner ear move out of place and cause intense spinning with certain head movements. Others include vestibular neuritis, where inflammation of the vestibular nerve causes sudden onset dizziness, and ongoing vestibular hypofunction.",
          "Vestibular physiotherapy uses targeted assessment and treatment techniques to address these conditions directly — often with significant improvement in a small number of sessions.",
        ],
      }}
      approach={{
        heading: "Our treatment approach",
        body: [
          "Assessment at Reframe involves a careful examination of the vestibular, balance, neck, and neurological systems. This helps us identify the source of your symptoms and guide treatment accurately.",
          "We use Vesticam infrared camera technology, which allows us to observe small, involuntary eye movements (nystagmus) that are important diagnostic indicators. This makes assessment more objective and helps confirm the type of vestibular condition involved.",
          "Treatment depends on what the assessment finds and may include:",
        ],
        bullets: [
          "Canalith repositioning manoeuvres for BPPV",
          "Vestibular rehabilitation exercises to improve compensation",
          "Balance and gaze stability retraining",
          "Cervicogenic dizziness assessment and treatment",
          "Graded return to activity and movement confidence strategies",
        ],
      }}
      whyReframe={{
        heading: "Specialist experience with dizziness and balance",
        body: [
          "John has over six years of clinical experience in Emergency Department settings, where dizziness and imbalance presentations are common and time-sensitive. This background gives him the skills to distinguish between common inner-ear conditions and more serious neurological causes — an important part of safe and accurate vestibular care.",
          "His postgraduate manual therapy training is also relevant here: dizziness linked to the upper cervical spine is a distinct presentation, and one where combined vestibular and manual therapy skills make a real difference to outcomes.",
        ],
      }}
      whatToExpect={{
        heading: "What to expect at your appointment",
        body: [
          "Your first appointment will include a detailed history of your dizziness — when it started, what triggers it, what makes it better or worse, and how it is affecting your daily life.",
          "Assessment involves examination of the brain and central nervous system, the neck and upper cervical spine, the vestibular system, and your balance. Some tests are performed on the treatment bed, so we recommend wearing comfortable clothing.",
          "If an acute vestibular condition such as BPPV is identified, treatment can often begin in the same session. A follow-up appointment is typically arranged to confirm resolution and address any remaining symptoms.",
        ],
      }}
    />
  );
}
