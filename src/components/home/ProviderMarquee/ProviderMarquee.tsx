import Image from "next/image";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBWatchProvider } from "@/types/tmdb";

import { providerMarqueeStyles } from "./ProviderMarquee.styles";

type ProviderMarqueeProps = {
  providers: TMDBWatchProvider[];
};

export default function ProviderMarquee({ providers }: ProviderMarqueeProps) {
  const visibleProviders = providers.filter((provider) => provider.logo_path);

  if (visibleProviders.length === 0) {
    return (
      <section className={providerMarqueeStyles.empty}>
        Streaming providers are not available right now.
      </section>
    );
  }

  const repeatedProviders = [...visibleProviders, ...visibleProviders];

  return (
    <section className={providerMarqueeStyles.section}>
      <div className={providerMarqueeStyles.fadeLeft} />
      <div className={providerMarqueeStyles.fadeRight} />

      <div className={providerMarqueeStyles.track}>
        {repeatedProviders.map((provider, index) => (
          <div
            key={`${provider.provider_id}-${index}`}
            className={providerMarqueeStyles.card}
            title={provider.provider_name}
          >
            <Image
              src={getTMDBImageUrl(provider.logo_path, "w154")}
              alt={provider.provider_name}
              width={120}
              height={60}
              className={providerMarqueeStyles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}