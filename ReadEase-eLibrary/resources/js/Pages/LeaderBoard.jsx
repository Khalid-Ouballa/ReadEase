import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import "@/Pages/css/leaderBoard.css";

export default function LeaderBoard({ auth }) {
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
      {/* write under this comment Younes */}
    </AuthenticatedLayout>
  );
}
