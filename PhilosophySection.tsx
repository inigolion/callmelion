import { motion } from "framer-motion";
import tapasSpread from "@/assets/tapas-spread.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-sans tracking-[0.3em] uppercase mb-6 text-lg text-[#c9b564] font-medium">
            {t("philosophy.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1] font-bold">
            {t("philosophy.title1")}<br />
            <em className="font-light text-[#c9b564] text-4xl">{t("philosophy.title2")}</em>
          </h2>
          <p className="font-sans text-muted-foreground leading-[1.8] text-base md:text-lg max-w-lg">
            {t("philosophy.body")}
          </p>
          <div className="mt-10 w-16 h-px bg-coral/40" />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="border-2 border-warm-gold/40 rounded-2xl overflow-hidden">
            <img
              src={tapasSpread}
              alt="A curated spread of Spanish tapas in warm natural light"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full object-cover aspect-[4/5] rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
