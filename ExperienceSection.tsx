import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, MapPin, Music, BookOpen, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const experiences: { icon: typeof UtensilsCrossed; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: UtensilsCrossed, titleKey: "exp.food.title", descKey: "exp.food.desc" },
  { icon: Wine, titleKey: "exp.drinks.title", descKey: "exp.drinks.desc" },
  { icon: MapPin, titleKey: "exp.hidden.title", descKey: "exp.hidden.desc" },
  { icon: Music, titleKey: "exp.music.title", descKey: "exp.music.desc" },
  { icon: BookOpen, titleKey: "exp.story.title", descKey: "exp.story.desc" },
  { icon: Clock, titleKey: "exp.time.title", descKey: "exp.time.desc" },
];

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-40 bg-background">
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-sans tracking-[0.3em] uppercase mb-6 font-medium text-[#c9b564] text-xl">
            {t("experience.label")}
          </p>
          <h2 className="text-4xl md:text-6xl text-foreground max-w-3xl leading-[1.05] font-semibold lg:text-7xl">
            {t("experience.title")}<br />
            <em className="font-light text-muted-foreground text-4xl">{t("experience.subtitle")}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8 md:p-10 bg-card"
              style={{
                border: "1px solid hsl(40 45% 70% / 0.5)",
                boxShadow: "0 2px 16px hsl(40 40% 75% / 0.08)",
              }}
            >
              <exp.icon
                size={32}
                strokeWidth={1.2}
                className="mb-6"
                style={{ color: "hsl(40 50% 62%)" }}
              />
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-2 text-primary">
                {t(exp.titleKey)}
              </h3>
              <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {t(exp.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-2"
        >
          <p className="text-muted-foreground text-sm tracking-wide font-serif font-semibold md:text-xl">
            {t("experience.price")}
          </p>
          <p className="text-muted-foreground text-sm tracking-wide font-serif md:text-xl font-semibold">
            {t("experience.group")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
