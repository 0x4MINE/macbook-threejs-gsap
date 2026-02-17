import { PresentationControls } from "@react-three/drei";
import Macbook16 from "../models/Macbook-16";
import { useRef } from "react";
import Macbook14 from "../models/Macbook-14";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

interface IModelSwitcher {
  scale: number;
  isMobile: boolean;
}

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (
  groupRef: React.RefObject<THREE.Group | null>,
  opacity: number
) => {
  if (!groupRef?.current) return;

  groupRef.current.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (mesh.material) {
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((mat) => {
          if (mat instanceof THREE.Material) {
            mat.transparent = true;
            gsap.to(mat, { opacity, duration: ANIMATION_DURATION });
          }
        });
      }
    }
  });
};

const moveGroup = (
  groupRef: React.RefObject<THREE.Group | null>,
  x: number
) => {
  if (!groupRef?.current) return;
  gsap.to(groupRef.current.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }: IModelSwitcher) => {
  const mac14Ref = useRef<THREE.Group>(null);
  const mac16Ref = useRef<THREE.Group>(null);

  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(mac14Ref, -OFFSET_DISTANCE);
      moveGroup(mac16Ref, 0);

      fadeMeshes(mac14Ref, 0);
      fadeMeshes(mac16Ref, 1);
    } else {
      moveGroup(mac14Ref, 0);
      moveGroup(mac16Ref, OFFSET_DISTANCE);

      fadeMeshes(mac14Ref, 1);
      fadeMeshes(mac16Ref, 0);
    }
  }, [scale, showLargeMacbook]);

  return (
    <>
      <PresentationControls
        snap={true}
        polar={[-Math.PI, Math.PI]}
        zoom={1}
        speed={1}
        azimuth={[-Infinity, Infinity]}
      >
        <group ref={mac16Ref}>
          <Macbook16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls
        snap={true}
        polar={[-Math.PI, Math.PI]}
        zoom={1}
        speed={1}
        azimuth={[-Infinity, Infinity]}
      >
        <group ref={mac14Ref}>
          <Macbook14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
