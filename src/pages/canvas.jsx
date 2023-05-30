import dynamic from 'next/dynamic';
import * as React from 'react';

const ReactP5Wrapper = dynamic(
    () => import('@p5-wrapper/react').then((module) => module.ReactP5Wrapper),
    {ssr: false},
);




function sketch(p5) {
  p5.setup = () =>
    p5.createCanvas(1090, 400).mouseClicked(mouseClicked);




  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.stroke(200);
    } else {
      p5.stroke(237, 34, 93);
    }
    p5.line(p5.mouseX - 66, p5.mouseY, p5.mouseX + 66, p5.mouseY);
    p5.line(p5.mouseX, p5.mouseY - 66, p5.mouseX, p5.mouseY + 66);
  };

  function mouseClicked() {
    console.log(`Clicked at(${ p5.mouseX } X, ${ p5.mouseY } Y)`);
  }
}



export default function Canvas() {
  return <ReactP5Wrapper sketch={sketch} />;
}
