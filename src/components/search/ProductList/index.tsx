import React from 'react'
import styles from './index.module.scss'
import Filter from '../Filter'
import { SearchProductsResponse } from '@/types/product'
import Product from '../Product'

const dummyProducts: SearchProductsResponse = [
  {
    id: 'nbqtQvEiasfdTDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSSQEutyEXTDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtQvjtaeEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtaefnSTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtASnfdTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nqwgvYwASDDet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtdfgdfbsDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSrtbshEivYzxcDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nAVivYwEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtTRBHUKNYOvYwSzzSTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbrVdadDvYwSSTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqVredjnyadet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbgwerBUYNDdTDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbasabvcutyEXTDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqqwetneEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtaejhrzswTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbbzgeSnfdTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nqwbzsgeASDDet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtdfgdbzdrDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSSxoryzxcDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqaxiovYwEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nnaeEpouet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtzaandfnafndTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtndtjhsdadet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  }
]

export default function ProductList() {
  return (
    <div className={styles.container}>
      <Filter />
      <ul className={styles.list}>
        {dummyProducts.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </ul>
    </div>
  )
}
