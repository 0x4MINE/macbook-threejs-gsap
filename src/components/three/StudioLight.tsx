import { Environment, Lightformer } from "@react-three/drei";

function StudioLight() {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form={"rect"}
            position={[-10, 5, -5]}
            intensity={10}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form={"rect"}
            position={[10, 0, 1]}
            intensity={10}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        angle={0.15}
        decay={0.1}
        position={[0, 15, 5]}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        angle={0.15}
        decay={0}
        position={[0, -25, 10]}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
    </group>
  );
}

export default StudioLight;
