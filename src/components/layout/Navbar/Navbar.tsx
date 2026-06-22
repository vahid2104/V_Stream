"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { logoutUser } from "@/services/authService";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { navbarStyles } from "./Navbar.styles";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Movie Release", href: "/movie-release" },
  { label: "Forum", href: "/forum" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  const searchRef = useRef<HTMLDivElement | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TMDBMovie[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";
  const firstLetter = displayName.charAt(0).toUpperCase();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  async function handleLogout() {
    await logoutUser();
    closeMobileMenu();
  }

  function handleSearchResultClick(item: TMDBMovie) {
    const mediaType = item.media_type || "movie";

    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery("");
    setSearchResults([]);

    router.push(`/details/${mediaType}/${item.id}`);
  }
  useEffect(() => {
    if (!isSearchOpen) return;

    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery.length < 2) {
      queueMicrotask(() => {
        setSearchResults([]);
        setIsSearching(false);
      });

      return;
    }

    const timeout = window.setTimeout(async () => {
      setIsSearching(true);

      try {
        const response = await fetch(
          `/api/search?query=${encodeURIComponent(trimmedQuery)}`,
        );

        const data = await response.json();

        setSearchResults(data.results || []);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [searchQuery, isSearchOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={navbarStyles.header}>
        <div className={navbarStyles.container}>
          <Link href="/" className={navbarStyles.logoLink}>
            <Image
              src="/logo/v_stream_logo.png"
              alt="V Stream"
              width={180}
              height={60}
              priority
              className={navbarStyles.logoImage}
            />
          </Link>

          <nav className={navbarStyles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={navbarStyles.navLink}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={navbarStyles.rightActions}>
            <div ref={searchRef} className={navbarStyles.searchWrapper}>
              <button
                type="button"
                className={`${navbarStyles.searchButton} ${
                  isSearchOpen ? "bg-[#00A86B]/15 text-[#00A86B]" : ""
                }`}
                aria-label="Search"
                onClick={() => setIsSearchOpen((current) => !current)}
              >
                <Search size={22} />
              </button>

              {isSearchOpen && (
                <>
                  <div className={navbarStyles.searchInputWrapper}>
                    <Search size={18} className="text-white/40" />

                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search movies or series..."
                      className={navbarStyles.searchInput}
                    />
                  </div>

                  <div className={navbarStyles.searchDropdown}>
                    {searchQuery.trim().length < 2 && (
                      <p className={navbarStyles.searchEmpty}>
                        Type at least 2 characters to search.
                      </p>
                    )}

                    {searchQuery.trim().length >= 2 && isSearching && (
                      <p className={navbarStyles.searchEmpty}>Searching...</p>
                    )}

                    {searchQuery.trim().length >= 2 &&
                      !isSearching &&
                      searchResults.length === 0 && (
                        <p className={navbarStyles.searchEmpty}>
                          No results found.
                        </p>
                      )}

                    {searchResults.map((item) => {
                      const title = item.title || item.name || "Unknown Title";

                      const year =
                        item.release_date?.split("-")[0] ||
                        item.first_air_date?.split("-")[0] ||
                        "N/A";

                      const mediaType = item.media_type || "movie";
                      const imageUrl = getTMDBImageUrl(
                        item.poster_path,
                        "w185",
                      );

                      return (
                        <button
                          key={`${mediaType}-${item.id}`}
                          type="button"
                          className={navbarStyles.searchResult}
                          onClick={() => handleSearchResultClick(item)}
                        >
                          <div className={navbarStyles.searchResultImage}>
                            <Image
                              src={imageUrl}
                              alt={title}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>

                          <div className={navbarStyles.searchResultContent}>
                            <h4 className={navbarStyles.searchResultTitle}>
                              {title}
                            </h4>

                            <p className={navbarStyles.searchResultMeta}>
                              {year} • {mediaType === "tv" ? "Series" : "Movie"}{" "}
                              • ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {!isLoading && !isAuthenticated && (
              <>
                <Link href="/register" className={navbarStyles.signUpButton}>
                  Sign Up
                </Link>

                <Link href="/login" className={navbarStyles.loginButton}>
                  Login
                </Link>
              </>
            )}

            {!isLoading && isAuthenticated && (
              <>
                <div className={navbarStyles.userBox}>
                  <div className={navbarStyles.avatar}>{firstLetter}</div>
                  <span className={navbarStyles.userName}>{displayName}</span>
                </div>

                <button
                  type="button"
                  className={navbarStyles.logoutButton}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            type="button"
            className={navbarStyles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            className={navbarStyles.mobileOverlay}
            onClick={closeMobileMenu}
            aria-label="Close menu overlay"
          />

          <div className={navbarStyles.mobilePanel}>
            <div className={navbarStyles.mobilePanelHeader}>
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/logo/v_stream_logo.svg"
                  alt="V Stream"
                  width={150}
                  height={50}
                  className={navbarStyles.logoImage}
                />
              </Link>

              <button
                type="button"
                className={navbarStyles.mobileCloseButton}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className={navbarStyles.mobileSearch}>
              <Search size={20} />

              <input
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder="Search movies..."
                className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/40"
              />
            </div>

            {searchQuery.trim().length >= 2 && (
              <div className="mt-4 max-h-70 overflow-y-auto rounded-2xl border border-white/10 bg-white/3">
                {isSearching && (
                  <p className="p-4 text-sm text-white/45">Searching...</p>
                )}

                {!isSearching && searchResults.length === 0 && (
                  <p className="p-4 text-sm text-white/45">No results found.</p>
                )}

                {!isSearching &&
                  searchResults.map((item) => {
                    const title = item.title || item.name || "Unknown Title";

                    const year =
                      item.release_date?.split("-")[0] ||
                      item.first_air_date?.split("-")[0] ||
                      "N/A";

                    const mediaType = item.media_type || "movie";
                    const imageUrl = getTMDBImageUrl(item.poster_path, "w185");

                    return (
                      <button
                        key={`mobile-${mediaType}-${item.id}`}
                        type="button"
                        className="flex w-full gap-3 border-b border-white/5 p-3 text-left transition hover:bg-white/5"
                        onClick={() => {
                          closeMobileMenu();
                          handleSearchResultClick(item);
                        }}
                      >
                        <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                          <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="line-clamp-1 text-sm font-bold text-white">
                            {title}
                          </h4>

                          <p className="mt-1 text-xs text-white/45">
                            {year} • {mediaType === "tv" ? "Series" : "Movie"} •
                            ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                          </p>
                        </div>
                      </button>
                    );
                  })}
              </div>
            )}

            <nav className={navbarStyles.mobileNav}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={navbarStyles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {!isLoading && !isAuthenticated && (
              <div className={navbarStyles.mobileActions}>
                <Link
                  href="/register"
                  className={navbarStyles.mobileSignUp}
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>

                <Link
                  href="/login"
                  className={navbarStyles.mobileLogin}
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </div>
            )}

            {!isLoading && isAuthenticated && (
              <div className={navbarStyles.mobileUserBox}>
                <p className={navbarStyles.mobileUserName}>{displayName}</p>
                <p className={navbarStyles.mobileUserEmail}>{user?.email}</p>

                <button
                  type="button"
                  className={navbarStyles.mobileLogout}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
