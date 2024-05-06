import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './CarouselRightNav.module.css';
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg';
import { useEffect } from 'react';

function CarouselRightNav() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
  useEffect( () => {
    swiper.on('slideChange', function() {
      setIsEnd(swiper.isEnd);
    })
  }, )

  return (
    <div className={styles.rightNavigation}>
      { !isEnd && <RightArrow onClick= { () => swiper.slideNext() } /> }
    </div>
  )
}

export default CarouselRightNav