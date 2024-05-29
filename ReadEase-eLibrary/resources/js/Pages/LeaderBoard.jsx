import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import "@/Pages/css/leaderBoard.css";
import React from "react";
import Pagination from "@/Components/Pagination";

export default function LeaderBoard({ auth, usersWithReadBooksCount }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          LeaderBoard
        </h2>
      }
    >
      <Head title="LeaderBoard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 container">
            <p className="paraNote mb-4">
              <div>Note: </div>
              <div>If two users have the same number of pages read, the number of books they have completed will be used as a tiebreaker.</div>
            </p>
          <div className="bg-white  shadow-xl sm:rounded-lg p-perso table-container">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages Read</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Books Completed</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersWithReadBooksCount.data.map((user, index) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{(usersWithReadBooksCount.current_page - 1) * 10 + index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.total_pages_read}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.books_completed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
              <Pagination links={usersWithReadBooksCount.links} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
