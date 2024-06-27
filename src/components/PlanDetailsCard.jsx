import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PlanDetailsCard({ plan }) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="max-w-3xl rounded-lg overflow-hidden shadow-lg m-4">
      <Swiper
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          <SwiperSlide className="w-full object-cover">
            <img
              className="w-full object-cover"
              // src={plan.images}
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719426230/final-project-ironhack/landscape_joebf9.jpg"
              alt="Image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover"
              // src={plan.images}
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719498817/final-project-ironhack/tokyo_m1qdxm.webp"
              alt="Image"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover"
              // src={plan.images}
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719506784/final-project-ironhack/testimg3_xpl8oi.webp"
              alt="Image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover"
              // src={plan.images}
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719506777/final-project-ironhack/testimg2_p1iowm.avif"
              alt="Image"
            />
          </SwiperSlide>
        </div>
      </Swiper>

      {/* Plan Details */}
      <div className="px-6 py-4">
        {/* Country */}
        <div className=" text-xl font-semibold mb-2 font-manrope">{plan.country}</div>

        {/* Cities */}
        <p className="text-gray-700 text-base mb-2 font-manrope font-medium">Cities: {plan.cities}</p>

        <div className="mb-2 font-manrope font-light">
          <details>
            <summary>Additional Info:</summary>
            <ul>
              <li>Official Language: {plan.stats.officialLanguage}</li>
              <li>Population: {plan.stats.population}</li>
              <li>Capital: {plan.stats.capitalCity}</li>
              <li>Currency: {plan.stats.currency}</li>
              <li>Power outlet: {plan.stats.powerOutlet}</li>
            </ul>
          </details>
        </div>

        {/* Content */}
        <p className="text-gray-700 text-base mb-2 font-montserrat">{plan.content}</p>
      </div>
    </div>
  );
}

export default PlanDetailsCard;
