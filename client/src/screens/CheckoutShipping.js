import React, { useState } from "react";
import styles from "../components/styles/checkoutShipping.module.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add } from "@material-ui/icons";
export default function CheckoutShipping() {
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");

  const promoSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <CheckoutProgressBar step1 step2></CheckoutProgressBar>
      <div className={styles.checkout_shipping}>
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.address_container}>
              <div className={styles.form_container}>
                <div className={styles.address_title}>Add Address</div>
                <form action={styles.address_form}>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>First Name</div>
                      <input type='text' className={styles.input} />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Last Name</div>
                      <input type='text' className={styles.input} />
                    </div>
                  </div>
                  <div type='text' className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Country / Region</div>
                      <input type='text' className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Address</div>
                      <input type='text' className={styles.input} />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>
                        Address 2 / Delivery Instruction
                      </div>
                      <input type='text' className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>City / Town</div>
                      <input type='text' className={styles.input} />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>State / Divison</div>
                      <input type='text' className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Zip Code</div>
                      <input type='text' className={styles.input} />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Phone</div>
                      <input type='text' className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <button className={styles.btn}>SAVE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`${styles.container_right} ${
              open ? styles.open_height_large : styles.open_height_small
            }`}
          >
            <div className={styles.summary_container}>
              <div className={styles.summary_wrapper}>
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
                    <div
                      onClick={() => setOpen(!open)}
                      className={styles.promo}
                    >
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
      </div>
    </>
  );
}
