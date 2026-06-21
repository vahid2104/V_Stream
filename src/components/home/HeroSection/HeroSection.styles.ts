export const heroStyles = {
  section:
    "relative min-h-[620px] overflow-hidden bg-[#06070d] md:min-h-[700px]",

  image: "object-cover object-center transition-opacity duration-700",

  overlayBase: "absolute inset-0 bg-black/20",

  overlayNavbar:
    "absolute left-0 top-0 z-[1] h-40 w-full bg-gradient-to-b from-black via-black/85 to-transparent",

  overlayTop:
    "absolute inset-0 bg-gradient-to-b from-[#06070d]/95 via-[#06070d]/35 to-transparent",

  overlaySide: "absolute inset-0 ",

  overlayBottom:
    "absolute inset-0 bg-gradient-to-t from-[#06070d] via-[#06070d]/55 to-transparent",

  contentWrapper:
    "relative z-10 mx-auto flex min-h-[620px] max-w-[1180px] items-center px-5 pt-28 md:min-h-[700px] md:px-6 md:pt-20",

  content: "max-w-[560px]",

  badge:
    "mb-4 inline-flex rounded bg-black/60 px-3 py-1 text-xs font-medium text-white",

  title:
    "max-w-[680px] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl",

  meta: "mt-4 text-sm font-medium text-white/65",

  overview:
    "mt-5 max-w-[520px] text-sm leading-7 text-white/80 line-clamp-4 md:line-clamp-none",

  actions:
    "mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4",

  dotsOuter: "absolute bottom-20 left-0 right-0 z-20 hidden px-6 md:block",

  dotsInner: "mx-auto flex max-w-[1180px] items-center justify-end gap-2",

  dotActive: "h-2 w-7 rounded-full bg-white transition-all",

  dotInactive:
    "h-2 w-2 rounded-full bg-white/40 transition-all hover:bg-white/70",
  trailerOverlay:
    "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",

  trailerBox: "relative aspect-video w-full max-w-5xl",

  trailerIframe: "h-full w-full rounded-2xl border border-white/10",

  closeTrailer:
    "absolute -top-12 right-0 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",
};
