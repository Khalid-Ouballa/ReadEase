import "../../css/index2.css";
import "../../css/featured.css";
import bookimg1 from "../../images/feature-img01.jpg";
import bookimg2 from "../../images/feature-img02.jpg";
import bookimg3 from "../../images/feature-img03.jpg";
import bookimg4 from "../../images/feature-img04.jpg";
import bookimg5 from "../../images/feature-img05.jpg";
import bookimg6 from "../../images/feature-img06.jpg";
import bookimg7 from "../../images/feature-img07.jpg";
import bookimg8 from "../../images/feature-img08.jpg";
import bookimg9 from "../../images/feature-img09.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Featured() {
  return (
    <div>
      <section className="featured section" id="featured">
        <h2 className="section__title">Featured Books</h2>
        <div className="featured__container container">
          <div className="featured__swiper swiper">
            <div className="featured__wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={25}
                slidesPerView={"auto"}
                centeredSlides={"auto"}
                grabCursor={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  700: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg1} alt="photo1" className="featured__img" />
                    <h2 className="featured__title">Holly</h2>
                    <div className="book__author">
                      <span className="author">Stephen King</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg2} alt="photo2" className="featured__img" />
                    <h2 className="featured__title">Shattered</h2>
                    <div className="book__author">
                      <span className="author">Dick Francis</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg3} alt="photo3" className="featured__img" />
                    <h2 className="featured__title">Free Fall</h2>
                    <div className="book__author">
                      <span className="author">Peter Cawdron</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg4} alt="photo4" className="featured__img" />
                    <h2 className="featured__title">Cleverlands</h2>
                    <div className="book__author">
                      <span className="author">Lucy Crehan</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg5} alt="photo5" className="featured__img" />
                    <h2 className="featured__title">Red Queen</h2>
                    <div className="book__author">
                      <span className="author">Victoria Aveyard</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg6} alt="photo6" className="featured__img" />
                    <h2 className="featured__title">Boring Girls</h2>
                    <div className="book__author">
                      <span className="author">Sara Taylor</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg7} alt="photo7" className="featured__img" />
                    <h2 className="featured__title">Sugar Run</h2>
                    <div className="book__author">
                      <span className="author">Mesha Maren</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg8} alt="photo8" className="featured__img" />
                    <h2 className="featured__title">The Sin Eater</h2>
                    <div className="book__author">
                      <span className="author">Megan Campisi</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="featured__card">
                    <img src={bookimg9} alt="photo9" className="featured__img" />
                    <h2 className="featured__title">The Giver</h2>
                    <div className="book__author">
                      <span className="author">Lois Lowry</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;

