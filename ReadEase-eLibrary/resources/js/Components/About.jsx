import "../../css/index2.css";
import "../../css/about.css";
import about_image from "../../images/aboutimage-modified.png";

function About() {
    return (
      <section className="about-section">
        <div className="container text-center">
          <h2 className="section__title">
            About Us
          </h2>
          <div className="row align-items-center">
            <div className="col-md-5 col-sm-12 order-md-2 text-dark">
              <p>
                Readease was born out of the shared passion and vision of three students determined to make reading an effortless and exhilarating experience for all. Our mission is simple yet powerful: to transform the way people engage with books and ignite a love for reading that knows no bounds.
              </p>
              <p>
                At Readease, we believe that reading is more than just words on a page—it is an immersive journey of discovery and wonder. Our magical library beckons you to embark on that journey, where you can explore captivating tales, uncover hidden gems, and immerse yourself in the joy of turning pages. We invite you to join us as we celebrate the sheer magic and power of words. 📚✨
              </p>
            </div>
            <div className="col-md-7 col-sm-12 order-md-1 ">
              <img src={about_image} alt="About-image" className="about-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;