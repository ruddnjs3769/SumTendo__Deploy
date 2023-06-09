import React from 'react'
import styles from './index.module.scss'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import './swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function SearchSwiper() {
  // https://stackoverflow.com/questions/74261179/how-to-create-swiper-slider-with-progress-bar
  return (
    <section id="searchSwiper" className={styles.container}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet(idx, className) {
            return `
            <div class="${className} ${styles.bullet}">
              <span></span>
            </div>`
          }
        }}
        autoplay={{
          delay: 3000
        }}
      >
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/poketmon_slide.webp" alt="poketmon" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/splatoon3_slide.webp" alt="splatoon3" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide_edition.webp" alt="zelda edition" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide.webp" alt="zelda slide" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
