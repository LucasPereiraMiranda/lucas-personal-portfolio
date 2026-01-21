"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useColorModeValue, Box } from "@chakra-ui/react";

export function ParticleBackground() {
  const [init, setInit] = useState(false);
  const particleColor = useColorModeValue("#6B46C1", "#805AD5");
  const linkColor = useColorModeValue("#319795", "#00D9FF");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
              color: linkColor,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: [particleColor, linkColor, "#E53E3E", "#D69E2E"],
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          direction: "none",
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"],
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [particleColor, linkColor]
  );

  if (!init) {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={-1}
      pointerEvents="auto"
    >
      <Particles
        id="tsparticles"
        options={options}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </Box>
  );
}
