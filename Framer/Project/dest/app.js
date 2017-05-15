var card, label;

Screen.backgroundColor = "#EEE";

card = new Layer({
  x: Align.center,
  y: Align.center,
  backgroundColor: "#0AF",
  borderRadius: 8,
  shadowY: 8,
  shadowBlur: 24,
  shadowColor: "rgba(0,0,0,0.1)",
  clip: true
});

label = new TextLayer({
  height: 100,
  y: card.height - 60,
  parent: card,
  backgroundColor: "#FFF",
  color: "#333",
  fontSize: 15,
  fontWeight: 500,
  text: "Tap to Rotate",
  width: card.width,
  textAlign: "center",
  padding: {
    top: 20
  }
});

card.states.rotated = {
  rotationY: 360,
  backgroundColor: "#05F"
};

card.onClick(function() {
  return card.stateCycle();
});
