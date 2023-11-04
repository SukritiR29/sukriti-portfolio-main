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
          <Slide heading="Sumedha" bg="bgBlue" livelink="https://github.com/ishubham21/SIH-parent" repolink="https://sih-parent.vercel.app/" para="Finalist project under Smart India Hackathon 2022.
∗ A PWA app that unites with parents to provide proper holistic development to their children and push them to their
maximum potential"/>
        </SwiperSlide>
        {/* Curenimal */}
        <SwiperSlide className="">
          <Slide heading="Curenimal" bg="bgGreen" livelink="https://curenimal-app.vercel.app" repolink="https://github.com/SukritiR29/curenimal-app" para="A project for the ’Google Solution Challenge 2022’. The website helped stray as well as pet animals by giving the quick
and certified treatment and tracking the animal hospitals nearby."/>
        </SwiperSlide>
        {/* QAre */}
        <SwiperSlide className="">
          <Slide heading="QAre" bg="bgBlue" livelink="https://qare-liard.vercel.app" repolink="https://github.com/AniruddhaSoni/qare" para="A pioneering project that revolutionized marketing strategies by transforming traditional QR codes into dynamic,
trackable entities. Seamless QR code generation, secure backend operations, and comprehensive data storage, facilitating real-time insights
and analysis for marketers."/>
        </SwiperSlide>
        {/* AroundYou */}
        <SwiperSlide className="">
          <Slide heading="AroundYou" bg="bgBlue" livelink="https://weather-app-sukritir29.vercel.app" repolink="https://github.com/SukritiR29/weather_app" para="A pioneering project that revolutionized marketing strategies by transforming traditional QR codes into dynamic,
trackable entities. Seamless QR code generation, secure backend operations, and comprehensive data storage, facilitating real-time insights
and analysis for marketers."/>
        </SwiperSlide>
        {/* tedx */}
        <SwiperSlide>
          <Slide heading="TEDxRTU" bg="bgRed" livelink="http://www.tedxrtu.com/" repolink="https://github.com/SukritiR29/tedx-rtu" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
