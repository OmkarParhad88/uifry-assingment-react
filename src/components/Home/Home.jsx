import React from "react";
import "./Home.css";
import Rings from "../Rings/Rings";
import Ellipse from "../Ellipse/Ellipse";
import AchivementBanner from "../AchivementBanner/AchivementBanner";
import Star from "../Star/Star";
import Mobiles from "../Mobiles/Mobiles";

const Home = () => {
 return (
  <>
   <div className="home">
    <Star size="2.5rem" animationDelay="1.5" starTop="6rem" starLeft="3rem" />
    <Star size="3rem" animationDelay="2" starTop="4rem" starRight="2rem" />
    <div className="home-left">
     <p class="home-left-headline">make the best financial decisions</p>
     <Ellipse
      ellipseTop={"10rem"}
      ellipseLeft={"16rem"}
      ellipseRotate="190deg"
     />
     <p class="home-left-paragraph">
      Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
      faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
     </p>
     <div class="home-left-btn">
      <button class="btn" style={{ padding: "1rem 1.4rem" }}>
       <span>Get Started</span>
       <svg
        style={{ marginLeft: "0.5rem" }}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="8"
        viewBox="0 0 25 8"
        fill="none"
       >
        <path
         d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
         fill="white"
        />
       </svg>
      </button>
      <a class="btn-watch ">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        style={{ marginRight: "0.5rem" }}
       >
        <circle cx="14.5" cy="14.5" r="14" stroke="black" />
        <path
         d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
         fill="black"
         stroke="black"
        />
       </svg>
       <span>Watch Video</span>
      </a>
     </div>

     <AchivementBanner />
    </div>
    <div className="home-right">
     <Rings ringTop="-3rem" ringLeft="5rem">
      <Ellipse
       ellipseTop="24rem"
       ellipseLeft="0rem"
       ellipseRight="0rem"
       ellipseRotate="91deg"
      />
      <Mobiles mobileTop="3rem" mobileRight="30rem" />
     </Rings>
    </div>
   </div>
  </>
 );
};

export default Home;
