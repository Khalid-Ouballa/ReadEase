import { Link } from "@inertiajs/react";
import  "./../../css/pagination.css";

export default function Pagination({links}) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
        preserveScroll
        href={link.url || ""}
        key={link.label}
        className={
          "inline-block py-2 px-3 rounded-lg pagcolor text-xs " +
          (link.active ? "activebg " : " ") +
          (!link.url ? "!pagcolor cursor-not-allowed " :
          "hover:active")
        }
        dangerouslySetInnerHTML={{__html: link.label}}
        ></Link>
      ))}
    </nav>
  );
}
