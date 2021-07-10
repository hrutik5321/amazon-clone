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
          title="The Lean Startup: Now Constat Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://book2action-5d2aff0.divio-media.net/filer_public/4b/0f/4b0f0b6d-c121-4f77-939c-260aa3dcd6d8/startup.png"
        />
        <Product
          id="12321"
          title="The Lean Startup: Now Constat Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://book2action-5d2aff0.divio-media.net/filer_public/4b/0f/4b0f0b6d-c121-4f77-939c-260aa3dcd6d8/startup.png"
        />
      </div>
    </div>
  );
}

export default Home;
