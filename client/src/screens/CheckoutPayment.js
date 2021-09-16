import React, { useState } from "react";
import styles from "../components/styles/checkoutShipping.module.css";
import "../components/styles/checkoutPayment.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add } from "@material-ui/icons";
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
      <CheckoutProgressBar step1 step2 step3></CheckoutProgressBar>
      <div className={styles.checkout_shipping}>
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.address_container}>
              <div className={styles.form_container}>
                <div className={styles.address_title}>
                  Select Payment Method
                </div>
                <div>
                  <div
                    className={`${styles.input_container} payment_container mt-4`}
                  >
                    <div
                      onClick={onCredit}
                      className={`payment_img_container ${
                        credit ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/TB1qIthr67nBKNjSZLeXXbxCFXa-80-80.png'
                          alt='credit / debid card'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>
                        Credit / Debid Card
                      </div>
                    </div>
                    <div
                      onClick={onRocket}
                      className={`payment_img_container ${
                        rocket ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className={`payment_img_wrapper `}>
                        <img
                          src='/images/OSS_iWhp8Hi8_b09dedee68e947f9bde1f49182777d7f.png'
                          alt='rocket_payment'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>Rocket</div>
                    </div>
                    <div
                      onClick={onBkash}
                      className={`payment_img_container ${
                        bkash ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/TB14FT1JpOWBuNjy0FiXXXFxVXa-400-400.png'
                          alt='bkash payment'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>
                        Save Money with bKash
                      </div>
                    </div>
                    <div
                      onClick={onCash}
                      className={`payment_img_container ${
                        cash ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png'
                          alt=''
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>Cash on Delivery</div>
                    </div>
                  </div>
                  <div
                    className={`payment_description_container ${
                      bkash ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>
                      Please complete your bKash payment at first, then fill up
                      the form below. Also note that 1.85% bKash "SEND MONEY"
                      cost will be added with net price. Total amount you need
                      to send us at ৳ 6315
                    </div>
                    <form className='payment_method_form'>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          Your bKash Account Number
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          bKash Transaction ID
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                    </form>
                  </div>
                  <div
                    className={`payment_description_container ${
                      rocket ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>
                      Please complete your rocket payment at first, then fill up
                      the form below. Also note that 1.85% bKash "SEND MONEY"
                      cost will be added with net price. Total amount you need
                      to send us at ৳ 6315
                    </div>
                    <form className='payment_method_form'>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          Your Rocket Account Number
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          Rocket Transaction ID
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                    </form>
                  </div>
                  {/* Cash On Delivery Conent after clicking at the cash on delivery icon */}
                  <div
                    className={`payment_description_container ${
                      cash ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>You have selected Cash on Delivery system</div>
                  </div>
                  <div
                    className={`payment_description_container ${
                      credit ? "content_show" : "content_hide"
                    }`}
                  >
                    {/* Credit / Debid Conent after clicking at the cash on Credit or Debid */}
                    <div className='payment_description'>Comming Soon.....</div>
                  </div>
                  <div className={styles.btn_container}>
                    <button className={styles.btn}>SAVE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.container_right} ${
              open ? styles.open_height_large : styles.open_height_small
            }`}
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
          </div>
        </div>
      </div>
    </>
  );
}
