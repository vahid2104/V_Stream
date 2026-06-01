import Image from "next/image";

const companies = [
  {
    name: "HBO Max",
    logo: "/companies/hbo-max.png",
  },
  {
    name: "Disney",
    logo: "/companies/disney.png",
  },
  {
    name: "Netflix",
    logo: "/companies/netflix.png",
  },
  {
    name: "Pixar",
    logo: "/companies/pixar.png",
  },
  {
    name: "Star Wars",
    logo: "/companies/star-wars.png",
  },
  {
    name: "National Geographic",
    logo: "/companies/national-geographic.png",
  },
  {
    name: "Apple TV",
    logo: "/companies/apple-tv.png",
  },
  {
    name: "Sony Pictures",
    logo: "/companies/sony.png",
  },
  {
    name: "Marvel",
    logo: "/companies/marvel.png",
  },
];

const repeatedCompanies = [...companies, ...companies];

export default function StudioMarquee() {
  return (
    <section className="relative mx-auto  max-w-295 overflow-hidden px-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#06070d] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#06070d] to-transparent" />

      <div className="marquee-track flex w-max gap-6">
        {repeatedCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex h-20 min-w-40 shrink-0 items-center justify-center rounded-xl  px-6 shadow-lg shadow-black/20"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={50}
              className="max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}