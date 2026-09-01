import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";
import { motion } from "framer-motion";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex items-center gap-1 justify-center"
    >
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 px-1.5 py-0.5 rounded-sm ${
              language === lang.code
                ? "text-[hsl(40,50%,65%)] font-medium"
                : "text-primary-foreground/40 hover:text-primary-foreground/70"
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-primary-foreground/20 text-xs mx-0.5">·</span>
          )}
        </span>
      ))}
    </motion.div>
  );
};

export default LanguageSelector;
