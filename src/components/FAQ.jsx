import React, { useState, Fragment } from "react";

import 'react-accessible-accordion/dist/fancy-example.css';

export const FAQ = () => {
  return (
    <div id="faq">
        <div className="row">
          <div className="col-xs-12 col-md-12">
              <p className="title"> WHAT YOU GET WITH METAOPS BETA PASS </p>
              <p className="row body"> 
                <img className="col-xs-1" src="img/pointer.png"></img> 
                <span className="col-xs-11" style={{padding:'0'}}> 
                EARLY IN GAME ACCESS
                </span>
              </p>
              <p className="row body"> 
                <img className="col-xs-1" src="img/pointer.png"></img> 
                <span className="col-xs-11" style={{padding:'0'}}> 
                WHITELISTED TO BUY THE UPCOMING GAME NFTS 
                </span>
              </p>
              <p className="row body"> 
                <img className="col-xs-1" src="img/pointer.png"></img> 
                <span className="col-xs-11" style={{padding:'0'}}> 
                WHITELISTED TO BUY UPCOMING GAME TOKEN 
                </span>
              </p>
              <p className="row body"> 
                <img className="col-xs-1" src="img/pointer.png"></img> 
                <span className="col-xs-11" style={{padding:'0'}}> 
                  Can be cashed in (burned) for a legendary reward based on the rarity of your pass. 
                </span>
              </p>
          </div>
        </div>

    </div>
  );
};
