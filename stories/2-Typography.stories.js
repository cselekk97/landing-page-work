import React from "react";
import ButtonText from "../components/button-text";
import ParagrapheText from "../components/paragraphe-text";
import TitleText from "../components/title-text";

export default {
  title: "Typography",
  component: Text,
};

export const buttonText = () => (
  <div>
    <ButtonText>Hi</ButtonText>
    <ButtonText bold>Hi</ButtonText>
    <ButtonText bold blue>
      Hi
    </ButtonText>
    <ButtonText bold white>
      Hi
    </ButtonText>
    <ButtonText bold black>
      Hi
    </ButtonText>
  </div>
);

export const paragraphText = () => (
  <div>
    <ParagrapheText>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </ParagrapheText>
  </div>
);

export const titleText = () => (
    <div>
      <TitleText huge>Lorem</TitleText>
      <TitleText med>Lorem</TitleText>
      <TitleText>Lorem</TitleText>
      <TitleText blue>Lorem</TitleText>
      <TitleText yellow>Lorem</TitleText>
      <TitleText yellow bold>Lorem</TitleText>

    </div>
  );
