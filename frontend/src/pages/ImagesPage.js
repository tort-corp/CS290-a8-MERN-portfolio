import React from "react";

import ImageGallery from "react-image-gallery";

//create an object of images
const pictures = [
  {
    original: "images/mechatronics-jar-lid-decerator-machine-project.jpg",
    thumbnail: "images/mechatronics-jar-lid-decerator-machine-project.jpg",
    description: `A prototype jar sorting machine.`,
    originalHeight: "450px",
  },
  {
    original: "images/airboat-ride-swamp.jpg",
    thumbnail: "images/airboat-ride-swamp.jpg",
    description: `An airboat bow parting a lush swamp.`,
    originalHeight: "450px",
  },
  {
    original: "images/backpacking-dog-ferns-forest.jpg",
    thumbnail: "images/backpacking-dog-ferns-forest.jpg",
    description: `A beautiful forest with ferns covering the ground. Peaking through the ferns is a dog.`,
    originalHeight: "450px",
  },
  {
    original: "images/camel-farm-bahrain.jpg",
    thumbnail: "images/camel-farm-bahrain.jpg",
    description: `Several camels standing under a sun shade in an enclosure.`,
    originalHeight: "450px",
  },
  {
    original: "images/fort-bragg-whale-carving-beach.jpg",
    thumbnail: "images/fort-bragg-whale-carving-beach.jpg",
    description: `A large wooden carving of a whale and her calf. Behind the carving is the Pacific Ocean.`,
    originalHeight: "450px",
  },
  {
    original: "images/colosseum.jpg",
    thumbnail: "images/colosseum.jpg",
    description: `The Colosseum.`,
    originalHeight: "450px",
  },
  {
    original: "images/dog-lake-portriate.jpg",
    thumbnail: "images/dog-lake-portriate.jpg",
    description: `A black and white dog drenched from swimming stares out at a lake.`,
    originalHeight: "450px",
  },
  {
    original: "images/jupiter-saturn-great-conjuction.jpg",
    thumbnail: "images/jupiter-saturn-great-conjuction.jpg",
    description: `Two bright dots surrounded by black. One of them is Jupyter. The other is Saturn, with its four largest moons in line with the planet.`,
    originalHeight: "450px",
  },
  {
    original: "images/lake-mountain-swimming.jpg",
    thumbnail: "images/lake-mountain-swimming.jpg",
    description: `A serene lake back dropped by a mountain peak. `,
    originalHeight: "450px",
  },
  {
    original: "images/lassen-national-forest-snow-drone.jpg",
    thumbnail: "images/lassen-national-forest-snow-drone.jpg",
    description: `An aerial shot of a snow covered, sparse forest. `,
    originalHeight: "450px",
  },
];

function ImagesPage() {
  return (
    <>
      <h2>Gallery</h2>
      <p>A collection of photos I have taken over the years</p>
      <article class="gallery">
        <ImageGallery items={pictures} />
      </article>
    </>
  );
}

export default ImagesPage;
