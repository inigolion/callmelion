import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import hostThumbnail from "@/assets/host-thumbnail.jpg";

const tagKeys: TranslationKey[] = [
  "host.tag1",
  "host.tag2",
  "host.tag3",
  "host.tag4",
  "host.tag5",
  "host.tag6",
];

const HostSection = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <section id="host" className="py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Mobile-only header (above video) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:hidden mb-8"
        >
          <p className="font-sans tracking-[0.3em] uppercase text-coral mb-4 text-sm font-medium">
            {t("host.label")}
          </p>
          <h2 className="text-4xl text-foreground leading-[1.1] font-medium">
            {t("host.name")}
          </h2>
        </motion.div>

        {/* Main row: video + (header + card), bottom-aligned */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">

          {/* LEFT — Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full rounded-2xl overflow-hidden border-2 border-warm-gold/60 bg-card shadow-sm relative">
              {!isPlaying && (
                <div
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={handlePlay}
                >
                  <img
                    src={hostThumbnail}
                    alt="Meet your host"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-warm-gold flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" fill="hsl(var(--warm-gold))" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src="/videos/host-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* RIGHT — Header + Card + Pills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            {/* Header — desktop/tablet only */}
            <div className="hidden md:block">
              <p className="font-sans tracking-[0.3em] uppercase text-coral mb-2 text-sm md:text-base font-medium">
                {t("host.label")}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 leading-[1.1] font-medium">
                {t("host.name")}
              </h2>
            </div>

            {/* Gold border info card */}
            <div className="rounded-xl border-2 border-warm-gold/60 p-[3px] bg-coral">
              <div className="rounded-lg border-2 border-warm-gold/60 p-5 md:p-6 bg-card">
              <div className="flex items-center gap-2.5 mb-4">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary" style={{ WebkitTextStroke: '1px hsl(40 50% 65%)', paintOrder: 'stroke fill' }}>
                  {t("host.cardTitle")}
                </h3>
                {/* Spanish flag */}
                <svg viewBox="0 0 30 20" className="h-[0.8em] rounded-[1px]" style={{ border: '1px solid hsl(var(--warm-gold))' }}>
                  <rect width="30" height="20" fill="#c60b1e" />
                  <rect y="5" width="30" height="10" fill="#ffc400" />
                </svg>
                {/* Community of Madrid flag */}
                <svg viewBox="0 0 30 20" className="h-[0.8em] rounded-[1px]" style={{ border: '1px solid hsl(var(--warm-gold))' }}>
                  <rect width="30" height="20" fill="#DA251D" />
                  <g>
                    <line x1="3.75" y1="2" x2="3.75" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="7.5" y1="2" x2="7.5" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="11.25" y1="2" x2="11.25" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="15" y1="2" x2="15" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="18.75" y1="2" x2="18.75" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="22.5" y1="2" x2="22.5" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                    <line x1="26.25" y1="2" x2="26.25" y2="18" stroke="#FFFFFF" strokeWidth="0.4" />
                  </g>
                  <g>
                    <rect x="9" y="6" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="13" y="6" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="9" y="10.5" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="13" y="10.5" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="17" y="6" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="17" y="10.5" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                    <rect x="21" y="6" width="3" height="3.5" fill="#FFFFFF" stroke="#DA251D" strokeWidth="0.3" />
                  </g>
                </svg>
              </div>
              <div className="mb-4">
                <div
                  className="h-[1.5px] w-full rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--warm-gold)) 15%, hsl(var(--warm-gold)) 85%, transparent)" }}
                />
              </div>
              <p className="text-muted-foreground leading-[1.7] text-sm font-serif md:text-base font-medium whitespace-pre-line">
                {t("host.bio")}
              </p>
              </div>
            </div>

            {/* Pill tags */}
            <div className="grid grid-cols-3 gap-3 md:gap-3 mt-10 md:mt-7">
              {tagKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="rounded-full border border-warm-gold/50 bg-warm-gold/5 px-4 py-2.5 md:px-3 md:py-1.5 text-center whitespace-nowrap h-10 md:h-8 flex items-center justify-center"
                >
                  <span className={`font-sans tracking-wide text-warm-gold font-semibold ${t(key).length > 12 ? 'text-[11px] md:text-[11px]' : 'text-sm md:text-[13px]'}`}>
                    {t(key)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16 md:mt-20"
      >
        <a
          href="#numbers"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("numbers")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block font-serif text-base md:text-lg text-white bg-primary/80 px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-primary/90 hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide"
        >
          {t("host.more")}
        </a>
      </motion.div>
    </section>
  );
};

export default HostSection;
