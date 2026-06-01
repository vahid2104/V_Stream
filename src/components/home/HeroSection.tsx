import { Bookmark, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-175 overflow-hidden">
      <Image
        src="/images/star-wars-hero.png"
        alt="Star Wars The Force Awaken"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-linear-to-t from-[#06070d] via-transparent to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-175 max-w-295 items-center px-6 pt-20">
        <div className="max-w-170 space-y-4">
          <span className="mb-4 inline-flex rounded bg-black/50 px-3 py-1 text-xs font-medium text-white">
            Movie
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Star Wars: the force Awaken
          </h1>

          <p className="mt-3 text-sm text-white/60">
            2h 40m • 2022 • Fantasy • Actions
          </p>

          <p className="mt-4 max-w-150 text-sm leading-6 text-white/75">
            The third season of the American television series The Mandalorian
            stars Pedro Pascal as the character, a bounty hunter traveling to
            Mandalore to redeem his past transgressions with his adopted son
            Grogu and being aided on their journey by fellow Mandalorian
            Bo-Katan Kryze.
          </p>

          <div className="mt-7 flex items-center gap-4">
            <Button variant="main">
              <Play size={16} fill="white" />
              Watch Trailer
            </Button>

            <Button variant="ghost">
              <Bookmark size={16} />
              Add Watchlist
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 right-[17.5%] z-20 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </section>
  );
}