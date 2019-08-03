import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import "./svg.css";
function KCircle({
  cx,
  cy,
  r,
  id,
  delay
}: {
  cx: number;
  cy: number;
  r: number;
  id: string;
  delay: number;
}) {
  const anglePI = (-135) * (Math.PI / 180);
  const angleCoords = {
    x1: Math.round(50 + Math.sin(anglePI) * 50) + "%",
    y1: Math.round(50 + Math.cos(anglePI) * 50) + "%",
    x2: Math.round(50 + Math.sin(anglePI + Math.PI) * 50) + "%",
    y2: Math.round(50 + Math.cos(anglePI + Math.PI) * 50) + "%"
  };
  return (
    <>
      <defs>
        <radialGradient id={`myRGradient${id}`}>
          <stop offset="75%" stopColor="hsla(230,100%,50%,0)" />
          <stop offset="100%" stopColor="hsla(230,100%,50%,0.25)" />
        </radialGradient>
        <linearGradient id={`myLGradient${id}`} {...angleCoords}>
          <stop offset="50%" stopColor="black" />
          <stop offset="100%" stopColor="grey" />
        </linearGradient>
        <mask id={`gradient-mask${id}`}>
          <circle cx={cx} cy={cy} r={r} fill={`url('#myLGradient${id}')`} />
        </mask>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={"ufo-big"}
        fill={`url('#myRGradient${id}')`}
        mask={`url('#gradient-mask${id}')`}
        style={{
          animationDelay: `${delay}s`
        }}
      />
    </>
  );
}

function Test() {
  return (
    <svg width={"100vw"} height={"100vh"}>
      {/*<KCircle cx={140} cy={130} r={500} id={"1"} delay={0.1} />*/}
      {/*<KCircle cx={150} cy={120} r={500} id={"2"}  delay={0.2}/>*/}
      {/*<KCircle cx={160} cy={110} r={500} id={"3"} delay={0.3}/>*/}
      {/*<KCircle cx={170} cy={100} r={500} id={"4"} delay={0.4}/>*/}
      {/*<KCircle cx={180} cy={90} r={500} id={"5"} delay={0.5} />*/}
      {/*<KCircle cx={190} cy={80} r={500} id={"6"}  delay={0.6}/>*/}
      {/*<KCircle cx={200} cy={70} r={500} id={"7"} delay={0.7}/>*/}
      {/*<KCircle cx={210} cy={60} r={500} id={"8"} delay={0.8}/>*/}
      {/*<KCircle cx={240} cy={530} r={500} id={"11"} delay={0.1} />*/}
      <KCircle cx={250} cy={820} r={500} id={"12"}  delay={0.2}/>
      {/*<KCircle cx={260} cy={110} r={500} id={"13"} delay={0.3}/>*/}
      {/*<KCircle cx={270} cy={100} r={500} id={"14"} delay={0.4}/>*/}
      {/*<KCircle cx={280} cy={90} r={500} id={"15"} delay={0.5} />*/}
      {/*<KCircle cx={290} cy={80} r={500} id={"16"}  delay={0.6}/>*/}
      {/*<KCircle cx={300} cy={70} r={500} id={"17"} delay={0.7}/>*/}
      {/*<KCircle cx={410} cy={60} r={500} id={"18"} delay={0.8}/>*/}
    </svg>
  );
}
render(<Test />, document.getElementById("root"));
