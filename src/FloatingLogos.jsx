const logos = [
  { src: "/btc.png", top: "10%", left: "15%", size: "w-12" },
  { src: "/eth.png", top: "30%", left: "60%", size: "w-14" },
  { src: "/sol.png", top: "70%", left: "40%", size: "w-12" },
  { src: "/eth.png", top: "80%", left: "80%", size: "w-10" },
  { src: "/btc.png", top: "50%", left: "20%", size: "w-14" },
  { src: "/sol.png", top: "20%", left: "70%", size: "w-12" },
];

export default function FloatingLogos() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          className={`absolute ${logo.size} opacity-10 animate-float`}
          style={{
            top: logo.top,
            left: logo.left,
            animationDelay: `${index * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
