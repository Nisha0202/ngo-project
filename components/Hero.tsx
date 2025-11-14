import Image from "next/image";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative min-h-[95vh] flex items-center">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1455287278107-115faab3eafa?q=80&w=1171&auto=format&fit=crop"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/50 sm:to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="px-2.5 sm:px-4  py-1.5 sm:py-2 max-w-fit sm:mb-3 mb-2 flex items-center gap-2 text-xs sm:text-sm bg-white/30 border border-white text-white rounded-full">
            <Heart className="text-green-400" size={18} />
            Every dog deserves a second chance
          </div>

          <h1 className="text-5xl sm:text-7xl font-medium text-white mb-6 font-metro leading-tight">
            Rescuing & Caring <br /> for Street Dogs
          </h1>

          <p className="leading-relaxed sm:text-lg max-w-3xl text-gray-100 mb-12">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>

          <div className="w-full md:w-auto mb-12">
            <button className="w-full md:w-auto flex justify-center items-center gap-2 px-4 py-2 bg-blue text-white rounded-full font-medium">
              <Heart size={20} />
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

