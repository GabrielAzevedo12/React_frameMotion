// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const Swiper_Teste = (props) => {
    const style_default = {
        minWidth: props.width || "40vw",
        height: props.height || "500px",
        marginLeft: 0,
        marginRight: 0,
        borderRadius: "30px",
        fontSize: "2rem",
        fontWeight: 500,
        positon: "relative",
        background: "radial-gradient(rgb(175, 29, 85) -80%,black)",
        color: "rgb(32, 36, 39)"
    }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={style_default}>Slide 1</SwiperSlide>
      <SwiperSlide style={style_default}>Slide 2</SwiperSlide>
      <SwiperSlide style={style_default}>Slide 3</SwiperSlide>
      <SwiperSlide style={style_default}>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};