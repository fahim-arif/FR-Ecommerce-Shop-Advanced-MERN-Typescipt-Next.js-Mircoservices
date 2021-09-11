import React from "react";
import { Link } from "react-router-dom";
import "../styles/daily-deals-section.css";
const DailyDealsSection = () => {
  return (
    <>
      <div className='daily-deals-section'>
        <div className='daily-deals-container'>
          <h1 className='daily-deals-title'>Daily Deals</h1>
          <div className='card_row'>
            <div className='card_col-1_container'>
              <div className='col-1_row-1'>
                <div className='col-1_title'>SIGN IN FOR BEST EXPERICENCE</div>
                <Link to='/sign-in'>
                  <div className='sign_in_button'>SIGN IN</div>
                </Link>
                <div className='sign_up_text'>
                  New to FR Store? <Link to='/sign-up'>Sign Up</Link>
                </div>
              </div>
              <div className='col-1_row-2'>
                <div className='col-1_title'>
                  CATAGORIES YOU MAY BE INTERESTED
                </div>
                <div className='col-1_row-2_container'>
                  <div className='col-1_sub_col'>
                    <Link to='#'>
                      <img
                        src='/images/3_3629.jpg'
                        alt='VR Headset'
                        className='col-1_sub_col_img'
                      />
                      <div className='sub_col_title text-center'>
                        VR HEADSET
                      </div>
                    </Link>
                  </div>
                  <Link to='#'>
                    <div className='col-1_sub_col'>
                      <img
                        src='/images/68-105-274-V01.jpg'
                        alt='Playstation'
                        className='col-1_sub_col_img'
                      />
                      <div className='sub_col_title text-center'>
                        PLAYSTATION
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* New Col col-2 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/34-233-446-15.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
            {/* New COl col-3 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/83-152-881-S01.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
            {/* New Col col-4 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/24-716-003-V09.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
          </div>
          {/* New COl Col-1 Row-2 */}
          <div className='card_row_last mt-4'>
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/photo-1616406432452-07bc5938759d.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
            {/* New COl Col-2 Row-2 */}
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/photo-1503342217505-b0a15ec3261c.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
            {/* New Col Col-3 Row-2 */}
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='#'>
                    <img
                      src='/images/bestDeals/photo-1564468781192-f023d514222d.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (12)
                </div>
                <Link to='#'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 70,000
                </div>
              </div>
            </div>
            <div className='col-4_row-2_container'>
              <div className='card_last_row-1'>
                <div className='card_heading'>Recently Viewed</div>
                <div className='row-2_sub_container'>
                  <div className='row-2_sub_col'>
                    <Link to='#'>
                      <img
                        src='/images/bestDeals/81Fvv9hytCL._AC_UL320_.jpg'
                        alt=''
                        className='last_sub_row-1_image'
                      />
                    </Link>
                  </div>
                  <div className='row-2_sub_col'>
                    <Link to='#'>
                      <div className='card_description'>
                        SEIKO 14" Ultra-Modern Watch Face Black & Silver...
                      </div>
                    </Link>
                    <div className='card_prev_price'>৳ 80,000</div>
                    <div className='card_new_price'>
                      <span>৳</span> 70,000
                    </div>
                  </div>
                </div>
              </div>
              <div className='card_last_row-2'>
                <div className='card_heading'>Today's Deal</div>
                <div className='row-2_sub_container'>
                  <div className='row-2_sub_col'>
                    <Link to='#'>
                      <img
                        src='/images/bestDeals/A7ABD2106175Q5NE.jpg'
                        alt=''
                        className='last_sub_row-1_image custom_img-1'
                      />
                    </Link>
                  </div>
                  <div className='row-2_sub_col'>
                    <Link to='#'>
                      <div className='card_description'>
                        GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED....
                      </div>
                    </Link>
                    <div className='card_prev_price'>৳ 80,000</div>
                    <div className='card_new_price'>
                      <span>৳</span> 70,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyDealsSection;
