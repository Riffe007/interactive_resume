// src/components/common/ExperienceCard.tsx
type ExperienceCardProps = {
  job: {
    title: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    dates: string;
    description: string[];
  };
};

export default function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {job.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {job.company} | {job.dates}
      </p>
      <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
        {job.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
