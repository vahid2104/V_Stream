export const navbarStyles = {
  header:
    "absolute left-0 top-0 z-50 w-full bg-gradient-to-b from-black/85 via-black/45 to-transparent",

  container:
    "mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 md:px-6",

  logoLink: "flex items-center",

  logoImage: "h-auto w-[150px] md:w-[170px]",

  desktopNav: "hidden items-center gap-8 lg:flex",

  navLink: "text-sm font-semibold text-white/70 transition hover:text-white",

  rightActions: "hidden items-center gap-4 md:flex",

  searchButton:
    "flex h-11 w-11 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/10 hover:text-white",

  signUpButton:
    "rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black",

  loginButton:
    "rounded-xl bg-[#00A86B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00945f]",

  userBox:
    "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2",

  avatar:
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#00A86B] text-sm font-bold text-white",

  userName: "max-w-[130px] truncate text-sm font-semibold text-white",

  logoutButton:
    "rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white",

  mobileMenuButton:
    "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden",

  mobileOverlay: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden",

  mobilePanel:
    "fixed right-5 top-5 z-50 w-[calc(100%-40px)] max-w-[360px] rounded-3xl border border-white/10 bg-[#0b0c12] p-5 shadow-2xl shadow-black/60 lg:hidden",

  mobilePanelHeader: "mb-8 flex items-center justify-between",

  mobileCloseButton:
    "flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition hover:bg-white/10",

  mobileSearch:
    "mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/60",

  mobileNav: "mt-6 flex flex-col gap-2",

  mobileNavLink:
    "rounded-2xl px-4 py-4 text-base font-semibold text-white/75 transition hover:bg-white/5 hover:text-white",

  mobileActions: "mt-8 grid grid-cols-2 gap-3",

  mobileSignUp:
    "rounded-2xl border border-white/20 px-4 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black",

  mobileLogin:
    "rounded-2xl bg-[#00A86B] px-4 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#00945f]",

  mobileUserBox: "mt-8 rounded-2xl border border-white/10 bg-white/5 p-4",

  mobileUserName: "text-sm font-bold text-white",

  mobileUserEmail: "mt-1 line-clamp-1 text-xs text-white/45",

  mobileLogout:
    "mt-4 w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white",
  searchWrapper: "relative",

  searchInputWrapper:
    "fixed left-1/2 top-6 z-[70] hidden h-14 w-[min(640px,calc(100vw-48px))] -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#00A86B]/50 bg-[#07080d]/95 px-5 text-white shadow-2xl shadow-[#00A86B]/10 backdrop-blur-xl transition md:flex",

  searchInput:
    "w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/35",

  searchDropdown:
    "fixed left-1/2 top-[88px] z-[70] hidden max-h-[420px] w-[min(640px,calc(100vw-48px))] -translate-x-1/2 overflow-y-auto rounded-2xl border border-[#00A86B]/30 bg-[#07080d]/95 shadow-2xl shadow-black/70 backdrop-blur-xl md:block",

  searchResult:
    "flex w-full gap-3 border-b border-white/5 p-3 text-left transition hover:bg-[#00A86B]/10",

  searchResultImage:
    "relative h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5",

  searchResultContent: "min-w-0 flex-1",

  searchResultTitle: "line-clamp-1 text-sm font-bold text-white",

  searchResultMeta: "mt-1 text-xs text-white/45",

  searchEmpty: "p-4 text-sm text-white/45",
};
