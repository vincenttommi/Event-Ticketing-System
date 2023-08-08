import React, { useState } from "react";
import "./style.css";
import Footer from "../Footer/Footer";

function Pricing() {
    const [ticketPrice, setTicketPrice] = useState(10); 
    const [totalTickets, setTotalTickets] = useState(100); 

    // Function to calculate the estimated payout, attendees pay, and ticketing fee
    const calculatePayout = () => {
        const ticketingFeePercentage = 5; // 5% ticketing fee (can be adjusted as needed)
        const ticketingFee = (ticketPrice * ticketingFeePercentage) / 100;
        const attendeesPay = ticketPrice + ticketingFee;
        const estimatedPayout = attendeesPay * totalTickets;
        return { estimatedPayout, attendeesPay, ticketingFee };
    };

    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        setNumber(number + 1);
    };
    
    const decrementNumber = () => {
        setNumber(Math.max(0, number - 1));
    };
    

    // Event handler for updating ticket price
    const handleTicketPriceChange = (event) => {
        const newValue = (parseFloat(event.target.value));
        setTicketPrice(isNaN(newValue) ? 0 : Math.max(0, newValue));
    };

    // Event handler for updating total tickets
    const handleTotalTicketsChange = (event) => {
        const newValue = (parseFloat(event.target.value));
        setTotalTickets(isNaN(newValue) ? 0 : Math.max(0, newValue));
    };

    const { estimatedPayout, attendeesPay, ticketingFee } = calculatePayout();
    
    const [isOpen, setIsOpen] = useState(null);

  const handleItemClick = (index) => {
    if (isOpen === index) {
      setIsOpen(null); // Close the dropdown if it's already open
    } else {
      setIsOpen(index); // Otherwise, open the clicked dropdown
    }
  };

  const faqs = [
    { question: 'Is EMS really free?', answer: 'You can use EMS for free without providing us with card details. If you wish to sell tickets there is a small fee.' },
    { question: 'Is there any upfront or monthly costs?', answer: 'No. EMS is free to use. There are no hidden fees or lock-in contracts. You can create as many events as you like, and you won’t be charged unless you sell tickets for paid events. Sign up and see if it’s right for you.' },
    { question: 'Does EMS charge for free events?', answer: 'No. You pay zero service fees if you create and host free events. We will only charge a small amount when you sell tickets for your events.' },
    { question: 'Can I cancel at anytime?', answer: 'Yes, you can cancel at any time - no minimum term, no notice period and no cancellation fee.'}
  ];

    return (

             <>
                <div className="box">
            <div className="frame">
                <h1 className="the-most-reasonable">
                The most reasonable
                <br />
                prices you’ll ever find
                </h1>
                <p className="text-wrapper">Simple pricing. No hidden fees</p>
                <div className="overlap">
                    <div className="ellipse" />
                        <div className="rectangle" />
                            <div className="group">
                                <div className="overlap-group">
                                    <div className="element">
                                        30c
                                        <br />
                                        &nbsp;&nbsp;+
                                    </div>
                                    <div className="div_">5%</div>
                                        <div className="text-wrapper-2">Per ticket sold</div>
                                </div>
                            </div>
                        </div>
                        <p className="p">We only charge when you sell</p>
                        <div className="div-wrapper">
                        <button type="button" class="btn btn-success btn-lg">Learn more</button>                        </div>
                    </div>
                    <div style={{ paddingTop: '50px', paddingBottom: '50px', textAlign: 'center' }}>
                        <h2 style={{color: '#081C51'}}>Ticket fee calculator</h2>
                        <h4 style={{color: '#000000'}}>Enter your ticket details to see full cost</h4>          
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#052067', paddingTop: '10px', paddingRight: '20px', paddingBottom: '20px', paddingLeft: '20px', margin: '0 40px', borderRadius: '20px'}}>
                        <div class="calculate-results">
                            <div class="form-result">
                                <div class="total-result">
                                    <h4 style={{ fontSize: '30px' }}>Your estimated payout</h4>
                                    <span style={{ fontSize: '40px' }} id='tkt_fees'>Ksh {estimatedPayout.toFixed(2)}</span><br></br><br></br>
                                    <br></br>
                                    <div style={{ display: '' }}>
                                        <div class="attendees-pay">
                                            <h5>Attendees pay</h5>
                                            <span style={{ fontSize: '30px' }} id='tkt_fees'>Ksh {attendeesPay.toFixed(2)}</span><br></br><br></br>
                                            <div class="ticketing-fee">
                                                <h5>Ticketing fee</h5>
                                                <span style={{ fontSize: '30px' }} id='tkt_fees'>Ksh {ticketingFee.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#F9F9F9', color: '#FFFFF', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '20px', width: '50%', margin: '10px 50px', borderRadius: '20px'}}>
                            <h4>Is your event paid or free?</h4><br></br>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button type="button" class="btn btn-success btn-lg">Paid</button>
                                <button type="button" class="btn btn-success btn-lg">Free</button><br></br><br></br>
                            </div><br></br>
                            <h4>Who will pay the ticketing fee?</h4><br></br>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <button type="button" class="btn btn-success btn-lg">I will</button>
                                <button type="button" class="btn btn-success btn-lg">Pass on to attendees</button><br></br><br></br>
                            </div><br></br>
                            <div style={{ display: 'flex' }}>
                                <h4 style={{ paddingLeft: '20px' }}>Ticket price</h4><br></br>
                                <h4 style={{ paddingLeft: '140px' }}>Total tickets</h4><br></br><br></br>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="number-control">
                                    <button className="move-button" onClick={decrementNumber}></button>
                                    <input style={{ backgroundColor: '#D9D9D9', width: '30%', textAlign: 'center' }} 
                                        type="number"
                                        value={ticketPrice}
                                        onChange={handleTicketPriceChange} 
                                        />
                                    <button className="move-button" onClick={incrementNumber}></button>
                                </div>
                                <div className="number-control">
                                    <button className="move-button" onClick={decrementNumber}></button>
                                    <input style={{ backgroundColor: '#D9D9D9', width: '30%', textAlign: 'center' }} 
                                        type="number"
                                        value={totalTickets}
                                        onChange={handleTotalTicketsChange} 
                                        />
                                    <button className="move-button" onClick={incrementNumber}></button>
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div className="box1">
                        <div className="frame1">
                            <h1 className="text-wrapper1">Frequently Asked Questions</h1>
                            <div class="faq">
                            {faqs.map((faq, index) => (
                                <div class="faq-content" key={index}>
                                <div class="faq-question" onClick={() => handleItemClick(index)}>
                                    {faq.question}
                                    {isOpen === index ? <span>▲</span> : <span>▼</span>}
                                </div>
                                {isOpen === index && <div class="faq-answer" faq-answer><br></br>{faq.answer}<br></br></div>}<br></br>
                                </div>
                            ))}
                            </div>
                            {/* <FAQ/> */}
                        </div>
                        <div style={{ position: '', color: '#FFFFFF', textAlign: 'center', paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#052067' }}>
                        <h3>Event ticketing just got easier</h3><br></br>
                        <h1>Create your event in 2 minutes</h1><br></br>
                        <button type="button" class="btn btn-success btn-lg">Get started</button>
                    </div>
                </div>
             </div>



          <br></br>
           <Footer/>
             </>
                
                
    );
}

export default Pricing;