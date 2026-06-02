import Navbar from "../components/Navbar";

const text = {
  th: {
    title: "ข่าวสารโรงเรียน",
    cardTitle: "กิจกรรมวันวิชาการ",
    body: "โรงเรียนจัดกิจกรรมส่งเสริมการเรียนรู้และการแสดงผลงานนักเรียน",
  },
  en: {
    title: "School News",
    cardTitle: "Academic Fair Activities",
    body: "The school organizes activities to support learning and showcase student work.",
  },
  ms: {
    title: "Berita Sekolah",
    cardTitle: "Aktiviti Hari Akademik",
    body: "Sekolah menganjurkan aktiviti untuk menyokong pembelajaran dan mempamerkan hasil kerja pelajar.",
  },
};

export default function News({ language = "th", setLanguage }) {
  const content = text[language];

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="px-6 pt-32">
        <h1 className="mb-10 text-center text-5xl font-bold text-blue-700">{content.title}</h1>

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">{content.cardTitle}</h2>
          <p className="text-gray-600">{content.body}</p>
        </div>
      </div>
    </div>
  );
}
