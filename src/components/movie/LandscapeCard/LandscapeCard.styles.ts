export const landscapeCardStyles = {
  link: "group block w-[230px] shrink-0 md:w-[285px]",

  imageWrapper:
    "relative h-[130px] w-full overflow-hidden rounded-xl bg-[#101116] shadow-lg shadow-black/30 md:h-[160px]",

  image: "object-cover transition duration-500 group-hover:scale-105",

  gradient:
    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-90",

  title:
    "mt-3 line-clamp-1 text-sm font-bold text-white transition group-hover:text-white/80",

  meta: "mt-2 flex items-center gap-1.5 text-[11px] font-medium text-white/60",

  star: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400",

  rating: "text-yellow-400",

  dot: "text-white/35",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-4 text-center text-sm text-white/40",
};