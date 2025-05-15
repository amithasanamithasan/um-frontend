/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-lottie" {
  import { Component } from "react";

  interface LottieProps {
    options: {
      loop?: boolean;
      autoplay?: boolean;
      animationData: any;
      rendererSettings?: {
        preserveAspectRatio?: string;
      };
    };
    height?: number | string;
    width?: number | string;
    isClickToPauseDisabled?: boolean;
  }

  export default class Lottie extends Component<LottieProps> {}
}
