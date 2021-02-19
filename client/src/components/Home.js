import React from "react";
import "./Home.css";
import header_book from "../assets/images/hand_book.jpg";
const Home = () => {
  return (
    <section className="home_container">
      <div className="container">
        <div className="home_header">
          <div className="home_header_desc">
            <div>
              <h2>Build your Library</h2>
              <p>select your favorite book and sell it</p>
              <button>View all</button>
            </div>
            <img
              src="https://oc-static.imgix.net/prod/images/home/image_hp_banner.png?v4&auto=compress,format&q=80&w=468&h=390&dpr=1 1x,https://oc-static.imgix.net/prod/images/home/image_hp_banner.png?v4&auto=compress,format&q=80&w=468&h=390&dpr=2 2x"
              width="468"
              height="390"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
