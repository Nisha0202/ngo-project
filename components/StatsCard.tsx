"use client";

type StatsCardProps = {
  title: string;
  value: string | number;
  description: string;
};

export default function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div className="bg-white border shadow-md rounded-2xl p-6 w-full max-w-sm mx-auto">
      <div className="text-sm text-center text-gray-500 mb-2">{title}</div>
      <div className="text-lg text-teal sm:text-3xl text-center font-bold mb-2">{value}</div>
      <div className="text-gray-400 text-center text-sm">{description}</div>
    </div>
  );
}
