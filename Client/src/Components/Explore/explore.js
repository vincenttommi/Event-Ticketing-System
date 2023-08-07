import './explore.css';
import React from "react";
import crtimg from '/Users/bethwel/phase-05/Event-Ticketing-System/Client/src/assets/concerttt.jpg';
import BasicExample from './explorecard';
import Footer from '../Footer/footer';
import CollapsibleExample from '../Navbar/Navbar';

function Explore () {
    return(
        <div style={{display:'flex-column',}}>
            <div>
                <CollapsibleExample />
            </div>

            <div className="image1" style={{marginLeft:'2%',marginRight:'2%'}}>
                <img id='explore_concert_image' src={ crtimg } alt="people at a concert" style={{display:'flex',justifyContent:'center', flexWrap:'wrap',height:'70vh',width:'100%'}}/>
            </div>

            <div id="explore_options_bar" style={{display:'flex',justifyContent:'center', flexWrap:'wrap',margin:'1%' }} >
                <button>ENTERTAINMENT</button>
                <button>COMMUNITY</button>
                <button>SPORTS</button>
                <button>EDUCATION</button>
                <button>BUSINESS</button>
                <button>CHARITY</button>
            </div>

            <div id='explore_concert_cards' style={{display:'flex',justifyContent:'center', flexWrap:'wrap',marginLeft:'2%',marginRight:'2%' }}>
                <BasicExample />
                <BasicExample />
                <BasicExample />
                <BasicExample />
                <BasicExample />
                <BasicExample />
                <BasicExample />
                <BasicExample />
                
            </div>

            <div id='explore_footer'>
                <Footer />
            </div>
        </ div>
    );
}

export default Explore;