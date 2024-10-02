import Image from "next/image";
import LeftImage from "./../../assets/images/about/left-img.jpg";
import RightImage from "./../../assets/images/about/right-img.jpg";
const AboutUs = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-2 gap-4">
        <div className="mr-10">
          <div className="image-box flex justify-end ">
            <Image
              src={LeftImage}
              alt=""
              className="bg-red-50 p-2 rounded-lg overflow-hidden"
            />
          </div>
          <div className="text-end mt-10">
            <p className="max-w-lg ml-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu
              smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum
              suspen disse ultrices gravida Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <h3 className="mt-3 text-lg font-bold">
              Find Your Best Destination
            </h3>
          </div>
        </div>

        <div>
          <div className="section-title text-start">
            <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
              ABOUT TRAVIO
            </span>
            <h2 className="section-title text-5xl font-bold">
              Best Travel Agency Since 2008.
            </h2>
          </div>
          <div className="image-box mt-28">
            <Image
              src={RightImage}
              alt=""
              className="bg-red-50 p-2 rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
