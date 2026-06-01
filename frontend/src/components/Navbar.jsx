import { useState } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/logopis.jpg";

const navItems = [
  { label: "หน้าแรก", to: "/" },
  { label: "ข่าวสาร", to: "/news" },
  { label: "เกี่ยวกับ", to: "/about" },
  { label: "ติดต่อ", to: "/contact" },
];

export default function Navbar({ activeTheme = "pink" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeColor = activeTheme === "blue" ? "bg-blue-500" : "bg-pink-500";
  const hoverColor = activeTheme === "blue" ? "hover:text-blue-500" : "hover:text-pink-500";

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-3 pt-4 sm:px-4 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl bg-white/90 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-full lg:px-7">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={schoolLogo}
            alt="โลโก้โรงเรียนพัฒนาอิสลาม"
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain shadow-sm sm:h-14 sm:w-14"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-black text-blue-600 sm:text-base">โรงเรียนพัฒนาอิสลาม</span>
            <span className="block max-w-[180px] truncate text-[11px] font-bold text-slate-500 sm:max-w-none sm:text-xs">
              Pattana Islam Educational Foundation
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-full px-5 py-3 text-sm font-extrabold transition ${
                index === 0 ? `${activeColor} text-white shadow-lg` : `text-slate-600 ${hoverColor}`
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className={`rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-lg transition ${activeColor}`}>
            เข้าสู่ระบบ
          </button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-800 lg:hidden"
          aria-label="เปิดเมนู"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-slate-800 transition ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-slate-800 transition ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-slate-800 transition ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-2xl px-4 py-3 font-bold text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className={`mt-2 w-full rounded-2xl px-4 py-3 font-extrabold text-white ${activeColor}`}>
            เข้าสู่ระบบ
          </button>
        </div>
      )}
    </nav>
  );
}
