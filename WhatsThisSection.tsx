import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Music, Landmark } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

import conceptTapas from "@/assets/concept-tapas.jpg";
import conceptWine from "@/assets/concept-wine.jpg";
import conceptMusic from "@/assets/concept-music.jpg";
import conceptHistory from "@/assets/concept-history.jpg";
import tapasBand from "@/assets/tapas-band.jpg";

const concepts: {
  icon: typeof UtensilsCrossed;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  image: string;
}[] = [
  { icon: UtensilsCrossed, titleKey: "whats.tapas.title", descKey: "whats.tapas.desc", image: conceptTapas },
  { icon: Wine, titleKey: "whats.wine.title", descKey: "whats.wine.desc", image: conceptWine },
  { icon: Music, titleKey: "whats.music.title", descKey: "whats.music.desc", image: conceptMusic },
  { icon: Landmark, titleKey: "whats.history.title", descKey: "whats.history.desc", image: conceptHistory },
];

const WhatsThisSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-8 md:pt-10 pb-24 md:pb-36 bg-background">
      <div className="px-8 md:px-16 max-w-5xl mx-auto">
        {/* "What's this?" title — repositioned closer to top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-serif md:text-6xl leading-[1.05] font-semibold mb-0 text-center text-3xl lg:text-6xl text-secondary-foreground">
            {t("whats.title")}
          </h2>
        </motion.div>
      </div>

      {/* Tapas Band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative w-full mb-12 md:mb-16"
      >
        <div
          className="relative mx-8 md:mx-16 overflow-hidden rounded-xl"
          style={{
            border: "2px solid hsl(40 50% 65%)",
          }}
        >
          {/* Background image */}
          <img
            src={tapasBand}
            alt="Spanish tapas spread"
            loading="lazy"
            width={1920}
            height={512}
            className="w-full h-32 md:h-44 object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "hsl(0 0% 8% / 0.45)" }}
          />
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-center">
              <span style={{ color: "hsl(40 50% 65%)" }}>{t("whats.band.line1")}</span>
              <br className="md:hidden" />
              <span className="hidden md:inline" style={{ color: "hsl(40 50% 65%)" }}>{" "}</span>
              <span className="text-white"> {t("whats.band.line2")}</span>{" "}
              <span style={{ color: "hsl(40 50% 65%)" }}>{t("whats.band.line3")}</span>
            </h3>
          </div>
        </div>
      </motion.div>

      <div className="px-8 md:px-16 max-w-5xl mx-auto">
        {/* Remaining header text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-serif text-foreground/80 font-medium mb-2 md:text-6xl text-6xl">
            {t("whats.secondary")}
          </p>
          <p className="font-serif italic md:text-2xl mb-6 md:mb-8 text-earth font-medium text-2xl">
            {t("whats.secondary.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-base text-foreground/80 font-sans mb-8 md:mb-10">
            {(t("whats.supporting") as string).split("\n").filter(Boolean).map((item, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full font-medium tracking-wide"
                style={{
                  border: "2px solid hsl(40 50% 65%)",
                  boxShadow: "0 2px 10px hsl(40 40% 65% / 0.15)",
                }}
              >
                {item.trim()}
              </span>
            ))}
          </div>
        </motion.div>

        {/* "Based on 4 concepts" label — closer to concept rows */}
        <div className="text-center mb-6 md:mb-8">
          <span
            className="inline-block tracking-[0.2em] uppercase md:text-3xl text-3xl font-bold font-serif text-secondary-foreground"
            style={{ borderBottom: "1.5px solid hsl(40 50% 65%)", paddingBottom: "4px" }}
          >
            {t("whats.label")}
          </span>
        </div>

        {/* Concept Rows */}
        <div className="flex flex-col gap-10 md:gap-14 mb-16 md:mb-24">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.titleKey}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-4 md:gap-5"
            >
              {/* Gold bordered card — fixed min-height for uniform size */}
              <div
                className="flex-1 min-w-0 rounded-xl p-4 md:p-5 min-h-[6.5rem] md:min-h-[7.5rem] flex items-center"
                style={{ border: "2px solid hsl(40 50% 65%)" }}
              >
                <div className="flex items-center gap-3 md:gap-5 w-full">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    <concept.icon
                      size={24}
                      strokeWidth={1.3}
                      style={{ color: "hsl(40 50% 62%)" }}
                      className="md:w-8 md:h-8"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-foreground leading-tight mb-1 text-2xl md:text-4xl">
                      {t(concept.titleKey)}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                      {t(concept.descKey)}
                    </p>
                  </div>
                </div>
              </div>
              {/* Circle image outside the card */}
              <div
                className="flex-shrink-0 w-[5.5rem] h-[5.5rem] md:w-[7.75rem] md:h-[7.75rem] rounded-full overflow-hidden"
                style={{
                  border: "3px solid hsl(40 50% 68%)",
                  boxShadow: "0 3px 16px hsl(40 40% 65% / 0.2)",
                }}
              >
                <img
                  src={concept.image}
                  alt={t(concept.titleKey)}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="#tours"
            className="inline-block font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide whitespace-pre-line"
          >
            {t("whats.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsThisSection;
