import React from "react";
import BackgroundTogglerProps from "./index.d";
import BackgroundTogglerStyled from "./index.styled";

const BackgroundToggler = (
  props: BackgroundTogglerProps,
  ref: React.MutableRefObject<HTMLButtonElement>
) => {
  const { onClick, ...otherProps } = props;

  function onTogglerClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick(e);
  }

  return (
    <BackgroundTogglerStyled ref={ref} onClick={onTogglerClick} {...otherProps}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45"></circle>
      </svg>
    </BackgroundTogglerStyled>
  );
};

export default React.forwardRef(BackgroundToggler);
