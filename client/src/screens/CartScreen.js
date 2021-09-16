import React from "react";
import styles from "../components/styles/cartScreen.module.css";
import { DeleteOutline, Favorite, Add, PlayArrow } from "@material-ui/icons";
export default function CartScreen() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.main_title_container}>
            <div className={styles.total_item_container}>
              Shipping Cart <span className={styles.light}>(5 Items)</span>
            </div>
            <button className={styles.remove_all_btn}>
              <DeleteOutline className={styles.icon}></DeleteOutline>
              REMOVE ALL
            </button>
          </div>
          <div className={styles.row}>
            <div className={styles.col_1}>
              <div className={styles.image_container}>
                <img src='/images/3_3629.jpg' alt='' className={styles.img} />
              </div>
            </div>
            <div className={styles.col_2}>
              <div className={styles.sub_row_1}>
                <div className={styles.product_name}>
                  Intel Core i7 10th Gen - Core i7-10700K Comet Lake 8-Core 3.8
                  GHz LGA 1200 125W Desktop Processor w/ Intel UHD Graphics 630
                </div>
                <div className={styles.qty_container}>
                  <div className={styles.qty_box}>
                    <form className={styles.qty_form}>
                      <select className={styles.qty}>
                        <option value='1'>1</option>
                      </select>
                    </form>
                  </div>
                  <div className={styles.stock}>Qty: 5</div>
                </div>
                <div className={styles.product_price}>৳442.22</div>
              </div>
              <div className={styles.sub_row_2}>
                <button className={styles.wish_list_btn}>
                  <Favorite className={styles.icon}></Favorite>
                  MOVE TO WISHLIST
                </button>

                <button className={styles.remove_product_btn}>
                  <DeleteOutline className={styles.icon}></DeleteOutline>
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.cart_box}>
            <div className={styles.cart_title}>Summary</div>
            <div className={styles.cart_item}>
              <div className={styles.light_text}>Items</div>
              <div className={styles.items_price}>৳1000</div>
            </div>
            <div className={styles.cart_delivery}>
              <div className={styles.delivery_text}>Delivery Charge</div>
              <div className={styles.items_price}>৳1000</div>
            </div>
            <div className={styles.cart_tax}>
              <div className={styles.tax_text}>Tax Amount</div>
              <div className={styles.items_price}>৳100</div>
            </div>
            <div
              onClick={() => console.log("Clicked")}
              className={styles.promo_section}
            >
              <div className={styles.promo_1st_part}>
                <div className={styles.promo}>APPLY PROMO CODE</div>
                <div className={styles.promo_plus_btn}>
                  <Add className={styles.plus_icon}></Add>
                </div>
              </div>
              <div className={`${styles.active_promo} ${styles.hide}`}>
                <input type='text' className={styles.promo_input} />
                <button className={styles.promo_apply_btn}>APPLY</button>
              </div>
            </div>
            <div className={styles.total_price_section}>
              <div className={styles.total_price_text}>Est. Total:</div>
              <div className={styles.total_price_value}>৳1111</div>
            </div>
            <div className={styles.checkout_container}>
              <button className={styles.secure_payment}>
                SECURE CHECKOUT
                <PlayArrow className={styles.arrow_icon}></PlayArrow>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
