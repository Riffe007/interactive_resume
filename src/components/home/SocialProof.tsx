// src/components/home/SocialProof.tsx
import Image from 'next/image';

const companies = [
  { name: 'Unified Software Solutions', logo: '/images/logos/Unified-Software-1.jpg' },
  { name: 'Service-Disabled Veteran-Owned Certified', logo: '/images/logos/Service-Disabled Veteran-Owned-Certified-sm.jpg' },
  { name: 'Morgan Stanley', logo: '/images/logos/ms.jpeg' },
  { name: 'Merrill Lynch', logo: '/images/logos/ml.png' },
  { name: 'JP Morgan', logo: '/images/logos/jpmorgan.jpeg' },
  { name: 'WorldQuant', logo: '/images/logos/worldquant.jpeg' },
  { name: 'Think Mutual Bank', logo: '/images/logos/think.jpeg' },
  { name: 'US Marine Corps', logo: '/images/logos/Marines-Logo.png' }
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Industry Leaders</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {companies.map((company, index) => (
          <div key={index} className="p-4">
            <Image src={company.logo} alt={company.name} width={150} height={75} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
