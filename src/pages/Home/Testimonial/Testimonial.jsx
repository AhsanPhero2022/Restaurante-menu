import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading="what our client say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-18"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center  m-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-3xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
