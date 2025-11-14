import Image from "next/image";
import SectionText from "./SectionText";
import StatsCard from "./StatsCard";

export default function Impact() {
  return (
    <section
      id="impact"
      className="scroll-mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 flex items-center flex-col mx-auto justify-center w-full"
    >
      <SectionText
        label="Our Impact"
        title="Making a Real Difference"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
      />

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatsCard title="Total Page Views" value="89,400" description="21% more than last month" />
        <StatsCard title="Active Users" value="12,345" description="15% increase this month" />
        <StatsCard title="New Signups" value="1,234" description="5% more than last week" />
      </div>

      <div className="w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-center mb-8 sm:mb-12 mt-10 sm:mt-16 font-metro">
          Transformation Stories
        </h2>

        <div className="w-full p-8 sm:p-16 rounded-4xl bg-linear-to-b from-green/15 via-teal/10 to-transparent flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            
            {/* Before */}
            <div className="bg-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden w-full sm:w-1/2">
              <div className="p-4 text-center">
                <h3 className="text-xl font-metro">Before Care</h3>
              </div>

              <div className="relative aspect-4/3 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1565353919366-554312dd0e86?q=80&w=1171&auto=format&fit=crop"
                  alt="Dog Before Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent" />
              </div>
            </div>

            {/* After */}
            <div className="bg-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden w-full sm:w-1/2">
              <div className="p-4 text-center">
                <h3 className="text-xl font-metro">After Care</h3>
              </div>

              <div className="relative aspect-4/3 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1553674418-95c3688078c6?q=80&w=704&auto=format&fit=crop"
                  alt="Dog After Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent" />
              </div>
            </div>

          </div>

          <div className="mx-auto flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-medium text-center font-metro">Buddy's Journey</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl text-center py-3">
              Rescued from a highway with severe injuries. After 3 months of care, now thriving in his forever home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
