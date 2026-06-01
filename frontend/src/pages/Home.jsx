import { useState } from "react";
import Navbar from "../components/Navbar";
import bangPhoto from "../assets/bangpng.png";
import baboPhoto from "../assets/babopng.png";

const leaders = [
  {
    photo: bangPhoto,
    imageClass: "",
    name: "นายโซฟูวัน มารูดิน",
    role: "รองผู้อำนวยการ",
  },
  {
    photo: baboPhoto,
    imageClass: "scale-[1.85]",
    name: "แวอับดุลเลาะ มารูดิน",
    role: "ผู้รับใบอนุญาต",
  },
];

export default function Home() {
  const [activeLeader, setActiveLeader] = useState(0);
  const currentLeader = leaders[activeLeader];
  const sideLeader = leaders[(activeLeader + 1) % leaders.length];

  const goToPrevious = () => {
    setActiveLeader((current) => (current - 1 + leaders.length) % leaders.length);
  };

  const goToNext = () => {
    setActiveLeader((current) => (current + 1) % leaders.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTheme="blue" />

      <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(255,255,255,0.24),transparent_22%),radial-gradient(circle_at_18%_84%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="absolute inset-0 bg-black/5" />
        <p className="pointer-events-none absolute left-1/2 top-[43%] hidden -translate-x-1/2 -translate-y-1/2 select-none text-[17vw] font-black uppercase leading-none tracking-normal text-white/10 sm:block">
          PATTANA
        </p>
        <p className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 select-none text-[10vw] font-black uppercase leading-none tracking-normal text-white/10 sm:block">
          ISLAM
        </p>

        <button
          type="button"
          aria-label="สไลด์ก่อนหน้า"
          onClick={goToPrevious}
          className="absolute bottom-8 left-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:left-8 xl:left-12"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="สไลด์ถัดไป"
          onClick={goToNext}
          className="absolute bottom-8 right-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:right-8 xl:right-12"
        >
          ›
        </button>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-10">
          <div className="grid w-full items-center gap-8 xl:grid-cols-[0.85fr_1.3fr_0.85fr]">
            <ProfileCard
              photo={sideLeader.photo}
              imageClass={sideLeader.imageClass}
              name={sideLeader.name}
              role={sideLeader.role}
              muted
            />

            <div className="order-first mx-auto flex max-w-4xl flex-col items-center text-center text-white xl:order-none">
              <p className="mx-auto mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/75 sm:text-sm sm:tracking-[0.45em]">
                Islamic Education
              </p>

              <div className="relative flex w-full max-w-[420px] flex-col items-center sm:max-w-[520px] lg:max-w-[580px]">
                <div className="absolute inset-x-8 bottom-20 h-32 rounded-full bg-white/20 blur-2xl" />
                <img
                  key={currentLeader.name}
                  src={currentLeader.photo}
                  alt={currentLeader.name}
                  className={`relative z-10 max-h-[54vh] w-auto max-w-full object-contain drop-shadow-2xl transition duration-300 sm:max-h-[60vh] lg:max-h-[64vh] ${currentLeader.imageClass}`}
                />
                <div className="relative z-20 -mt-8 w-full max-w-md rounded-2xl bg-white/92 px-6 py-5 text-center shadow-2xl backdrop-blur-md sm:-mt-10">
                  <h1 className="text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
                    {currentLeader.name}
                  </h1>
                  <p className="mt-2 text-lg font-extrabold text-blue-600 sm:text-2xl">
                    {currentLeader.role}
                  </p>
                </div>
              </div>
            </div>

            <ProfileCard
              photo={sideLeader.photo}
              imageClass={sideLeader.imageClass}
              name={sideLeader.name}
              role={sideLeader.role}
            />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {leaders.map((leader, index) => (
            <button
              key={leader.name}
              type="button"
              aria-label={`ไปยังสไลด์ ${index + 1}`}
              onClick={() => setActiveLeader(index)}
              className={`h-3 rounded-full transition-all ${
                activeLeader === index ? "w-10 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
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

function ProfileCard({ name, role, photo, imageClass = "", muted = false }) {
  return (
    <div className={`hidden justify-center xl:flex ${muted ? "opacity-55" : "opacity-70"}`}>
      <div className="relative h-[420px] w-[240px] overflow-hidden rounded-t-full bg-white/20 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm 2xl:h-[460px] 2xl:w-[270px]">
        <img
          src={photo}
          alt={name}
          className={`absolute inset-x-0 bottom-0 mx-auto h-full max-h-none w-auto max-w-none object-contain object-bottom ${imageClass}`}
        />
        <div className="absolute bottom-8 left-5 right-5 rounded-lg bg-white/82 p-4 text-center shadow-lg backdrop-blur">
          <p className="text-sm font-black text-slate-900">{name}</p>
          <p className="text-xs font-bold text-blue-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
