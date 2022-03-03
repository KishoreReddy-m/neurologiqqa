import React from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./NiqSwiper.less";

export interface Props extends SwiperProps {
  slides: JSX.Element[];
}
export const NiqSwiper = (props: Props) => {
  return (
    <Swiper
      className="niq-swiper"
      modules={[EffectCoverflow, Pagination]}
      {...props}
    >
      {props.slides.map((s, i) => (
        <SwiperSlide key={`slide_${i}`}>{s}</SwiperSlide>
      ))}
    </Swiper>
  );
};
