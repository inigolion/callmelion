import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Map, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import logoTripadvisor from "@/assets/logo-tripadvisor.png";
import logoViator from "@/assets/logo-viator.png";
import logoWithlocals from "@/assets/logo-withlocals.png";
import logoBigbus from "@/assets/logo-bigbus.png";
import logoGuruwalk from "@/assets/logo-guruwalk.png";
import logoFreetour from "@/assets/logo-freetour.png";

interface StatCardProps {
  icon: typeof Users;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  labelKey: TranslationKey;
  microKey: TranslationKey;
}

const NumberTicker = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(
          decimals > 0
            ? v.toFixed(decimals)
            : Math.floor(v).toLocaleString("de-DE")
        );
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span className="font-serif text-5xl md:text-6xl font-semibold text-secondary-foreground lg:text-7xl">
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

const statCards: StatCardProps[] = [
  { icon: Users, value: 12000, prefix: "+", suffix: "", labelKey: "authority.guests", microKey: "authority.micro.guests" },
  { icon: Map, value: 1100, prefix: "+", suffix: "", labelKey: "authority.tours", microKey: "authority.micro.tours" },
  { icon: Star, value: 4.99, prefix: "", suffix: "", decimals: 2, labelKey: "authority.rating", microKey: "authority.micro.rating" },
];

interface PlatformInfo {
  name: string;
  logo: string;
}

const platforms: PlatformInfo[] = [
  { name: "TripAdvisor", logo: logoTripadvisor },
  { name: "Viator", logo: logoViator },
  { name: "Withlocals", logo: logoWithlocals },
  { name: "BigBus", logo: logoBigbus },
  { name: "Freetour", logo: logoGuruwalk },
  { name: "Guruwalk", logo: logoFreetour },
];

const AuthoritySection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="numbers" className="py-24 md:py-40 bg-background">
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        {/* Section Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.1]">
            {t("authority.title")}
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("authority.subtitle")}
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl bg-card flex flex-col items-center justify-center text-center px-8 py-14 md:py-20"
              style={{
                border: "1px solid hsl(40 45% 70% / 0.5)",
                boxShadow: "0 2px 16px hsl(40 40% 75% / 0.08)",
                aspectRatio: "3 / 4",
              }}
            >
              {/* Micro-heading */}
              <p
                className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground/70 mb-6"
              >
                {t(stat.microKey)}
              </p>

              <stat.icon
                size={32}
                strokeWidth={1.2}
                className="mb-8"
                style={{ color: "hsl(40 50% 62%)" }}
              />
              <NumberTicker
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
                inView={inView}
              />
              <p
                className="mt-6 font-sans text-xs md:text-sm tracking-[0.2em] text-muted-foreground font-medium"
                style={{ fontVariant: "small-caps" }}
              >
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <p className="text-sm text-muted-foreground text-center mb-10 tracking-wide font-serif font-bold md:text-lg">
            {t("authority.platforms")}
          </p>
        </motion.div>

        {/* Platform logos + names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-start justify-center gap-8 md:gap-12"
        >
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
              <span
                className="font-serif text-sm tracking-wider font-extrabold text-secondary-foreground md:text-xl"
              >
                {platform.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#reviews"
            className="inline-block font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide"
          >
            {t("authority.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;