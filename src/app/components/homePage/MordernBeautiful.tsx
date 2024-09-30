import Image from "next/image";
import tourImg1 from "../../assets/images/mordern-beautiful/tour-img-1.jpg";
const MordernBeautiful = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          MODERN & BEAUTIFUL
        </span>
        <h2 className="section-title text-5xl font-bold">
          Our Most Popular Adventures
        </h2>
      </div>
      <div className="beautiful-cards-wrapper mt-20">
        <div className="grid grid-cols-4 gap-4">
          {/* Beautiful Single Card */}
          <div className="beautiful-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <Image src={tourImg1} alt="" />
            </div>
            <div className="py-6 px-5">
              <h3 className="text-xl font-bold">Moscow Red City Land</h3>
              <p className="text-md font-semibold mt-3">
                <span className="text-xl font-bold">$160</span> / Per person
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                tempor incididunt.
              </p>
              <button className="tmp-btn-primary">See Details</button>
            </div>
          </div>
          {/* Beautiful Single Card */}
          <div className="beautiful-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <Image src={tourImg1} alt="" />
            </div>
            <div className="py-6 px-5">
              <h3 className="text-xl font-bold">Moscow Red City Land</h3>
              <p className="text-md font-semibold mt-3">
                <span className="text-xl font-bold">$160</span> / Per person
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                tempor incididunt.
              </p>
              <button className="tmp-btn-primary">See Details</button>
            </div>
          </div>
          {/* Beautiful Single Card */}
          <div className="beautiful-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <Image src={tourImg1} alt="" />
            </div>
            <div className="py-6 px-5">
              <h3 className="text-xl font-bold">Moscow Red City Land</h3>
              <p className="text-md font-semibold mt-3">
                <span className="text-xl font-bold">$160</span> / Per person
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                tempor incididunt.
              </p>
              <button className="tmp-btn-primary">See Details</button>
            </div>
          </div>
          {/* Beautiful Single Card */}
          <div className="beautiful-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <Image src={tourImg1} alt="" />
            </div>
            <div className="py-6 px-5">
              <h3 className="text-xl font-bold">Moscow Red City Land</h3>
              <p className="text-md font-semibold mt-3">
                <span className="text-xl font-bold">$160</span> / Per person
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                tempor incididunt.
              </p>
              <button className="tmp-btn-primary">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MordernBeautiful;
