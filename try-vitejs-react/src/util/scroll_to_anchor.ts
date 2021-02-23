const scrollToAnchor = (anchor: string) => {
  const anchorElement = document.getElementById(anchor);
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default scrollToAnchor;
