import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section className="h-fit lg:h-[80vh] col-center mt-40 lg:mt-20 2xl:mt-[7vh]">
      <div className="relative z-10 col-center lg:translate-y-16">
        <h1 className="font-semibold text-white lg:text-3xl 2xl:5xl ">
          MacBook Pro
        </h1>
        <img
          src="/title.png"
          className="container mx-auto w-2/3"
          alt="MacBook Pro title"
        />
        <video
          ref={videoRef}
          className="mx-auto container"
          muted
          autoPlay
          src="/videos/hero.mp4"
          playsInline
        />
      </div>
      <button className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Buy
      </button>
      <p className="base-semibold z-10 lg:h3-semibold">
        From $1599 or $133/mo. for 12 months
      </p>
    </section>
  );
};

export default Hero;
