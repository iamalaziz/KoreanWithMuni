import React from "react";
import Beginner from "../../assets/beginner.jpeg";
import { GoCheck } from "react-icons/go";
import { IoIosSchool } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { FaWonSign } from "react-icons/fa";
import "./CoursesStyle.css";

const beginner = [
  "3000ta so'zlar",
  "60ta mavzu",
  "510ta mashqlar",
  "120 soat dars",
  "10ta testlar",
];
const intermediate = [
  "5ta vebinar",
  "TOPIK II",
  "9000ta so'zlar",
  "60ta mavzu",
  "750ta mashqlar",
  "180 soat dars",
  "15ta testlar",
  "Suhbat",
];
const Courses = () => {
  return (
    <>
      <h2 className="courses-title" data-aos="fade-up" data-aos-duration="1200">
        Kurslar
      </h2>
      <div className="courses">
        <a href="# "
          className="card"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src={Beginner} alt="Beginner" />
          <h3>
            Boshlang'ich
            <br />& TOPIK I
          </h3>
          <div className="price">
            <p>
              <FaWonSign style={{ color: "#0e1133" }} />
              50000
            </p>
            <p>
              <AiFillStar className="star" />
              4.5
              <IoIosSchool className="students" />
              15
            </p>
          </div>
          <ul>
            {beginner.map((i, index) => {
              return (
                <li key={index}>
                  <i>
                    <GoCheck />
                  </i>
                  {i}
                </li>
              );
            })}
          </ul>
          <div className="more-btn">
            <button>Batafsil</button>
          </div>
        </a>
        <a href="# " className="card" data-aos="flip-right" data-aos-duration="1000">
          <img src={Beginner} alt="Beginner" />
          <h3>
            Yuqori Bosqich
            <br />& TOPIK II
          </h3>
          <div className="price">
            <p>
              <FaWonSign style={{ color: "#0e1133" }} />
              70000
            </p>
            <p>
              <AiFillStar className="star" />
              4.5
              <IoIosSchool className="students" />
              15
            </p>
          </div>
          <ul>
            {intermediate.map((i, index) => {
              return (
                <li key={index}>
                  <i>
                    <GoCheck />
                  </i>
                  {i}
                </li>
              );
            })}
          </ul>
          <div className="more-btn">
            <button style={{marginBottom: "20px"}}>Batafsil</button>
          </div>
        </a>
        <a href="# "
          className="card"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img src={Beginner} alt="Beginner" />
          <h3>Super Bosqich</h3>
          <br />
          <div className="price">
            <p>
              <FaWonSign style={{ color: "#0e1133" }} />
              90000
            </p>
            <p>
              <AiFillStar className="star" />
              4.5
              <IoIosSchool className="students" />
              15
            </p>
          </div>
          <ul>
            {intermediate.map((i, index) => {
              return (
                <li key={index}>
                  <i>
                    <GoCheck />
                  </i>
                  {i}
                </li>
              );
            })}
          </ul>
          <div className="more-btn">
            <button>Batafsil</button>
          </div>
        </a>
      </div>
    </>
  );
};

export default Courses;
