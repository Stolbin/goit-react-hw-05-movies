import { Component } from "react";
// import { ThreeCircles } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";
import { DotSpinner } from "@uiball/loaders";

class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <DotSpinner size={100} speed={0.9} color="#D2691E" />
        {/* <ThreeCircles
          height="120"
          width="120"
          color="#800000"
          visible={true}
          ariaLabel="three-circles-rotating"
        /> */}
      </LoaderContainer>
    );
  }
}
export default Loader;
