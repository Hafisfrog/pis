import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="pt-32 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-8">
          เกี่ยวกับโรงเรียน
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          โรงเรียนมุ่งเน้นการพัฒนาผู้เรียนทั้งด้านวิชาการ
          คุณธรรม และเทคโนโลยี
        </p>
      </div>
    </div>
  );
}