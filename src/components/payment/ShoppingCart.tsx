import React from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
export default function ShoppingCart() {
  return (
    <div className={styles.container}>
      <div className={styles.cart_header}>
        <span className={styles.title}>상품</span>
        <span className={styles.qty}>수량</span>
        <span className={styles.price}>가격</span>
      </div>
      <div className="cart-container">
        <ul className={styles.cartList}>
          <CartItem />
        </ul>
      </div>
    </div>
  )
}
