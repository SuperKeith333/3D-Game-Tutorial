import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import { AnimatedWoman } from "./AnimatedWoman";
import { AmbientLight } from "three";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset"/>
      <ambientLight intensity={0.3}/>
      <ContactShadows blur={2} />
      <OrbitControls />
      <AnimatedWoman />
      <AnimatedWoman position-x={1} hairColor="red" topColor="blue"/>
    </>
  );
};
