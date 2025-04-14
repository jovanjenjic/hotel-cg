"use client";
import Image from "next/image";
import Offers from "../../public/img/features/offers.jpg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Montenegro</span>
                <h2>Welcome to Montenegro - the Gem of the Mediterranean</h2>
                <p>
                  Small, yet incredibly diverse, Montenegro stretches between majestic mountains and the crystal-clear Adriatic Sea. 
                  This country, rich in natural contrasts, culture, and history, offers everything a traveler could desire – from wild national parks, 
                  deep canyons, and serene lakes to golden beaches, hidden coves, and vibrant coastal towns.
                  At the heart of this beauty, between the popular resorts Sveti Stefan and Petrovac, lies the idyllic Drobni Pijesak beach – a true oasis of peace and nature. 
                  Just minutes away, on a hill surrounded by olive trees and cypresses, stands Villa Drobni Pijesak – a modern stone villa with a spectacular sea view.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Villa architecture</span>
                <h2>Villa Drobni Pijesak – Elegance in Harmony with Nature</h2>
                <p>
                  Mediterranean architecture with modern elegant design. Stone, lavender, citrus, and olive trees give the entire space an authentic charm and tranquility.
                  With 360 m² of living space spread over three levels, the villa offers:<br/>
                  5 bedrooms, each with en-suite bathrooms<br/>
                  Spacious living room with fireplace<br/>
                  Fully equipped kitchen and dining area for gatherings<br/>
                  Wine cellar and soon-to-be fitness room<br/>
                  Terraces with breathtaking Adriatic views<br/>
                  Saltwater pool and covered veranda with grill<br/>
                  The interiors radiate warmth and sophistication, thanks to high-quality materials, natural tones, and spacious, bright rooms.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Spirit of inquiry</span>
                <h2>Surroundings – A Blend of Nature, History & Adventure</h2>
                <p>
                  Nearby is the village of Rijeka Reževići, surrounded by lush Mediterranean vegetation and many hiking trails that lead to stunning viewpoints. 
                  The village is home to a 13th-century monastery, known for its frescoes and Romanesque-Byzantine architecture.
                  For history and culture lovers, Old Town Budva – one of the oldest settlements on the Adriatic – offers rich heritage, narrow stone alleys, and local charm. 
                  Adventurers will enjoy hiking, rafting, skiing, and more, while food lovers can indulge in the culinary tradition, local wines, and authentic specialties.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Impression</span>
                <h2>Pure Enjoyment</h2>
                <p>
                  Villa Drobni Pijesak is more than a place to stay – it is a refuge, an inspiration, and a stage for unforgettable moments. 
                  When the sun sets into the sea and the sky lights up in vivid colors, you’ll know you’ve arrived at the right place.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
