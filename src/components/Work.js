import Image from "next/image";

const WorkCard = ({ num, title, desc }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">
{desc}
      </p>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-amber-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-yellow-200">
            WHATS THE FUNCTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Let&apos;s see how it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="Explore Our Collection" desc="Browse our extensive collection of home decor products on our website or visit our showroom to see our curated selection in person."/>
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Get Inspired"
              desc="Take inspiration from our curated room displays, design ideas, and customer favorites to envision how our products can enhance your home."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <WorkCard num="03" title="Transform Your Space" desc="Once your home decor products have arrived, it's time to bring your vision to life. Whether you're arranging furniture, hanging artwork, or adding finishing touches."/>
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <WorkCard num="04" title="Enjoy Your Sanctuary" desc="Sit back, relax, and enjoy your newly decorated home. Whether you're hosting gatherings with friends and family or simply unwinding after a long day." />
        </div>
      </div>
    </section>
  );
};

export default Work;
