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
          {/* MAP OVER plan.images and render a SwiperSlide structure just like below for each image */}

            {plan.images.map((image, index) => ( <SwiperSlide key={index} className="w-full object-cover">
            <img
              className="w-full object-cover"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>) )}
        </div>
      </Swiper>

      <div className="px-6 py-4">

        <div className=" text-xl mb-2">Country: {plan.country}</div>


        <p className="text-gray-700 text-base mb-2">Cities: {plan.cities}</p>

        <div className="mb-2">
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


        <p className="text-gray-700 text-base mb-2">{plan.content}</p>
      </div>
    </div>
  );
}

export default PlanDetailsCard;
