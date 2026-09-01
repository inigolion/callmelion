import { motion } from "framer-motion";
import { Clock, Users, UtensilsCrossed, Wine, Music, MapPin, UserCheck, Landmark } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import tourChueca from "@/assets/tour-chueca.jpg";
import tourLavapies from "@/assets/tour-lavapies.jpg";

interface Inclusion {
  icon: typeof Clock;
  textKey: TranslationKey;
}

const chuecaInclusions: Inclusion[] = [
  { icon: Clock, textKey: "tours.chueca.inc1" },
  { icon: Users, textKey: "tours.chueca.inc2" },
  { icon: UtensilsCrossed, textKey: "tours.chueca.inc3" },
  { icon: Wine, textKey: "tours.chueca.inc4" },
  { icon: Music, textKey: "tours.chueca.inc5" },
  { icon: MapPin, textKey: "tours.chueca.inc6" },
  { icon: UserCheck, textKey: "tours.chueca.inc7" },
  { icon: Landmark, textKey: "tours.chueca.inc8" },
];

const lavapiesInclusions: Inclusion[] = [
  { icon: Clock, textKey: "tours.lavapies.inc1" },
  { icon: Users, textKey: "tours.lavapies.inc2" },
  { icon: UtensilsCrossed, textKey: "tours.lavapies.inc3" },
  { icon: Wine, textKey: "tours.lavapies.inc4" },
  { icon: Music, textKey: "tours.lavapies.inc5" },
  { icon: MapPin, textKey: "tours.lavapies.inc6" },
  { icon: UserCheck, textKey: "tours.lavapies.inc7" },
  { icon: Landmark, textKey: "tours.lavapies.inc8" },
];

const WHATSAPP_URL = "https://wa.me/34674467029?text=Hi%20I%C3%B1igo!%20I%27m%20interested%20in%20your%20tour";

interface TourCardProps {
  title: TranslationKey;
  subtitle: TranslationKey;
  image: string;
  imageAlt: string;
  inclusions: Inclusion[];
  delay: number;
}

const TourCard = ({ title, subtitle, image, imageAlt, inclusions, delay }: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col"
    >
      {/* Title & subtitle outside the card */}
      <div className="mb-5">
        <h3 className="font-serif font-semibold text-foreground mb-1 md:text-5xl text-4xl">
          {t(title)}
        </h3>
        <p className="font-sans text-sm md:text-base text-muted-foreground font-light">
          {t(subtitle)}
        </p>
      </div>

      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden bg-card flex flex-col flex-1"
        style={{
          border: "1px solid hsl(40 45% 70% / 0.5)",
          boxShadow: "0 2px 16px hsl(40 40% 75% / 0.08)",
        }}
      >
        {/* Image — top 35% */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={800}
            height={512}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-serif text-2xl md:text-3xl tracking-wide flex flex-col items-center px-4 py-1.5 rounded-xl"
              style={{
                color: "hsl(40 50% 65%)",
                backgroundColor: "hsl(38 33% 95% / 0.82)",
                border: "1.5px solid hsl(40 50% 65%)",
              }}
            >
              <span>CALL ME LION</span>
              <span className="text-lg md:text-xl opacity-80 -mt-1">Tours</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <span
            className="inline-block font-sans tracking-[0.2em] uppercase text-muted-foreground/70 mb-5 text-lg font-semibold"
            style={{ borderBottom: "1.5px solid hsl(40 50% 65%)", paddingBottom: "4px", alignSelf: "flex-start" }}
          >
            {t("tours.inclusions")}
          </span>

          {/* Bullet list */}
          <ul className="space-y-3 mb-8 flex-1">
            {inclusions.map((inc) => (
              <li key={inc.textKey} className="flex items-start gap-3">
                <inc.icon
                  size={18}
                  strokeWidth={1.4}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "hsl(40 50% 62%)" }}
                />
                <span className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                  {t(inc.textKey)}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide"
            >
              {t("nav.book")}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ToursSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-24 md:py-36 bg-background">
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif md:text-6xl font-semibold text-foreground mb-3 leading-[1.05] text-5xl">
            {(() => {
              const title = t("tours.title");
              const tapasIndex = title.indexOf("Tapas");
              if (tapasIndex === -1) return title;
              return (
                <>
                  {title.slice(0, tapasIndex)}
                  <span style={{ color: "hsl(40 50% 65%)" }}>Tapas</span>
                  {title.slice(tapasIndex + 5)}
                </>
              );
            })()}
          </h2>
          <p className="font-sans text-base text-muted-foreground font-light md:text-base whitespace-pre-line">
            {t("tours.subtitle")}
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <TourCard
            title="tours.chueca.title"
            subtitle="tours.chueca.subtitle"
            image={tourChueca}
            imageAlt="Chueca neighborhood in Madrid"
            inclusions={chuecaInclusions}
            delay={0}
          />
          <TourCard
            title="tours.lavapies.title"
            subtitle="tours.lavapies.subtitle"
            image={tourLavapies}
            imageAlt="Lavapiés neighborhood in Madrid"
            inclusions={lavapiesInclusions}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
