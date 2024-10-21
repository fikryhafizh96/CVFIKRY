import "./fikry-style.css";
import foto from "./foto.jpeg";


function Profile() {
  return <img src={foto.src} alt="Fikry Hafizh" className="fotoku" />;
}

interface RowRiwayatProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

interface RowRiwayatPekerjaanProps {
  pekerjaan: string;
  tempat: string;
  tahun: string;
}

function RowRiwayat(props: RowRiwayatProps) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

function RowRiwayatPekerjaan(props: RowRiwayatPekerjaanProps) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.pekerjaan}</div>
          <div className="col-span-12 md:col-span-4">{props.tempat}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <div className="container ms-auto p-2 text-center">
      <h1 className="text-black font-bold">CV ONLINE</h1>
      <h1 className="text-3x1">Fikry Hafizh</h1>
      <Profile />
      <p>
        Saya adalah mahasiswa Universitas Masoem jurusan Komputerisasi Akuntansi semester 5. Hobi saya bermain game dan menggambar.
      </p>
      </div>

      {/* riwayat pendidikan */}
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text 2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN Sukaati" tahun="2009"/>
        <RowRiwayat jenjang="SMP" sekolah="SMPN 6 Sukangara" tahun="2015"/>
        <RowRiwayat jenjang="SMA" sekolah="SMAN 1 Sukanagara" tahun="2018"/>
        <RowRiwayat jenjang="Sarjana" sekolah="Universitas Masoem" tahun="2022"/>
      </div>

      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text 2x1">Riwayat Pekerjaan</h2>
        <RowRiwayatPekerjaan pekerjaan="Staff" tempat="PT.Berkah Jaya" tahun="2015"/>
        <RowRiwayatPekerjaan pekerjaan="Owner" tempat="Glosir Beras Iwan Cicalengka" tahun="2016"/>
        <RowRiwayatPekerjaan pekerjaan="Barista" tempat="Kedai Kopi Berkah" tahun="2019
        "/>
        <RowRiwayatPekerjaan pekerjaan="Panitia" tempat="Pilkades Cicalengka" tahun="2021"/>
      </div>
    </section>
  );
}
