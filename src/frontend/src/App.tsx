import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Baby,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Cross,
  Facebook,
  Globe,
  GraduationCap,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Music,
  Music2,
  Phone,
  Play,
  Share2,
  Sparkles,
  Twitter,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TikTok</title>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Mission", href: "#mission" },
  { label: "Worship", href: "#worship" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Ministries", href: "#ministries" },
  { label: "Prayers", href: "#prayers" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Giving", href: "#giving" },
];

const MISSION_POINTS = [
  {
    Icon: Heart,
    title: "A Welcoming Home",
    description:
      "Creating an environment of love, acceptance, and support where everyone belongs.",
  },
  {
    Icon: Zap,
    title: "Bold Witnesses",
    description:
      "Empowering believers to be bold witnesses for Christ in every sphere of life.",
  },
  {
    Icon: Share2,
    title: "Gospel Outreach",
    description:
      "Sharing the Gospel across communities, schools, workplaces, and homes.",
  },
  {
    Icon: Sparkles,
    title: "Discover Your Gifts",
    description:
      "Equipping believers to discover and develop their God-given gifts.",
  },
  {
    Icon: Music2,
    title: "Worship Excellence",
    description:
      "Establishing a strong, Spirit-filled worship team that glorifies God.",
  },
  {
    Icon: GraduationCap,
    title: "Leadership Development",
    description:
      "Training future leaders through Bible-based education and mentorship.",
  },
];

const SERMONS = [
  {
    title: "The Power of Faith",
    speaker: "Pastor Samuel",
    date: "March 17, 2026",
    img: "/assets/generated/sermon-faith.dim_600x400.jpg",
  },
  {
    title: "Walking in Grace",
    speaker: "Pastor Solomon",
    date: "March 10, 2026",
    img: "/assets/generated/sermon-grace.dim_600x400.jpg",
  },
  {
    title: "A New Beginning",
    speaker: "Pastor Augustine",
    date: "March 3, 2026",
    img: "/assets/generated/sermon-beginning.dim_600x400.jpg",
  },
];

const SCHEDULE = [
  { activity: "Midweek Services", timing: "Every Wednesday, 7PM" },
  { activity: "Worship Nights", timing: "Every Third Wednesday of the Month" },
  { activity: "Half Night Service", timing: "Every 1st Friday of the Month" },
  { activity: "Easter", timing: "5th April" },
  { activity: "Church Outreach (Evangelism)", timing: "July" },
  { activity: "Church Outing", timing: "August" },
  { activity: "Annual Thanksgiving Services", timing: "October" },
  { activity: "Christmas", timing: "25th December" },
  { activity: "New Year Service", timing: "31st December" },
];

const MINISTRIES = [
  {
    Icon: Users,
    name: "Youth Ministry",
    description:
      "Empowering teens to walk boldly in faith and discover their God-given purpose.",
  },
  {
    Icon: Heart,
    name: "Women's Ministry",
    description:
      "A sisterhood of faith, prayer, and community for women at every stage of life.",
  },
  {
    Icon: BookOpen,
    name: "Men's Ministry",
    description:
      "Building men of integrity, leadership, and spiritual discipline through fellowship.",
  },
  {
    Icon: Baby,
    name: "Children's Ministry",
    description:
      "Planting seeds of faith in the youngest hearts with fun, interactive Bible learning.",
  },
  {
    Icon: Globe,
    name: "Outreach Ministry",
    description:
      "Extending God's love beyond our walls through local and global mission work.",
  },
];

const MINISTRIES_MEETUP = [
  { ministry: "Men", times: "Every First Sunday of the Month (Online)" },
  { ministry: "Women", times: "Every 1st and 3rd Sunday (Online)" },
  { ministry: "Youth", times: "Every 2nd and 4th Sunday (Online)" },
  { ministry: "Children", times: "Face to Face at Church" },
];

const LEADERSHIP = [
  {
    name: "Pastor Samuel",
    title: "Resident Pastor",
    img: "/assets/uploads/image-019d2731-6d48-725b-adbd-74657b634684-1.png",
  },
  {
    name: "Pastor Ebenezer",
    title: "Men Ministry Leader",
    img: "/assets/uploads/image-019d272c-7fad-713a-b272-6709a9919520-1.png",
  },
  {
    name: "Pastor Augustine",
    title: "Children Ministry Leader",
    img: "/assets/generated/leader-augustine.dim_400x400.jpg",
  },
  {
    name: "Mrs Koomson",
    title: "Ushering / Hospitality",
    img: "/assets/generated/leader-koomson-real.dim_400x400.jpg",
  },
  {
    name: "Dr Joyce",
    title: "Women Ministry Leader",
    img: "/assets/uploads/image-019d272e-a57b-7293-9398-217ce7171823-1.png",
  },
  {
    name: "Pastor Solomon",
    title: "Youth Coordinator",
    img: "/assets/generated/leader-solomon-real.dim_400x400.jpg",
  },
  {
    name: "Minister Audrey",
    title: "Worship Team Leader",
    img: "/assets/generated/leader-audrey-real.dim_400x400.jpg",
  },
];

const GALLERY = [
  {
    src: "/assets/generated/gallery-1.dim_400x300.jpg",
    alt: "Children's Sunday school",
  },
  {
    src: "/assets/generated/gallery-2.dim_400x300.jpg",
    alt: "Women's ministry fellowship",
  },
  {
    src: "/assets/generated/gallery-3.dim_400x300.jpg",
    alt: "Men's ministry retreat",
  },
  {
    src: "/assets/generated/gallery-4.dim_400x300.jpg",
    alt: "Choir performance",
  },
  {
    src: "/assets/generated/gallery-5.dim_400x300.jpg",
    alt: "Christmas service",
  },
  {
    src: "/assets/generated/gallery-6.dim_400x300.jpg",
    alt: "Congregation picnic",
  },
];

const WORSHIP_TIMES = [
  {
    service: "Sunday Service",
    time: "10:30 AM",
    location: "Christ Church Chapel",
    address:
      "The Chapel On The Hill, Church Rise / South Road, Forest Hill, London, SE23 2UJ",
    note: "",
  },
  {
    service: "Wednesday Midweek Service",
    time: "7:00 PM",
    location: "St George's",
    address: "Vancouver Road, London SE23 2AG",
    note: "",
  },
];

function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <span
        className={`text-xs font-bold tracking-[0.35em] select-none ${
          light ? "text-gold/60" : "text-gold/70"
        }`}
        aria-hidden="true"
      >
        ✦&nbsp;&nbsp;✦&nbsp;&nbsp;✦
      </span>
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-tight text-center ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {children}
      </h2>
      <div className="flex items-center gap-1.5">
        <div className={`h-px w-10 ${light ? "bg-white/25" : "bg-gold/35"}`} />
        <div
          className={`h-[3px] w-14 rounded-full ${light ? "bg-white/60" : "bg-gold"}`}
        />
        <div className={`h-px w-10 ${light ? "bg-white/25" : "bg-gold/35"}`} />
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── STICKY NAV ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-card" : ""
        } bg-navy`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/image-019d2744-0590-7000-a088-3bc29cadcb87-1.png"
              alt="New Life Evangelistic Ministries Worship Centre Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
            <span className="font-display text-lg font-bold tracking-wide text-white">
              New Life Evangelistic Ministries Worship Centre
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:inline-flex bg-gold hover:bg-gold/90 text-navy font-bold text-sm uppercase tracking-wider"
              data-ocid="nav.primary_button"
            >
              Visit Us
            </Button>
            <button
              type="button"
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold py-1"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider w-full"
              data-ocid="nav.primary_button"
            >
              Visit Us
            </Button>
          </nav>
        )}
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
          aria-label="Hero"
        >
          {/* Deep radial glow for depth */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 38%, oklch(0.19 0.06 233 / 0.85), transparent 70%)",
            }}
          />
          {/* Subtle horizontal gold accent lines at bottom */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="pointer-events-none absolute bottom-1 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 pb-12 pt-28 text-center animate-fade-in-up">
            {/* Eyebrow label */}
            <p className="mb-5 text-[11px] font-bold tracking-[0.45em] uppercase text-gold/75 animate-fade-in">
              ✦&nbsp;&nbsp;Welcome to&nbsp;&nbsp;✦
            </p>

            {/* Decorative gold rule */}
            <div className="mx-auto mb-7 flex items-center justify-center gap-2">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/55" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <div className="h-px w-28 bg-gold/55" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/55" />
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              New Life Evangelistic Ministries
              <br />
              <span
                className="text-gold"
                style={{ textShadow: "0 0 60px oklch(0.692 0.115 68 / 0.35)" }}
              >
                Worship Centre
              </span>
            </h1>

            {/* Tagline */}
            <div className="mx-auto mt-9 mb-5 flex items-center justify-center gap-3">
              <div className="h-px flex-1 max-w-[72px] bg-gold/35" />
              <Cross className="h-3.5 w-3.5 text-gold/60" />
              <div className="h-px flex-1 max-w-[72px] bg-gold/35" />
            </div>
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.22em] text-gold">
              Taking the whole WORD of GOD to the whole WORLD!
            </p>
            <p className="mt-5 mx-auto max-w-xl text-sm sm:text-[15px] text-white/60 italic font-light leading-relaxed">
              2 Kings 7:9 &ldquo;This is a day of good news and we are keeping
              it to ourselves…Let&rsquo;s go back and tell the people&rdquo;{" "}
              (NLT)
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => handleNavClick("#worship")}
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider px-10 py-3 text-sm shadow-lg"
                data-ocid="hero.primary_button"
              >
                Join Us This Sunday
              </Button>
              <Button
                onClick={() => handleNavClick("#about")}
                variant="outline"
                className="border-gold/70 text-gold hover:bg-gold/10 font-bold uppercase tracking-wider px-10 py-3 text-sm bg-transparent"
                data-ocid="hero.secondary_button"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 bg-white" aria-label="About Us">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <SectionHeading className="items-start">
                  About Us
                </SectionHeading>
                <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
                  <div>
                    <h3 className="font-bold text-navy mb-2 uppercase tracking-wider text-sm">
                      Our Mission
                    </h3>
                    <p>
                      To love God with all our heart, soul, and mind — and to
                      love our neighbors as ourselves. We are committed to
                      making disciples who make disciples, transforming our
                      community through the power of the Gospel.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 uppercase tracking-wider text-sm">
                      Our Vision
                    </h3>
                    <p>
                      We envision a congregation where every person finds
                      belonging, purpose, and spiritual growth. A community that
                      reflects the diversity of God's kingdom and extends His
                      grace to the world around us.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 uppercase tracking-wider text-sm">
                      Our History
                    </h3>
                    <p>
                      Founded in 1997, New Life Evangelistic Ministries Worship
                      Centre has grown into a vibrant congregation committed to
                      spreading the Word of God to all nations. Through decades
                      of faithful ministry, we have baptised many, planted
                      daughter congregations, and served thousands in our
                      community.
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-8 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider"
                  data-ocid="about.primary_button"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/about-church.dim_800x600.jpg"
                  alt="Our congregation worshipping together"
                  className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-navy rounded-xl p-5 shadow-card">
                  <p className="text-3xl font-display font-bold text-gold">
                    Est.
                  </p>
                  <p className="text-sm text-white/80 mt-1">1997</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER'S MESSAGE ── */}
        <section
          id="founder"
          className="py-20 section-gold-muted"
          aria-label="Founder's Message"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading>Founder's Message</SectionHeading>

            {/* Decorative divider */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gold/30" />
              <Cross className="h-5 w-5 text-gold" />
              <div className="h-px flex-1 bg-gold/30" />
            </div>

            {/* Quote card */}
            <div className="relative mt-10 rounded-2xl bg-white px-8 py-10 shadow-card sm:px-14 sm:py-14">
              {/* Opening quote mark */}
              <span
                className="absolute -top-6 left-8 font-display text-8xl leading-none text-gold select-none sm:left-12"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="space-y-6 text-foreground/80 leading-relaxed text-base sm:text-lg">
                <p>
                  A warm and special greeting to you! As the head pastor of New
                  Life Evangelistic Ministries International Worship Centre, I
                  am overjoyed and deeply thankful to lead such an incredible
                  body of Christ. New Life was established in 1997. Our core
                  mission is to spread the{" "}
                  <strong className="text-navy font-bold">
                    WHOLE WORD OF GOD TO THE WHOLE WORLD
                  </strong>
                  , sharing the good news of His profound love and purpose for
                  each of our lives. In doing so, we aim to deepen our faith
                  together, live with unwavering integrity, and actively serve
                  our communities.
                </p>
                <p>
                  Evangelism is central to our mission, driving us to spread
                  hope and love throughout the world. It is all about living in
                  a way that honours God, and inviting others to discover His
                  grace. The Bible is our guiding light, encouraging us to trust
                  in His divine plans, even when facing adversity, and to commit
                  to His teachings every day.
                </p>
                <p>
                  Our congregation is a family, deeply rooted in love, committed
                  to God, and with a strong desire to grow together in faith and
                  service. All are welcome to fellowship with us, come as you
                  are and expect to leave with a renewed sense of hope and
                  understanding of Christ.
                </p>
              </div>

              {/* Closing quote mark */}
              <span
                className="absolute -bottom-4 right-8 font-display text-8xl leading-none text-gold select-none sm:right-12"
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </div>

            {/* Attribution */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <img
                src="/assets/uploads/image-019d2734-d054-755b-a44b-213924140b31-1.png"
                alt="Rev Patrick Adu Amankwah"
                className="h-32 w-32 rounded-full border-4 border-gold shadow-card object-cover mx-auto mb-4"
              />
              <div className="h-px w-24 bg-gold/40" />
              <p className="font-display text-xl font-bold tracking-widest text-navy uppercase">
                Rev Patrick Adu Amankwah
              </p>
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em] text-gold"
                style={{ fontVariant: "small-caps" }}
              >
                General Overseer
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR MISSION ── */}
        <section
          id="mission"
          className="py-20 bg-navy"
          aria-label="Our Mission"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Our Mission</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {MISSION_POINTS.map(({ Icon, title, description }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-5 rounded-xl bg-white/10 p-6 hover:bg-white/15 transition-colors"
                  data-ocid={`mission.item.${i + 1}`}
                >
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{title}</h3>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORSHIP TIMES ── */}
        <section
          id="worship"
          className="py-20 bg-gray-50"
          aria-label="Worship Times"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Worship Times</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WORSHIP_TIMES.map((s, i) => (
                <div
                  key={s.time}
                  className="flex flex-col items-center rounded-xl border border-border bg-white p-8 shadow-card hover:shadow-card-hover transition-shadow text-center"
                  data-ocid={`worship.item.${i + 1}`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">{s.service}</h3>
                  <p className="mt-1 text-3xl font-display font-bold text-gold">
                    {s.time}
                  </p>
                  <div className="mt-3 h-px w-10 bg-gold/40" />
                  <p className="mt-3 text-sm font-medium text-foreground/70">
                    {s.location}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.address}
                  </p>
                </div>
              ))}
            </div>

            {/* ── How to Get There ── */}
            <div className="mt-14 text-center">
              <h3 className="font-display text-xl font-bold uppercase tracking-widest text-navy">
                How to Get There?
              </h3>
              <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gold" />
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
                <a
                  href="https://maps.google.com/?q=Christ+Church+Chapel+Church+Rise+Forest+Hill+London+SE23+2UJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  data-ocid="worship.link"
                >
                  Sunday Service: View Directions Here
                </a>
                <a
                  href="https://maps.google.com/?q=St+Georges+Church+Vancouver+Road+London+SE23+2AG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  data-ocid="worship.link"
                >
                  Wednesday Service: View Directions Here
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERMONS ── */}
        <section id="sermons" className="py-0" aria-label="Sermons">
          <div className="bg-navy py-6 px-6">
            <SectionHeading light>Latest Sermons</SectionHeading>
          </div>
          <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {SERMONS.map((sermon, i) => (
                  <div
                    key={sermon.title}
                    className="rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow group"
                    data-ocid={`sermons.item.${i + 1}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-navy">
                      <img
                        src={sermon.img}
                        alt={sermon.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-navy shadow-lg">
                          <Play className="h-5 w-5 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy text-lg leading-snug">
                        {sermon.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sermon.speaker}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {sermon.date}
                      </p>
                      <div className="mt-4 flex gap-3">
                        <button
                          type="button"
                          className="text-xs font-bold uppercase tracking-wider text-gold hover:underline flex items-center gap-1"
                        >
                          <Play className="h-3 w-3" /> Watch
                        </button>
                        <button
                          type="button"
                          className="text-xs font-bold uppercase tracking-wider text-navy hover:underline flex items-center gap-1"
                        >
                          <Music className="h-3 w-3" /> Listen
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white font-bold uppercase tracking-wider"
                  data-ocid="sermons.secondary_button"
                >
                  View All Sermons
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section
          id="events"
          className="py-20"
          style={{ background: "oklch(var(--gold) / 0.12)" }}
          aria-label="Events"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Upcoming Events &amp; Activities</SectionHeading>
            <p className="mt-4 text-center text-foreground/60 text-sm max-w-xl mx-auto">
              Stay connected with all our services, special events, and ministry
              activities throughout the year.
            </p>

            <div className="mt-10 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-card">
              {/* Table header */}
              <div className="grid grid-cols-2 bg-navy px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">
                  Activity / Program
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-gold">
                  Timing
                </p>
              </div>

              {/* Table rows */}
              {SCHEDULE.map(({ activity, timing }, i) => (
                <div
                  key={activity}
                  className={`grid grid-cols-2 px-6 py-4 border-b border-gray-100 last:border-b-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                  data-ocid={`events.item.${i + 1}`}
                >
                  <p className="font-bold text-navy text-sm leading-snug pr-4">
                    {activity}
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-gold" />
                    <p className="text-sm text-foreground/70">{timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MINISTRIES ── */}
        <section
          id="ministries"
          className="py-20 bg-white"
          aria-label="Ministries"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Our Ministries</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MINISTRIES.map(({ Icon, name, description }, i) => (
                <div
                  key={name}
                  className="flex flex-col items-center rounded-xl border border-border p-8 text-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                  data-ocid={`ministries.item.${i + 1}`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold">
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">{name}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Ministries Meet Up Times ── */}
            <div className="mt-14">
              <div className="flex flex-col items-center gap-3 mb-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-widest text-navy">
                  Ministries Meet Up Times
                </h3>
                <div className="h-0.5 w-12 rounded-full bg-gold" />
              </div>
              <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-card">
                <div className="grid grid-cols-2 bg-navy px-6 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">
                    Ministries
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">
                    Meet Up Times
                  </p>
                </div>
                {MINISTRIES_MEETUP.map(({ ministry, times }, i) => (
                  <div
                    key={ministry}
                    className={`grid grid-cols-2 px-6 py-4 border-b border-gray-100 last:border-b-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                    data-ocid={`ministries.item.${i + 1}`}
                  >
                    <p className="font-bold text-navy text-sm">{ministry}</p>
                    <p className="text-sm text-foreground/70">{times}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-center">
                <a
                  href="https://join.freeconferencecall.com/revdpatrick3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wider text-gold hover:bg-navy/90 transition-colors"
                  data-ocid="ministries.link"
                >
                  Link to Join All Online Meetings
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider"
                data-ocid="ministries.primary_button"
              >
                View All Ministries
              </Button>
            </div>
          </div>
        </section>

        {/* ── PRAYERS ── */}
        <section id="prayers" className="py-20 bg-sky-50" aria-label="Prayers">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Prayer</SectionHeading>

            {/* Prayer description */}
            <div className="mt-10 max-w-3xl mx-auto rounded-xl bg-white p-8 shadow-card text-center">
              <p className="text-foreground/80 leading-relaxed">
                Prayer is our direct line of communication with God. It's a way
                for us to express our gratitude, seek guidance, and find comfort
                in times of need. Through prayer, we can build a stronger
                relationship with God and experience His presence in our lives.
                Praying and standing together are important aspects of the
                church. The church has designated prayer times for communal
                worship and intercession.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Join Us card */}
              <div className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-navy mb-4">
                  Join Us
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-gold mb-6" />
                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    Simply download the{" "}
                    <strong className="text-navy">FREE CONFERENCE APP</strong>{" "}
                    and use{" "}
                    <strong className="text-navy">
                      Meeting ID: REVDPATRICK3
                    </strong>
                  </p>
                  <p>Join online for video and screen sharing:</p>
                  <a
                    href="https://join.freeconferencecall.com/revdpatrick3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 underline underline-offset-2 font-medium break-all hover:text-blue-800 transition-colors"
                    data-ocid="prayers.link"
                  >
                    https://join.freeconferencecall.com/revdpatrick3
                  </a>
                  <p className="pt-2 font-semibold text-navy">
                    Additional options to connect:
                  </p>
                  <p>
                    <span className="font-bold text-navy">
                      Dial-in Number (GB):
                    </span>{" "}
                    0330 777 2413
                  </p>
                  <p>
                    <span className="font-bold text-navy">Access Code:</span>{" "}
                    197361#
                  </p>
                </div>
              </div>

              {/* Weekly Prayer Activities card */}
              <div className="rounded-xl bg-navy p-8 shadow-card">
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-gold mb-4">
                  Weekly Prayer Activities
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-gold mb-6" />
                <div className="space-y-3 text-sm text-white/85">
                  <p className="font-bold uppercase tracking-wider text-gold">
                    Prayers Happen Every Day (except Sunday):
                  </p>
                  {[
                    "06.00–06.30",
                    "12.00–12.30",
                    "17.00–17.30",
                    "20.00–20.30",
                    "00.00–00.30",
                  ].map((t) => (
                    <p key={t} className="pl-3 border-l-2 border-gold/40">
                      {t}
                    </p>
                  ))}
                  <p className="pt-3 font-bold uppercase tracking-wider text-gold">
                    Sundays
                  </p>
                  <p className="pl-3 border-l-2 border-gold/40">
                    06.00–06.30{" "}
                    <span className="text-white/50 text-xs">(Prayer Time)</span>
                  </p>
                  <p className="pl-3 border-l-2 border-gold/40">
                    10.30–13.30{" "}
                    <span className="text-white/50 text-xs">
                      (Church Service)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Counselling banner */}
            <div className="mt-10 rounded-xl bg-navy px-8 py-6 text-center shadow-card">
              <p className="text-sm font-bold uppercase tracking-widest text-gold sm:text-base">
                For Counselling, Prayers, Direction Call:{" "}
                <a
                  href="tel:+44788860800"
                  className="text-white hover:text-gold transition-colors"
                >
                  +44788860800
                </a>{" "}
                /{" "}
                <a
                  href="tel:+447733399248"
                  className="text-white hover:text-gold transition-colors"
                >
                  +447733399248
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section
          id="leadership"
          className="py-20 bg-navy"
          aria-label="Leadership"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Meet the Leadership</SectionHeading>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {LEADERSHIP.map((leader, i) => (
                <div
                  key={leader.name}
                  className="flex flex-col items-center text-center"
                  data-ocid={`leadership.item.${i + 1}`}
                >
                  <div className="relative mb-5">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="h-28 w-28 rounded-full object-cover border-4 border-gold shadow-card"
                    />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {leader.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider"
                data-ocid="leadership.primary_button"
              >
                View Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section
          id="gallery"
          className="py-20"
          style={{ background: "oklch(var(--gold) / 0.08)" }}
          aria-label="Gallery"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Ministry Life Gallery</SectionHeading>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {GALLERY.map(({ src, alt }, i) => (
                <div
                  key={alt}
                  className="overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-shadow group cursor-pointer"
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 bg-navy" aria-label="Contact">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Contact Us</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="bg-white/10 flex flex-col items-center justify-center h-64 lg:h-full min-h-[300px] text-white/60 gap-3">
                  <MapPin className="h-10 w-10 text-gold" />
                  <p className="text-sm font-medium text-white/80">
                    New Life Evangelistic Ministries Worship Centre
                  </p>
                  <p className="text-xs text-white/50">
                    Christ Church Chapel, The Chapel On The Hill, Church Rise/
                    South Road, Forest Hill, London SE23 2UJ
                  </p>
                  <div className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-xs text-white/50">
                    📍 Map Loading...
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-sm font-medium text-white/80 mb-1 block"
                      htmlFor="contact-name"
                    >
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium text-white/80 mb-1 block"
                      htmlFor="contact-email"
                    >
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-white/80 mb-1 block"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider"
                  data-ocid="contact.submit_button"
                >
                  Send Message
                </Button>

                {/* Contact Info */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Address
                      </p>
                      <p className="text-sm text-white/70 mt-0.5">
                        Christ Church Chapel
                        <br />
                        The Chapel On The Hill
                        <br />
                        Church Rise/ South Road
                        <br />
                        Forest Hill, London
                        <br />
                        SE23 2UJ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Phone
                      </p>
                      <p className="text-sm text-white/70 mt-0.5">
                        Tel: 07888608000
                        <br />
                        Mobile: 07733399248
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Email
                      </p>
                      <p className="text-sm text-white/70 mt-0.5 break-all">
                        Nlem.worshipcentre@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GIVING SECTION ── */}
        <section id="giving" className="py-24 bg-slate-50" aria-label="Giving">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Giving</SectionHeading>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
              {/* Tithes & Offerings Card */}
              <div className="relative rounded-2xl bg-white border border-gold/30 overflow-hidden shadow-lg">
                <div className="h-1.5 w-full bg-gold" />
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-widest text-gold mb-4">
                    Tithes and Offerings
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8">
                    Your generous tithes and offerings are vital for the
                    financial support of the church. Your faithful giving helps
                    cover the ministry&apos;s operating expenses and
                    demonstrates your commitment and faith. You can make
                    payments for tithes, offerings, or any other donations to
                    the Church Account using the following methods.
                  </p>

                  <div className="rounded-xl bg-navy/5 border border-gold/30 p-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold border-b border-gold/30 pb-3 mb-5">
                      Church Account Details
                      <span className="block text-gray-500 font-normal normal-case tracking-normal text-xs mt-0.5">
                        For Tithes and Offerings Only
                      </span>
                    </h4>
                    {[
                      {
                        label: "Account Name",
                        value: "NEW LIFE EVANGELIC MINISTRIES WORSHIP CENTRE",
                      },
                      { label: "Account Number", value: "93992489" },
                      { label: "Sort Code", value: "20-18-93" },
                      { label: "Bank", value: "BARCLAYS BANK" },
                      { label: "Charity Reg. No.", value: "01187115" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold/80">
                          {label}
                        </span>
                        <span className="text-sm font-semibold text-navy sm:text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Welfare Card */}
              <div className="relative rounded-2xl bg-white border border-gold/30 overflow-hidden shadow-lg">
                <div className="h-1.5 w-full bg-gold" />
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-widest text-gold mb-4">
                    Welfare
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8">
                    The church has a welfare scheme to assist and support
                    individuals in times of emergencies or other unforeseen
                    circumstances. If you are interested, you will become an
                    automatic member and will be required to pay a £60
                    membership fee, as well as monthly dues of £10.
                  </p>

                  <div className="rounded-xl bg-navy/5 border border-gold/30 p-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold border-b border-gold/30 pb-3 mb-5">
                      Welfare Dues Account Details
                      <span className="block text-gray-500 font-normal normal-case tracking-normal text-xs mt-0.5">
                        For Welfare Only
                      </span>
                    </h4>
                    {[
                      {
                        label: "Account Name",
                        value: "NEW LIFE EVANGELIC MINISTRIES WORSHIP CENTRE",
                      },
                      { label: "Account Number", value: "93514382" },
                      { label: "Sort Code", value: "20-18-93" },
                      { label: "Bank", value: "BARCLAYS BANK" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold/80">
                          {label}
                        </span>
                        <span className="text-sm font-semibold text-navy sm:text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Closing blessing */}
            <p
              className="mt-14 text-center font-display text-2xl italic text-gold tracking-wide"
              data-ocid="giving.section"
            >
              "Thank You for Your Generous Giving"
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-navy border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@_newlifechurch?_r=1&_t=ZN-94uYSzhAUzO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Sun: 10:30 AM | Wed: 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>07888608000 | 07733399248</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>Nlem.worshipcentre@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/assets/uploads/image-019d2744-0590-7000-a088-3bc29cadcb87-1.png"
                  alt="New Life Evangelistic Ministries Worship Centre Logo"
                  className="h-14 w-14 object-contain rounded-full"
                />
                <div>
                  <p className="font-display font-bold text-white text-lg leading-tight">
                    New Life Evangelistic Ministries Worship Centre
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                A place to belong, grow, and serve. Join us as we build a
                community rooted in faith, love, and the grace of God.
              </p>
              <Button
                onClick={() => handleNavClick("#contact")}
                className="mt-5 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider text-xs"
                data-ocid="footer.primary_button"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 px-6 py-5">
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} New Life Evangelistic Ministries
              Worship Centre. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Built with <Heart className="inline h-3 w-3 text-gold" /> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
