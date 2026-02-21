import { Canvas } from "@react-three/fiber";
import StudioLight from "./three/StudioLight";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { MacbookModel } from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMacboookStore } from "../store";
import * as THREE from "three";
const ModelScroll = () => {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacboookStore();
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const video = document.createElement("video");
      Object.assign(video, {
        src: feature.videoPath,
        preload: "auto",
        crossOrigin: "anonymous",
        playsInline: true,
        muted: true,
      });

      video.load();
    });
  }, []);

  useGSAP(() => {
    const modelTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const featuresTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTL.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    featuresTL
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2 ", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl ">LOADING....</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

function Features() {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLight />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0 text-white">
        {features.map((feature, index) => (
          <div className={clsx("box", `box${index + 1}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
