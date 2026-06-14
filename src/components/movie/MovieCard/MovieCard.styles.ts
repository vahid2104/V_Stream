export const movieCardStyles = {
  link: "group block w-[185px] shrink-0 md:w-[215px]",

  card:
    "relative overflow-hidden rounded-2xl bg-[#101116] shadow-lg shadow-black/30 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-black/50",

  imageWrapper:
    "relative h-[275px] w-full overflow-hidden rounded-2xl bg-white/5 md:h-[315px]",

  image:
    "object-cover transition duration-500 group-hover:scale-105",

  gradient:
    "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90",

  content: "absolute bottom-0 left-0 right-0 z-10 p-4",

  title:
    "line-clamp-1 text-sm font-bold text-white md:text-base",

  meta: "mt-2 flex items-center gap-1.5 text-[11px] font-medium text-white/65",

  star: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400",

  rating: "text-yellow-400",

  dot: "text-white/35",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-4 text-center text-sm text-white/40",
};