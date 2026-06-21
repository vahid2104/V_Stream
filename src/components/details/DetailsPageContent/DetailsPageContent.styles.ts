export const detailsPageStyles = {
  page: "bg-[#06070d] pb-20 text-white",

  hero: "relative min-h-[680px] overflow-hidden bg-[#06070d] md:min-h-[760px]",

  backdrop: "object-cover object-center",

  overlayBase: "absolute inset-0 bg-black/15",

  overlayTop:
    "absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-transparent",

  overlaySide:
    "absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10",

  overlayBottom:
    "absolute inset-0 bg-gradient-to-t from-[#06070d] via-[#06070d]/70 to-transparent",

  heroContent:
    "relative z-10 mx-auto flex min-h-[680px] max-w-[1180px] flex-col justify-end px-5 pb-16 pt-32 md:min-h-[760px] md:px-6",

  badge:
    "mb-4 inline-flex w-fit rounded bg-black/60 px-3 py-1 text-xs font-semibold text-white",

  title:
    "max-w-[720px] text-4xl font-bold leading-tight text-white md:text-6xl",

  meta:
    "mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-white/65",

  rating: "text-yellow-400",

  overview: "mt-6 max-w-[760px] text-sm leading-7 text-white/75 md:text-base",

  actions: "mt-8 flex flex-wrap items-center gap-4",

  secondaryActions: "hidden items-center gap-4 lg:flex",

  iconButton:
    "flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10",

  section: "mx-auto max-w-[1180px] px-5 md:px-6",

  storyTitle: "text-xl font-bold text-white",

  storyText: "mt-4 max-w-[1050px] text-sm leading-7 text-white/65 md:text-base",

  scrollSection: "mx-auto mt-8 max-w-[1180px] px-5 md:px-6",

  scrollHeader: "mb-5 flex items-center justify-between",

  scrollTitle: "text-xl font-bold text-white",

  scrollControls: "hidden items-center gap-2 md:flex",

  scrollButton:
    "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95",

  scrollRow:
    "flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",

  castItem: "flex min-w-[150px] shrink-0 items-center gap-3",

  castAvatar:
    "relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/5",

  castName: "line-clamp-1 text-sm font-bold text-white",

  castCharacter: "line-clamp-1 text-xs text-white/45",

  reviewsSection: "mx-auto mt-10 max-w-[1180px] px-5 md:px-6",

  reviewsTitle: "text-xl font-bold text-white",

  reviewsGrid: "mt-5 grid grid-cols-1 gap-4 md:grid-cols-2",

  reviewCard:
    "rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20",

  reviewAuthor: "text-sm font-bold text-white",

  reviewMeta: "mt-1 text-xs text-white/40",

  reviewText: "mt-4 line-clamp-5 text-sm leading-6 text-white/65",

  similarSection: "mx-auto mt-10 max-w-[1180px] px-5 md:px-6",

  similarTitle: "text-2xl font-bold text-white",

  trailerOverlay:
    "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",

  trailerBox: "relative aspect-video w-full max-w-5xl",

  trailerIframe: "h-full w-full rounded-2xl border border-white/10",

  closeTrailer:
    "absolute -top-12 right-0 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",

  fallback:
    "flex h-full w-full items-center justify-center bg-white/5 px-4 text-center text-sm text-white/40",
};