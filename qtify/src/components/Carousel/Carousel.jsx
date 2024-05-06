import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ReactComponent as CarouselLeftNav } from '../../assets/LeftArrow.svg';
import { ReactComponent as CarouselRightNav } from '../../assets/RightArrow.svg';
import styles from './Carousel.module.css';


const Controls = ( {data} ) => {
    const swiper = useSwiper();
    useEffect( () => {
      swiper.slideTo(0,1);
    }, [data, swiper])
    return <></>;
  }
  
  function Carousel({ data, renderComponent }) {
    return (
      <div className={styles.wrapper}>
        <Swiper style={ {padding : '0px 20px'} } initialSlide={0} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
          <Controls data = {data} />
          <CarouselLeftNav />
          <CarouselRightNav />
          { data.map( (ele) => {
            return(
              <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
            )
          } ) }
        </Swiper>
      </div>
    )
  }
  
  export default Carousel;