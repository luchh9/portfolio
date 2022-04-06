import React from "react";
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <>
      <Particles
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            onhover: {
              enable: true,
              mode: "bubble",
            },
          },
          particles: {
            color: {
              value: "9fafca",
            },
            number: {
              value: 40,
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.05,
              },
            },
          },
        }}
      />
    </>
  );
}
