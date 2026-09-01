import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground px-8 md:px-16 py-12 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-xl text-primary-foreground/60 whitespace-pre-line">
          {"CALL ME LION\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Tours"}
        </span>
        <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/30">
          {t("footer.tagline")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
