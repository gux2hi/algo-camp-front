"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'; // Correct import for app directory in Next.js 13+

export default function adminform() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm("ログアウトしますか");
    if (confirmLogout) {
      router.push("/login");
    }
  };

  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-between" style={{ backgroundImage: "url(/img/3.gif)" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <main className="flex flex-col items-center justify-center space-y-5 w-full">
          <form action="./admin/user_info">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">ユーザー管理</span>
            </button>
          </form>

          <form action="./admin/question_info">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">問題管理</span>
            </button>
          </form>

          <form action="./admin/event_info">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">イベント管理</span>
            </button>
          </form>
        </main>
      </div>
      <div className="w-full flex justify-end p-4">
        <button type="button" onClick={handleLogout} className="text-sm bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">ログアウト</button>
      </div>
    </div>
  );
}
