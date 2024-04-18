import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[4rem] 2xl:text-5xl font-bold">
          <p>Your Premier Home</p>
          <p>Decor Destination</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        At Psalmstones Technologies Ltd, we're passionate about helping you turn your house into a home with our exquisite selection of home decor products. From stylish furniture to elegant accents, we offer everything you need to create spaces that reflect your personality and enhance your lifestyle.
        </p>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0  before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0  after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
