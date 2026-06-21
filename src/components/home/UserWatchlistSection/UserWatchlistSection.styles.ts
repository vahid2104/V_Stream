export const userWatchlistStyles = {
  section: "mx-auto mt-12 max-w-[1180px] px-5 md:mt-16 md:px-6",

  header: "mb-6 flex items-center justify-between",

  title: "text-xl font-bold text-white md:text-2xl",

  row:
    "flex gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6",

  card:
    "group block w-[185px] shrink-0 md:w-[215px]",

  imageWrapper:
    "relative h-[275px] overflow-hidden rounded-2xl bg-[#101116] shadow-lg shadow-black/30 md:h-[315px]",

  image: "h-full w-full object-cover transition duration-500 group-hover:scale-105",

  gradient:
    "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent",

  content: "absolute bottom-0 left-0 right-0 p-4",

  movieTitle: "line-clamp-1 text-sm font-bold text-white md:text-base",

  meta: "mt-2 text-xs font-medium text-white/60",

  empty:
    "rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/50",
};