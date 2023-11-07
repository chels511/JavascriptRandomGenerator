const adventureOptions = [
  "Wildlife Safari in Africa", "Volcano Trekking in Iceland", "Snowboarding or Skiing in the Mountains", "Sailing in the Open Sea", "Trekking to Machu Picchu", "Caving and Spelunking Adventures", 
  "Desert Camel Trekking", "Bungee Jumping from a High Bridge", "Ice Climbing on Frozen Waterfalls", "Horseback Riding Through a Scenic Landscape", "Stand-Up Paddleboarding in a Calm Bay"
];
function generateAndRestyle() {
  generateResponse();
  restyle();
}
function generateResponse() {
  const visitorName = document.getElementById("visitorName").textContent;
  const responseElement = document.getElementById("response");
  const randomIndex = Math.floor(Math.random() * adventureOptions.length);
  const randomResponse = adventureOptions[randomIndex];
  responseElement.textContent = `${randomResponse}`;
}
function setVisitorName(name) {
  const visitorNameElement = document.getElementById("visitorName");
  visitorNameElement.textContent = name;
}
const visitorName = prompt("Please enter your name:");
setVisitorName(visitorName);

function restyle() {
  const outputElement = document.getElementById("response");
  const styles = ["font-size", "color", "font-family"];

 styles.forEach((style) => {
    const randomValue = getRandomStyleValue(style);
    outputElement.style[style] = randomValue;
  });
}

function getRandomStyleValue(styleProperty) {
  if (styleProperty === "font-size") {
    const minSize = 12;
    const maxSize = 30;
    return `${Math.floor(Math.random() * (maxSize - minSize + 1) + minSize)}px`;
  } else if (styleProperty === "color") {
    const colors = ["#fcc9a9", "#fcf4a9", "#b0fca9", "#a9f4fc", "#d6a9fc"];
    return colors[Math.floor(Math.random() * colors.length)];
  } else if (styleProperty === "font-family") {
    const backgroundColors = ["Bebas Neue", "Roboto", "Kenia", "Agbalumo", "Permanent Marker"];
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
}