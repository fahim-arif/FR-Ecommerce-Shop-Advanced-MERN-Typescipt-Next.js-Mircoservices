import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { addToCart } from "../actions/cartActions";
import styles from "../components/styles/checkoutShipping.module.css";

import "../components/styles/checkoutPayment.css";
import "../components/styles/checkoutPlaceOrder.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add, PlayArrow } from "@material-ui/icons";
export default function CheckoutPayment({ history }) {
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [bkash, setBkash] = useState(false);
  const [rocket, setRocket] = useState(false);
  const [cash, setCash] = useState(false);
  const [credit, setCredit] = useState(false);

  // const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { paymentMethod, cartItems, shippingAddress } = cart;

  const { method } = paymentMethod;

  const { firstName, lastName, address, address2, city, division, phone, zip } =
    shippingAddress;

  let subtotal = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  let deliveryCharge = subtotal > 1000 ? 60 : 130;

  let total = (
    Number(subtotal * 0.025) +
    Number(subtotal) +
    Number(deliveryCharge)
  ).toFixed(2);

  let estTotal = (Number(total * 0.0185) + Number(total)).toFixed(2);

  useEffect(() => {
    // if (!paymentMethod) {
    //   history.push("/checkout-payment");
    // }
  }, [dispatch]);

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
                      {firstName} {lastName}
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Address: {address}
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Zip Code: {city}-{zip}
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Division, Country: {division}, Bangladesh
                    </div>
                    <div className='checkout_shipping_person_detail'>
                      Phone: {phone}
                    </div>
                  </div>
                  <div className='checkout_shipping_summary_edit_btn'>
                    <button
                      onClick={() => history.push("/checkout-shipping")}
                      className='checkout_shipping_summary_btn'
                    >
                      EDIT
                    </button>
                  </div>
                </div>
                <div className={styles.address_title}>Payment Method</div>
                <div className='checkout_payment_summary_change_btn'>
                  <button
                    onClick={() => history.push("/checkout-payment")}
                    className='checkout_payment_summary_btn'
                  >
                    CHANGE
                  </button>
                </div>
                <div className='checkout_payment_summary_container'>
                  {method === "Cash on Delivery" ? (
                    <div className='checkout_payment_text'>
                      {`Your payment method is ${method}. You will have to pay on full cash when our delivery man comes to your house after 3-5 days . `}
                    </div>
                  ) : (
                    <div className='checkout_payment_text'>
                      {`Please complete your ${method} payment at first. Also note that 1.85% ${method} "SEND MONEY" cost
                    will be added with net price.`}
                      <br />
                      Total amount you need to pay us ৳{" "}
                      <span className='bold'>6315 </span>
                      at <span className='bold'>01638418833 </span>.
                    </div>
                  )}

                  {method == "bKash" || method === "Rocket" ? (
                    <div className='checkout_payment_form_container'>
                      <form className='checkout_payment_form'>
                        <label className='checkout_payment_label'>
                          Your {method} Account Number
                        </label>
                        <input
                          type='text'
                          className='checkout_payment_phone_input'
                        />
                        <label className='checkout_payment_label'>
                          {method} Account Number
                        </label>
                        <input
                          type='text'
                          className='checkout_payment_phone_input'
                        />
                        {/* <button className='payment_form_submit_btn'>
                        SUBMIT
                      </button> */}
                      </form>
                      <div className='checkout_payment_summary_img_container'>
                        <img
                          src={`/images/${method}.png`}
                          alt=''
                          className='checkout_payment_summary_img'
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className={`${styles.address_title} mt-5`}>
                  Order Items
                </div>
                <div className='checkout_order_summary_edit_change_btn'>
                  <button className='summary_edit_change'>EDIT CHANGE</button>
                </div>
                <div className='checkout_order_summary_container'>
                  {cartItems.map((item) => (
                    <div className='checkout_order_summary_row'>
                      <div className='checkout_order_summary_col-1'>
                        <div className='checkout_order_summary_img_container'>
                          <img
                            src={item.image}
                            alt='order product image'
                            className='checkout_order_summary_img'
                          />
                        </div>
                      </div>
                      <div className='checkout_order_summary_col-2'>
                        <div className='checkout_order_summary_product_title'>
                          {item.name}
                        </div>
                      </div>
                      <div className='checkout_order_summary_col-3'>
                        <div className='checkout_order_summary_product_price'>
                          {item.qty} x {item.price} = ৳{" "}
                          {(item.price * item.qty).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
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
                <div className={styles.item_name}>Items Price</div>
                <div className={styles.item_price}>
                  {" "}
                  ৳
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Delivery Charge</div>
                <div className={styles.item_price}>
                  ৳{subtotal > 1000 ? 80 : 130}
                </div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Tax Charge</div>
                <div className={styles.item_price}>
                  ৳{Number(subtotal * 0.025).toFixed(2)}
                </div>
              </div>
              {method === "Cash on Delivery" ? null : (
                <div className={styles.summary_flex}>
                  <div className={styles.item_name}>{method} Charge</div>
                  <div className={styles.item_price}>
                    {" "}
                    ৳{(subtotal * 0.0185).toFixed(2)}
                  </div>
                </div>
              )}

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
                <div className={styles.total_price}>
                  {method === "Cash on Delivery" ? (
                    <>
                      ৳
                      {(
                        Number(subtotal * 0.025) +
                        Number(subtotal) +
                        Number(deliveryCharge)
                      ).toFixed(2)}
                    </>
                  ) : (
                    <>
                      ৳
                      {(
                        Number(subtotal * 0.025) +
                        Number(subtotal) +
                        Number(deliveryCharge) +
                        Number(subtotal * 0.0185)
                      ).toFixed(2)}
                    </>
                  )}
                </div>
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
