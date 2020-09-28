interface BackgroundTogglerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: React.MouseEvent) => void;
}

export default BackgroundTogglerProps;
