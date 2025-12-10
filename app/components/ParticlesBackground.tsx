"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export type ParticlesPreset = "gold" | "royal" | "crimson" | "casino" | "sparkle";

interface ParticlesBackgroundProps {
  preset?: ParticlesPreset;
  density?: number;
}

export default function ParticlesBackground({
  preset = "gold",
  density = 80,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    // Define preset-specific configurations
    const presetColors: Record<ParticlesPreset, string[]> = {
      gold: ["#1a74ff", "#0140CB", "#0133a2"], // Updated to blue shades
      royal: ["#1a74ff", "#0140CB", "#0133a2"], // Updated to #0140CB blue
      crimson: ["#ff4d4d", "#B51018", "#910d13"], // Updated to #B51018 red
      casino: ["#1a74ff", "#B51018", "#0140CB", "#ff4d4d"], // Mix of new red and blue
      sparkle: ["#ffffff", "#1a74ff", "#0140CB"], // Blue sparkles
    };

    const presetLinkColors: Record<ParticlesPreset, string> = {
      gold: "#0140CB", // Updated to blue
      royal: "#0140CB", // Updated to #0140CB
      crimson: "#B51018", // Updated to #B51018
      casino: "#0140CB", // Blue links
      sparkle: "#0140CB", // Blue links
    };

    const isSparkle = preset === "sparkle";

    return {
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: presetColors[preset],
        },
        links: {
          enable: !isSparkle,
          distance: 150,
          color: presetLinkColors[preset],
          opacity: preset === "casino" ? 0.15 : 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: density,
        },
        opacity: isSparkle
          ? {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            }
          : {
              value: { min: 0.1, max: 0.5 },
            },
        shape: {
          type: isSparkle ? "star" : "circle",
        },
        size: {
          value: isSparkle ? { min: 1, max: 3 } : { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    };
  }, [preset, density]);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-5 pointer-events-none"
    />
  );
}
