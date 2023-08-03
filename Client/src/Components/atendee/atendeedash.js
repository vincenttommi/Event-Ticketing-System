// import React from "react";

// function AttendeeDashboard () {
//     return(
//         <div className="attdash" style={{display:'flex',}}>
//             <div id='attsidebar' style={{color:'grey',width:'10%'}}>
//                 <div id='attCompanyName' style={{justifyContent:'centre'}}>
//                     <h1 style={{margin:'8%',color:'#3FC12A'}}>
//                         EMS
//                     </h1>
//                 </div>
                


//             </div>

//             <div id='attcentre' style={{width:'80%'}}>
//                 hiii


//             </div>
            
//             <div id='attaccount' style={{color:'grey',width:'10%'}}>
//                 hiiii


//             </div>
//         </div>
//     );
// }

// export default AttendeeDashboard;

import React from "react";
import { Component } from "/Users/bethwel/phase-05/Event-Ticketing-System/Client/src/Components/Component/Component.js";
import { Frame } from "/Users/bethwel/phase-05/Event-Ticketing-System/Client/src/Components/Component/frame/frame.js";
import { VuesaxLinear } from "../../components/VuesaxLinear";
import { VuesaxLinearArrow } from "../../components/VuesaxLinearArrow";
import { VuesaxLinearFilter } from "../../components/VuesaxLinearFilter";
import { VuesaxLinearLogout } from "../../components/VuesaxLinearLogout";
import { VuesaxLinearSearch } from "../../components/VuesaxLinearSearch";
import { VuesaxLinearWrapper } from "../../components/VuesaxLinearWrapper";
import { VuesaxLinearCategory } from "../../icons/VuesaxLinearCategory";
import "./style.css";

function AttendeeDashboard () {
  return (
    <div className="attendee-dashboard">
      <div className="div">
        <div className="overlap">
          <div className="frame-2">
            <div className="frame-3">
              <VuesaxLinearCategory className="vuesax-linear-category" />
              <div className="text-wrapper">Dashboard</div>
            </div>
            <div className="frame-4">
              <VuesaxLinear
                className="vuesax-linear-gallery"
                vuesaxLinear="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-gallery.svg"
              />
              <div className="text-wrapper-2">Events</div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-4">
                <VuesaxLinearLogout />
                <div className="text-wrapper-3">Logout</div>
              </div>
            </div>
            <div className="frame-5" />
          </div>
          <Frame bezierClassName="frame-instance" className="frame-11" text="EventMS" visible={false} />
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="group-2">
              <VuesaxLinearSearch vuesaxLinearSearch="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-search-normal-1.svg" />
              <div className="text-wrapper-4">Search events</div>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/ellipse-1@2x.png"
            />
            <div className="group-3">
              <div className="text-wrapper-5">Karim Benzema</div>
              <div className="text-wrapper-6">Admin</div>
            </div>
          </div>
          <div className="vuesax-linear-wrapper">
            <VuesaxLinearWrapper />
          </div>
        </div>
        <div className="overlap-2">
          <div className="div-wrapper">
            <div className="frame-8">
              <div className="text-wrapper-7">Previous page</div>
              <div className="frame-9">
                <Component className="component-1" />
                <Component className="component-1" text="2" />
                <Component className="component-1" text="3" />
                <Component className="component-1" text="4" />
                <Component className="component-1" text="5" />
                <Component className="component-1" text="6" />
                <Component className="component-1" text="7" />
              </div>
              <div className="text-wrapper-8">Next page</div>
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-9">Events</div>
            <div className="text-wrapper-10">Status</div>
            <div className="text-wrapper-11">Ratings</div>
            <div className="text-wrapper-12">Projects sold</div>
            <div className="text-wrapper-13">Highest sale</div>
          </div>
          <div className="group-4">
            <div className="frame-10">
              <div className="div-2">
                <img
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/image-12@2x.png"
                />
              </div>
              <div className="text-wrapper-14">Bluenose</div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-15">Verified</div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-16">40%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-2" />
              </div>
              <div className="frame-13">
                <VuesaxLinearArrow />
                <div className="text-wrapper-15">4%</div>
              </div>
            </div>
            <div className="text-wrapper-17">400</div>
            <div className="text-wrapper-18">$400,000</div>
          </div>
          <div className="group-6">
            <div className="frame-10">
              <img
                className="img"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/ellipse-3-2@2x.png"
              />
              <div className="text-wrapper-14">Pennywise</div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-19">Pending</div>
            </div>
            <div className="group-7">
              <div className="text-wrapper-16">57%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-3" />
              </div>
              <div className="frame-15">
                <VuesaxLinearArrow />
                <div className="text-wrapper-20">8%</div>
              </div>
            </div>
            <div className="text-wrapper-21">200</div>
            <div className="text-wrapper-22">$400,000</div>
          </div>
          <div className="group-8">
            <div className="frame-10">
              <div className="div-2">
                <img
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/image-10@2x.png"
                />
              </div>
              <div className="text-wrapper-14">Flotsam</div>
            </div>
            <div className="frame-16">
              <div className="text-wrapper-15">Verified</div>
            </div>
            <div className="group-9">
              <div className="text-wrapper-23">89%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-4" />
              </div>
              <div className="frame-13">
                <VuesaxLinearArrow />
                <div className="text-wrapper-15">19%</div>
              </div>
            </div>
            <div className="text-wrapper-21">40,000</div>
            <div className="text-wrapper-22">$1,400,000</div>
          </div>
          <div className="overlap-3">
            <div className="group-10">
              <div className="frame-10">
                <img
                  className="img"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/ellipse-3-1@2x.png"
                />
                <div className="text-wrapper-14">Gregautsch</div>
              </div>
              <div className="frame-17">
                <div className="text-wrapper-24">Unverified</div>
              </div>
              <div className="text-wrapper-21">0</div>
              <div className="text-wrapper-22">$0</div>
            </div>
            <div className="text-wrapper-25">No ratings available</div>
          </div>
          <div className="group-11">
            <div className="frame-10">
              <img
                className="img"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/ellipse-3@2x.png"
              />
              <div className="text-wrapper-14">ElPistolero</div>
            </div>
            <div className="frame-16">
              <div className="text-wrapper-15">Verified</div>
            </div>
            <div className="group-12">
              <div className="text-wrapper-16">50%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-5" />
              </div>
              <div className="frame-18">
                <VuesaxLinearArrow />
                <div className="text-wrapper-20">6%</div>
              </div>
            </div>
            <div className="text-wrapper-21">30</div>
            <div className="text-wrapper-22">$25,000</div>
          </div>
          <div className="group-13">
            <div className="frame-10">
              <div className="div-2">
                <div className="indian-man">
                  <div className="overlap-group-3">
                    <div className="beard">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-7@2x.png"
                      />
                    </div>
                    <div className="body">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-6@2x.png"
                      />
                    </div>
                    <div className="eye-eyebrow">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-5@2x.png"
                      />
                    </div>
                    <div className="face">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-4@2x.png"
                      />
                    </div>
                    <div className="moustache">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-3@2x.png"
                      />
                    </div>
                    <div className="mouth">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-2@2x.png"
                      />
                    </div>
                    <div className="neck">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group-1@2x.png"
                      />
                    </div>
                    <div className="turban">
                      <img
                        className="mask-group"
                        alt="Mask group"
                        src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/mask-group@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-14">Siuuuuuuuu</div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-19">Pending</div>
            </div>
            <div className="group-14">
              <div className="text-wrapper-26">64%</div>
              <div className="rectangle-wrapper">
                <div className="rectangle-6" />
              </div>
              <div className="frame-13">
                <VuesaxLinearArrow />
                <div className="text-wrapper-15">7%</div>
              </div>
            </div>
            <div className="text-wrapper-21">400</div>
            <div className="text-wrapper-22">$400,000</div>
          </div>
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/line-1.svg"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/line-1.svg"
          />
          <img
            className="line-3"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/line-1.svg"
          />
          <img
            className="line-4"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/line-1.svg"
          />
          <img
            className="line-5"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/line-1.svg"
          />
        </div>
        <p className="p">In the last 30 days,</p>
        <div className="frame-19">
          <div className="group-15">
            <div className="text-wrapper-27">Events</div>
          </div>
          <div className="frame-20">
            <div className="group-wrapper">
              <div className="group-16">
                <VuesaxLinearSearch
                  className="vuesax-linear-search-normal"
                  vuesaxLinearSearch="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-search-normal.svg"
                />
                <div className="text-wrapper-28">Search events</div>
              </div>
            </div>
            <div className="frame-21">
              <div className="text-wrapper-29">Filter</div>
              <VuesaxLinearFilter
                className="vuesax-linear-filter-search"
                vuesaxLinearFilter="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-filter-search.svg"
              />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-30">4</div>
          <div className="text-wrapper-31">Total Evets</div>
        </div>
        <div className="text-wrapper-32">Organizers</div>
      </div>
    </div>
  );
};

export default AttendeeDashboard;