import { useMemo, useState } from "react";

const logos = [
  { src: "/btclogo.png", alt: "BTC" },
  { src: "/ethlogo.png", alt: "ETH" },
  { src: "/sologo.png", alt: "SOL" },
];

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);

  const floatingLogos = useMemo(() => {
    const all = [
      ...Array(15).fill(logos[0]),
      ...Array(15).fill(logos[1]),
      ...Array(15).fill(logos[2]),
    ];

    return all
      .sort(() => Math.random() - 0.5)
      .map((logo, i) => ({
        ...logo,
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: logo.alt === "SOL" ? 40 : 32,
        rotate: `${Math.random() * 360}deg`,
        delay: `${Math.random() * 5}s`,
      }));
  }, []);
