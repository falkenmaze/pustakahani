import React from "react";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import LoginBtn from "../components/LoginBtn";
function Home() {
  return (
    <div className="home">
      <div className="search">
        <Search />
      </div>
      <div className="Nav_bar">
        <NavBar></NavBar>
      </div>
      <div className="Card-holder">
        <Card
          title="Ncert"
          description="used for school"
          image="https://m.media-amazon.com/images/I/91DKzsw46IL.jpg"
          link="/1"
        />
        <Card
          title="RD Sharma"
          description="11th grade maths"
          image="https://www.raajkart.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/1/1/11classrdsharmamathematicsvol2.jpg"
          link="/1"
        />
      </div>
      <div className="login_btn">
        <LoginBtn />
      </div>
    </div>
  );
}

export default Home;
