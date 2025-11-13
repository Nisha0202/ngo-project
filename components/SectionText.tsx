"use client";

type SectionTextProps = {
  label: string;
  title: string;
  description: string;
};

export default function SectionText({ label, title, description }: SectionTextProps) {
  return (
    <section className="relative flex items-center ">
      <div className="max-w-7xl py-3 mx-auto flex justify-between items-center w-full">
        {/* Content */}
        <div className="relative mx-auto text-center">
          {/* Label */}
          <div className="label px-4 py-1.5 max-w-fit mb-3 mx-auto flex items-center gap-2 text-xs sm:text-sm bg-blue/10 border-blue border text-blue rounded-full">
            {label}
          </div>

          {/* Title */}
          <h1 className="title text-3xl sm:text-5xl font-medium mb-3 font-metro">
            {title}
          </h1>

          {/* Description */}
          <p className="description text-sm sm:text-base max-w-3xl text-zinc-700">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
