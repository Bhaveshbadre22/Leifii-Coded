import React from "react";
import SvgLine from "../../components/SvgLine/svgLine";

const Fillar = () => {
  return (
    <div>
      <div className="h-[110vh] md:h-[120vh] w-full bg-white overflow-hidden">
        <div className="h-[65%] w-full flex flex-col md:flex-row items-center">
          <div className="order-2 md:order-1 w-full lg:w-[90%] text-[4rem] md:text-[5rem] lg:text-[6rem] font-questrial mt-[2rem] lg:mt-[8rem] ml-[2rem] lg:ml-[5rem] items-center">
            <div>DESIGNING YOUR</div>
            <div>LEAVES</div>
          </div>
          <div className="order-1 md:order-2 w-full lg:w-[30%] h-full mt-[2rem] lg:mt-[6rem] lg:pt-[0rem] lg:mr-[8rem] flex items-center justify-center">
            <div className="bg-slate-600 h-[18rem] md:h-[14rem] lg:h-[18rem] w-[18rem] md:w-[14rem] lg:w-[30rem] rounded-full overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/filler.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
          </div>
        </div>

        <div className="">
          <SvgLine />
        </div>
        <div
  className="w-full lg:w-full text-[1.25rem] lg:text-[2.03rem] tracking-wide px-0 pt-0 md:pt-0 lg:px-10 text-left uppercase"
  style={{ paddingLeft: '5rem', lg: { paddingLeft: '20rem' } }}
>
  "Together, we will grow businesses and build brands that make a difference"
</div>
        </div>
      </div>
  );
};

export default Fillar;
