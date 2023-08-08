import React, { Component }  from 'react';


import { FiLogOut } from "react-icons/fi";
import { IconName } from "react-icons/ai";
import "./style.css";
import Footer from '../Footer/Footer';

export const AdminDashboard = () => {
  return (
    <>
    <div className="admin-dashboard">
      <div className="div">
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-2">
              <FiLogOut className="icon-instance-node" />
              <div className="text-wrapper-2">Logout</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="frame-4">
              {/* <AiOutlineCopyrightCircle className="icon-instance-node" /> */}
              <div className="text-wrapper-3">Dashboard</div>
            </div>
            <div className="frame-5">
              {/* <Profile className="icon-instance-node" /> */}
              <div className="text-wrapper-4">Organizers</div>
            </div>
            <div className="frame-2">
              {/* <Gallery className="icon-instance-node" /> */}
              <div className="text-wrapper-4">Events</div>
            </div>
            <div className="frame-2">
              {/* <Receipt2 className="icon-instance-node" /> */}
              <div className="text-wrapper-4">Revenue</div>
            </div>
          </div>
          {/* <Frame bezierClassName="frame-instance" className="frame-11" text="EventMS" visible={false} /> */}
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="group-2">
              {/* <SearchNormal className="vuesax-linear-search" /> */}
              <div className="text-wrapper-5">Search organizer, events</div>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
            <div className="group-3">
              <div className="text-wrapper-6">Karim Benzema</div>
              <div className="text-wrapper-7">Admin</div>
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
                {/* <Component className="component-1" />
                <Component className="component-1" text="2" />
                <Component className="component-1" text="3" />
                <Component className="component-1" text="4" />
                <Component className="component-1" text="5" />
                <Component className="component-1" text="6" />
                <Component className="component-1" text="7" /> */}
              </div>
              <div className="text-wrapper-9">Next page</div>
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-10">Artist</div>
            <div className="text-wrapper-11">Status</div>
            <div className="text-wrapper-12">Ratings</div>
            <div className="text-wrapper-13">Projects sold</div>
            <div className="text-wrapper-14">Highest sale</div>
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
        <div className="overlap-4">
          <div className="text-wrapper-28">Best-selling Event</div>
          <div className="frame-19">
            <div className="frame-7">
              <div className="div-2">
                <img className="image" alt="Image" src="image-10-2.png" />
              </div>
              <div className="text-wrapper-9">Flotsam</div>
            </div>
            <div className="text-wrapper-29">40k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-20">
            <div className="frame-7">
              <div className="div-2">
                <div className="indian-man">
                  <div className="overlap-group-3">
                    <div className="mask-group-wrapper">
                      <img className="mask-group" alt="Mask group" src="mask-group-9.png" />
                    </div>
                    <div className="img-wrapper">
                      <img className="mask-group" alt="Mask group" src="mask-group-10.png" />
                    </div>
                    <div className="eye-eyebrow-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-11.png" />
                    </div>
                    <div className="face-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-12.png" />
                    </div>
                    <div className="moustache-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-13.png" />
                    </div>
                    <div className="mouth-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-14.png" />
                    </div>
                    <div className="neck-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-15.png" />
                    </div>
                    <div className="turban-2">
                      <img className="mask-group" alt="Mask group" src="mask-group-16.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-9">Siuuuuu</div>
            </div>
            <div className="text-wrapper-29">40k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-21">
            <div className="frame-7">
              <div className="div-2">
                <img className="image" alt="Image" src="image-12-2.png" />
              </div>
              <div className="text-wrapper-9">Bluenose</div>
            </div>
            <div className="text-wrapper-29">40k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-22">
            <div className="text-wrapper-30">View all Events</div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-28">Best-selling projects</div>
          <div className="frame-19">
            <div className="frame-23">
              <img className="img" alt="Rectangle" src="rectangle-24.png" />
              <div className="text-wrapper-9">Flotsam</div>
            </div>
            <div className="text-wrapper-29">40k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-20">
            <div className="frame-23">
              <img className="img" alt="Vectary texture" src="vectary-texture.png" />
              <div className="text-wrapper-9">Astrom</div>
            </div>
            <div className="text-wrapper-29">10k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-24">
            <div className="frame-23">
              <img className="img" alt="Vectary texture" src="vectary-texture-2.png" />
              <div className="text-wrapper-9">$Moon</div>
            </div>
            <div className="text-wrapper-29">10k+ sales</div>
            <div className="text-wrapper-29">$1.4m revenue</div>
          </div>
          <div className="frame-22">
            <div className="text-wrapper-30">View all projects</div>
          </div>
        </div>
        <p className="p">In the last 30 days,</p>
        <div className="frame-25">
          <div className="group-15">
            <div className="text-wrapper-31">Organizers</div>
            <p className="text-wrapper-32">Monitor artist sales, reviews, etc.</p>
          </div>
          <div className="frame-26">
            <div className="group-wrapper">
              <div className="group-16">
                {/* <SearchNormal className="search-normal" /> */}
                <div className="text-wrapper-33">Search artists</div>
              </div>
            </div>
            <div className="frame-27">
              <div className="text-wrapper-34">Filter</div>
              {/* <FilterSearch className="vuesax-linear-filter" /> */}
            </div>
          </div>
        </div>
        <div className="overlap-6">
          <div className="frame-28">
            <div className="group-17">
              <div className="group-18">
                <div className="overlap-group-4">
                  <div className="text-wrapper-35">10</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-4">
                  <div className="text-wrapper-36">34</div>
                </div>
              </div>
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="overlap-7">
                <div className="text-wrapper-37">PM</div>
              </div>
            </div>
            <div className="text-wrapper-38">11/05/2022</div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="text-wrapper-39">500</div>
          <div className="text-wrapper-40">Total Evets</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-41">250</div>
          <div className="text-wrapper-42">Organizers</div>
        </div>
        <div className="overlap-10">
          <div className="text-wrapper-43">Ksh 400,000</div>
          <div className="text-wrapper-44">Total Revenue</div>
        </div>
      </div>
    </div>



    <Footer/>
    </>
  );
};
export default AdminDashboard