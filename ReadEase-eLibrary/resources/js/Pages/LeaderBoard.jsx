import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import "@/Pages/css/leaderBoard.css";
import React from "react";
export default function LeaderBoard({ auth, usersWithReadBooksCount }) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
       <div className="inline-block flex justify-center items-center ">
        <h2 className="font-semibold text-xl text-gray-800 leading-tight  border-b-2 border-transparent hover:border-blue-500 transition duration-300">
          LeaderBoard
        </h2>
        </div>
      }
    >
      <Head title="LeaderBoard" />
      {/* write under this comment Younes */}
      <div className="mt-9 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 lg:mb-8 text-center font-semibold text-gray-800">
    Welcome to the Leaderboard page
  </h2>
  <div className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8 sm:mb-12 lg:mb-16">
    <p className="px-2 sm:px-0">
      This is where we celebrate the avid readers and their literary journeys. Dive into the world of books and discover the most enthusiastic readers among us. From classic literature to modern masterpieces, our leaderboard showcases the dedication and passion of book lovers like you. Join us on this literary adventure and let's explore the fascinating world of reading together.
    </p>
  </div>
</div>
<div className="flex justify-center items-center mb-4 mr-32 ">
<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between px-4 sm:px-6 lg:px-8    ">
  <h1 className="text-2xl sm:text-xl lg:text-xl mt-6 sm:mt-14 mr-0 sm:mr-32 lg:mr-0 sm:pl-0 lg:pl-24 ">
    ALL TEAMS
  </h1>
</div>
</div>
      <div className="mb-12 mx-12 ">
      <div className="relative overflow-x-auto mx-12 flex justify-center items-center ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='justify-center items-center border-b-2 border-transparent hover:border-green-500 transition duration-300'>
            <th scope="col" className="px-6 py-3">
                   Rank
                </th>
                <th scope="col" className="px-6 py-3">
                    name
                </th>
                <th scope="col" className="px-6 py-3">
                    books_read
                </th>
                <th scope="col" className="px-6 py-3">
                    numPages
                </th>
                
            </tr>
        </thead>
        <tbody>
            {usersWithReadBooksCount?.map((users, index) => (
                <tr key={users.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 justify-center items-center ">
                    <td className='px-1 py-2'> 
                      {index +1}
                    </td>
                    <td class="px-6 py-4">
                        {users.name}
                    </td>
                    <td className='px-1 py-2'> 
                      {users.books_read}
                    </td>
                    <td className='px-1 py-2'> 
                      {users.total_pages_read}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
   </div>
  </div>
  <div className="text-center mb-8  bg-red-400 p-4 mx-96 rounded-2xl">
  <p className="text-lg text-gray-700">Users are ranked based on the number of pages they've read.</p>
  <p className="text-lg text-gray-700">In case of a tie, ranking is determined by the number of books they've read.</p>
</div>

    </AuthenticatedLayout>
  );
}

