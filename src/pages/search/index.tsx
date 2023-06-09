import SearchSwiper from '@/components/search/SearchSwiper'
import Genre from '@/components/search/Genre'
import React from 'react'
import styles from './index.module.scss'
import SearchHeader from '@/components/search/Search'
import Banner from '@/components/search/Banner'
import ProductList from '@/components/search/ProductList'

const banners = [
  {
    id: '123',
    src: '/images/search/mario_banner.jpg',
    path: '/search/mario',
    title: 'mario software'
  }
]
export default function Search() {
  return (
    <main className={styles.container}>
      <div className={styles.containerWrapper}>
        <SearchHeader />
        <SearchSwiper />
        <div className={styles.cover}>
          <Genre />
          <div>
            {banners.map((banner) => (
              <Banner key={banner.id} banner={banner} />
            ))}
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}
