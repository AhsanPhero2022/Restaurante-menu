import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img className=" mx-auto" src={slide1} alt="" />
          <h3 className="text-center text-4xl uppercase  -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={slide2} alt="" />
          <h3 className="text-center text-4xl uppercase  -mt-16 text-white">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={slide3} alt="" />
          <h3 className="text-center text-4xl uppercase  -mt-16 text-white">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={slide4} alt="" />
          <h3 className="text-center text-4xl uppercase  -mt-16 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={slide5} alt="" />
          <h3 className="text-center text-4xl uppercase  -mt-16 text-white">
            drinks
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
