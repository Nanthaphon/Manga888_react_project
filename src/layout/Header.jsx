import Search from "../components/Search";
export default function Header() {
  return (
    <div className="bg-orange-400 w-full h-24 flex items-center shadow-lg justify-between">
      <div className="flex gap-8 items-center mx-8 text-white">
        <h1 className="font-bold text-2xl">Manga888</h1>
        <h1>หน้าหลัก</h1>
        <h1>ขายดี</h1>
        <h1>รายชื่อมังงะ</h1>
        <h1>โดจิน</h1>
      </div>
      <div className="flex items-center mx-8">
        <Search />
        <div className="bg-green-600 text-white w-[250px] h-[35px] flex items-center justify-center rounded-lg">
          ล็อกอินเข้าระบบ/สมัครสมาชิก
        </div>
      </div>
    </div>
  );
}
