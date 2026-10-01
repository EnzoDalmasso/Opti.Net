import Image from "next/image";
import { business } from "@/config/business";
import { instagramPosts } from "@/data/instagram";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/BrandIcons";

/** Grilla estática estilo feed: liviana y sin iframes ni scripts de terceros. */
export function InstagramFeed() {
  const { instagram } = business;

  return (
    <section aria-labelledby="instagram-title" className="pb-24 sm:pb-28 lg:pb-32">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-strong via-teal to-[#1a9aa6] px-6 py-12 text-white sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-24 size-96 rounded-full bg-aqua/40 blur-3xl" />
            <div className="absolute right-0 bottom-0 size-[28rem] translate-x-1/3 translate-y-1/3 rounded-full border-[40px] border-white/[0.06]" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold ring-1 ring-white/20 backdrop-blur-sm">
                <InstagramIcon size={16} />
                {instagram.handle}
              </p>
              <h2
                id="instagram-title"
                className="mt-6 font-display text-[2.125rem] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl"
              >
                Seguinos en Instagram
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-[1.0625rem]">
                Los modelos que van llegando al local, promos del mes y tips para cuidar tus anteojos. Ya somos{" "}
                {instagram.followersLabel.replace("+", "más de ")}.
              </p>
              <ButtonLink
                href={instagram.url}
                external
                variant="light"
                icon={<InstagramIcon size={18} className="text-teal" />}
                className="mt-8"
              >
                Ver Instagram
              </ButtonLink>
            </div>

            <RevealGroup as="ul" staggerChildren={0.07} className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:col-span-7">
              {instagramPosts.map((post, index) => (
                <RevealItem as="li" key={post.id} className={cn(index % 3 === 1 && "translate-y-4 sm:translate-y-6")}>
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${post.caption}: ver en Instagram`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20"
                  >
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(min-width: 1024px) 16vw, 30vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]"
                    />
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/55 p-3 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <InstagramIcon size={22} />
                      <span className="hidden text-xs leading-snug font-medium sm:block">{post.caption}</span>
                    </span>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
