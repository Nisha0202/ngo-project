import SectionText from "@/components/SectionText";
import Image from "next/image";
import { Heart, Target, Users, Shield } from "lucide-react";

// Moved outside component to avoid re-creation on every render
const values = [
  {
    title: "Compassion",
    desc: "We care deeply for every life we touch.",
    icon: <Heart className="w-8 h-8 text-teal" />,
  },
  {
    title: "Mission-Driven",
    desc: "Our actions are guided by purpose.",
    icon: <Target className="w-8 h-8 text-green" />,
  },
  {
    title: "Community",
    desc: "We grow stronger together with our supporters.",
    icon: <Users className="w-8 h-8 text-teal" />,
  },
  {
    title: "Trust",
    desc: "Reliability and transparency are at our core.",
    icon: <Shield className="w-8 h-8 text-green" />,
  },
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900 pt-8 rounded-2xl bg-white">
      {/* Section Header */}
      <SectionText
        label="About Us"
        title="Our Story & Mission"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
      />

      {/* Story Section */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl mb-4 text-green">
            Where It All Began
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-blue">PawsRescue</span>,
            our journey began with a single mission — to create a safe haven for
            every stray, abandoned, and injured animal. What started as a small
            initiative has grown into a dedicated organization powered by
            empathy, community, and compassion.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We believe every life matters. Our team of volunteers and
            professionals work tirelessly to provide care, rehabilitation, and
            forever homes to those who need it the most. Together, we strive to
            make the world a kinder place — one paw at a time.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-96">
          <div className="rounded-2xl overflow-hidden shadow-md w-full h-full group">
            <Image
              src="https://images.unsplash.com/photo-1548439739-0cf616cef1cd?q=80&w=735&auto=format&fit=crop"
              alt="Our Team"
              fill
              loading="lazy"
              className="object-cover rounded-2xl w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 rounded-lg p-4 shadow-md backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-blue text-2xl">7+ Years</h4>
            <p className="text-gray-500 text-center text-sm mt-1">
              Making a Difference
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="pt-10 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-center mb-8 sm:mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-linear-to-b from-green/10 via-teal/10 to-transparent p-6 sm:p-12 rounded-3xl">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
