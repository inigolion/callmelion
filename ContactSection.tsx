import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-40 bg-foreground">
      <div className="px-8 md:px-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-[1.05]">
            {t("cta.title1")}<br />
            <em className="font-light text-primary-foreground/60">{t("cta.title2")}</em>
          </h2>
          <p className="font-sans text-primary-foreground/50 text-sm tracking-[0.2em] uppercase max-w-xl mx-auto leading-relaxed mb-12">
            {t("cta.subtitle")}
          </p>
          <a
            href="https://wa.me/34674467029?text=Hi%20I%C3%B1igo!%20I%27m%20interested%20in%20your%20tour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide"
          >
            {t("nav.book")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
