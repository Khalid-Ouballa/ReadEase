import React, { useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { Link as ScrollLink } from "@inertiajs/react";
import $ from "jquery";
import logos from "../../images/logo.png";
import "../../css/home.css";
import "../../css/index.css";
import "../../css/fontAwesome/css/all.min.css";
import about from "../../images/home2.png";

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            let navbar = $(".nv");
            let aboutSection = $(".about-section");
            let oTop = aboutSection.offset().top - window.innerHeight + 400;

            console.log("Scroll Top:", $(window).scrollTop());
            console.log("oTop:", oTop);

            if ($(window).scrollTop() > oTop) {
                navbar.addClass("sticky");
            } else {
                navbar.removeClass("sticky");
            }
        };
        $(window).on("scroll", handleScroll);
        return () => {
            $(window).off("scroll", handleScroll);
        };
    }, []);

    // auto scrool
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 400,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <div>
            <section className="section-1">
                <div className=" container-fluid p-0  con">
                    <nav className="nv">
                        <a href="#" className="logo ">
                            <img src={logos} alt="Logo" />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-align-right text-dark"></i>
                        </button>

                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section-1"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => scrollToSection("section-1")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about-section"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() =>
                                        scrollToSection("about-section")
                                    }
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="featured section"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() =>
                                        scrollToSection("featured section")
                                    }
                                >
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section-4"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => scrollToSection("section-4")}
                                >
                                    Opinions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="blogs"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => scrollToSection("blogs")}
                                >
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to=" theFooter"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => scrollToSection("theFooter")}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="log">
                                <a href="#">Log In</a>
                            </li>
                        </ul>

                        <ScrollLink
                            href={route("register")}
                            className="login-link"
                        >
                            <div className="form">
                                <i
                                    className="fa-solid fa-user login-button"
                                    id="login-button"
                                ></i>
                            </div>
                        </ScrollLink>
                    </nav>
                </div>

                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-7 col-sm-12  text-dark">
                            <h1>Browse &</h1>
                            <h1>Select E-Books</h1>
                            <p>
                                Discover the best e-books from your favorite
                                writers and explore hundreds of books across
                                various categories. Find captivating stories,
                                insightful knowledge, and thrilling adventures
                                at your fingertips
                            </p>
                            <ScrollLink
                                href={route("register")}
                                className="login-link"
                            >
                                <button className="btn btn-light px-5 py-2 btn-outline-primary ">
                                    Signup to read
                                </button>
                            </ScrollLink>
                        </div>

                        <div className="col-md-5 col-sm-12  h-25 ">
                            <img src={about} alt="Book" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
