"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { logoutUser } from "@/services/authService";
import { navbarStyles } from "./Navbar.styles";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Movie Release", href: "/movie-release" },
  { label: "Forum", href: "/forum" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";
  const firstLetter = displayName.charAt(0).toUpperCase();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  async function handleLogout() {
    await logoutUser();
    closeMobileMenu();
  }

  return (
    <>
      <header className={navbarStyles.header}>
        <div className={navbarStyles.container}>
          <Link href="/" className={navbarStyles.logoLink}>
            <Image
              src="/logo/logo.png"
              alt="V Stream"
              width={180}
              height={60}
              priority
              className={navbarStyles.logoImage}
            />
          </Link>

          <nav className={navbarStyles.desktopNav}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={navbarStyles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={navbarStyles.rightActions}>
            <button type="button" className={navbarStyles.searchButton} aria-label="Search">
              <Search size={22} />
            </button>

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
                  src="/images/logo/v-stream-logo.png"
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
              <span className="text-sm font-medium">Search movies...</span>
            </div>

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