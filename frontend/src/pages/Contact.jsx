import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="pt-32 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-8">
          ติดต่อโรงเรียน
        </h1>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <p className="mb-4">
            โทร: 080-000-0000
          </p>

          <p className="mb-4">
            Email: school@gmail.com
          </p>

          <p>
            ที่อยู่: จังหวัดยะลา ประเทศไทย
          </p>
        </div>
      </div>
    </div>
  );
}