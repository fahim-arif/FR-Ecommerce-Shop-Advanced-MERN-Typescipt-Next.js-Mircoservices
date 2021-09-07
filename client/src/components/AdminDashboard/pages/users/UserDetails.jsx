import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./userDetails.css";
const UserDetails = () => {
  return (
    <div className='admin_userDetails'>
      <div className='admin_userDetails_title_container'>
        <h1 className='admin_userDetails_title'>Edit User</h1>
        <Link to='/admin/create-user'>
          <button className='admin_userDetails_btn'>Create</button>
        </Link>
      </div>
      <div className='admin_userDetails_container'>
        <div className='admin_userDetails_user_show'>
          <div className='user_show_top'>
            <img
              src='/images/developer.jpg'
              alt=''
              className='user_show_img'
            ></img>
            <div className='user_show_top_title'>
              <span className='user_show_username'>Fahim Arif</span>
              <span className='user_show_title'>Software Engineer</span>
            </div>
          </div>
          <div className='user_show_bottom'>
            <span className='user_show_title'>Account Details</span>
            <div className='user_show_info'>
              <PermIdentity className='user_show_icon' />
              <span className='user_show_info_title'>fahim17</span>
            </div>
            <div className='user_show_info'>
              <PermIdentity className='user_show_icon' />
              <span className='user_show_info_title'>Fahim Arif</span>
            </div>
            <div className='user_show_info'>
              <CalendarToday className='user_show_icon' />
              <span className='user_show_info_title'>10.02.1998</span>
            </div>
            <span className='user_show_title'>Contact Details</span>
            <div className='user_show_info'>
              <PhoneAndroid className='user_show_icon' />
              <span className='user_show_info_title'>01638418833</span>
            </div>
            <div className='user_show_info'>
              <MailOutline className='user_show_icon' />
              <span className='user_show_info_title'>
                u1704040@student.cuet.ac.bd
              </span>
            </div>
            <div className='user_show_info'>
              <LocationSearching className='user_show_icon' />
              <span className='user_show_info_title'>C-office Bogra</span>
            </div>
          </div>
        </div>
        <div className='admin_userDetails_user_update'>
          <div className='admin_user_update_title'>Edit</div>
          <form action='' className='admin_user_update_form'>
            <div className='user_update_left'>
              <div className='user_update_item'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='fahim17'
                  className='admin_user_update_input'
                />
              </div>

              <div className='user_update_item'>
                <label>First Name</label>
                <input
                  type='text'
                  placeholder='fahim'
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label>Last Name</label>
                <input
                  type='text'
                  placeholder='fahim'
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='u1704040@student.cuet.ac.bd'
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='01638418833'
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='C-office Bogra'
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label>Date of Birth</label>
                <input
                  type='date'
                  placeholder='10.02.1998'
                  className='admin_user_update_input'
                />
              </div>
            </div>
            <div className='user_update_right'>
              <div className='admin_user_update_upload'>
                <img
                  className='admin_user_update_img'
                  src='/images/developer.jpg'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='admin_user_update_icon' />
                </label>
                <input type='file' id='file' style={{ display: "none" }} />
              </div>
              <button className='admin_user_update_btn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
