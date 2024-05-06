import { Link } from "@inertiajs/react";
import logo from "../../images/logo2.png";
import "../../css/application.css";
export default function ApplicationLogo() {
  return (
    <Link href={route("Homepage")}>
      <img src={logo} alt="logo" class="logo" />
    </Link>
  );
}
