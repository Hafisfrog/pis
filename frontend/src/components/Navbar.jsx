import { Link } from "react-router-dom";
import schoolLogo from "../assets/logopis.jpg";

const navItems = [
  { labels: { th: "หน้าแรก", en: "Home", ms: "Laman Utama" }, to: "/" },
  { labels: { th: "ข่าวสาร", en: "News", ms: "Berita" }, to: "/news" },
  { labels: { th: "เกี่ยวกับ", en: "About", ms: "Tentang" }, to: "/about" },
  { labels: { th: "ติดต่อ", en: "Contact", ms: "Hubungi" }, to: "/contact" },
];

const languages = [
  { code: "th", label: "TH" },
  { code: "en", label: "EN" },
  { code: "ms", label: "MS" },
];

const schoolNames = {
  th: "โรงเรียนพัฒนาอิสลาม",
  en: "Pattana Islam School",
  ms: "Sekolah Pattana Islam",
};

export default function Navbar({
  activeTheme = "pink",
  language = "th",
  setLanguage = () => {},
}) {
  const activeColor = activeTheme === "blue" ? "bg-blue-500" : "bg-pink-500";
  const hoverColor = activeTheme === "blue" ? "hover:text-blue-500" : "hover:text-pink-500";
  const activeRingColor = activeTheme === "blue" ? "ring-blue-500/30" : "ring-pink-500/30";

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-3 pt-4 sm:px-4 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl bg-white/90 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-full lg:px-7">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={schoolLogo}
            alt="Pattana Islam Educational Foundation"
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain shadow-sm sm:h-14 sm:w-14"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-black text-blue-600 sm:text-base">
              {schoolNames[language]}
            </span>
            <span className="block max-w-[150px] truncate text-[11px] font-bold text-slate-500 sm:max-w-[260px] sm:text-xs xl:max-w-none">
              Pattana Islam Educational Foundation
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-1.5 lg:flex xl:gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-4 py-3 text-sm font-extrabold transition xl:px-5 ${
                  index === 0 ? `${activeColor} text-white shadow-lg` : `text-slate-600 ${hoverColor}`
                }`}
              >
                {item.labels[language]}
              </Link>
            ))}
          </div>

          <div className={`flex items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm ring-2 ${activeRingColor}`}>
            <span className="hidden text-xs font-black text-slate-500 sm:inline">ภาษา</span>
            <div className="flex rounded-full bg-slate-100 p-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`h-8 min-w-9 rounded-full px-2 text-xs font-black transition ${
                    language === item.code ? `${activeColor} text-white shadow-sm` : "text-slate-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
