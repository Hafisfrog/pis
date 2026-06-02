import { useState } from "react";
import Navbar from "../components/Navbar";
import baboPhoto from "../assets/babopng.png";
import bangPhoto from "../assets/bangpng.png";
import logoPhoto from "../assets/logopis.jpg";

const leaders = [
  {
    photo: bangPhoto,
    imageClass: "",
    name: {
      th: "นายโซฟวัน มารูดิน",
      en: "Mr. Sofwan Marudin",
      ms: "Encik Sofwan Marudin",
    },
    role: {
      th: "รองผู้อำนวยการ",
      en: "Deputy Director",
      ms: "Timbalan Pengarah",
    },
  },
  {
    photo: baboPhoto,
    imageClass: "scale-[1.85]",
    name: {
      th: "แวอับดุลเลาะ มารูดิน",
      en: "Wae Abdulloh Marudin",
      ms: "Wae Abdulloh Marudin",
    },
    role: {
      th: "ผู้รับใบอนุญาต",
      en: "License Holder",
      ms: "Pemegang Lesen",
    },
  },
];

const facebookPageUrl = "https://www.facebook.com/pattanaislamic";

const text = {
  th: {
    socialLabel: "Official Social Media",
    socialTitle: "ติดตามข่าวสาร",
    socialTitleAccent: "& กิจกรรมล่าสุด",
    socialDescription:
      "รับข่าวสาร ประกาศสำคัญ และภาพบรรยากาศกิจกรรมต่างๆ จากโรงเรียนพัฒนาอิสลาม สดใหม่ส่งตรงจากหน้าแฟนเพจ",
    pageButton: "ไปที่หน้าเพจ",
    followersLabel: "Followers",
    follow: "Follow",
    schoolName: "โรงเรียนพัฒนาอิสลาม",
    cardText: "ติดตามประกาศ กิจกรรม และภาพบรรยากาศล่าสุดของโรงเรียนผ่านหน้าแฟนเพจอย่างเป็นทางการ",
    previewTitle: "ติดตามข่าวสารและกิจกรรมล่าสุด",
    followersCount: "ผู้ติดตาม 1.2K+ คน",
    openPage: "เปิดหน้าเพจ",
    previewText:
      "รับข่าวสาร ประกาศสำคัญ และภาพบรรยากาศกิจกรรมต่างๆ จากโรงเรียนพัฒนาอิสลามผ่านหน้าแฟนเพจอย่างเป็นทางการ",
    previousSlide: "สไลด์ก่อนหน้า",
    nextSlide: "สไลด์ถัดไป",
    goToSlide: "ไปยังสไลด์",
  },
  en: {
    socialLabel: "Official Social Media",
    socialTitle: "Follow News",
    socialTitleAccent: "& Latest Activities",
    socialDescription:
      "Get announcements, important updates, and activity highlights from Pattana Islam School directly from the official Facebook page.",
    pageButton: "Open Page",
    followersLabel: "Followers",
    follow: "Follow",
    schoolName: "Pattana Islam School",
    cardText: "Follow official announcements, activities, and the latest school highlights on our Facebook page.",
    previewTitle: "Follow the latest news and activities",
    followersCount: "1.2K+ followers",
    openPage: "Open Page",
    previewText:
      "Receive announcements, important updates, and activity highlights from Pattana Islam School through the official Facebook page.",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: "Go to slide",
  },
  ms: {
    socialLabel: "Media Sosial Rasmi",
    socialTitle: "Ikuti Berita",
    socialTitleAccent: "& Aktiviti Terkini",
    socialDescription:
      "Dapatkan pengumuman, berita penting, dan suasana aktiviti Sekolah Pattana Islam terus daripada halaman Facebook rasmi.",
    pageButton: "Buka Halaman",
    followersLabel: "Pengikut",
    follow: "Ikuti",
    schoolName: "Sekolah Pattana Islam",
    cardText: "Ikuti pengumuman rasmi, aktiviti, dan perkembangan terkini sekolah melalui halaman Facebook rasmi.",
    previewTitle: "Ikuti berita dan aktiviti terkini",
    followersCount: "1.2K+ pengikut",
    openPage: "Buka Halaman",
    previewText:
      "Terima pengumuman, berita penting, dan suasana aktiviti Sekolah Pattana Islam melalui halaman Facebook rasmi.",
    previousSlide: "Slaid sebelumnya",
    nextSlide: "Slaid seterusnya",
    goToSlide: "Pergi ke slaid",
  },
};

export default function Home({ language = "th", setLanguage }) {
  const [activeLeader, setActiveLeader] = useState(0);
  const content = text[language];
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
      <Navbar activeTheme="blue" language={language} setLanguage={setLanguage} />

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
          aria-label={content.previousSlide}
          onClick={goToPrevious}
          className="absolute bottom-8 left-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:left-8 xl:left-12"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label={content.nextSlide}
          onClick={goToNext}
          className="absolute bottom-8 right-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-4xl md:right-8 xl:right-12"
        >
          ›
        </button>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-10">
          <div className="grid w-full items-center gap-8 xl:grid-cols-[0.85fr_1.3fr_0.85fr]">
            <ProfileCard leader={sideLeader} language={language} muted />

            <div className="order-first mx-auto flex max-w-4xl flex-col items-center text-center text-white xl:order-none">
              <p className="mx-auto mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/75 sm:text-sm sm:tracking-[0.45em]">
                Islamic Education
              </p>

              <div className="relative flex w-full max-w-[420px] flex-col items-center sm:max-w-[520px] lg:max-w-[580px]">
                <div className="absolute inset-x-8 bottom-20 h-32 rounded-full bg-white/20 blur-2xl" />
                <img
                  key={currentLeader.name[language]}
                  src={currentLeader.photo}
                  alt={currentLeader.name[language]}
                  className={`relative z-10 max-h-[54vh] w-auto max-w-full object-contain drop-shadow-2xl transition duration-300 sm:max-h-[60vh] lg:max-h-[64vh] ${currentLeader.imageClass}`}
                />
                <div className="relative z-20 -mt-8 w-full max-w-md rounded-2xl bg-white/92 px-6 py-5 text-center shadow-2xl backdrop-blur-md sm:-mt-10">
                  <h1 className="text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
                    {currentLeader.name[language]}
                  </h1>
                  <p className="mt-2 text-lg font-extrabold text-blue-600 sm:text-2xl">
                    {currentLeader.role[language]}
                  </p>
                </div>
              </div>
            </div>

            <ProfileCard leader={sideLeader} language={language} />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {leaders.map((leader, index) => (
            <button
              key={leader.name.en}
              type="button"
              aria-label={`${content.goToSlide} ${index + 1}`}
              onClick={() => setActiveLeader(index)}
              className={`h-3 rounded-full transition-all ${
                activeLeader === index ? "w-10 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-600 to-sky-500" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1fr] lg:px-10">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-sky-500 sm:text-sm">
              {content.socialLabel}
            </p>
            <h2 className="max-w-xl text-5xl font-black leading-[1.05] text-slate-950 sm:text-6xl lg:text-7xl">
              {content.socialTitle}
              <span className="block text-sky-500">{content.socialTitleAccent}</span>
            </h2>
            <p className="mt-7 max-w-2xl border-l-4 border-slate-300 pl-5 text-lg font-bold leading-9 text-slate-600">
              {content.socialDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 min-w-64 items-center justify-center gap-3 bg-blue-600 px-7 text-base font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-sm font-black text-blue-600">
                  f
                </span>
                {content.pageButton}
              </a>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-sky-500 shadow-lg ring-1 ring-slate-200">
                  +
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    {content.followersLabel}
                  </p>
                  <p className="text-xl font-black text-slate-950">1.2K+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-4 top-4 h-full w-full bg-sky-500" />
            <div className="relative bg-white p-4 shadow-2xl ring-1 ring-slate-200 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="h-7 bg-blue-600 text-center text-sm font-black text-white">
                  {content.follow}
                </div>
                <div className="border-b border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoPhoto}
                      alt="Pattana Islam Educational Foundation"
                      className="h-11 w-11 rounded-full object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <p className="text-base font-black text-slate-950">{content.schoolName}</p>
                      <p className="text-sm font-bold text-slate-500">
                        Pattana Islam Educational Foundation
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
                    {content.cardText}
                  </p>
                </div>
                <div className="bg-sky-100 p-5">
                  <a
                    href={facebookPageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-lg bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-32 bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-400 p-5 text-white sm:h-40">
                      <p className="text-sm font-black opacity-80">PATTANA ISLAM</p>
                      <p className="mt-2 max-w-xs text-2xl font-black leading-tight">
                        {content.previewTitle}
                      </p>
                    </div>
                    <div className="relative px-5 pb-5 pt-12">
                      <img
                        src={logoPhoto}
                        alt="Pattana Islam Educational Foundation"
                        className="absolute -top-10 left-5 h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                      />
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xl font-black leading-tight text-slate-950">
                            {content.schoolName}
                          </p>
                          <p className="mt-1 text-sm font-bold text-slate-500">
                            Pattana Islam Educational Foundation
                          </p>
                          <p className="mt-2 text-sm font-semibold text-slate-700">
                            {content.followersCount}
                          </p>
                        </div>
                        <span className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-black text-white">
                          {content.openPage}
                        </span>
                      </div>
                      <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-bold leading-6 text-slate-700">
                          {content.previewText}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProfileCard({ leader, language, muted = false }) {
  return (
    <div className={`hidden xl:flex ${muted ? "justify-end opacity-55" : "justify-start opacity-70"}`}>
      <div className="relative h-[420px] w-[240px] overflow-hidden rounded-t-full bg-white/20 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm 2xl:h-[460px] 2xl:w-[270px]">
        <img
          src={leader.photo}
          alt={leader.name[language]}
          className={`absolute inset-x-0 bottom-0 mx-auto h-full max-h-none w-auto max-w-none object-contain object-bottom ${leader.imageClass}`}
        />
        <div className="absolute bottom-8 left-5 right-5 rounded-lg bg-white/82 p-4 text-center shadow-lg backdrop-blur">
          <p className="text-sm font-black text-slate-900">{leader.name[language]}</p>
          <p className="text-xs font-bold text-blue-600">{leader.role[language]}</p>
        </div>
      </div>
    </div>
  );
}
