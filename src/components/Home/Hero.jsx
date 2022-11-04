import React, {useEffect} from "react";
import "./HomeStyle.css";
import HeroImg from "../../assets/main.jpg";
import Cup from "../../assets/cup.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="hero">
      <div className="left">
        <p data-aos="fade-up" data-aos-duration="1200">Hello, I'm</p>
        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">Munisakhon</h1>
        <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">Korean/English Language Expert</h3>
        <div className="desc" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <p>
            With 5-year-experience, I guarantee your language proficiency. I am
            a founder of 3 projects which may help you <span>magicly</span>. If
            you are curious, feel free to reach via email.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          <button className="start">Get Enrolled</button>
          <button className="btn-about">About Me</button>
        </div>
      </div>
      <div className="right" data-aos="fade-up" data-aos-duration="1200">
        <div className="image_border">
          <img src={HeroImg} alt="Munisa" className="hero_img" />
          <img src={Cup} alt="Cup" className="cup" />
          <div className="experience">
            <div className="number1">5</div>
            <div>
              Years of <br />
              Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
