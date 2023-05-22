export default function calcUARR(
  containerWidth, containerHeight, 
  aspectRatioWidth, aspectRatioHeight, 
  maxWidth, maxHeight
) {
  const containerAspectRatio = containerWidth / containerHeight;
  const widthByHeight = aspectRatioWidth/aspectRatioHeight;
  const heightByWidth = aspectRatioHeight/aspectRatioWidth;

  if (containerAspectRatio > widthByHeight) {
    if (containerHeight >= maxHeight) {
      return {width: maxWidth, height: maxHeight};
    }
    else {
      return {
        width: containerHeight * widthByHeight,
        height: containerHeight 
      };
    };
  } else {
    if (containerWidth >= maxWidth) {
      return {width: maxWidth, height: maxHeight};
    } else {
      return {
        width: containerWidth,
        height: containerWidth * heightByWidth,
      };
    };
  };
};