import React from "react";
import Poster from "../components/Poster";
import basquiat1 from "../images/basquiat1.jpeg";
import basquiat7 from "../images/basquiat7.jpeg";
import basquiat3 from "../images/basquiat3.jpeg";
import basquiat8 from "../images/basquiat8.jpeg";

import romare6 from "../images/romare6.jpeg";
import romare7 from "../images/romare7.jpeg";
import romare1 from "../images/romare1.jpeg";
import romare5 from "../images/romare5.jpeg";

import lawerence6 from "../images/lawerence6.jpeg";
import lawerence7 from "../images/lawerence7.jpeg";
import lawerence8 from "../images/lawerence8.jpeg";

import NewGallery from "../components/NewGallery";

function Gallery() {
  return (
    <>
      <Poster
        scale={[0.5, 0.35, 1]}
        position={[-3.35, 2.19, -5.9]}
        image={basquiat8}
      />
      <Poster
        scale={[0.39, 0.58, 1]}
        position={[3.42, 1.8, -5.9]}
        image={basquiat1}
      />
      <Poster
        scale={[0.387, 0.275, 1]}
        position={[4.866, 2.102, -4.81]}
        rotation={[0, -Math.PI / 2, 0]}
        image={basquiat7}
      />
      <Poster
        scale={[0.32, 0.41, 1]}
        position={[4.864, 1.9, -3.05]}
        rotation={[0, -Math.PI / 2, 0]}
        image={basquiat3}
      />
      <Poster
        scale={[0.61, 0.44, 1]}
        position={[4.81, 1.99, 4.025]}
        rotation={[0, -Math.PI / 2, 0]}
        image={romare6}
      />
      <Poster
        scale={[0.485, 0.67, 1]}
        position={[3.51, 2.07, 6.01]}
        rotation={[0, Math.PI, 0]}
        image={romare7}
      />

      <Poster
        scale={[0.875, 0.625, 1]}
        position={[-0.105, 2.11, 6.01]}
        rotation={[0, Math.PI, 0]}
        image={romare1}
      />
      <Poster
        scale={[0.385, 0.28, 1]}
        position={[-3.36, 2.21, 6]}
        rotation={[0, Math.PI, 0]}
        image={romare5}
      />
      <Poster
        scale={[0.917, 0.63, 1]}
        position={[-4.79, 1.835, 2.22]}
        rotation={[0, Math.PI / 2, 0]}
        image={lawerence6}
      />
      <Poster
        scale={[0.3, 0.21, 1]}
        position={[-4.83, 2.34, -0.5]}
        rotation={[0, Math.PI / 2, 0]}
        image={lawerence7}
      />
      <Poster
        scale={[0.35, 0.47, 1]}
        position={[-4.83, 2.17, 4.9]}
        rotation={[0, Math.PI / 2, 0]}
        image={lawerence8}
      />
      <NewGallery scale={[1.5, 1.5, 1.5]} />
    </>
  );
}

export default Gallery;
