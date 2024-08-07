"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
           
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            About Psalmstones Technologies Ltd
            </h2>
          </div>
          <p className="leading-loose">
          At Lexie909, we believe that furniture is more than just pieces for your home—it's an expression of your personal style and a reflection of who you are. Founded in 2023, we are dedicated to providing exceptional quality furniture that combines timeless design with modern functionality.

       Lexie909 was born out of a passion for creating beautiful, well-crafted furniture that enhances every living space. Our journey began with a vision to revolutionize the way people think about furniture. We wanted to blend aesthetics with practicality, offering pieces that are not only stylish but also durable and functional.
       Our mission is simple: to deliver high-quality furniture that transforms spaces and enriches lives. We are committed to offering products that not only meet but exceed our customers’ expectations. Our focus is on combining classic elegance with modern trends, ensuring that each piece is both beautiful and practical.
          </p>
          <p className="leading-loose">
          At Lexie909, we promise to deliver furniture that transforms your home into a space you’ll love. Our commitment to quality, design, and customer satisfaction is unwavering. We invite you to explore our collection and experience the difference that comes with choosing Lexie909 for your home furnishings.
          </p>
        </div>
      </div>
      <div className="relative w-full flex-1 mt-[50px]">
          <Image
            src="https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="video banner"
            className="object-contain w-full rounded-3xl"
          />
        </div>
    </section>
  );
};

export default Services;
