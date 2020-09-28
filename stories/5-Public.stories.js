import * as React from "react"

import Screen from '../public/screen.png'
import Screen1 from '../public/screen1.png'
import Screen2 from '../public/screen2.png'


export default{
    title: 'Public'
}

const image = {
  src: Screen,
  alt: 'Screen',
  src1: Screen1,
  alt1: 'Screen1',
  src2: Screen2,
  alt2: 'Screen2',
};

export const screen = () => (
    <img src={image.src} alt={image.alt} />
  );
export const screen1 = () => (
    <img src={image.src1} alt={image.alt1} />
  );
export const screen2 = () => (
    <img src={image.src2} alt={image.alt2} />
  );