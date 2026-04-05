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
  Tv,
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
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#worship" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Ministries", href: "#ministries" },
  { label: "Prayers", href: "#prayers" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Giving", href: "#giving" },
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
    title: "Knowing The Truth",
    speaker: "Pastor Solomon",
    date: "March 26, 2026",
    img: "/assets/generated/sermon-knowing-truth.dim_800x500.jpg",
    summary:
      "Do you truly know God? (John 14:1-7)\n\nHow do you thoroughly know God? Be truthful and honest in your walk with Christ (Matthew 16:13 onwards)\n\nTruth is the revelation of who Christ is \u2014 the truth of Christ should influence your actions, decisions, choices, and beliefs.\n\nGod reveals the truth to honest, sincere and genuine people who have a relationship with Him.\n\nGod sometimes gives us personal revelations \u2014 Proverbs 23:23: \u201cBuy the truth and do not sell it \u2014 wisdom, instruction and insight as well.\u201d\n\nThe amount of revelation you have is what is going to make you successful (Matthew 11:25 onwards)\n\nGod is a great rewarder to those who honour Him.",
  },
  {
    title: "What Can I Do for the Lord?",
    speaker: "Rev. Patrick",
    date: "March 19, 2026",
    img: "/assets/generated/sermon-what-can-i-do.dim_800x600.jpg",
    summary:
      "The Parable of the Workers in the Vineyard (Matthew 20:1-16)\n\nHabakkuk 2:2 \u2014 Run with the vision\n\nThe Lord is always seeking workers. It is possible to be present in church activities without being productive and active for the kingdom.\n\nMatthew 9:35-38 \u2014 The Harvest Is Plentiful, the Laborers Few\n\nIt is time to work for the Lord!",
  },
  {
    title: "THE HARVEST IS PLENTY, BUT LABORERS ARE FEW",
    speaker: "Pastor Samuel",
    date: "April 6, 2025",
    img: "/assets/generated/sermon-harvest-laborers.dim_800x500.jpg",
    summary:
      "Preached on 6/04/25\n\nScriptures: Luke 10:1-5, Luke 10:17, Acts 1:8\n\nThere is a need for more workers: 'The harvest is plentiful, but the labourers are few' (Luke 10:2). There is a lot of work to be done, but not enough people are doing it. This is a call for more individuals to get involved and contribute.\n\nWe need to make sure the Word is preached accurately and in a way that can be received by all. In Luke 10:5, there is an idea to focus on those who are open and receptive to the message. Discern who is ready, but always be willing and eager to share the gospel.\n\nWe have been given authority and power: Acts 1:8 \u2014 'You will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.' Those sent out are given power and authority from God.",
  },
  {
    title: "The Lord Is In Need of You",
    speaker: "Rev. Patrick",
    date: "Palm Sunday",
    img: "/assets/generated/sermon-palm-sunday.dim_800x500.jpg",
    summary:
      "Palm Sunday Sermon\n\nScriptures: Mark 10:17 (The Rich Young Ruler), Matthew 21 \u2014 Jesus Comes to Jerusalem as King\n\nKey Takeaways:\n\u2022 God is looking for our commitment\n\u2022 Authentic living is found in Christ \u2014 eternal life is not found in possessions\n\u2022 God wants you to focus on the right things\n\u2022 'Go and untie' \u2014 for the Lord has need of them",
  },
];

const BULLETIN: {
  icon: string;
  event: string;
  date: string;
  message: string;
  scriptures?: string[];
}[] = [
  {
    icon: "📖",
    event: "Youth Bible Reading Challenge",
    date: "Starting April 1st",
    message:
      "The Youth of New Life Evangelistic Church will embark on a challenge to read through the Bible in a year. The plan is to read two chapters a day. Join us on this journey!",
  },
  {
    icon: "🙏",
    event: "Week of Prayer and Fasting",
    date: "Starting March 30th",
    message:
      "The church will begin a week of prayer and fasting. Let's come together in unity and seek God's guidance.",
  },
  {
    icon: "✝️",
    event: "Good Friday Service",
    date: "Friday, April 3rd at 3:30 PM",
    message:
      "Join us for our Good Friday service as we reflect on the sacrifice of Jesus Christ.",
  },
  {
    icon: "🌟",
    event: "Witnessing Opportunity",
    date: "This Saturday at 11 AM",
    message:
      "There will be a witnessing opportunity this Saturday. We will meet here at 11 AM to spread the word of God.\n\nTheme: The Power, The Mystery's, & The Virtue of the Cross",
    scriptures: [
      "1 Corinthians 1:17-18",
      "Galatians 6:14",
      "Isaiah 52:13, 33:12",
      "Philippians 2:5-11, 3:20-21",
    ],
  },
  {
    icon: "\uD83C\uDF05",
    event: "Easter Sunday",
    date: "5th April 2026",
    message:
      "Join us for a special Resurrection Sunday celebration! Come and commemorate the risen Christ with the whole family.",
  },
  {
    icon: "\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66",
    event: "Father's Day",
    date: "21st June 2026",
    message:
      "Honoring all fathers and father figures in our congregation. A special service to celebrate the gift of fatherhood.",
  },
];

const SCHEDULE = [
  { activity: "Midweek Services", timing: "Every Wednesday, 7PM" },
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
  {
    Icon: Music2,
    name: "Worship Ministry",
    description:
      "Leading the congregation in Spirit-filled worship through music, song, and praise to glorify God.",
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
    name: "Head Pastor Patrick Adu Amankwah",
    title: "Head Pastor",
    img: "/assets/uploads/image-019d2734-d054-755b-a44b-213924140b31-1.png",
  },
  {
    name: "Dr Joyce Adu Amankwah",
    title: "Women Ministry Leader",
    img: "/assets/uploads/image-019d272e-a57b-7293-9398-217ce7171823-1.png",
  },
  {
    name: "Pastor Samuel Agyapong",
    title: "Resident Pastor",
    img: "/assets/uploads/image-019d2731-6d48-725b-adbd-74657b634684-1.png",
  },
  {
    name: "Pastor Augustine Adu Amankwah",
    title: "Children Ministry Leader",
    img: "/assets/generated/leader-augustine.dim_400x400.jpg",
  },
  {
    name: "Pastor Ebenezer Adu Amankwah",
    title: "Men Ministry Leader",
    img: "/assets/uploads/image-019d5a63-c6c6-73d6-b556-b7c5a94c993a-1.png",
  },
  {
    name: "Pastor Solomon Mills",
    title: "Youth Coordinator",
    img: "/assets/generated/leader-solomon-real.dim_400x400.jpg",
  },
  {
    name: "Minister Audrey Mills",
    title: "Worship Team Leader",
    img: "/assets/generated/leader-audrey-real.dim_400x400.jpg",
  },
  {
    name: "Deaconess Anthoniet Koomson",
    title: "Ushering / Hospitality Leader",
    img: "/assets/uploads/image-019d289c-3697-7765-843f-435c896f66b7-1.png",
  },
];

const GALLERY = [
  {
    src: "/assets/uploads/image-019d2889-a8df-7383-a07b-e93eeb86d096-1.png",
    alt: "Ministry life - congregation worship",
  },
  {
    src: "/assets/uploads/image-019d2889-acce-7701-8017-c16d1e68789c-2.png",
    alt: "Ministry life - praise team",
  },
  {
    src: "/assets/uploads/image-019d2889-adf2-72a9-8a24-89f0dc0d2096-3.png",
    alt: "Ministry life - congregation standing in worship",
  },
  {
    src: "/assets/uploads/image-019d2889-adc1-7084-9470-a36bacd58d30-4.png",
    alt: "Ministry life - worship team leading praise",
  },
  {
    src: "/assets/uploads/image-019d2889-aef1-776b-a7b4-12de04740859-5.png",
    alt: "Ministry life - congregation in prayer",
  },
  {
    src: "/assets/uploads/image-019d2891-01dc-7332-b855-244f11d8f372-1.png",
    alt: "Ministry life - worship team singing",
  },
  {
    src: "/assets/uploads/image-019d2891-035d-746f-bd48-3d7241a523b1-2.png",
    alt: "Ministry life - pastor speaking",
    objectPosition: "top",
  },
  {
    src: "/assets/uploads/image-019d2891-03e8-7738-9021-b71c810e04f5-3.png",
    alt: "Ministry life - worship leader in prayer",
  },
  {
    src: "/assets/uploads/image-019d2891-0421-71ff-a689-05aabd285343-4.png",
    alt: "Ministry life - congregation standing in worship",
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

function getNextFridayTarget(): Date {
  const now = new Date();
  const target = new Date(now);
  target.setUTCHours(16, 0, 0, 0);
  const day = target.getUTCDay();
  let daysUntil = (5 - day + 7) % 7;
  if (daysUntil === 0) {
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    if (hours > 17 || (hours === 17 && minutes >= 15)) {
      daysUntil = 7;
    }
  }
  target.setUTCDate(target.getUTCDate() + daysUntil);
  return target;
}

function isBroadcastingNow(): boolean {
  const now = new Date();
  return now.getUTCDay() === 5 && now.getUTCHours() === 16;
}

function calcTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function useTVBroadcastState() {
  const [state, setState] = useState(() => ({
    isBroadcasting: isBroadcastingNow(),
    timeLeft: calcTimeLeft(getNextFridayTarget()),
  }));
  useEffect(() => {
    const id = setInterval(() => {
      setState({
        isBroadcasting: isBroadcastingNow(),
        timeLeft: calcTimeLeft(getNextFridayTarget()),
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return state;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isBroadcasting, timeLeft: countdown } = useTVBroadcastState();
  const [scrolled, setScrolled] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleContactSubmit = () => {
    const subject = encodeURIComponent(
      `Message from ${contactName} via NLEM Website`,
    );
    const body = encodeURIComponent(`Name: ${contactName}
Email: ${contactEmail}

Message:
${contactMessage}`);
    const mailtoUrl = `mailto:nlem.worshipcentre@gmail.com,youthministry248@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

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
            <span className="font-display text-base font-bold tracking-wide text-white hidden xl:block">
              NLEM Worship Centre
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-4"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/80 transition-colors hover:text-gold"
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
              className="hidden lg:inline-flex bg-gold hover:bg-gold/90 text-navy font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-shadow"
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
          <nav className="lg:hidden bg-navy border-t border-white/20 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold py-2 pl-0 hover:border-l-2 hover:border-gold hover:pl-2 transition-all"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider w-full shadow-md hover:shadow-lg transition-shadow"
              data-ocid="nav.primary_button"
            >
              Visit Us
            </Button>
          </nav>
        )}
      </header>

      <main>
        {/* ── 1. HERO ── */}
        <section
          id="home"
          className="scroll-mt-20 relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
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

            {/* 2026 Theme Banner */}
            <div className="mt-7 mx-auto max-w-xl rounded-xl border border-gold/60 bg-gold/10 px-6 py-4 text-center backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                2026 Theme
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-gold leading-snug">
                Your Year of Abundance
              </p>
              <p className="text-xs font-semibold text-gold/90 mt-1">
                Moving from Lack to Abundance
              </p>
              <p className="text-xs text-yellow-300 font-bold mt-1.5 tracking-wide">
                <a
                  href="https://www.biblegateway.com/passage/?search=1+Kings+18%3A41-45&version=NIV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1 Kings 18:41–45
                </a>
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => handleNavClick("#worship")}
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider px-10 py-3 text-sm shadow-md hover:shadow-lg transition-shadow"
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

        {/* ── 2. ABOUT ── */}
        <section
          id="about"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="About Us"
        >
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
                      reflects the diversity of God’s kingdom and extends His
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
                      of faithful ministry, we have baptised many, trained many
                      leaders, and served thousands in our community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/uploads/image-019d2898-2ce3-710e-ac51-463f444a8bf7-1.png"
                  alt="Our congregation worshipping together"
                  className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-navy rounded-2xl p-5 shadow-card">
                  <p className="text-3xl font-display font-bold text-gold">
                    Est.
                  </p>
                  <p className="text-sm text-white/80 mt-1">1997</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. FOUNDER'S MESSAGE ── */}
        <section
          id="founder"
          className="py-24 section-gold-muted"
          aria-label="Founder's Message"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading>Founder’s Message</SectionHeading>

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

        {/* ── 4. OUR MISSION ── */}
        <section
          id="mission"
          className="scroll-mt-20 py-24 bg-navy"
          aria-label="Our Mission"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Our Mission</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {MISSION_POINTS.map(({ Icon, title, description }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-5 rounded-2xl bg-white/10 p-6 hover:bg-white/15 transition-all duration-300"
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

        {/* ── 5. SERVICES / WORSHIP TIMES ── */}
        <section
          id="worship"
          className="py-24 bg-white"
          aria-label="Worship Times"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Worship Times</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WORSHIP_TIMES.map((s, i) => (
                <div
                  key={s.time}
                  className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
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
                    {s.service === "Wednesday Midweek Service" ? (
                      <a
                        href="https://www.google.com/maps?q=St+Georges+Church+Vancouver+Road+London+SE23+2AG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold hover:underline transition-colors"
                        data-ocid="worship.link"
                      >
                        {s.address}
                      </a>
                    ) : (
                      s.address
                    )}
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

        {/* ── 6. LATEST SERMONS ── */}
        <section
          id="sermons"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Sermons"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Latest Sermons</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERMONS.map((sermon, i) => (
                <div
                  key={sermon.title}
                  className="rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  data-ocid={`sermons.item.${i + 1}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-navy">
                    <img
                      src={sermon.img}
                      alt={sermon.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
                    {sermon.summary && (
                      <div className="mt-3 space-y-2 overflow-hidden line-clamp-6">
                        {sermon.summary.split("\n\n").map((para) => (
                          <p
                            key={para.slice(0, 30)}
                            className="text-xs text-muted-foreground leading-relaxed"
                          >
                            {para.split(/(\([^)]+\))/).map((part) =>
                              /^\([^)]+\)$/.test(part) ? (
                                <em
                                  key={part}
                                  className="text-gold not-italic font-semibold"
                                >
                                  {part}
                                </em>
                              ) : (
                                part
                              ),
                            )}
                          </p>
                        ))}
                      </div>
                    )}
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
          </div>
        </section>

        {/* ── 7. EVENTS ── */}
        <section
          id="events"
          className="scroll-mt-20 py-24"
          style={{ background: "oklch(var(--gold) / 0.12)" }}
          aria-label="Events"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Upcoming Events &amp; Activities</SectionHeading>
            <p className="mt-4 text-center text-foreground/60 text-sm max-w-xl mx-auto">
              Stay connected with all our services, special events, and ministry
              activities throughout the year.
            </p>

            <div className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-card">
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
                  className={`grid grid-cols-2 px-6 py-5 border-b border-gray-100 last:border-b-0 ${
                    i % 2 === 0
                      ? "bg-white border-l-4 border-l-transparent"
                      : "bg-gray-50 border-l-4 border-l-gold/40"
                  }`}
                  data-ocid={`events.item.${i + 1}`}
                >
                  <p className="font-bold text-navy text-sm leading-snug pr-4">
                    {activity}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-gold" />
                    <p className="text-sm text-foreground/70">{timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. TV MINISTRY ── */}
        <section
          id="tv-ministry"
          className="scroll-mt-20 py-24 relative overflow-hidden"
          style={{ background: "#f8f6f0" }}
          aria-label="TV Ministry"
        >
          {/* Subtle gold dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(212,175,55,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative mx-auto max-w-4xl px-6">
            <SectionHeading>TV Ministry</SectionHeading>

            {/* Main broadcast card */}
            <div
              className="mt-12 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(212,175,55,0.5)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Card header bar */}
              <div
                className="px-8 py-4 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(90deg, #d4af37 0%, #b8962e 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Tv className="h-5 w-5 text-navy" />
                  <h3 className="font-display text-base font-black uppercase tracking-[0.2em] text-navy">
                    New Life TV Programme
                  </h3>
                </div>
                {/* On Air badge */}
                <div className="flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-black tracking-widest text-white uppercase">
                    On Air
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8" style={{ background: "#ffffff" }}>
                {/* Countdown Timer / Now Broadcasting */}
                <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-navy/50 mb-6">
                  {isBroadcasting ? (
                    <span />
                  ) : (
                    <span>Every Friday &middot; Weekly Broadcast</span>
                  )}
                </p>
                {isBroadcasting ? (
                  <div
                    className="mb-8 rounded-2xl p-8 flex flex-col items-center gap-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #060e1c 0%, #0d1f3c 100%)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      boxShadow: "0 4px 24px rgba(6,14,28,0.18)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <span
                        className="text-sm font-black uppercase tracking-[0.3em]"
                        style={{ color: "#d4af37" }}
                      >
                        Now Broadcasting
                      </span>
                    </div>
                    <a
                      href="https://www.faithworldtv.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-6 py-3 rounded-xl font-bold text-navy text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
                      style={{ background: "#d4af37" }}
                    >
                      Watch Live on Faithworld TV &rarr;
                    </a>
                  </div>
                ) : (
                  <div
                    className="mb-8 rounded-2xl p-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #060e1c 0%, #0d1f3c 100%)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      boxShadow: "0 4px 24px rgba(6,14,28,0.18)",
                    }}
                  >
                    <p
                      className="text-center text-[10px] font-black uppercase tracking-[0.35em] mb-5"
                      style={{ color: "rgba(212,175,55,0.7)" }}
                    >
                      Next Broadcast In
                    </p>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: countdown.days, label: "Days" },
                        { value: countdown.hours, label: "Hours" },
                        { value: countdown.minutes, label: "Mins" },
                        { value: countdown.seconds, label: "Secs" },
                      ].map(({ value, label }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className="w-full rounded-xl flex items-center justify-center py-3 tabular-nums"
                            style={{
                              background: "rgba(212,175,55,0.12)",
                              border: "1px solid rgba(212,175,55,0.35)",
                            }}
                          >
                            <span
                              className="text-3xl font-black"
                              style={{
                                color: "#d4af37",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {String(value).padStart(2, "0")}
                            </span>
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      flag: "\uD83C\uDDEC\uD83C\uDDE7",
                      region: "U.K",
                      time: "16:00\u201317:00",
                    },
                    {
                      flag: "\uD83C\uDDEC\uD83C\uDDED",
                      region: "Ghana",
                      time: "15:00\u201316:00",
                    },
                    {
                      flag: "\uD83C\uDDFA\uD83C\uDDF8",
                      region: "USA",
                      time: "11:00\u201312:00",
                    },
                  ].map(({ flag, region, time }) => (
                    <div
                      key={region}
                      className="flex flex-col items-center gap-2 rounded-xl p-4"
                      style={{
                        background: "rgba(212,175,55,0.08)",
                        border: "1px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      <span className="text-2xl">{flag}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/60">
                        {region}
                      </span>
                      <span className="text-navy font-bold text-sm tabular-nums">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Channel badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-navy/50 font-semibold">
                    Watch on
                  </span>
                  <a
                    href="https://www.faithworldtv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest transition-all hover:opacity-80"
                    style={{
                      background: "linear-gradient(90deg, #d4af37, #b8962e)",
                      color: "#060e1c",
                    }}
                  >
                    <Tv className="h-3 w-3" />
                    Faithworld TV
                  </a>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase"
                    style={{
                      border: "1px solid rgba(212,175,55,0.6)",
                      background: "rgba(212,175,55,0.15)",
                      color: "#7a5c00",
                    }}
                  >
                    SKY 589
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase"
                    style={{
                      border: "1px solid rgba(212,175,55,0.6)",
                      background: "rgba(212,175,55,0.15)",
                      color: "#7a5c00",
                    }}
                  >
                    FREEVIEW 269
                  </span>
                </div>

                {/* Prayer Request */}
                <div
                  className="mt-8 rounded-2xl p-6"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-navy/20" />
                    <h4 className="font-display text-sm font-black uppercase tracking-[0.25em] text-navy">
                      Prayer Request
                    </h4>
                    <div className="h-px flex-1 bg-navy/20" />
                  </div>
                  <p className="text-center text-navy/70 text-sm leading-relaxed">
                    Please feel free to send any prayer requests to{" "}
                    <a
                      href="tel:07920035100"
                      className="font-bold hover:opacity-80 transition-opacity"
                      style={{ color: "#b8962e" }}
                    >
                      07920035100
                    </a>
                    .
                    <br />
                    We have intercessors who will be happy to stand in the gap
                    with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. MINISTRIES ── */}
        <section
          id="ministries"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Ministries"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Our Ministries</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MINISTRIES.map(({ Icon, name, description }, i) => (
                <div
                  key={name}
                  className="flex flex-col items-center rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
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
              <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-card">
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
                  className="inline-block rounded-2xl bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wider text-gold hover:bg-navy/90 transition-colors"
                  data-ocid="ministries.link"
                >
                  Link to Join All Online Meetings
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. PRAYERS ── */}
        <section
          id="prayers"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Prayers"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Prayer</SectionHeading>

            {/* Prayer description */}
            <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white p-8 shadow-card text-center">
              <p className="text-foreground/80 leading-relaxed">
                Prayer is our direct line of communication with God. It’s a way
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
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-navy mb-4">
                  Join Us
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-gold mb-6" />
                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    Simply download the FREE CONFERENCE APP and use{" "}
                    <strong className="text-navy">
                      Meeting ID: REVDPATRICK3
                    </strong>
                  </p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.freeconferencecall.fccmeetingclient&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-full hover:bg-navy/80 transition-colors"
                    >
                      &#9654; Google Play
                    </a>
                    <a
                      href="https://apps.apple.com/app/freeconferencecall/id1076539547"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-full hover:bg-navy/80 transition-colors"
                    >
                      Apple App Store
                    </a>
                  </div>
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
              <div className="rounded-2xl bg-navy p-8 shadow-card">
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-gold mb-4">
                  Weekly Prayer Activities
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-gold mb-6" />
                <div className="space-y-3 text-sm text-white/85">
                  <p className="font-bold uppercase tracking-wider text-gold">
                    Prayers Happen Every Day (except Sunday):
                  </p>
                  {[
                    "06.00\u201306.30",
                    "12.00\u201312.30",
                    "17.00\u201317.30",
                    "20.00\u201320.30",
                    "00.00\u201300.30",
                  ].map((t) => (
                    <p key={t} className="pl-3 border-l-2 border-gold/40">
                      {t}
                    </p>
                  ))}
                  <p className="pt-3 font-bold uppercase tracking-wider text-gold">
                    Sundays
                  </p>
                  <p className="pl-3 border-l-2 border-gold/40">
                    06.00\u201306.30{" "}
                    <span className="text-white/50 text-xs">(Prayer Time)</span>
                  </p>
                  <p className="pl-3 border-l-2 border-gold/40">
                    10.30\u201313.30{" "}
                    <span className="text-white/50 text-xs">
                      (Church Service)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Counselling banner */}
            <div className="mt-10 rounded-2xl bg-navy px-8 py-6 text-center shadow-card">
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

        {/* ── 11. LEADERSHIP ── */}
        <section
          id="leadership"
          className="scroll-mt-20 py-24 bg-navy"
          aria-label="Leadership"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Meet Our Leadership Team</SectionHeading>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {LEADERSHIP.map((leader, i) => (
                <div
                  key={leader.name}
                  className="group flex flex-col items-center text-center"
                  data-ocid={`leadership.item.${i + 1}`}
                >
                  <div className="relative mb-5">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="h-40 w-40 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-gold shadow-card transition-all duration-300 group-hover:ring-4 group-hover:ring-gold/70 group-hover:ring-offset-2 group-hover:ring-offset-navy"
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
          </div>
        </section>

        {/* ── 12. GALLERY ── */}
        <section
          id="gallery"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Gallery"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Ministry Life Gallery</SectionHeading>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {GALLERY.map(({ src, alt, objectPosition }, i) => (
                <button
                  key={alt}
                  type="button"
                  className="overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer w-full p-0 border-0 bg-transparent text-left"
                  data-ocid={`gallery.item.${i + 1}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={objectPosition ? { objectPosition } : undefined}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX OVERLAY ── */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setLightboxIndex(null);
            }}
            data-ocid="gallery.modal"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            {/* Prev arrow */}
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + GALLERY.length) % GALLERY.length,
                );
              }}
              data-ocid="gallery.pagination_prev"
              aria-label="Previous photo"
            >
              <ChevronRight className="h-6 w-6 rotate-180" />
            </button>

            {/* Image */}
            <img
              src={GALLERY[lightboxIndex].src}
              alt={GALLERY[lightboxIndex].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            />

            {/* Next arrow */}
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
              }}
              data-ocid="gallery.pagination_next"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Close button */}
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors"
              onClick={() => setLightboxIndex(null)}
              data-ocid="gallery.close_button"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-sm text-white/80">
              {lightboxIndex + 1} / {GALLERY.length}
            </div>
          </div>
        )}

        {/* ── 13. GIVING ── */}
        <section
          id="giving"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Giving"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Giving</SectionHeading>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
              {/* Tithes & Offerings Card */}
              <div className="relative rounded-2xl bg-white border border-gold/30 border-t-4 border-t-gold overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
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

                  <div className="rounded-2xl bg-navy/5 border border-gold/30 p-6 space-y-4">
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
              <div className="relative rounded-2xl bg-white border border-gold/30 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
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

                  <div className="rounded-2xl bg-navy/5 border border-gold/30 p-6 space-y-4">
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
              &ldquo;Thank You for Your Generous Giving&rdquo;
            </p>
          </div>
        </section>

        {/* ── 14. CHURCH BULLETIN ── */}
        <section
          id="bulletin"
          className="scroll-mt-20 py-24 bg-navy"
          aria-label="Church Bulletin"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading light>Church Bulletin</SectionHeading>
            <p className="text-center text-white/60 mb-10 mt-4 max-w-2xl mx-auto">
              Upcoming news, information and programme updates for our
              congregation.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {BULLETIN.map((item) => (
                <div
                  key={item.event}
                  className="rounded-2xl border border-gold/40 bg-white/10 p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="rounded-full bg-gold/20 p-3 inline-flex items-center justify-center text-2xl w-16 h-16 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest mb-1 text-gold">
                    {item.date}
                  </p>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {item.event}
                  </h3>
                  <div className="text-white/70 text-sm leading-relaxed space-y-1">
                    {item.message.split("\n").map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {item.scriptures && (
                    <div className="mt-3 pt-3 border-t border-gold/20">
                      <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                        Relevant Scriptures:
                      </p>
                      <ul className="space-y-1">
                        {item.scriptures.map((s) => (
                          <li
                            key={s}
                            className="text-white/60 text-xs flex items-start gap-1"
                          >
                            <span className="text-gold mt-0.5">•</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 15. CONTACT ── */}
        <section
          id="contact"
          className="scroll-mt-20 py-24 bg-white"
          aria-label="Contact"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Contact Us</SectionHeading>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Map link */}
              <a
                href="https://www.google.com/maps?q=Christ+Church+Chapel+Church+Rise+Forest+Hill+London+SE23+2UJ"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.map_marker"
                className="rounded-2xl overflow-hidden border border-border block hover:border-gold/60 transition-colors group"
              >
                <div className="bg-navy/5 flex flex-col items-center justify-center h-64 lg:h-full min-h-[300px] text-navy/50 gap-3">
                  <MapPin className="h-10 w-10 text-gold group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-navy/80">
                    New Life Evangelistic Ministries Worship Centre
                  </p>
                  <p className="text-xs text-navy/50 text-center px-4">
                    Christ Church Chapel, The Chapel On The Hill, Church Rise/
                    South Road, Forest Hill, London SE23 2UJ
                  </p>
                  <div className="mt-4 rounded-xl bg-gold text-navy font-bold px-6 py-3 text-xs uppercase tracking-widest group-hover:bg-gold/90 transition-colors shadow-md">
                    View on Google Maps &rarr;
                  </div>
                </div>
              </a>

              {/* Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-sm font-medium text-foreground/80 mb-1 block"
                      htmlFor="contact-name"
                    >
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      data-ocid="contact.input"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium text-foreground/80 mb-1 block"
                      htmlFor="contact-email"
                    >
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      data-ocid="contact.input"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-foreground/80 mb-1 block"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    rows={5}
                    data-ocid="contact.textarea"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-navy hover:bg-navy/90 text-gold font-bold uppercase tracking-wider"
                  data-ocid="contact.submit_button"
                  onClick={handleContactSubmit}
                >
                  Send Message
                </Button>

                {/* Contact Info */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Address
                      </p>
                      <a
                        href="https://www.google.com/maps?q=Christ+Church+Chapel+Church+Rise+Forest+Hill+London+SE23+2UJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/70 mt-0.5 hover:text-gold transition-colors block"
                      >
                        Christ Church Chapel
                        <br />
                        The Chapel On The Hill
                        <br />
                        Church Rise/ South Road
                        <br />
                        Forest Hill, London
                        <br />
                        SE23 2UJ
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold">
                        Phone
                      </p>
                      <p className="text-sm text-foreground/70 mt-0.5">
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
                      <p className="text-sm text-foreground/70 mt-0.5 break-all">
                        Nlem.worshipcentre@gmail.com
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
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <footer className="bg-navy border-t border-white/20">
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
                  <p className="font-display font-bold text-navy text-lg leading-tight">
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
                className="mt-5 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wider text-xs shadow-md hover:shadow-lg transition-shadow"
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
            <p className="text-xs text-navy/40">
              &copy; {new Date().getFullYear()} New Life Evangelistic Ministries
              Worship Centre. All rights reserved.
            </p>
            <p className="text-xs text-navy/40">
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
