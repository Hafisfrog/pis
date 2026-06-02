import Navbar from "../components/Navbar";

const text = {
  th: {
    title: "ติดต่อโรงเรียน",
    phone: "โทร: 080-000-0000",
    email: "Email: school@gmail.com",
    address: "ที่อยู่: จังหวัดยะลา ประเทศไทย",
  },
  en: {
    title: "Contact The School",
    phone: "Phone: 080-000-0000",
    email: "Email: school@gmail.com",
    address: "Address: Yala Province, Thailand",
  },
  ms: {
    title: "Hubungi Sekolah",
    phone: "Telefon: 080-000-0000",
    email: "Email: school@gmail.com",
    address: "Alamat: Wilayah Yala, Thailand",
  },
};

export default function Contact({ language = "th", setLanguage }) {
  const content = text[language];

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="mx-auto max-w-5xl px-6 pt-32">
        <h1 className="mb-8 text-5xl font-bold text-blue-700">{content.title}</h1>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p className="mb-4">{content.phone}</p>
          <p className="mb-4">{content.email}</p>
          <p>{content.address}</p>
        </div>
      </div>
    </div>
  );
}
