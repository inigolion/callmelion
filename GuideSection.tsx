import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const GuideSection = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 md:gap-24 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-2"
        >
          <img
            src="/lovable-uploads/guide-photo.jpg"
            alt={t("guide.imgAlt")}
            loading="lazy"
            width={600}
            height={800}
            className="w-full object-cover aspect-[3/4]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="font-sans tracking-[0.3em] uppercase text-coral mb-6 text-2xl font-medium">
            {t("guide.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
            {t("guide.title1")}<br />
            <em className="font-light text-muted-foreground">{t("guide.title2")}</em>
          </h2>
          <div className="space-y-6 font-sans text-muted-foreground leading-[1.8] text-base md:text-lg max-w-lg">
            <p>{t("guide.body1")}</p>
            <p>{t("guide.body2")}</p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-16 h-px bg-coral/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuideSection;
