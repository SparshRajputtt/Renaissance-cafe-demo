// # Let me write the complete code to a file to avoid truncation issues
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronDown,
  ArrowRight,
  Calendar,
  Users,
  Coffee,
  ChefHat,
  UtensilsCrossed,
  X,
  Menu,
  Heart,
  Leaf,
  Award,
  Wine,
  Cake,
} from "lucide-react";

/* ============================================================
   RENAISSANCE BY CHEF NISHTHA
   Premium European-Inspired Cafe — Haridwar, Uttarakhand
   ============================================================ */

/* ── Color Palette ── */
const colors = {
  cream: "#F5F0E8",
  warmWhite: "#FAF8F5",
  sand: "#E8E0D4",
  taupe: "#C4B8A8",
  warmGray: "#9A8E7E",
  charcoal: "#2C2824",
  espresso: "#3D3630",
  terracotta: "#B85C4F",
  sage: "#8A9A7E",
  gold: "#C9A96E",
  deepBrown: "#1A1714",
};

// https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85

/* ── Premium Stock Images ── */
const images = {
  hero: "/videos/video-1.mp4",
  chef: "/chef/image-1.png",
  interior1: "/interior/interior-2.png",
  interior2: "/interior/interior-6.png",
  coffeeArt:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85",
  dessert1: "/desserts/desert.png",
  dessert2: "/desserts/cup-cake.png",
  pastry:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85",
  brunch: "/brunch/image-1.png",
  croissant: "/toast/toasties-1.png",
  ambience: "/interior/interior-1.png",
  tableSetting: "/interior/interior-5.png",
  gallery1: "/coffee/coffee-cookie-break.png",
  gallery2: "/gallery/gallery-1.png",
  gallery3: "/gallery/gallery-2.png",
  gallery4: "/gallery/gallery-3.png",
  gallery5: "/gallery/chef-at-work.png",
  gallery6:
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=85",
};

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ── Scroll Animation Hook ── */
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Chef", href: "#chef" },
    { label: "Collection", href: "#collection" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
    { label: "Reserve", href: "#reserve" },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                  scrolled ? "border-[#2C2824]" : "border-white/80"
                }`}
              >
                <ChefHat
                  className={`w-5 h-5 transition-colors duration-300 ${scrolled ? "text-[#2C2824]" : "text-white"}`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${
                    scrolled ? "text-[#2C2824]" : "text-white"
                  }`}
                >
                  Renaissance
                </span>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-[#9A8E7E]" : "text-white/70"
                  }`}
                >
                  by Chef Nishtha
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:tracking-[0.25em] ${
                    scrolled
                      ? "text-[#2C2824] hover:text-[#B85C4F]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#reserve")}
                className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  scrolled
                    ? "border-[#2C2824] text-[#2C2824] hover:bg-[#2C2824] hover:text-white"
                    : "border-white/60 text-white hover:bg-white hover:text-[#2C2824]"
                }`}
              >
                Book a Table
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[#2C2824]" : "text-white"}`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#1A1714]/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-white text-lg tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo("#reserve")}
                className="mt-4 px-8 py-3 border border-[#C9A96E] text-[#C9A96E] text-sm tracking-[0.15em] uppercase hover:bg-[#C9A96E] hover:text-[#1A1714] transition-all"
              >
                Book a Table
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${images.hero})` }}
        /> */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={images.hero}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1714]/60 via-[#1A1714]/30 to-[#1A1714]/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
            Haridwar, Uttarakhand
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Renaissance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[#C9A96E]/60" />
          <span className="text-white/80 text-sm tracking-[0.3em] uppercase">
            by Chef Nishtha
          </span>
          <div className="w-12 h-px bg-[#C9A96E]/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-light"
        >
          Where European elegance meets the soul of the Himalayas. An intimate
          culinary sanctuary crafted with passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() =>
              document
                .querySelector("#reserve")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-[#C9A96E] text-[#1A1714] text-xs tracking-[0.2em] uppercase hover:bg-[#B89A5E] transition-colors"
          >
            Reserve Your Table
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border border-white/40 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            Discover More
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE
   ============================================================ */
function Experience() {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Artisan Coffee",
      desc: "Single-origin beans, hand-pulled espresso, and Himalayan-inspired brews crafted with precision.",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      title: "Handcrafted Patisserie",
      desc: "European techniques meet local ingredients — croissants, tarts, and gateaux made fresh daily.",
    },
    {
      icon: <Wine className="w-6 h-6" />,
      title: "Curated Ambience",
      desc: "Warm lighting, intimate seating, and a soundtrack that transports you to a Parisian salon.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Farm-to-Table",
      desc: "Sourced from local Uttarakhand farms and European imports for uncompromising quality.",
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              The Experience
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A Sanctuary of <br />
              <span className="italic">Taste & Tranquility</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9A8E7E] leading-relaxed mb-12 text-base"
            >
              Step into a space where time slows down. Every corner of
              Renaissance has been thoughtfully designed to evoke the warmth of
              a European salon while honoring the serene spirit of Haridwar.
              From the aroma of freshly ground coffee to the gentle clink of
              porcelain, every sense is invited to partake in the experience.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="group">
                  <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#B85C4F] mb-4 group-hover:bg-[#B85C4F] group-hover:text-white transition-all duration-500">
                    {exp.icon}
                  </div>
                  <h3 className="text-[#2C2824] text-sm font-medium tracking-wide uppercase mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#9A8E7E] text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Images */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={images.interior1}
                alt="Renaissance Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-64 overflow-hidden border-4 border-[#FAF8F5] shadow-xl hidden lg:block">
              <img
                src={images.interior2}
                alt="Cafe Detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#C9A96E]/30 hidden lg:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   MEET CHEF NISHTHA
   ============================================================ */
function MeetChef() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="chef"
      className="py-24 lg:py-32 bg-[#2C2824] text-white relative overflow-hidden"
    >
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={images.chef}
                alt="Chef Nishtha"
                className=" w-full h-full object-cover brightness-95 md:brightness-75 md:grayscale md:hover:brightness-100 md:hover:grayscale-0 transition-all duration-700 "
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] px-8 py-6 hidden lg:block">
              <p className="text-[#1A1714] text-xs tracking-[0.2em] uppercase font-medium">
                15+ Years
              </p>
              <p className="text-[#1A1714]/70 text-xs mt-1">
                Culinary Excellence
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              variants={fadeUp}
              className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              The Visionary
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Meet Chef <br />
              <span className="italic">Nishtha</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/60 leading-relaxed mb-6 text-base"
            >
              Trained in the culinary traditions of France and Italy, Chef
              Nishtha brings a rare fusion of European sophistication and Indian
              warmth to every plate. Her journey began in the kitchens of Lyon,
              where she mastered the art of patisserie under Michelin-starred
              mentors.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-white/60 leading-relaxed mb-8 text-base"
            >
              Returning to her roots in Haridwar, she envisioned Renaissance as
              more than a cafe — a cultural bridge where the disciplined
              elegance of European cuisine meets the generous spirit of the
              Himalayas. Every recipe tells a story of two worlds harmoniously
              entwined.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 mb-10"
            >
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A96E]" />
                <span className="text-white/80 text-sm">
                  Le Cordon Bleu, Paris
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#C9A96E]" />
                <span className="text-white/80 text-sm">
                  Farm-to-Table Advocate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-[#C9A96E]" />
                <span className="text-white/80 text-sm">
                  Culinary Innovator
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border-l-2 border-[#C9A96E] pl-6"
            >
              <p className="text-white/40 italic text-sm leading-relaxed">
                "Cuisine is not just about feeding the body — it is about
                nourishing the soul. At Renaissance, we craft moments that
                linger long after the last bite."
              </p>
              <p className="text-[#C9A96E] text-xs mt-3 tracking-wider uppercase">
                — Chef Nishtha
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SIGNATURE COLLECTION
   ============================================================ */
function SignatureCollection() {
  const { ref, isInView } = useScrollAnimation();
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      name: "Himalayan Croissant",
      desc: "Butter-layered perfection with a hint of cardamom and Himalayan honey",
      price: "Rs. 180",
      image: images.croissant,
      tag: "Best Seller",
    },
    {
      name: "Tiramisu a la Nishtha",
      desc: "Classic Italian reimagined with Indian filter coffee and mascarpone",
      price: "Rs. 320",
      image: images.dessert1,
      tag: "Chef's Special",
    },
    {
      name: "European Breakfast Platter",
      desc: "Artisan breads, cured meats, aged cheese, and farm-fresh eggs",
      price: "Rs. 450",
      image: images.brunch,
      tag: "New",
    },
    {
      name: "Rose & Pistachio Gateau",
      desc: "Persian-inspired sponge with rosewater cream and pistachio praline",
      price: "Rs. 280",
      image: images.dessert2,
      tag: "Seasonal",
    },
  ];

  return (
    <section id="collection" className="py-24 lg:py-32 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Curated Selection
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Signature <span className="italic">Collection</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9A8E7E] max-w-lg mx-auto"
            >
              Each creation is a testament to patience, precision, and the
              pursuit of perfection.
            </motion.p>
          </div>

          {/* Collection Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveItem(i)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-[#E8E0D4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FAF8F5] text-[#2C2824] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#2C2824]/0 group-hover:bg-[#2C2824]/20 transition-all duration-500" />
                </div>
                <h3 className="text-[#2C2824] text-sm font-medium tracking-wide uppercase mb-2 group-hover:text-[#B85C4F] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[#9A8E7E] text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <span className="text-[#C9A96E] text-sm font-medium">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   INTERACTIVE MENU
   ============================================================ */
function InteractiveMenu() {
  const { ref, isInView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("coffee");

  const categories = [
    {
      id: "coffee",
      label: "Coffee & Tea",
      icon: <Coffee className="w-4 h-4" />,
    },
    { id: "pastry", label: "Patisserie", icon: <Cake className="w-4 h-4" /> },
    {
      id: "brunch",
      label: "Brunch",
      icon: <UtensilsCrossed className="w-4 h-4" />,
    },
    { id: "beverages", label: "Beverages", icon: <Wine className="w-4 h-4" /> },
  ];

  const menuItems = {
    coffee: [
      {
        name: "Himalayan Espresso",
        desc: "Double shot with mountain spring water",
        price: "Rs. 140",
      },
      {
        name: "French Press",
        desc: "Single-origin Ethiopian, full-bodied",
        price: "Rs. 180",
      },
      {
        name: "Cardamom Latte",
        desc: "House blend with freshly ground cardamom",
        price: "Rs. 200",
      },
      {
        name: "Vienna Melange",
        desc: "Espresso with steamed milk and whipped cream",
        price: "Rs. 220",
      },
      {
        name: "Cold Brew",
        desc: "18-hour steeped, served over ice",
        price: "Rs. 190",
      },
      {
        name: "Masala Chai",
        desc: "Chef Nishtha's family recipe",
        price: "Rs. 120",
      },
    ],
    pastry: [
      {
        name: "Almond Croissant",
        desc: "Frangipane-filled, flaked almonds",
        price: "Rs. 160",
      },
      {
        name: "Lemon Tart",
        desc: "Meyer lemon curd, torched meringue",
        price: "Rs. 240",
      },
      {
        name: "Chocolate Eclair",
        desc: "Valrhona ganache, choux pastry",
        price: "Rs. 200",
      },
      {
        name: "Fruit Danish",
        desc: "Seasonal fruits, vanilla custard",
        price: "Rs. 180",
      },
      {
        name: "Opera Cake",
        desc: "Coffee buttercream, dark chocolate",
        price: "Rs. 280",
      },
      {
        name: "Macaron Selection",
        desc: "Three pieces, flavors of the day",
        price: "Rs. 220",
      },
    ],
    brunch: [
      {
        name: "Eggs Benedict",
        desc: "Poached eggs, hollandaise, sourdough",
        price: "Rs. 380",
      },
      {
        name: "Avocado Toast",
        desc: "Sourdough, poached egg, chili flakes",
        price: "Rs. 320",
      },
      {
        name: "Shakshuka",
        desc: "Spiced tomato, feta, baked eggs",
        price: "Rs. 350",
      },
      {
        name: "European Platter",
        desc: "Cheeses, cold cuts, breads, preserves",
        price: "Rs. 550",
      },
      {
        name: "Pancake Stack",
        desc: "Maple syrup, berries, mascarpone",
        price: "Rs. 340",
      },
      {
        name: "Granola Bowl",
        desc: "House granola, Greek yogurt, honey",
        price: "Rs. 280",
      },
    ],
    beverages: [
      {
        name: "Fresh Orange Juice",
        desc: "Squeezed to order",
        price: "Rs. 150",
      },
      {
        name: "Hibiscus Cooler",
        desc: "Iced hibiscus tea, mint, lime",
        price: "Rs. 160",
      },
      {
        name: "Sparkling Lemonade",
        desc: "House-made, rosemary infused",
        price: "Rs. 140",
      },
      {
        name: "Hot Chocolate",
        desc: "Belgian chocolate, whipped cream",
        price: "Rs. 200",
      },
      {
        name: "Kombucha",
        desc: "House-fermented, seasonal flavor",
        price: "Rs. 180",
      },
      {
        name: "Mineral Water",
        desc: "Imported sparkling or still",
        price: "Rs. 120",
      },
    ],
  };

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Culinary Journey
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our <span className="italic">Menu</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9A8E7E] max-w-lg mx-auto"
            >
              Seasonally inspired, locally sourced, and crafted with unwavering
              attention to detail.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#2C2824] text-white"
                    : "bg-[#F5F0E8] text-[#9A8E7E] hover:bg-[#E8E0D4] hover:text-[#2C2824]"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              {menuItems[activeCategory].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-baseline justify-between py-6 border-b border-[#E8E0D4] hover:border-[#C9A96E] transition-colors duration-300"
                >
                  <div className="flex-1 pr-8">
                    <h3 className="text-[#2C2824] text-base font-medium mb-1 group-hover:text-[#B85C4F] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#9A8E7E] text-sm">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#E8E0D4] group-hover:bg-[#C9A96E] transition-colors hidden sm:block" />
                    <span className="text-[#C9A96E] font-medium text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-[#9A8E7E] text-xs tracking-wide">
              All prices inclusive of taxes. Seasonal availability may vary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   GALLERY
   ============================================================ */
function Gallery() {
  const { ref, isInView } = useScrollAnimation();
  const [lightbox, setLightbox] = useState(null);

  const galleryImages = [
    {
      src: images.gallery1,
      alt: "Artisan Coffee Preparation",
      span: "col-span-2 row-span-2",
    },
    {
      src: images.gallery2,
      alt: "European Pastry Display",
      span: "col-span-1 row-span-1",
    },
    {
      src: images.gallery3,
      alt: "Intimate Dining Corner",
      span: "col-span-1 row-span-1",
    },
    {
      src: images.gallery4,
      alt: "Coffee Art Detail",
      span: "col-span-1 row-span-2",
    },
    {
      src: images.gallery5,
      alt: "Chef at Work",
      span: "col-span-1 row-span-1",
    },
    {
      src: images.gallery6,
      alt: "Evening Ambience",
      span: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#2C2824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Visual Journey
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Gallery
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/50 max-w-lg mx-auto"
            >
              Glimpses into the world we have crafted — one detail at a time.
            </motion.p>
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[250px]"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                className={`${img.span} relative overflow-hidden group cursor-pointer`}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/40 transition-all duration-500 flex items-end p-6">
                  <span className="text-white text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1714]/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   PLAN YOUR VISIT
   ============================================================ */
function PlanYourVisit() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="visit" className="py-24 lg:py-32 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Find Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Plan Your <span className="italic">Visit</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info Cards */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div
                variants={fadeUp}
                className="bg-[#FAF8F5] p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#B85C4F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#2C2824] text-sm font-medium tracking-wide uppercase mb-2">
                    Location
                  </h3>
                  <p className="text-[#9A8E7E] text-sm leading-relaxed">
                    42 Upper Road, Near Har Ki Pauri
                    <br />
                    Haridwar, Uttarakhand 249401
                    <br />
                    India
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-[#FAF8F5] p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#B85C4F] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#2C2824] text-sm font-medium tracking-wide uppercase mb-2">
                    Hours
                  </h3>
                  <div className="text-[#9A8E7E] text-sm leading-relaxed space-y-1">
                    <p>Monday — Friday: 8:00 AM – 10:00 PM</p>
                    <p>Saturday — Sunday: 7:30 AM – 11:00 PM</p>
                    <p className="text-[#C9A96E] text-xs mt-2">
                      * Holiday hours may vary
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-[#FAF8F5] p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#B85C4F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#2C2824] text-sm font-medium tracking-wide uppercase mb-2">
                    Contact
                  </h3>
                  <p className="text-[#9A8E7E] text-sm leading-relaxed">
                    +91 98765 43210
                    <br />
                    hello@renaissanceharidwar.com
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#2C2824] flex items-center justify-center text-white hover:bg-[#B85C4F] transition-colors"
                >
                  {/* <Instagram className="w-5 h-5" /> */}
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#2C2824] flex items-center justify-center text-white hover:bg-[#B85C4F] transition-colors"
                >
                  {/* <Facebook className="w-5 h-5" /> */}
                </a>
              </motion.div>
            </motion.div>

            {/* Map Embed */}
            <motion.div
              variants={fadeUp}
              className="h-[500px] bg-[#E8E0D4] overflow-hidden relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.0!2d78.1642!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU2JzQ0LjUiTiA3OMKwMDknNTEuMSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Renaissance Location"
              />
              <div className="absolute bottom-6 left-6 bg-[#FAF8F5] px-6 py-4 shadow-lg">
                <p className="text-[#2C2824] text-sm font-medium">
                  Renaissance by Chef Nishtha
                </p>
                <p className="text-[#9A8E7E] text-xs mt-1">
                  Haridwar, Uttarakhand
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   RESERVATION
   ============================================================ */
function Reservation() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  return (
    <section id="reserve" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Book Your Experience
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Reserve a <span className="italic">Table</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9A8E7E] max-w-lg mx-auto"
            >
              Secure your place in our intimate dining room. We recommend
              booking at least 24 hours in advance.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-[#F5F0E8] p-8 lg:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                  Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                Occasion (Optional)
              </label>
              <input
                type="text"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                placeholder="Birthday, Anniversary, Business Meeting..."
              />
            </div>

            <div className="mb-8">
              <label className="block text-[#2C2824] text-xs tracking-[0.15em] uppercase mb-3">
                Special Requests (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#FAF8F5] border border-[#E8E0D4] px-4 py-3 text-[#2C2824] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                placeholder="Dietary restrictions, seating preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C2824] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#B85C4F] transition-colors duration-300"
            >
              {submitted ? "Reservation Request Sent" : "Request Reservation"}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-[#8A9A7E]/10 border border-[#8A9A7E]/30 text-center"
                >
                  <p className="text-[#8A9A7E] text-sm">
                    Thank you. We will confirm your reservation shortly via
                    email or phone.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[#9A8E7E] text-xs text-center mt-6">
              This is a frontend demonstration. No data is stored or
              transmitted.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SELECTED REVIEWS
   ============================================================ */

function SelectedReviews() {
  const { ref, isInView } = useScrollAnimation();

  const reviews = [
    {
      name: "Aarav Sharma",
      date: "January 2025",
      rating: 5,
      text: "Absolutely the best in town. Best Coffee and Dessert Experience. Awesome place to visit and spend time with family and friends. Ambience never seen before in Haridwar.",
    },
    {
      name: "Priya Malhotra",
      date: "December 2024",
      rating: 5,
      text: "Everything is outstanding — great ambience and food is yummy. I'll give it 10 out of 10. Good for small birthday and kitty parties. Must visit place.",
    },
    {
      name: "Rohan Kapoor",
      date: "November 2024",
      rating: 5,
      text: "Many customers praised the ambiance, describing it as cozy, charming, and beautifully designed. The quality of food, especially the desserts, is exceptional.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="text-[#B85C4F] text-xs tracking-[0.3em] uppercase block mb-4"
            >
              Guest Voices
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-light text-[#2C2824] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Selected <span className="italic">Reviews</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9A8E7E] max-w-lg mx-auto"
            >
              Words from those who have experienced Renaissance.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#F5F0E8] p-8 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? "text-[#C9A96E] fill-[#C9A96E]" : "text-[#E8E0D4]"}`}
                    />
                  ))}
                </div>
                <p className="text-[#2C2824] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2C2824] text-sm font-medium">
                      {review.name}
                    </p>
                    <p className="text-[#9A8E7E] text-xs">{review.date}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
                    <span className="text-[#C9A96E] text-xs font-medium">
                      {review.rating}.0
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Chef", href: "#chef" },
    { label: "Collection", href: "#collection" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
    { label: "Reserve", href: "#reserve" },
  ];

  return (
    <footer className="bg-[#1A1714] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A96E]/40 flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm tracking-[0.3em] uppercase font-medium text-white">
                  Renaissance
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                  by Chef Nishtha
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A premium European-inspired café in the heart of Haridwar, where
              every detail is crafted with intention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/40 text-sm hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0" />
                <p className="text-white/40 text-sm">
                  42 Upper Road, Near Har Ki Pauri
                  <br />
                  Haridwar, Uttarakhand 249401
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <p className="text-white/40 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <p className="text-white/40 text-sm">Mon–Fri: 8AM–10PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Renaissance by Chef Nishtha. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-[#C9A96E] transition-colors"
            >
              {/* <Instagram className="w-4 h-4" /> */}
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#C9A96E] transition-colors"
            >
              {/* <Facebook className="w-4 h-4" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  return (
    <div
      className="min-h-screen bg-[#FAF8F5]"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <Navigation />
      <Hero />
      <Experience />
      <MeetChef />
      <SignatureCollection />
      <InteractiveMenu />
      <Gallery />
      <PlanYourVisit />
      <Reservation />
      <SelectedReviews />
      <Footer />
    </div>
  );
}
