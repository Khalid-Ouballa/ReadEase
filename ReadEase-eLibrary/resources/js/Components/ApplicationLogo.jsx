import { Link } from "@inertiajs/react";
import logo from "../../images/logo2.png";
export default function ApplicationLogo() {
    return (
        <Link href={route("Homepage")} >
            <img src={logo} alt="logo" />
        </Link>
    );
}
