import React from 'react'
import styles from './Hero.module.css'
import heroimage from '../../assets/hero_headphones.png'

function Hero({heading1, heading2}) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>{heading1}</h2>
          <h2>{heading2}</h2>
        </div>
        <div className={styles['img-frame']}>
          <img src={heroimage} alt="Headphones" />
        </div>
      </div>
    </section>
  )
}

export default Hero