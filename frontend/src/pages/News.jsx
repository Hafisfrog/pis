import Navbar from "../components/Navbar";

export default function News() {
  return (
    <div>
      <Navbar />

      <div className="pt-32 px-6">
        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          ข่าวสารโรงเรียน
        </h1>

        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            กิจกรรมวันวิชาการ
          </h2>

          <p className="text-gray-600">
            โรงเรียนจัดกิจกรรมส่งเสริมการเรียนรู้และการแสดงผลงานนักเรียน
          </p>
        </div>
      </div>
    </div>
  );
}