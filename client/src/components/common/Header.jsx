import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='row v-center'>
            <div className='header-item itme-left'>
              <div className='logo'>
                <Link to='/'>
                  <img src='/images/FR Store.png' alt='' />
                </Link>
              </div>
            </div>
            {/*  */}
            <div className='header-item item-center'>
              <div className='menu-overlay'></div>
              <nav className='menu'>
                <div className='mobile-menu-head'>
                  <div className='go-back'>
                    <i className='fa fa-angle-left'></i>
                  </div>
                  <div className='current-menu-title'></div>
                  <div className='mobile-menu-close'>&times;</div>
                </div>
                <ul className='menu-main'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link to=''>
                      New <i className='fa fa-angle-down'></i>
                    </Link>
                    <div class='sub-menu mega-menu mega-menu-column-4'>
                      <div class='list-item text-center'>
                        <a href='#'>
                          <img src='/images/p1.jpg' alt='new Product' />
                          <h4 class='title'>Product 1</h4>
                        </a>
                      </div>
                      <div class='list-item text-center'>
                        <a href='#'>
                          <img src='/images/p2.jpg' alt='new Product' />
                          <h4 class='title'>Product 2</h4>
                        </a>
                      </div>
                      <div class='list-item text-center'>
                        <a href='#'>
                          <img src='/images/p3.jpg' alt='new Product' />
                          <h4 class='title'>Product 3</h4>
                        </a>
                      </div>
                      <div class='list-item text-center'>
                        <a href='#'>
                          <img src='/images/p4.jpg' alt='new Product' />
                          <h4 class='title'>Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class='menu-item-has-children'>
                    <a href='#'>
                      Shop <i class='fa fa-angle-down'></i>
                    </a>
                    <div class='sub-menu mega-menu mega-menu-column-4'>
                      <div class='list-item'>
                        <h4 class='title'>Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                        </ul>
                        <h4 class='title'>Beauty</h4>
                        <ul>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class='list-item'>
                        <h4 class='title'>Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                        </ul>
                        <h4 class='title'>Furniture</h4>
                        <ul>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class='list-item'>
                        <h4 class='title'>Home, Kitchen</h4>
                        <ul>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                          <li>
                            <a href='#'>Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class='list-item'>
                        <img src='images/shop1.jpg' alt='shop' />
                      </div>
                    </div>
                  </li>
                  <li class='menu-item-has-children'>
                    <a href='#'>
                      Blog <i class='fas fa-angle-down'></i>
                    </a>
                    <div class='sub-menu single-column-menu'>
                      <ul>
                        <li>
                          <a href='#'>Standard Layout</a>
                        </li>
                        <li>
                          <a href='#'>Grid Layout</a>
                        </li>
                        <li>
                          <a href='#'>single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class='menu-item-has-children'>
                    <a href='#'>
                      Pages <i class='fas fa-angle-down'></i>
                    </a>
                    <div class='sub-menu single-column-menu'>
                      <ul>
                        <li>
                          <a href='#'>Login</a>
                        </li>
                        <li>
                          <a href='#'>Register</a>
                        </li>
                        <li>
                          <a href='#'>Faq</a>
                        </li>
                        <li>
                          <a href='#'>404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                  <li>
                    <Link to='/sign-in'>Signin</Link>
                  </li>
                  <li>
                    <Link to='/sign-up'>Signup</Link>
                  </li>
                 
                </ul>
              </nav>
            </div>
            {/* <div class='header-item item-right'>
              <a href='#'>
                <i class='fas fa-search'></i>
              </a>
              <a href='#'>
                <i class='far fa-heart'></i>
              </a>
              <a href='#'>
                <i class='fas fa-shopping-cart'></i>
              </a>
              
              <div class='mobile-menu-trigger'>
                <span></span>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
