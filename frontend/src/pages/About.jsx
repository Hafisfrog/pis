import Navbar from "../components/Navbar";

const text = {
  th: {
    title: "เกี่ยวกับโรงเรียน",
    body: "โรงเรียนมุ่งเน้นการพัฒนาผู้เรียนทั้งด้านวิชาการ คุณธรรม และเทคโนโลยี",
  },
  en: {
    title: "About The School",
    body: "The school focuses on developing learners in academics, morality, and technology.",
  },
  ms: {
    title: "Tentang Sekolah",
    body: "Sekolah memberi tumpuan kepada pembangunan pelajar dalam bidang akademik, akhlak, dan teknologi.",
  },
};

export default function About({ language = "th", setLanguage }) {
  const content = text[language];

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="mx-auto max-w-5xl px-6 pt-32">
        <h1 className="mb-8 text-5xl font-bold text-blue-700">{content.title}</h1>
        <p className="text-lg leading-relaxed text-gray-700">{content.body}</p>
      </div>
    </div>
  );
}
