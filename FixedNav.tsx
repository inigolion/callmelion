import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const FixedNav = () => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex items-center justify-between pointer-events-none">
      {/* Subtle top gradient for readability */}
      <div className="absolute inset-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="relative flex flex-col gap-2 pointer-events-auto">
        <span className="font-serif text-2xl md:text-3xl tracking-wide flex flex-col" style={{ color: "hsl(40 50% 65%)" }}>
          <span className="font-serif">CALL ME LION</span>
          <span className="text-lg md:text-xl opacity-80 -mt-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tours</span>
        </span>
        <LanguageSelector />
      </div>

      <div className="relative flex items-center gap-10 pointer-events-auto">
        <a href="#host" className="hidden md:inline transition-colors duration-300 font-serif text-xl" style={{ color: "hsl(40 50% 65%)" }}>{t("nav.experience")}</a>
        <a href="#reviews" className="hidden md:inline transition-colors duration-300 font-serif text-xl" style={{ color: "hsl(40 50% 65%)" }}>{t("nav.story")}</a>
        <a
          href="https://wa.me/34674467029?text=Hi%20I%C3%B1igo!%20I%27m%20interested%20in%20your%20tour"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide whitespace-nowrap"
        >
          {t("nav.book")}
        </a>
      </div>
    </nav>
  );
};

export default FixedNav;
