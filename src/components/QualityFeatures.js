import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center ">OUR SERVICES</span>
      <h2 className="title text-center ">We're committed to delivering excellence every step of the way</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="At PsalmsTones Technologies Ltd, we prioritize fast performance and strategic partnerships to provide our customers with the best possible experience and value. Whether you're shopping for home decor products or seeking collaboration opportunities, we're committed to delivering excellence every step of the way."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="We offer exclusive partnership deals and trade discounts for interior designers, architects, contractors, and other trade professionals. Partner with us to access special pricing, bulk discounts, and priority service for sourcing home decor products for your projects."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Home Organization Solutions"
          desc="Provide home organization services to help customers declutter, streamline, and optimize their living spaces. Offer customized organization solutions for closets, pantries, garages, and other areas of the home to enhance functionality and efficiency."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="At PsalmsTones Technologies Ltd, we're dedicated to providing exceptional customer support to ensure that your experience with us is nothing short of excellent. Whether you have questions about our products, need assistance with an order, or require design advice, our friendly and knowledgeable team is here to help."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
