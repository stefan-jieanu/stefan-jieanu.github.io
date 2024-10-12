import Lottie from "lottie-react";

// @ts-expect-error add types later
const AnimationLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;