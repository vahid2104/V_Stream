export const awardsSectionStyles = {
  section:
    "mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-8 px-5 md:mt-16 md:px-6 lg:grid-cols-[1.2fr_1.4fr]",

  awardColumn: "min-w-0",

  sectionHeader: "mb-6 flex items-center justify-between",

  sectionTitle: "text-xl font-bold text-white md:text-2xl",

  headerControls: "hidden items-center gap-2 md:flex",

  controlButton:
    "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40",

  awardImageWrapper:
    "relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#101116] shadow-lg shadow-black/30 md:h-[300px]",

  awardImage: "object-cover transition duration-500 hover:scale-105",

  awardImageGradient:
    "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",

  awardBadge:
    "mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white",

  awardTitle:
    "mt-5 line-clamp-2 text-3xl font-bold leading-tight text-white md:text-4xl",

  awardMeta:
    "mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 md:text-sm",

  rating: "text-yellow-400",

  overview:
    "mt-4 max-w-[620px] text-sm leading-7 text-white/70 line-clamp-4",

  actions:
    "mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center",

  listsGrid:
    "grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10",

  listColumn: "min-w-0",

  listHeader: "mb-6 flex items-center justify-between",

  listTitle:
    "flex items-center gap-2 text-xl font-bold text-white md:text-2xl",

  liveDot: "h-1.5 w-1.5 rounded-full bg-red-500",

  listControls: "hidden items-center gap-2 md:flex",

  compactList: "space-y-5",

  compactItem:
    "group flex gap-4 rounded-2xl transition hover:bg-white/[0.03]",

  compactImageWrapper:
    "relative h-[105px] w-[78px] shrink-0 overflow-hidden rounded-xl bg-[#101116] shadow-lg shadow-black/30",

  compactImage: "object-cover transition duration-500 group-hover:scale-105",

  compactContent: "min-w-0 flex-1 py-1",

  ageBadge:
    "inline-flex rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-white/55",

  compactTitle:
    "mt-2 line-clamp-1 text-sm font-bold text-white transition group-hover:text-white/80",

  compactGenre:
    "mt-2 line-clamp-1 text-[11px] font-medium text-white/45",

  compactMeta:
    "mt-2 flex items-center gap-1.5 text-[11px] font-medium text-white/60",

  star: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-2 text-center text-xs text-white/40",
};