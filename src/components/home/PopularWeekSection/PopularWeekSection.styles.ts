export const popularWeekStyles = {
  section: "mx-auto mt-10 max-w-[1180px] px-5 md:mt-12 md:px-6",

  header: "mb-5 flex items-center justify-between",

  title: "text-xl font-bold text-white md:text-2xl",

  rowWrapper: "relative",

  row:
    "flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5",

  item:
    "group flex min-w-[145px] shrink-0 items-end gap-2 md:min-w-[160px]",

  rank:
    "mb-2 text-3xl font-black leading-none text-white/10 transition group-hover:text-white/20 md:text-4xl",

  card:
    "relative h-[150px] w-[100px] overflow-hidden rounded-xl bg-[#101116] shadow-lg shadow-black/30 transition duration-300 group-hover:-translate-y-1",

  image: "object-cover transition duration-500 group-hover:scale-105",

  gradient:
    "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90",

  content: "absolute bottom-0 left-0 right-0 z-10 p-2",

  movieTitle: "line-clamp-1 text-[11px] font-bold text-white",

  meta:
    "mt-1 flex items-center gap-1 text-[9px] font-medium text-white/65",

  star: "h-2.5 w-2.5 fill-yellow-400 text-yellow-400",

  rating: "text-yellow-400",

  dot: "text-white/35",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-2 text-center text-[10px] text-white/40",

  arrowBase:
    "absolute top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#16171d] text-white shadow-xl shadow-black/40 transition hover:bg-[#22232b] active:scale-95 md:flex",

  arrowLeft: "-left-5",

  arrowRight: "-right-5",
};