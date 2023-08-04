import React from "react";
// import { ArrowUp } from "./ArrowUp";
// import { Category } from "./Category";
// import { Component } from "./Component";
// import { FilterSearch } from "./FilterSearch";
// import { Frame } from "./Frame";
// import { Gallery } from "./Gallery";
// import { IconComponentNode } from "./IconComponentNode";
// import { Logout } from "./Logout";
// import { Notification } from "./Notification";
// import { SearchNormal } from "./SearchNormal";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill4CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import { BsFill5CircleFill } from "react-icons/bs";
import { BsFill6CircleFill } from "react-icons/bs";
import { BsFill7CircleFill } from "react-icons/bs";
import { BsFillFunnelFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "./style.css";

const AttendeeDashboard = () => {
  return (
    <div className="attendee-dashboard"  style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
      <div className="div">
        <div className="overlap">
          <div className="frame-2">
            <div className="frame-3">
              {/* <Category className="icon-instance-node" /> */}
              <div className="text-wrapper-2" style={{color:'#3FC12A'}}>EMS</div>
            </div>
            <div className="frame-3">
              {/* <Category className="icon-instance-node" /> */}
              <div className="text-wrapper-2">Dashboard</div>
            </div>
            <div className="frame-4">
              {/* <Gallery className="icon-instance-node" /> */}
              <button className="text-wrapper-3">Events</button>
            </div>
            <div className="frame-wrapper">
              <div className="frame-4">
                {/* <Logout className="icon-instance-node" /> */}
                <button className="text-wrapper-4">Logout</button>
              </div>
            </div>
            <div className="frame-5" />
          </div>
          {/* <Frame bezierClassName="frame-instance" className="frame-11" text="EventMS" visible={false} /> */}
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2" >
            <div className="rectangle" />
            <div className="group-2" >
              {/* <SearchNormal className="vuesax-linear-search" /> */}
              <input type="text" class="search-input" placeholder="Search events"></input>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            {/* <img className="ellipse" alt="Ellipse" src="ellipse-1.png" /> */}
            <BsFillPersonFill />
            <div className="group-3">
              <div className="text-wrapper-6">Karim Benzema</div>
              <div className="text-wrapper-7">ATENDEE</div>
            </div>
          </div>
          <div className="vuesax-linear-wrapper">
            {/* <Notification className="icon-instance-node" /> */}
          </div>
        </div>
        <div className="overlap-2">
          <div className="div-wrapper">
            <div className="frame-8">
              <div className="text-wrapper-8">Previous page</div>
              <div className="frame-9">
              <BsFill1CircleFill />
              <BsFill2CircleFill />
              <BsFill3CircleFill />
              <BsFill4CircleFill />
              <BsFill5CircleFill />
              <BsFill6CircleFill />
              <BsFill7CircleFill />
              </div>
              <div className="text-wrapper-9">Next page</div>
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-10">Event</div>
            <div className="text-wrapper-11">Status</div>
            <div className="text-wrapper-12">Ratings</div>
            <div className="text-wrapper-13">NO. OF TICKETS</div>
            <div className="text-wrapper-14">EVENT PRICE</div>
          </div>
          <div className="group-4">
            <div className="frame-10">
              <div className="div-2">
                <img className="image" alt="Image" src="image-12.png" />
              </div>
              <div className="text-wrapper-15">Bluenose</div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-16">Verified</div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-17">40%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-2" />
              </div>
              <div className="frame-13">
                {/* <ArrowUp className="vuesax-linear-arrow" /> */}
                <div className="text-wrapper-16">4%</div>
              </div>
            </div>
            <div className="text-wrapper-18">400</div>
            <div className="text-wrapper-19">$400,000</div>
          </div>
          <div className="group-6">
            <div className="frame-10">
              <img className="img" alt="Ellipse" src="ellipse-3.png" />
              <div className="text-wrapper-15">Pennywise</div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-20">Pending</div>
            </div>
            <div className="group-7">
              <div className="text-wrapper-17">57%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-3" />
              </div>
              <div className="frame-15">
                {/* <IconComponentNode className="vuesax-linear-arrow" /> */}
                <div className="text-wrapper-21">8%</div>
              </div>
            </div>
            <div className="text-wrapper-22">200</div>
            <div className="text-wrapper-23">$400,000</div>
          </div>
          <div className="group-8">
            <div className="frame-10">
              <div className="div-2">
                <img className="image" alt="Image" src="image-10.png" />
              </div>
              <div className="text-wrapper-15">Flotsam</div>
            </div>
            <div className="frame-16">
              <div className="text-wrapper-16">Verified</div>
            </div>
            <div className="group-9">
              <div className="text-wrapper-24">89%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-4" />
              </div>
              <div className="frame-13">
                {/* <ArrowUp className="vuesax-linear-arrow" /> */}
                <div className="text-wrapper-16">19%</div>
              </div>
            </div>
            <div className="text-wrapper-22">40,000</div>
            <div className="text-wrapper-23">$1,400,000</div>
          </div>
          <div className="overlap-3">
            <div className="group-10">
              <div className="frame-10">
                <img className="img" alt="Ellipse" src="image.png" />
                <div className="text-wrapper-15">Gregautsch</div>
              </div>
              <div className="frame-17">
                <div className="text-wrapper-25">Unverified</div>
              </div>
              <div className="text-wrapper-22">0</div>
              <div className="text-wrapper-23">$0</div>
            </div>
            <div className="text-wrapper-26">No ratings available</div>
          </div>
          <div className="group-11">
            <div className="frame-10">
              <img className="img" alt="Ellipse" src="ellipse-3-2.png" />
              <div className="text-wrapper-15">ElPistolero</div>
            </div>
            <div className="frame-16">
              <div className="text-wrapper-16">Verified</div>
            </div>
            <div className="group-12">
              <div className="text-wrapper-17">50%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-5" />
              </div>
              <div className="frame-18">
                {/* <IconComponentNode className="vuesax-linear-arrow" /> */}
                <div className="text-wrapper-21">6%</div>
              </div>
            </div>
            <div className="text-wrapper-22">30</div>
            <div className="text-wrapper-23">$25,000</div>
          </div>
          <div className="group-13">
            <div className="frame-10">
              <div className="div-2">
                <div className="indian-man">
                  <div className="overlap-group-3">
                    <div className="beard">
                      <img className="mask-group" alt="Mask group" src="mask-group.png" />
                    </div>
                    <div className="body">
                      <img className="mask-group" alt="Mask group" src="mask-group-2.png" />
                    </div>
                    <div className="eye-eyebrow">
                      <img className="mask-group" alt="Mask group" src="mask-group-3.png" />
                    </div>
                    <div className="face">
                      <img className="mask-group" alt="Mask group" src="mask-group-4.png" />
                    </div>
                    <div className="moustache">
                      <img className="mask-group" alt="Mask group" src="mask-group-5.png" />
                    </div>
                    <div className="mouth">
                      <img className="mask-group" alt="Mask group" src="mask-group-6.png" />
                    </div>
                    <div className="neck">
                      <img className="mask-group" alt="Mask group" src="mask-group-7.png" />
                    </div>
                    <div className="turban">
                      <img className="mask-group" alt="Mask group" src="mask-group-8.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-15">Siuuuuuuuu</div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-20">Pending</div>
            </div>
            <div className="group-14">
              <div className="text-wrapper-27">64%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-6" />
              </div>
              <div className="frame-13">
                {/* <ArrowUp className="vuesax-linear-arrow" /> */}
                <div className="text-wrapper-16">7%</div>
              </div>
            </div>
            <div className="text-wrapper-22">400</div>
            <div className="text-wrapper-23">$400,000</div>
          </div>
          <img className="line" alt="Line" src="line-1.svg" />
          <img className="line-2" alt="Line" src="line-2.svg" />
          <img className="line-3" alt="Line" src="line-3.svg" />
          <img className="line-4" alt="Line" src="line-4.svg" />
          <img className="line-5" alt="Line" src="line-5.svg" />
        </div>
        <p className="p">In the last 30 days,</p>
        <div className="frame-19">
          <div className="group-15">
            <div className="text-wrapper-28">Events</div>
          </div>
          <div className="frame-20">
            <div className="group-wrapper">
              <div className="group-16">
                {/* <SearchNormal className="search-normal" /> */}
                <input type="text" class="search-input" placeholder="Search events"></input>
              </div>
            </div>
            <div className="frame-21">
              <div className="text-wrapper-30">Filter</div>
              <BsFillFunnelFill />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-31">4</div>
          <div className="text-wrapper-32">Total Evets</div>
        </div>
        <div className="text-wrapper-33">Organizers</div>
      </div>
    </div>
  );
};

export default AttendeeDashboard 