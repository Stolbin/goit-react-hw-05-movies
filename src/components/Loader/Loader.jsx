import { Component } from "react";
import { LoaderContainer } from "./Loader.styled";
import { DotSpinner } from "@uiball/loaders";

class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <DotSpinner size={100} speed={0.9} color="#D2691E" />
      </LoaderContainer>
    );
  }
}
export default Loader;
