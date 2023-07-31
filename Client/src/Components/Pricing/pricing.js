import React from "react";
import Card from "../card";
import './pricing.css';

function Pricing() {
    return (
        <div className="pricingContents">
            <div class="container">
                <div class="image">
                </div>
                <div class="about-content">
                    <h1>The most reasonable <br></br>prices you'll ever find</h1>
                    <p>Simple pricing. No hidden fees</p>
                    <p>We only charge when you sell</p>
                    <button type="button" class="btn btn-success btn-lg">Explore pricing</button>
                </div>
            </div>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}>
                <h2 style={{color: '#081C51'}}>Ticket fee calculator</h2>
                <h4 style={{color: '#000000'}}>Enter your ticket details to see full cost</h4>          
            </div>
            <div style={{backgroundColor: '#F1F1F1'}}>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}>
                <h2 style={{color: '#000000'}}>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
                <Card>
                    <h2>Is EMS really free?</h2>
                    <p>You can use EMS for free without providing us with card details. If you wish to sell tickets there is a small fee. </p>
                </Card>
                <Card>
                    <h2>Does EMS charge for free events?</h2>
                    <p>No. You pay zero service fees if you create and host free events. We will only charge a small amount when you sell tickets for your events. </p>
                </Card>
                <Card>
                    <h2>Is there any upfront or monthly costs?</h2>
                    <p>No. EMS is free to use. There are no hidden fees or lock-in contracts. You can create as many events as you like, and you won’t be charged unless you sell tickets for paid events. Sign up and see if it’s right for you. </p>
                </Card>
                <Card>
                    <h2>Can I cancel at anytime?</h2>
                    <p>Yes, you can cancel at any time - no minimum term, no notice period and no cancellation fee. </p>
                </Card>
            </div>
            </div>
            
        </div>
    )
}

export default Pricing;