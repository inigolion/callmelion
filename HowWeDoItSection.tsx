import { useState, useRef } from "react";
import { motion } from "framer-motion";

const HowWeDoItSection = () => {
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
    <section id="how-we-do-it" className="py-16 md:py-24 bg-background">
      <div className="px-8 md:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-serif md:text-6xl leading-[1.05] font-semibold mb-1 text-center text-3xl lg:text-6xl text-secondary-foreground">
            How we <span className="text-warm-gold">do</span> it
          </h2>
          <p className="font-serif italic md:text-2xl text-earth font-medium text-2xl -mt-1">
            With art, <span className="text-warm-gold">passion</span>, and love
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="px-8 md:px-16 max-w-6xl mx-auto"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-warm-gold/60 bg-card shadow-sm">
          {!isPlaying && (
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handlePlay}
            >
              <img
                src="/videos/how-we-do-it-poster.jpg"
                alt="How we do it"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
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
            poster="/videos/how-we-do-it-poster.jpg"
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPause={handlePause}
            onEnded={handlePause}
          >
            <source src="/videos/how-we-do-it.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeDoItSection;
