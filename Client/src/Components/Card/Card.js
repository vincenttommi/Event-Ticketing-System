import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
<div class="container">
    <div class="row">
      <div class="col-md-4 col-lg-4">
        <div class="card bg-primary card-hover mb-9">
          <div class="card-body text-center px-md-5 px-lg-6 my-2">
            <div class="card-icon-border-large border-primary mtn-80">
              <i class="fa fa-quote-left text-primary" aria-hidden="true"></i>
            </div>
            <blockquote class="blockquote blockquote-sm mt-2">
              <p class="font-normal mb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <footer class="blockquote-footer text-uppercase text-white"> James Smith <cite class="d-block text-capitalize font-size-14 opacity-80 mt-1" title="Source Title">Mary’s Father</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card bg-success card-hover mb-9">
          <div class="card-body text-center px-md-5 px-lg-6 my-2">
            <div class="card-icon-border-large border-success mtn-80">
              <i class="fa fa-quote-left text-success" aria-hidden="true"></i>
            </div>
            <blockquote class="blockquote blockquote-sm mt-2">
              <p class="font-normal mb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <footer class="blockquote-footer text-uppercase text-white"> David Smith <cite class="d-block text-capitalize font-size-14 opacity-80 mt-1" title="Source Title">Susan’s Father</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-4">
        <div class="card bg-danger card-hover mb-9">
          <div class="card-body text-center px-md-5 px-lg-6 my-2">
            <div class="card-icon-border-large border-danger mtn-80">
              <i class="fa fa-quote-left text-danger" aria-hidden="true"></i>
            </div>
            <blockquote class="blockquote blockquote-sm mt-2">
              <p class="font-normal mb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <footer class="blockquote-footer text-uppercase text-white">William Smith <cite class="d-block text-capitalize font-size-14 opacity-80 mt-1" title="Source Title">Karen’s Father</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
   
)
};

export default Card;