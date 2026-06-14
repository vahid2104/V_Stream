export const featuredSectionStyles = {
  section: "mx-auto mt-12 max-w-[1180px] px-5 md:mt-16 md:px-6",

  banner:
    "relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#101116] md:min-h-[560px]",

  backgroundImage: "object-cover object-center",

  overlayBase: "absolute inset-0 bg-black/35",

  overlaySide:
    "absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25",

  overlayBottom:
    "absolute inset-0 bg-gradient-to-t from-[#06070d]/90 via-transparent to-transparent",

  contentWrapper:
    "relative z-10 grid min-h-[520px] grid-cols-1 gap-8 px-6 py-10 md:min-h-[560px] md:grid-cols-[0.75fr_1.25fr] md:px-8 lg:px-10",

  leftContent: "flex max-w-[460px] flex-col justify-center",

  sectionTitle:
    "max-w-[420px] text-2xl font-bold leading-tight text-white md:text-3xl",

  subtitle: "mt-2 text-sm font-medium text-white/65",

  rank: "mt-10 text-sm font-bold text-white/80",

  title: "mt-4 text-4xl font-bold leading-tight text-white md:text-5xl",

  meta:
    "mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 md:text-sm",

  rating: "text-yellow-400",

  overview:
    "mt-4 max-w-[500px] text-sm leading-7 text-white/75 line-clamp-4",

  actions: "mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center",

  rightContent:
    "relative flex min-w-0 items-end overflow-visible md:items-center",

  sliderWrapper: "relative w-full overflow-visible",

  cardsRow:
    "flex gap-5 overflow-x-auto scroll-smooth pb-2 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",

  card:
    "group relative h-[280px] w-[190px] shrink-0 overflow-hidden rounded-2xl bg-[#101116] shadow-xl shadow-black/40 transition duration-300 hover:-translate-y-1 md:h-[320px] md:w-[210px]",

  activeCard: "ring-2 ring-[#00A86B]",

  cardImage: "object-cover transition duration-500 group-hover:scale-105",

  cardGradient:
    "absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent",

  cardContent: "absolute bottom-0 left-0 right-0 z-10 p-4",

  cardTitle: "line-clamp-1 text-sm font-bold text-white md:text-base",

  cardMeta:
    "mt-2 flex items-center gap-1.5 text-[11px] font-medium text-white/65",

  star: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400",

  cardRating: "text-yellow-400",

  arrowBase:
    "absolute top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#16171d]/95 text-white shadow-xl shadow-black/50 backdrop-blur transition hover:bg-[#22232b] active:scale-95 md:flex",

  arrowLeft: "-left-5",

  arrowRight: "-right-5",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-4 text-center text-sm text-white/40",
};