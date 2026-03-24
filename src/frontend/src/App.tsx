import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Baby,
  BookOpen,
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

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Mission", href: "#mission" },
  { label: "Worship", href: "#worship" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Ministries", href: "#ministries" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
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

const EVENTS = [
  {
    title: "Easter Sunday Celebration",
    date: "April 20, 2026",
    description:
      "Join us for a powerful Easter service celebrating the resurrection of Jesus Christ with special music, family activities, and a message of hope.",
    img: "/assets/generated/event-easter.dim_600x400.jpg",
  },
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

const LEADERSHIP = [
  {
    name: "Pastor Samuel",
    title: "Resident Pastor",
    img: "/assets/generated/pastor-john.dim_400x400.jpg",
  },
  {
    name: "Pastor Ebenezer",
    title: "Men Ministry Leader",
    img: "/assets/generated/pastor-sarah.dim_400x400.jpg",
  },
  {
    name: "Pastor Augustine",
    title: "Children Ministry Leader",
    img: "/assets/generated/elder-david.dim_400x400.jpg",
  },
  {
    name: "Mrs Koomson",
    title: "Ushering / Hospitality",
    img: "/assets/generated/leader-koomson.dim_400x400.jpg",
  },
  {
    name: "Dr Joyce Adu Amankwah",
    title: "Women Ministry Leader",
    img: "/assets/generated/leader-joyce.dim_400x400.jpg",
  },
  {
    name: "Pastor Solomon",
    title: "Youth Coordinator",
    img: "/assets/generated/leader-solomon.dim_400x400.jpg",
  },
  {
    name: "Minister Audrey",
    title: "Worship Team Leader",
    img: "/assets/generated/leader-audrey.dim_400x400.jpg",
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
  { src: "/assets/generated/gallery-6.dim_400x300.jpg", alt: "Church picnic" },
];

const WORSHIP_TIMES = [
  {
    service: "Sunday Church Service",
    time: "10:30 AM",
    location: "Christ Church Chapel",
    address:
      "The Chapel On The Hill, Church Rise / South Road, Forest Hill, London, SE23 2UJ",
    note: "",
  },
  {
    service: "Wednesday Midweek Service",
    time: "7:00 PM",
    location: "St George's Church",
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
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <h2
        className={`font-display text-2xl font-bold uppercase tracking-widest ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {children}
      </h2>
      <div className="h-0.5 w-16 rounded-full bg-gold" />
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
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold">
              <Cross className="h-4 w-4 text-gold" />
            </div>
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
          className="relative flex min-h-screen items-center"
          aria-label="Hero"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/generated/hero-church.dim_1920x1080.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="font-display text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
                Welcome to
                <br />
                <span className="text-gold">
                  New Life Evangelistic Ministries Worship Centre
                </span>
                <br />
                Church
              </h1>
              <p className="mt-6 text-lg text-white/85 sm:text-xl">
                A place to belong, grow, and serve. Join our family as we
                journey together in faith, hope, and love.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() => handleNavClick("#worship")}
                  className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider px-8 py-3 text-sm"
                  data-ocid="hero.primary_button"
                >
                  Join Us This Sunday
                </Button>
                <Button
                  onClick={() => handleNavClick("#about")}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 font-bold uppercase tracking-wider px-8 py-3 text-sm bg-transparent"
                  data-ocid="hero.secondary_button"
                >
                  Learn More
                </Button>
              </div>
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
                      We envision a church where every person finds belonging,
                      purpose, and spiritual growth. A community that reflects
                      the diversity of God's kingdom and extends His grace to
                      the world around us.
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
                      daughter churches, and served thousands in our community.
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
          className="py-20"
          style={{ background: "oklch(0.985 0.012 68)" }}
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
                  body of Christ. New Life Church was established in 1997. Our
                  core mission is to spread the{" "}
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
                  Our church is a family, deeply rooted in love, committed to
                  God, and with a strong desire to grow together in faith and
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
                src="/assets/generated/pastor-founder.dim_400x400.jpg"
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
            <SectionHeading>Upcoming Events</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-1 max-w-md mx-auto">
              {EVENTS.map((event, i) => (
                <div
                  key={event.title}
                  className="rounded-xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow group"
                  data-ocid={`events.item.${i + 1}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-lg bg-gold px-3 py-1 text-xs font-bold text-navy">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy text-lg">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center text-sm font-bold text-gold hover:underline uppercase tracking-wider"
                      data-ocid={`events.button.${i + 1}`}
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
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
            <SectionHeading>Church Life Gallery</SectionHeading>
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
                        (217) 555-0182
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Email
                      </p>
                      <p className="text-sm text-white/70 mt-0.5">
                        info@gracecommunity.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Sun: 10:30 AM | Wed: 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>(217) 555-0182</span>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold">
                  <Cross className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg leading-tight">
                    New Life Evangelistic Ministries Worship Centre
                  </p>
                  <p className="text-xs text-gold">Church</p>
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
