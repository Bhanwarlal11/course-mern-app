import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
import axios  from "axios";
//import Card from "./Card";

const Course = () => {


  const [book,setBook] = useState([]);

  useEffect(()=>{
    const getBook = async ()=>{
      try{
        const res = await axios.get("http://localhost:8080/book")
  const filteredata = res.data.filter((data) => data.category === "Free");
        setBook(filteredata)
      }
      catch(err){
        console.log(err);
      }
    }
    getBook();
  },[])


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // <------------------------------------------------->

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4`}>
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ad ullam doloremque aliquam eaque, impedit deleniti rem distinctio,
            necessitatibus commodi accusantium, amet temporibus dignissimos
            nesciunt!
          </p>
        </div>
        <div>
        <div className="slider-container">
      <Slider {...settings}>
      {book.map((item)=>(
        <Card item={item} key={item.id}></Card>
      ))}
      </Slider>
    </div>
        </div>
      </div>
    </>
  );
};

export default Course;
