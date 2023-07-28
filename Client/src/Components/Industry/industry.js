import React from "react";
import ReviewCard from "../Reviewcard/reviewcard";
import './industry.css';

function Industry(){
    return (
    <div className="industryContents">
        <div class="container">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="meetings"></img>
            </div>
            <div class="about-content">
                <h1>The powerful ticketing platform for all events</h1>
                <p>Organize professional events such as conferences, seminars, 
                    galas, dinners, and end of year parties with EventMS.
                </p>
            </div>
        </div><br></br>
        <div class="event-sponsor">
            Events created by thousands of organisations around 
            Kenya with EMS
        </div><br></br><br></br>
        <div class="sponsors">
            <img src="https://cyberogism.com/wp-content/uploads/2023/03/Spotify-Logo.png" alt="spotify"></img>
            <img src="https://img.etimg.com/thumb/msid-96617487,width-300,height-225,imgsize-11564,,resizemode-75/google-asks-users-about-their-first-searches-in-2023-internet-reacts.jpg" alt="google"></img>
            <img src="" alt="safaricom"></img>
            <img src="" alt="youtube"></img>
            <img src="" alt="microsoft"></img>
        </div>
        <div class="reason">
            Why choose EventMS for your next business event?
        </div><br></br><br></br>
        <div class="reason-card">

        </div>
        <div class="industries">
            Trusted by industries like yours
        </div><br></br><br></br>
        <div class="review">
            Reviews from event organizers
        </div>
        <div class="review-card">
            <ReviewCard rating={5} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. " 
                 />
            <ReviewCard rating={4} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. "   />
            <ReviewCard rating={5} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. "   />
        </div>
    </div>
    )
}

export default Industry;
