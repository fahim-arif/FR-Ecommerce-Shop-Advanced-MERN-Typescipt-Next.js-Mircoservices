import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className='hero_collapse_menu'>
        <ul className='main_collapse_menu'>
          <Link className='flex-space_between' to='#'>
            <li className='collapse_menu_item'>
              Computer System
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Mobiles
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Apparel {"&"} Accessories
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Toys {"&"} Drones
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Flower {"&"} Gifts
              <KeyboardArrowRightOutlined />
            </li>
          </Link>

          <Link to='#'>
            <li className='collapse_menu_item'>
              Health {"&"} Sports
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              {" "}
              Home {"&"} Tools
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Smart Tv
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Fashion {"&"} Beauty
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Gaming
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li
              style={{ borderBottomWidth: "0" }}
              className='collapse_menu_item'
            >
              Baby {"&"} Kid's
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
        </ul>
      </div>
      <div className='hero_section'>
        <Link to='/dddd'>
          <div className='hero_main_slider'></div>
        </Link>
        <div className='hero_sub_slider'>
          <Link to='/55' className='sub_slider_left'></Link>
          <Link to='/ff' className='sub_slider_right'></Link>
        </div>
      </div>
      {/* <div className='sub_slider_right'>2</div> */}
    </div>
  );
};

export default Hero;
