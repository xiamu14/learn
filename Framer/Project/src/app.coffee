# States are the different appearance options of a layer.
# In this example, we set up a card and a TextLayer, then add a 360° rotation onClick.
# Another common use is the “on” and “off” states of a toggle.
# Learn more here: framer.com/getstarted/guide/#states

# Set up background
Screen.backgroundColor = "#EEE"

# Set up card
card = new Layer
    x: Align.center
    y: Align.center
    backgroundColor: "#0AF"
    borderRadius: 8
    shadowY: 8
    shadowBlur: 24
    shadowColor: "rgba(0,0,0,0.1)"
    clip: true

# Set up label
label = new TextLayer
    height: 100
    y: card.height - 60
    parent: card
    backgroundColor: "#FFF"
    color: "#333"
    fontSize: 15
    fontWeight: 500
    text: "Tap to Rotate"
    width: card.width
    textAlign: "center"
    padding:
        top: 20

# Add states
card.states.rotated =
    rotationY: 360
    backgroundColor: "#05F"

# Switch states on click
card.onClick ->
    card.stateCycle()
