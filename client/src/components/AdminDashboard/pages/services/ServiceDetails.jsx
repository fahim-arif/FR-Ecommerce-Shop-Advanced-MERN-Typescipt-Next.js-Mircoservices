import React from "react";
import Chart from "../../charts/Chart";
import { serviceData } from "../../DummyData";
import "./serviceDetails.css";

const ServiceDetails = () => {
  return (
    <div className='admin_serviceDetails'>
      <div className='serviceDetails_title_container'>
        <h1>Service</h1>
      </div>
      <div className='serviceDetails_top'>
        <div className='serviceDetails_top_left'>
          <Chart
            data={serviceData}
            dataKey='User Registered'
            title='User Registered in a Month'
            grid
          />
        </div>
        <div className='serviceDetails_top_right'>
          <div className='serviceDetails_info_top'>
            <img
              src='/images/designer.jpg'
              alt=''
              className='service_info_img'
            />
            <span className='admin_service_name'>Tuition</span>
          </div>
          <div className='serviceDetails_info_bottom'>
            <div className='serviceDetails_info_item'>
              <span className='service_info_key'>ID:</span>
              <span className='service_info_value'>1</span>
            </div>
            <div className='serviceDetails_info_item'>
              <span className='service_info_key'>Status:</span>
              <span className='service_info_value'>Active</span>
            </div>
            <div className='serviceDetails_info_item'>
              <span className='service_info_key'>Registered User:</span>
              <span className='service_info_value'>18000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
