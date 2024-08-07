import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      {/* <Image src={imgSrc} width={80} height={80} alt="features" /> */}
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
      <h2 className="title text-center text-br">We're committed to delivering excellence every step of the way</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Custom Furniture Design"
          desc="Looking for something unique? Our custom furniture design service allows you to create pieces that perfectly fit your style and space. Contact us to start your custom order."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Delivery and Installation"
          desc="We offer reliable delivery and professional installation services to ensure your furniture arrives safely and is set up correctly. Delivery charges apply based on location"
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Custom Designs"
          desc="Our design philosophy combines timeless elegance with modern functionality. We offer a diverse range of styles, from classic to contemporary, ensuring there’s something to suit every taste and interior."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Comprehensive Warranties"
          desc="To give you added peace of mind, all our furniture comes with comprehensive warranties. We stand by the quality of our products and are committed to addressing any issues that may arise. Your satisfaction is our top priority"
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
