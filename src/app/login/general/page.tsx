"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Correct import for app directory in Next.js 13+

export default function generalform() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm("ログアウトしますか");
    if (confirmLogout) {
      router.push("/login");
    }
  }

  const handleClick = () => {
    router.push("/login/general/question_list");
  };

  return (
<div className="bg-cover bg-center h-screen flex flex-col justify-between" style={{ backgroundImage: "url(/img/3.gif)" }}>
  <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="p-4 flex">
        <h1 className="text-3xl">
            イベント一覧
        </h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">イベントID</th>
                    <th className="text-left p-3 px-5">開始</th>
                    <th className="text-left p-3 px-5">終了</th>
                    <th></th>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5"><h1 className="bg-transparent">id</h1></td>
                <td className="p-3 px-5"><h1 className="bg-transparent">start</h1></td>
                <td className="p-3 px-5"><h1 className="bg-transparent">end</h1></td>
                <td className="p-3 px-5 flex justify-end">
                <button type="button" onClick={handleClick} className="mr-3 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">選択</button>
    </td>
</tr>
            </tbody>
        </table>
    </div>
    </div>
    <div className="w-full flex justify-end p-4">
        <button type="button" onClick={handleLogout} className="text-sm bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">ログアウト</button>
      </div>
</div>
  );
}