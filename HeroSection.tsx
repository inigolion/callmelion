import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const HERO_POSTER_SRC = "/lovable-uploads/hero-video-poster.jpg";
const HERO_DESKTOP_VIDEO_SRC = "/lovable-uploads/hero-video.mp4";
const HERO_MOBILE_VIDEO_SRC = "/lovable-uploads/hero-video-mobile.mp4";

const HeroSection = () => {
  const { t } = useLanguage();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = mobileVideoRef.current;

    if (!video) return;

    const applyMobileVideoAttributes = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "auto";
      video.controls = false;
      video.poster = HERO_POSTER_SRC;
      video.setAttribute("muted", "");
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("poster", HERO_POSTER_SRC);
      video.setAttribute("preload", "auto");
      video.removeAttribute("controls");
    };

    const playVideo = () => {
      applyMobileVideoAttributes();

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => undefined);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    applyMobileVideoAttributes();
    video.load();
    playVideo();

    const retryTimeout = window.setTimeout(() => {
      playVideo();
    }, 150);

    const finalRetryTimeout = window.setTimeout(() => {
      playVideo();
    }, 600);

    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);
    video.addEventListener("playing", applyMobileVideoAttributes);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearTimeout(retryTimeout);
      window.clearTimeout(finalRetryTimeout);
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("playing", applyMobileVideoAttributes);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      {/* Mobile animated background */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_SRC}
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        >
          <source src={HERO_MOBILE_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent text-3xl" />
      </div>

      {/* Desktop background video */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_SRC}
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src={HERO_DESKTOP_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent text-3xl" />
      </div>

      {/* Cinematic top overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* Navigation */}
      {/* Navigation is now fixed globally — see FixedNav */}

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-16 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="tracking-[0.3em] uppercase text-coral-light mb-6 font-serif text-xl"
        >
          {t("hero.tagline")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-5xl md:text-7xl leading-[0.95] mb-8 font-semibold lg:text-6xl text-earth-light"
        >
          {t("hero.title1")}<br />
          <em className="font-light font-serif text-5xl text-earth">{t("hero.title2")}</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed"
        >
          
        </motion.p>
        <motion.a
          href="#tours"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="inline-block mt-10 font-serif text-base md:text-lg text-white bg-[hsl(40,50%,55%,0.15)] px-5 md:px-6 py-2 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-[hsl(40,50%,55%,0.25)] hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide"
        >
          {t("hero.cta")}
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
