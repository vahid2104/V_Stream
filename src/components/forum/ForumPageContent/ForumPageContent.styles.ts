export const forumStyles = {
  page: "min-h-screen bg-[#06070d] text-white",

  hero: "relative min-h-[450px] overflow-hidden pt-28 md:min-h-[520px]",

  heroGrid: "absolute inset-0 grid grid-cols-4 opacity-40 md:grid-cols-6",

  heroImage: "relative overflow-hidden",

  heroOverlay:
    "absolute inset-0 bg-gradient-to-b from-black/30 via-[#06070d]/70 to-[#06070d]",

  heroContent:
    "relative z-10 mx-auto flex min-h-[450px] max-w-[1180px] flex-col justify-end px-5 pb-16 md:px-6",

  title: "max-w-[700px] text-4xl font-black leading-tight md:text-6xl",

  subtitle: "mt-4 max-w-[600px] text-sm leading-7 text-white/60",

  section: "mx-auto mt-12 max-w-[1180px] px-5 md:px-6",

  sectionHeader: "mb-6 flex items-center justify-between",

  sectionTitle: "text-2xl font-bold text-white mb-6",

  controls: "hidden items-center gap-2 md:flex",

  controlButton:
    "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95",

  hotTopicsWrapper: "overflow-hidden",

  hotTopicsGrid:
    "grid grid-flow-col grid-rows-2 gap-x-8 gap-y-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",

  hotTopicItem:
    "group flex w-[250px] items-center gap-4 rounded-2xl transition hover:bg-white/[0.04]",

  hotTopicPoster:
    "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/5",

  hotTopicInfo: "min-w-0",

  hotTopicTitle:
    "line-clamp-1 text-sm font-bold text-white transition group-hover:text-[#00A86B]",

  hotTopicGenre: "mt-1 text-[11px] text-white/45",

  hotTopicMeta:
    "mt-1 flex items-center gap-1.5 text-[11px] font-medium text-white/55",

  rating: "text-yellow-400",

  discussionList: "space-y-4",

  discussionCard:
    "rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]",

  discussionTitle: "text-lg font-bold text-white",

  discussionText: "mt-2 text-sm leading-6 text-white/55",

  discussionMeta: "mt-3 text-xs text-white/40",

  eventList: "space-y-10",

  eventItem: "relative grid grid-cols-[56px_1fr] gap-4",

  eventDay:
    "flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-black text-black",

  eventContent:
    "border-l border-white/10 pl-5 pb-6",

  eventTitle: "text-xl font-bold text-white",

  eventEpisode: "mt-1 text-sm text-white/45",

  eventLabel: "mt-5 text-sm font-bold text-white",

  eventText: "mt-2 max-w-[760px] text-sm leading-7 text-white/60",

  eventRules:
    "mt-3 list-inside list-disc space-y-1 text-sm text-white/55",

  eventLink:
    "mt-3 inline-flex text-sm font-bold text-[#00A86B] transition hover:text-[#00c77d]",
};