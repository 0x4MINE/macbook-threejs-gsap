import { useMacboookStore } from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Macbook14 from "./models/Macbook-14";
import StudioLight from "./three/StudioLight";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
function ProductViewer() {
  const { setColor, color, setScale, scale } = useMacboookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        {" "}
        <p className="info">
          Macbook Pro | Available in {scale} in {color} color
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>{" "}
          <div className="size-control">
            <div
              onClick={() => {
                console.log(scale);
                setScale(0.06);
              }}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        className="w-full! h-[80vh]! lg:h-dvh! relative z-40"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 1000 }}
      >
        <StudioLight />
        <ModelSwitcher
          isMobile={isMobile}
          scale={isMobile ? scale - 0.03 : scale}
        />
      </Canvas>
    </section>
  );
}

export default ProductViewer;
