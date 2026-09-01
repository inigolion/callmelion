import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const FaqContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const { name, email, message } = formData;
    const id = crypto.randomUUID();
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-notification",
          recipientEmail: email,
          idempotencyKey: `contact-notify-${id}`,
          templateData: { name, email, message },
        },
      });
      if (error) throw error;
      toast({ title: t("faqcontact.form.success") || "Message sent!", description: t("faqcontact.form.successDesc") || "We'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message:", err);
      toast({ title: "Error", description: "Could not send your message. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="faq-contact" className="py-24 md:py-32 bg-background">
      <div className="px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-16 lg:gap-12">
          {/* LEFT — FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-primary">
              {t("faq.label")}
            </p>
            <h2 className="text-3xl md:text-4xl mb-10 text-foreground">
              {t("faq.title")}
            </h2>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="font-sans text-base text-foreground/90 hover:text-foreground py-4 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Vertical gold divider (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div
              className="w-[2px] h-full rounded-full"
              style={{ background: "linear-gradient(180deg, transparent, hsl(40 50% 65%), transparent)" }}
            />
          </div>

          {/* RIGHT — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-primary">
              {t("faqcontact.label")}
            </p>
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              {t("faqcontact.title")}
            </h2>

            {/* Contact info */}
            <div className="space-y-3 mb-10 font-sans text-sm text-muted-foreground">
              <p>
                <span className="text-foreground/70 font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@callmelion.com"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  info@callmelion.com
                </a>
              </p>
              <p>
                <span className="text-foreground/70 font-medium">{t("faqcontact.phone")}:</span>{" "}
                <a
                  href="tel:+34674467029"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  +34 674 467 029
                </a>
              </p>
              <p className="text-muted-foreground/70 text-xs flex items-center gap-1.5">
                {t("faqcontact.whatsapp").replace("WhatsApp", "WHATSAPP_PLACEHOLDER").split("WHATSAPP_PLACEHOLDER")[0]}
                <a
                  href="https://wa.me/34674467029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors text-primary"
                >
                  WhatsApp
                </a>
                {t("faqcontact.whatsapp").replace("WhatsApp", "WHATSAPP_PLACEHOLDER").split("WHATSAPP_PLACEHOLDER")[1]}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 inline-block" fill="hsl(40 50% 65%)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder={t("faqcontact.form.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border/60 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  maxLength={255}
                  placeholder={t("faqcontact.form.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border/60 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  required
                  maxLength={1000}
                  rows={3}
                  placeholder={t("faqcontact.form.message")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border/60 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="font-serif text-base uppercase tracking-wider bg-[hsl(40,50%,55%,0.15)] px-6 py-2.5 rounded-full border-2 border-[hsl(40,50%,65%)] shadow-[0_0_8px_hsl(40,50%,65%,0.15)] hover:bg-[hsl(40,50%,55%,0.25)] hover:border-[hsl(40,50%,70%)] hover:scale-[1.02] transition-all duration-300 text-secondary-foreground font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : t("faqcontact.form.send")}
              </button>
            </form>

            {/* Trust microcopy */}
            <div className="mt-8 space-y-1.5 font-sans text-xs text-muted-foreground/60">
              <p>{t("faqcontact.trust1")}</p>
              <p>{t("faqcontact.trust2")}</p>
              <p>{t("faqcontact.trust3")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqContactSection;