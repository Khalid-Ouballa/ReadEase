import "../../css/footer.css";
import "../../css/fontAwesome/css/all.min.css"
import logo from "../../images/logo2.png";
import "../../css/index2.css";

function Footer() {
  return (
    <div className="theFooter">
      <div className="footer__container myContainer grid">
        <div>
          <a href="#" className="footer__logo">
            <img src={logo} alt="logo" />
          </a>
          <p className="footer__description">
            Find and explore the best
            <br />
            eBooks from all your
            <br />
            favourite writers.
          </p>
        </div>
        <div className="footer__data grid">
          <div>
            <h3 className="footer__title">About</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__Link">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  Terms of services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__Link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  Our team
                </a>
              </li>
              <li>
                <a href="#" className="footer__Link">
                  Help center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__data grid">
          <div>
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__links">
              <li className="special">
                <address className="footer__info">
                  Campus Mghilla, BP 523
                  <br />
                  Beni Mellal 23000
                  <br />
                  Morocco
                </address>
              </li>
              <li>
                <address className="footer__info">
                  ReadEase@gmail.com
                  <br />
                  0606779898
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Contact</h3>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="blank"
                className="footer__social-link"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="footer__social-link"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="blank"
                className="footer__social-link"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="footer__copy">&#169; ALL Rights Reserved By ReadEase</span>
    </div>
  );
}
export default Footer;
