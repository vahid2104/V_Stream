export const movieReleaseStyles = {
  page: "min-h-screen bg-[#06070d] text-white",

  hero:
    "relative min-h-[430px] overflow-hidden bg-[#06070d] pt-32 md:min-h-[520px]",

  heroBg:
    "absolute inset-0 grid grid-cols-3 opacity-50 md:grid-cols-5",

  heroImage: "relative min-h-[160px] overflow-hidden",

  heroOverlay:
    "absolute inset-0 bg-gradient-to-b from-black/55 via-[#06070d]/50 to-[#06070d]",

  heroContent:
    "relative z-10 mx-auto flex min-h-[300px] max-w-[1180px] flex-col justify-end px-5 pb-14 md:px-6",

  title:
    "max-w-[720px] text-4xl font-black leading-tight md:text-6xl",

  subtitle: "mt-5 max-w-[520px] text-sm leading-7 text-white/65",

  content: "mx-auto max-w-[1180px] px-5 pb-20 md:px-6",

  topBar: "mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between",

  sectionTitle: "text-2xl font-bold text-white",

  monthSection: "mt-10",

  monthTitle:
    "border-b border-white/10 pb-4 text-xl font-black uppercase tracking-wide text-white",

  releaseGrid:
    "mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2",

  releaseItem:
    "group flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/[0.04]",

  day:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-black",

  poster:
    "relative h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5",

  info: "min-w-0 flex-1",

  movieTitle:
    "line-clamp-1 text-lg font-bold text-white transition group-hover:text-[#00A86B]",

  meta: "mt-1 line-clamp-1 text-sm text-white/45",
};