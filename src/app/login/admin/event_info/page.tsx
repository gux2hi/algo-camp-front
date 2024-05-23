
"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Correct import for app directory in Next.js 13+

export default function eventform() {
    const router = useRouter();

  const handleLogout = () => {
    router.push("/login/admin");
  };
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(/img/3.gif)" }}>
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-4 flex justify-between w-full items-center">
          <button type="button" onClick={handleLogout} className="text-sm bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">戻る</button>
          <h1 className="text-3xl mx-auto">
          イベント管理
          </h1>
          <button type="button" className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">作成</button>
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
                  <button type="button" className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">編集</button>
                  <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">削除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}