import { Swiper, SwiperSlide } from "swiper/react";
/// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Slide from "./Slide";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper overflow-hidden"
      >
        {/* sumedha */}
        <SwiperSlide className="">
          <Slide heading="Sumedha" bg="bgBlue" livelink="https://github.com/ishubham21/SIH-parent" repolink="https://sih-parent.vercel.app/" />
        </SwiperSlide>
        {/* Curenimal */}
        <SwiperSlide className="">
          <Slide heading="Curenimal" bg="bgGreen" livelink="https://gdsc-rtu.github.io/Solution-Challenge-CureNimal/" repolink="https://github.com/GDSC-RTU/Solution-Challenge-CureNimal" />
        </SwiperSlide>
        {/* tedx */}
        <SwiperSlide>
          <Slide heading="TEDxRTU" bg="bgRed" livelink="http://www.tedxrtu.com/" repolink="https://github.com/SukritiR29/tedx-rtu" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
