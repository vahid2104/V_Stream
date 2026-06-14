export const providerMarqueeStyles = {
  section:
    "relative mx-auto -mt-12 max-w-[1180px] overflow-hidden px-5 md:-mt-10 md:px-6",

  fadeLeft:
    "pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06070d] to-transparent md:w-28",

  fadeRight:
    "pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06070d] to-transparent md:w-28",

  track: "provider-marquee-track flex w-max gap-5 md:gap-6",

  card:
  "flex h-24 min-w-[190px] shrink-0 items-center justify-center rounded-2xl  px-7 shadow-lg shadow-black/20 transition hover:bg-[#17181f] md:h-28 md:min-w-[230px] md:px-8",

  logo: "max-h-14 w-auto object-contain md:max-h-16",

  empty:
    "mx-auto max-w-[1180px] px-6 py-8 text-sm text-white/50",
};