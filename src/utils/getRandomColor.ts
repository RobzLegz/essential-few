export function getRandomColor() {
  const brightColors = [
    "#A73AFF",
    "#FF3EA1",
    "#FF4040",
    "#FFD700",
    "#FFA500",
    "#00BFFF",
    "#00FF7F",
    "#00CED1",
    "#E6E6FA",
    "#FF7F50",
  ];
  const darkColors = [
    "#6A0DAD",
    "#FF1493",
    "#8B0000",
    "#B8860B",
    "#FF4500",
    "#00008B",
    "#006400",
    "#00868B",
    "#4B0082",
    "#FF4500",
  ];

  const allColors = [...brightColors, ...darkColors];

  return allColors[Math.floor(Math.random() * allColors.length)];
}
