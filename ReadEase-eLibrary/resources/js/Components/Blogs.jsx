import "../../css/blogs.css";
import "../../css/index2.css";
import blog1 from "../../images/blog1.jpg"
import  blog2 from "../../images/blog2.jpg"
import blog3  from "../../images/blog3.jpg"

function Blogs() {
  return (
 

<section className="blogs">
  <div className="container">
      <div className="row">
          <div className="col-12 text-center">
              <h2 className="section__title">Blogs</h2>
          </div>
          <div className="col-lg-4">
              <div className="blog_box blog-1">
                  <div className="box-img">
                      <img className="img-fluid" src={blog1} alt="image-blog1"/>
                      <a href="#"><i className="fas fa-arrow-right"></i></a>
                  </div>
                  <div className="content">
                      <h4><a href="#">The Art Of Reading</a></h4>
                      <ul>
                          <li> Strategies</li>
                          <li className="last-child"> Techniques </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="blog_box">
                  <div className="box-img">
                      <img className="img-fluid" src={blog2} alt="image-blog2"/>
                      <a href="#"><i className="fas fa-arrow-right"></i></a>
                  </div>
                  <div className="content">
                      <h4><a href="#">How Reading Can Change Your Mentality</a></h4>
                      <ul>
                          <li>Advertising</li>
                          <li className="last-child">Grow</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="blog_box blog-3">
                  <div className="box-img">
                      <img className="img-fluid" src={blog3} alt="image-blog3" />
                      <a href="#"><i className="fas fa-arrow-right"></i></a>
                  </div>
                  <div className="content">
                      <h4><a href="#">Best Books over History</a></h4>
                      <ul>
                          <li>Historical </li>
                          <li className="last-child">Literature</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>





</section>
);
}

export default Blogs;
