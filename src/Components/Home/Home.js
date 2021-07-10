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
      <Product
        id="12321"
        title="The Lean Startup: Now Constat Innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zmoq7Unl._SX325_BO1,204,203,200_.jpg"
      />
    </div>
  );
}

export default Home;
