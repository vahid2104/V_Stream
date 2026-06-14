export const mediaRowSectionStyles = {
  section: "mx-auto mt-12 max-w-[1180px] px-5 md:mt-16 md:px-6",

  header: "mb-6 flex items-center justify-between",

  title: "text-xl font-bold text-white md:text-2xl",

  rowWrapper: "relative",

  row:
    "flex gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6",

  arrowBase:
    "absolute top-[72px] z-30 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#16171d] text-white shadow-xl shadow-black/40 transition hover:bg-[#22232b] active:scale-95 md:flex",

  arrowLeft: "-left-5",

  arrowRight: "-right-5",
};