import "../../css/opinions.css";
import "../../css/index2.css";
import face1  from "../../images/UI-face-1.jpg";
import face2  from "../../images/UI-face-2.jpg";
import face3  from "../../images/UI-face-3.jpg";
import face4  from "../../images/UI-face-4.jpg";



function Opinions() {


  return (

  <section className="section-4">
  <div className="container text-center">
    <h2  className="section__title">What our Reader's Say about us</h2>
    <p className="text-secondary">Stay Focused</p>
  </div>
  <div className="team row  ">
    <div className="col-md-4 col-12 text-center">
        <div className="card mr-2 d-inline-block shadow-lg f"  >
            <div className="card-img-top">
              <img src={face3} className="img-fluid border-radius p-4 mx-auto" alt=""/>
            </div>
            <div className="card-body "   >
              <h3 className="card-title">Blalock Jolene</h3>
              <p className="card-text">
              This website is a book lover's gem! Intuitive interface, captivating recommendations, and insightful articles.
               Efficient search function for finding titles and exploring genres.
               A fantastic resource for diving into the world of books!
                 It's a fantastic resource for anyone looking to dive into the world of books.
              </p>
              <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
       <div className="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star-half-stroke"></i>
       </div>
            </div>
          </div>
    </div>
    <div className="col-md-4 col-12">
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <div className="card mr-2 d-inline-block shadow fx">
                  <div className="card-img-top">
                    <img src={face1} className="img-fluid rounded-circle w-50 p-4 mx-auto" alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Allen Agnes</h3>
                    <p className="card-text">
                    I rely on this website for all my book-related needs. It's a reliable and trustworthy source for book reviews and recommendations.
                     The website maintains a high standard of quality, ensuring that their reviews are honest and unbiased.
                    </p>
                    <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                    <div className="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star-half-stroke"></i>
       </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card  d-inline-block mr-2 shadow fx"  >
                  <div className="card-img-top">
                    <img src={face2} className="img-fluid rounded-circle w-50 p-4 mx-auto" alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Amiel Barbara</h3>
                    <p className="card-text">
                      The best website to read books .
                    </p>
                    <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                    <div className="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       
       </div>
                  </div>
                </div>
              </div>
          </div>
    </div>
    </div>
    <div className="col-md-4 col-12 text-center">
        <div className="card mr-2 d-inline-block shadow-lg f">
            <div className="card-img-top">
              <img src={face4} className="img-fluid border-radius p-4 mx-auto" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Olivia Louis</h3>
              <p className="card-text">
              I absolutely love this website! They have an extensive collection of books from various genres and authors. 
              The website is easy to navigate, and I appreciate the detailed book descriptions and reviews provided.
               It's my go-to place for discovering new books and expanding my reading list. Highly recommended for all book lovers!
              </p>
              <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
              <div className="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       </div>
            </div>
          </div>
    </div>
  </div>
</section>
  );
  }
  
  export default Opinions;