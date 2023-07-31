import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'
// Rest of the component code...


function Footer() {
  return (
    <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer">
            <h4>EventMS</h4>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print,
              <br />
              and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Sell Event Tickets</li>
              <li>Event Registration</li>
              <li>Explore Events</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Support</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Help Centre</li>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Stay in the loop</h4>
            <div class="signup_form">
              <form action="#" class="subscribe">
                <input
                  type="text"
                  class="subscribe__input"
                  placeholder="Enter Email Address"
                />
                <button type="button" class="subscribe__btn">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="social_profile">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="copyright">
            <a href="#">Copyright</a>
            &copy; {new Date().getFullYear()}
            <a href='#'>   EventMs</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
   
  )
}

export default Footer