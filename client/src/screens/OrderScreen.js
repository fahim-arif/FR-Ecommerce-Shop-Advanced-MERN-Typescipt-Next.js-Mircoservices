import React from "react";
import styles from "../components/styles/orderScreen.module.css";
import { Link } from "react-router-dom";
export default function OrderScreen() {
  return (
    <div className={styles.order_screen}>
      <div className={styles.order_screen_container}>
        <div className={styles.main_title}>ORDER DETAILS</div>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <div className={styles.side_bar}>
              <div className={styles.small}>Hello, Fahim</div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='#'>Manage My Account</Link>
                </div>

                <div className={styles.secondary_sidebar}>
                  <Link to='#'>My Profile</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Address Book</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>My Payment Option</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Voutchers / Coupons</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='#'>My Order</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Cancelled Orders</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>My Returns</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='#'>My Reviews</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar} style={{ padding: "0" }}>
                  <Link to='#'>My Wishlist</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.right_top}>
              <div className={styles.order_id}>Orders: sdkjlfhasdljkfh</div>
              <div className={styles.total_price}>
                Total: <span className={styles.bold}> ৳ 1,632</span>
              </div>
            </div>
            <div className={styles.right_main}>
              <div className={styles.status}>
                <span className={styles.status_light}>Status:</span>
                <span className={styles.status_value}>Not Delivered</span>
              </div>
              <div className={styles.animation_container}>
                <div className={styles.animation_status}>
                  <img src='/images/Group 31.png' alt='' className='' />
                </div>
                <div className={styles.animation_status}>
                  <div className={styles.processing}>Processing</div>
                  <div className={styles.processing}>Shipped</div>
                  <div className={styles.processing}>Delivered</div>
                </div>
              </div>
              <div className={styles.order_msg_container}>
                <div className={styles.order_msg}>
                  Your order is pending. Admin is looking into your payment.
                  Please wait a few minutes.
                </div>
              </div>
              <div className={styles.order_list_container}>
                <div className={styles.row}>
                  <div className={styles.col_1}>
                    <div className={styles.img_container}>
                      <img
                        src='/images/68-105-274-V01.jpg'
                        alt=''
                        className={styles.img}
                      />
                    </div>
                  </div>
                  <div className={styles.col_2}>
                    <div className={styles.order_title}>
                      Intel Core i7 10th Gen - Core i7-10700K Comet Lake 8-Core
                      3.8 GHz LGA 1200 125W Desktop Processor w/ Intel UHD
                      Graphics 630
                    </div>
                  </div>
                  <div className={styles.col_3}>
                    <div className={styles.order_price}>
                      $ 1 x 289.99 = $289.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_bottom}>
              <div className={styles.row_bottom}>
                <div className={styles.col}>
                  <div className={styles.sub_title}>Delivery Addresss</div>
                  <div className={styles.user_name}>
                    <span className={styles.bold_name}>Fahim Arif</span>
                  </div>
                  <div className={styles.user_address}>
                    Address:
                    <span className={styles.content}>Kaigari, Bogra</span>
                  </div>
                  <div className={styles.user_address}>
                    City-Zip:
                    <span className={styles.content}>Bogra-5800</span>
                  </div>
                  <div className={styles.user_address}>
                    Division, Country:
                    <span className={styles.content}>Rajshahi, Bangladesh</span>
                  </div>
                  <div className={styles.user_address}>
                    Phone:
                    <span className={styles.content}>01638418833</span>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.sub_title}>Total Summary</div>
                  <div className={styles.row_summary}>
                    <div className={styles.col_summary}>
                      <div className={styles.summary_title}>Sub Total:</div>
                      <div className={styles.summary_value}>50000</div>
                    </div>
                    <div className={styles.col_summary}>
                      <div className={styles.summary_title}>
                        Delivery Charge:
                      </div>
                      <div className={styles.summary_value}>50000</div>
                    </div>
                    <div className={styles.col_summary}>
                      <div className={styles.summary_title}>Tax Fee:</div>
                      <div className={styles.summary_value}>50000</div>
                    </div>
                    <hr />
                    <div className={styles.col_summary}>
                      <div className={styles.sub_title}>Total</div>
                      <div className={styles.total_price}>10000</div>
                    </div>
                    <div className={styles.title_payment}>
                      <span className={styles.payment_bold}>Payment: </span>
                      <span className={styles.payment_content}>bKash</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
