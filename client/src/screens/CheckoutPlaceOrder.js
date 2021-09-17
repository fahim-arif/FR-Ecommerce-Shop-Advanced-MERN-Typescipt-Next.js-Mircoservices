import React, { useState } from "react";
import styles from "../components/styles/checkoutShipping.module.css";
import "../components/styles/checkoutPayment.css";
import "../components/styles/checkoutPlaceOrder.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add, PlayArrow } from "@material-ui/icons";
export default function CheckoutPayment() {
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [bkash, setBkash] = useState(false);
  const [rocket, setRocket] = useState(false);
  const [cash, setCash] = useState(false);
  const [credit, setCredit] = useState(false);

  const promoSubmit = (e) => {
    e.preventDefault();
  };
  const onBkash = () => {
    setBkash(true);
    setRocket(false);
    setCash(false);
    setCredit(false);
  };
  const onRocket = () => {
    setBkash(false);
    setRocket(true);
    setCash(false);
    setCredit(false);
  };
  const onCredit = () => {
    setBkash(false);
    setRocket(false);
    setCash(false);
    setCredit(true);
  };
  const onCash = () => {
    setBkash(false);
    setRocket(false);
    setCash(true);
    setCredit(false);
  };
  return (
    <>
      <CheckoutProgressBar step1 step2 step3 step4></CheckoutProgressBar>
      <div className={`${styles.checkout_shipping}`}>
        <div className={styles.container}>
          <div className={`${styles.container_left} place_order_left`}>
            <div className={styles.address_container}>
              <div className={styles.form_container}>
                <div className={styles.address_title}>Shipping Address</div>
                <div className='checkout_shipping_summary_container'>
                  <div className='checkout_shipping_summary_content'>
                    <div className='checkout_shipping_person_name'>
                      Fahim Arif
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Address: Kaigari, Bogra
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Zip Code: Bogra-5800
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Division, Country: Kaigari, Bogra
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Phone: 01638418833
                    </div>
                  </div>
                  <div className='checkout_shipping_summary_edit_btn'>
                    <button className='checkout_shipping_summary_btn'>
                      EDIT
                    </button>
                  </div>
                </div>
                <div className={styles.address_title}>Payment Method</div>
                <div className='checkout_payment_summary_container'>
                  <div className='checkout_payment_summary_img_container'>
                    <img
                      src='/images/TB14FT1JpOWBuNjy0FiXXXFxVXa-400-400.png'
                      alt=''
                      className='checkout_payment_summary_img'
                    />
                  </div>
                  <div className='checkout_payment_summary_change_btn'>
                      <button className="checkout_payment_summary_btn">

                    CHANGE
                      </button>
                  </div>
                </div>
                <div className={styles.address_title}>Order Items</div>
                <div className='checkout_order_summary_edit_change_btn'>
                  <button className='summary_edit_change'>EDIT CHANGE</button>
                </div>
                <div className='checkout_order_summary_container'>
                  <div className='checkout_order_summary_row'>
                    <div className='checkout_order_summary_col-1'>
                      <div className='checkout_order_summary_img_container'>
                        <img
                          src='/images/68-105-274-V01.jpg'
                          alt='order product image'
                          className='checkout_order_summary_img'
                        />
                      </div>
                    </div>
                    <div className='checkout_order_summary_col-2'>
                      <div className='checkout_order_summary_product_title'>
                        Intel Core i7 10th Gen - Core i7-10700K Comet Lake
                        8-Core 3.8 GHz LGA 1200 125W Desktop Processor w/ Intel
                        UHD Graphics 630
                      </div>
                    </div>
                    <div className='checkout_order_summary_col-3'>
                      <div className='checkout_order_summary_product_price'>
                        $ 1 x 289.99 = $289.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`checkout_cart_summary_container ${
              open ? "chekout_promo_collaspe_on" : "checkout_promo_collapse_off"
            }`}
            // className={`${styles.container_right} ${
            //   open ? styles.open_height_large : styles.open_height_small
            // }`}
          >
            <div className={styles.summary_container}>
              <div className={styles.summary_title}>Summary</div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Items</div>
                <div className={styles.item_price}>$1,586.98</div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Delivery Charge</div>
                <div className={styles.item_price}>$1,586.98</div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Tax Charge</div>
                <div className={styles.item_price}>$1,586.98</div>
              </div>
              <div className={styles.promo_container}>
                <div className={styles.promo_flex}>
                  <div onClick={() => setOpen(!open)} className={styles.promo}>
                    APPLY PROMO CODE
                  </div>
                  <div
                    onClick={() => setOpen(!open)}
                    className={styles.plus_btn}
                  >
                    <Add className={styles.add_icon}></Add>
                  </div>
                </div>
                <div className={styles.promo_code_container}>
                  <form
                    onSubmit={promoSubmit}
                    className={`${styles.promo_form} ${
                      open ? styles.show : styles.hide
                    }`}
                  >
                    <input
                      type='text'
                      onChange={(e) => setPromo(e.target.value)}
                      className={styles.promo_input}
                    />
                    <button className={styles.promo_apply_btn}>APPLY</button>
                  </form>
                </div>
              </div>
              <div className={styles.total_flex}>
                <div className={styles.total_title}>Est.Total:</div>
                <div className={styles.total_price}>$1,621.97</div>
              </div>
            </div>
            <div className='place_order_btn_container'>
              <button className='place_order_button'>
                PLACE ORDER
                <PlayArrow className='place_order_button_icon'></PlayArrow>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
