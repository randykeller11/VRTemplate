import "./App.css";
import React, { Suspense, useState } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { VRCanvas, DefaultXRControllers, useController } from "@react-three/xr";
import TeleportTravel from "./TeleportTravel";

import { Canvas } from "@react-three/fiber";

import Avatar5 from "./components/Avatar5";

//loader function for suspense
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

//cube for teleport icon
function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} attach="geometry" />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
}

//floor creates a mesh that can be traversed with teleport
function Floor(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry args={[20, 20]} attach="geometry" />
      <meshStandardMaterial attach="material" color={"white"} />
    </mesh>
  );
}

//toggle the VR state to switch between edit mode and a live VR session
function App() {
  const [VR, setVR] = useState(true);
  return (
    <div className="canvas">
      <Suspense fallback={null}>
        {!VR && (
          <Canvas camera={{ position: [0, 4, 6] }}>
            <Suspense fallback={<Loader />}>
              <Sky />
              <Avatar5 scale={[0.6, 0.6, 0.6]} />
              <ambientLight intensity={0.9} />
            </Suspense>
          </Canvas>
        )}
        {VR && (
          <VRCanvas>
            <Suspense fallback={<Loader />}>
              <Sky />
              <ambientLight intensity={0.9} />
              <TeleportTravel useNormal={true} Indicator={Cube}>
                <Floor position={[0, -0.2, 0]} />
              </TeleportTravel>
              <DefaultXRControllers />
            </Suspense>
          </VRCanvas>
        )}
      </Suspense>
    </div>
  );
}

export default App;
