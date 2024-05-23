'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function questioncreat() {
  const [formAction, setFormAction] = useState('');

  const handleCancelClick = () => {
    setFormAction('/login/admin/question_info');
  };

  const handleRegisterClick = () => {
    setFormAction('/login/admin/question_info');
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(/img/3.gif)" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              問題作成
            </h1>
            <form className="space-y-4 md:space-y-6" action={formAction} method="post">
                <div>
            <label htmlFor="eventname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">対応イベント名</label>
                        <select value="user.role" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="normal">null</option>
                            <option value="admin">null</option>
                        </select>
                </div>
              <div>
                <label htmlFor="questionname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">問題名</label>
                <input type="questionname" maxLength={256} id="questionname" name="questionname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NAME" required />
              </div>
              <div>
                <label htmlFor="difficulty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">難易度</label>
                <input type="difficulty" maxLength={256} id="difficulty" name="difficulty" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LEVEL" required />
              </div>
              <div>
                <label htmlFor="timelimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">時間制限</label>
                <input type="timelimit" maxLength={256} id="timelimit" name="timelimit" placeholder="2000" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="memorylimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メモリ制限</label>
                <input type="memorylimit" maxLength={256} id="memorylimit" name="memorylimit" placeholder="2000000" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
              <label htmlFor="questioncontent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">問題内容</label>
              <textarea id="questioncontent" name="questioncontent" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required ></textarea>
              </div>
              <div>
                <label htmlFor="memorylimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メモリ制限</label>
                <input type="memorylimit" maxLength={256} id="memorylimit" name="memorylimit" placeholder="2000000" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex mt-7 justify-center w-full space-x-4">
                <button type="submit" className="text-sm w-full bg-purple-500 hover:bg-purple-700 text-white px-7 py-2 rounded focus:outline-none focus:shadow-outline" onClick={handleRegisterClick}>作成</button>
              </div>
            </form>
            <div className="space-y-4 md:space-y-6">
            <div className="justify-center ">
                <form action={formAction}>
                <button type="submit" className="text-sm w-full bg-gray-500 hover:bg-gray-700 text-white px-7 py-2 rounded focus:outline-none focus:shadow-outline" onClick={handleCancelClick}>キャンセル</button>
                </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}