import BannerImg from "../assets/Banner/jflowg.jpeg";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-blue-600">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-centerb">
          {/*image section*/}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[10px_10px_12px_rgba(0,0,0,0.5)] object-cover"
            />
          </div>
          {/* Text Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Lorem ipsum dolor sit amet consecte
            </h1>
            <p className="text-dark text-lg mt-4 leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, nemo.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <GrSecure className="text-3xl text-green-500" />
              <p className="text-dark text-lg">100% Secure Payment</p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <GrSecure className="text-3xl text-green-500" />
                <p className="text-dark text-lg">100% Secure Payment</p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <GrSecure className="text-3xl text-green-500" />
                <p className="text-dark text-lg">100% Secure Payment</p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <GrSecure className="text-3xl text-green-500" />
                <p className="text-dark text-lg">100% Secure Payment</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
