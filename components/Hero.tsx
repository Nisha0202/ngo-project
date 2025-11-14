"use client";

import { AiOutlineHeart } from "react-icons/ai";

export default function Hero() {
    return (
        <main
            className="relative min-h-[95vh] bg-cover bg-center flex items-center "
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1455287278107-115faab3eafa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r   from-black/90 via-black/50 to-black/50 sm:to-transparent"></div>

            <div className="py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
                {/* Content */}
                <div className="relative max-w-4xl ">


                    <div className="px-4 py-2 max-w-fit mb-4  flex items-center gap-2 text-xs sm:text-sm bg-white/30 border-white border text-white rounded-full">
                        <AiOutlineHeart className="font-bold text-lg  text-green-400" /> Every dog deserves a second chance
                    </div>


                    <h1 className="text-5xl sm:text-7xl font-medium text-white mb-6 text-left font-metro leading-12 sm:leading-20">
                        Rescuing & Caring <br />for Street Dogs
                    </h1>
                    <p className="leading-relaxed sm:text-lg max-w-3xl text-gray-100 mb-12 text-left">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                        id nisi.
                    </p>
                    <div className="w-full md:w-auto mb-12">
                        <button className="w-full md:w-auto flex justify-center items-center gap-2 px-4 py-2 bg-blue text-white rounded-full font-medium">
                            <AiOutlineHeart className="text-lg" />
                            Donate Now
                        </button>
                    </div>

                </div>
            </div>

        </main>
    );
}
