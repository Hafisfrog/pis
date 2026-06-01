import { useState } from "react";
import Navbar from "../components/Navbar";

const slides = [
  {
    theme: "blue",
    eyebrow: "Islamic Education",
    title: "โรงเรียนพัฒนาอิสลาม",
    role: "สร้างอนาคตด้วยการศึกษา",
    name: "คู่คุณธรรม",
    description: "ส่งเสริมการเรียนรู้ทั้งด้านวิชาการ ศาสนา และการใช้ชีวิตในสังคม",
    gradient: "from-sky-500 via-blue-600 to-cyan-500",
    accent: "text-sky-500",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTheme={slide.theme} />

      <section className={`relative min-h-[100svh] overflow-hidden bg-gradient-to-br ${slide.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_20%_85%,rgba(255,255,255,0.14),transparent_25%)]" />
        <div className="absolute inset-0 bg-black/5" />
        <p className="pointer-events-none absolute left-1/2 top-[42%] hidden -translate-x-1/2 -translate-y-1/2 select-none text-[18vw] font-black uppercase leading-none tracking-normal text-white/12 sm:block">
          COUNCIL
        </p>
        <p className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 select-none text-[11vw] font-black uppercase leading-none tracking-normal text-white/10 sm:block">
          STUDENT
        </p>

        <button
          type="button"
          aria-label="สไลด์ก่อนหน้า"
          onClick={goToPrevious}
          className="absolute bottom-8 left-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:left-8 xl:left-12"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="สไลด์ถัดไป"
          onClick={goToNext}
          className="absolute bottom-8 right-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:right-8 xl:right-12"
        >
          ›
        </button>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-10">
          <div className="grid w-full items-center gap-8 xl:grid-cols-[0.8fr_1.4fr_0.8fr]">
            <ProfileCard muted name="นางสาวอามีเนาะ" role="รองประธาน" />

            <div className="order-first mx-auto max-w-4xl text-center text-white xl:order-none">
              <p className="mx-auto mb-4 max-w-full text-xs font-bold uppercase tracking-[0.28em] text-white/75 sm:text-sm sm:tracking-[0.45em]">
                {slide.eyebrow}
              </p>
              <h1 className="mx-auto mb-6 max-w-4xl break-words text-4xl font-black leading-tight text-white drop-shadow-lg [overflow-wrap:anywhere] sm:text-5xl md:text-6xl xl:text-7xl">
                {slide.title}
              </h1>
              <div className="mx-auto mb-7 max-w-3xl">
                <p className="mx-auto mb-3 max-w-2xl break-words text-lg font-extrabold text-white [overflow-wrap:anywhere] sm:text-2xl lg:text-3xl">
                  {slide.role}
                </p>
                <p className="break-words text-4xl font-black leading-tight text-white [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
                  {slide.name}
                </p>
              </div>
              <p className="mx-auto mb-8 max-w-2xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                {slide.description}
              </p>
              <button className={`w-full max-w-sm bg-white px-6 py-4 text-base font-extrabold ${slide.accent} shadow-2xl transition hover:-translate-y-0.5 sm:w-auto sm:px-9 sm:text-lg`}>
                ทำความรู้จักเพิ่มเติม ↗
              </button>
            </div>

            <ProfileCard name="นายมูฮัมหมัด" role="เลขานุการ" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:bottom-8">
          {slides.map((item, index) => (
            <button
              key={item.theme}
              type="button"
              aria-label={`ไปยังสไลด์ ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all ${
                activeSlide === index ? "w-10 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.45em] text-slate-400">
            Latest Updates
          </p>
          <h2 className="text-4xl font-black text-slate-900">ข่าวสารล่าสุด</h2>
        </div>
      </section>
    </div>
  );
}

function ProfileCard({ name, role, muted = false }) {
  return (
    <div className={`hidden justify-center xl:flex ${muted ? "opacity-45" : "opacity-75"}`}>
      <div className="relative h-[420px] w-[240px] overflow-hidden rounded-t-full bg-white/20 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm 2xl:h-[460px] 2xl:w-[270px]">
        <div className="absolute inset-x-8 top-12 h-36 rounded-full bg-white/45" />
        <div className="absolute left-1/2 top-20 h-28 w-28 -translate-x-1/2 rounded-full bg-slate-900/75" />
        <div className="absolute bottom-0 left-1/2 h-72 w-56 -translate-x-1/2 rounded-t-[5rem] bg-slate-950/70" />
        <div className="absolute bottom-8 left-5 right-5 rounded-lg bg-white/85 p-4 text-center">
          <p className="text-sm font-black text-slate-900">{name}</p>
          <p className="text-xs font-bold text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
