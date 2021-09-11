import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/styles/profileScreen.module.css";
const ProfileScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col_1}>
          <div className={styles.title}>Orders</div>
          <Link to='#'>
            <div className={styles.sub_title}>Order History</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Suscription Order</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Return Status</div>
          </Link>
          <div className={styles.title}>Manage Account</div>
          <Link to='#'>
            <div className={styles.sub_title}>Account Settings</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Address</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Payment Options</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>My Reviews</div>
          </Link>
          <div className={styles.title}>Notification</div>
          <Link to='#'>
            <div className={styles.sub_title}>Email Notification</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Mobile Text Alert</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Price Alert</div>
          </Link>
          <Link to='#'>
            <div className={styles.sub_title}>Seller Messages</div>
          </Link>
        </div>
        <div className={styles.col_2}>
          <div className={styles.main_title}>ACCOUNT SETTINGS</div>
          <div className={styles.user_info_container}>
            <div className={styles.field_name}>
              Account Information{" "}
              <span className={styles.name}>Fahim Arif Rahman</span>{" "}
            </div>
            <button className={styles.btn}>EDIT</button>
          </div>

          <div className={styles.email}>fahim1.618555@gmail.com</div>
          <div className={styles.phone}>01638418833</div>
          <div className={styles.password_container}>
            <div className={styles.password}>
             Password <span className={styles.stars}>*********</span>{" "}
            </div>
            <button className={styles.btn}>EDIT</button>
          </div>
          <div className={styles.verify_container}>
            <div className={styles.verification}>
              2 Step Verification{" "}
              <span className={styles.security}>
                Enable 2-Step Verification for enhanced account security.
              </span>{" "}
            </div>
            <button className={styles.btn_2}>ENABLE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
