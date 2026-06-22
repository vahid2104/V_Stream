import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerStyles } from "./Footer.styles";
import { MailIcon } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies",
    href: "/movies",
  },
  {
    label: "Release",
    href: "/movie-release",
  },
   {
    label: "About",
    href: "/about",
  },
];

const bottomLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: MailIcon,
  },
];

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.brandColumn}>
          <h2 className={footerStyles.title}>
            Stream your favorite movies, series and anime on{" "}
            <span className={footerStyles.highlight}>V Stream</span>.
          </h2>

          <div className={footerStyles.bottomLinks}>
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={footerStyles.bottomLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={footerStyles.rightColumn}>
          <nav className={footerStyles.nav} aria-label="Footer navigation">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-3">
                <Link href={link.href} className={footerStyles.navLink}>
                  {link.label}
                </Link>

                {index !== navLinks.length - 1 && (
                  <span className={footerStyles.slash}>/</span>
                )}
              </div>
            ))}
          </nav>

          <div className={footerStyles.socialList}>
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={footerStyles.socialLink}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          <p className={footerStyles.copyright}>
            © {new Date().getFullYear()} V Stream
          </p>
        </div>
      </div>
    </footer>
  );
}