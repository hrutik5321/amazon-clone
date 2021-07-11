import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  // havai jahaj
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="87672"
          title="Wonderchef Stand Mixer and Beater, 3 Attachments, 6 Speed Setting, 5L Bowl, 1000W – Red"
          price={27}
          rating={3}
          image="https://m.media-amazon.com/images/I/61CimxKYKVL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="48383"
          title="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)"
          price={31}
          rating={4}
          image="https://m.media-amazon.com/images/I/51NGM6Yx2EL._QL65_AC_UL640_.jpg"
        />
        <Product
          id="732847"
          title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
          price={103}
          rating={4}
          image="https://m.media-amazon.com/images/I/7178rOrkObL._AC_UY327_QL65_.jpg"
        />
        <Product
          id="887332"
          title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Grey (4th Generation)"
          price={900}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="97286"
          title="Acer Predator X35 1800R Curved 35 Inch UltraWide QHD Gaming Monitor I G-SYNC Ultimate I Quantum Dot I 200Hz I VESA Display HDR 1000 I Adjustable Stand I Display Port, HDMI Port & USB 3.0 HUB"
          price={1200}
          rating={4}
          image="https://m.media-amazon.com/images/I/61PG4UvgJxS._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
