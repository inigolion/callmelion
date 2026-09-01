import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import logoTripadvisor from "@/assets/logo-tripadvisor.png";
import logoViator from "@/assets/logo-viator.png";
import logoWithlocals from "@/assets/logo-withlocals.png";
import logoGoogle from "@/assets/logo-google.png";
import logoGuruwalk from "@/assets/logo-guruwalk.png";
import logoFreetour from "@/assets/logo-freetour.png";

interface Review {
  nameKey: TranslationKey;
  locationKey: TranslationKey;
  textKey: TranslationKey;
  stars: number;
}

const reviews: Review[] = [
  {
    nameKey: "review.1.name",
    locationKey: "review.1.location",
    textKey: "review.1.text",
    stars: 5,
  },
  {
    nameKey: "review.2.name",
    locationKey: "review.2.location",
    textKey: "review.2.text",
    stars: 5,
  },
  {
    nameKey: "review.3.name",
    locationKey: "review.3.location",
    textKey: "review.3.text",
    stars: 5,
  },
  {
    nameKey: "review.4.name",
    locationKey: "review.4.location",
    textKey: "review.4.text",
    stars: 5,
  },
  {
    nameKey: "review.5.name",
    locationKey: "review.5.location",
    textKey: "review.5.text",
    stars: 5,
  },
  {
    nameKey: "review.6.name",
    locationKey: "review.6.location",
    textKey: "review.6.text",
    stars: 5,
  },
];

const platforms = [
  { name: "TripAdvisor", logo: logoTripadvisor },
  { name: "Viator", logo: logoViator },
  { name: "Withlocals", logo: logoWithlocals },
  { name: "Google Reviews", logo: logoGoogle },
  { name: "Freetour", logo: logoGuruwalk },
  { name: "Guruwalk", logo: logoFreetour },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={16}
        fill="hsl(40 50% 62%)"
        stroke="hsl(40 50% 62%)"
        strokeWidth={1}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 md:py-40 bg-background">
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(12 45% 65%)" }}>
            {t("reviews.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.1]">
            {t("reviews.title1")}<br />
            <em className="font-light" style={{ color: "hsl(40 50% 62%)" }}>{t("reviews.title2")}</em>
          </h2>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-card px-8 py-10 flex flex-col h-[320px] md:h-[340px] min-h-0"
              style={{
                border: "1px solid hsl(40 45% 70% / 0.5)",
                boxShadow: "0 2px 16px hsl(40 40% 75% / 0.08)",
              }}
            >
              <StarRating count={review.stars} />
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6 whitespace-pre-wrap flex-1 min-h-0 overflow-hidden">
                {t(review.textKey)}
              </p>
              <div className="mt-auto">
                <p className="font-serif text-lg font-semibold text-secondary-foreground">
                  {t(review.nameKey)}
                </p>
                <p className="font-sans text-xs tracking-[0.15em] text-muted-foreground mt-1" style={{ fontVariant: "small-caps" }}>
                  {t(review.locationKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 md:mt-28"
        >
          <p className="text-sm text-muted-foreground text-center mb-10 tracking-wide font-serif font-bold md:text-lg">
            {t("reviews.platforms")}
          </p>
          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center gap-3"
              >
                <div className="h-10 w-10 flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="max-h-10 max-w-10 object-contain"
                  />
                </div>
                <span className="font-serif text-sm tracking-wider font-extrabold text-secondary-foreground md:text-xl">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
