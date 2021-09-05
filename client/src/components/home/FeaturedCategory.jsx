import React from "react";
import styles from "../styles/featured-category.module.css";
import { Link } from "react-router-dom";
const FeaturedCatagory = () => {
  return (
    <>
      <div className={styles.featuredCategory}>
        <div className={styles.title}>Featured Categories</div>
        <div className={styles.subtitle}>
          <Link to='#'>Shop All</Link>
        </div>
        <div className={styles.category_container}>
          <div className={styles.category_row}>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <img
                  src='/images/featured/1.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Kid's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <img
                  src='/images/featured/2.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Men's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/3.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Women's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/4.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Ready For School</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/5.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Home</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <img
                  src='/images/featured/6.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Fashion</Link>
              </div>
            </div>
          </div>

          <div className={styles.category_row}>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/7.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Kid's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/8.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Men's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/9.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Women's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/10.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Ready For School</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/11.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Home</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <img
                  src='/images/featured/12.jpg'
                  alt='featured image'
                  className={styles.featured_img}
                ></img>
              </div>
              <div className={styles.img_caption}>
                <Link to='#'>Fashion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCatagory;
