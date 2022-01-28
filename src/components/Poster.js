import React from "react";
import * as THREE from "three";

import { useLoader } from "@react-three/fiber";

function Poster(props) {
  const texture = useLoader(THREE.TextureLoader, props.image);
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default Poster;
