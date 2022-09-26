const InlineLink = ({
  children,
  spaceLeft,
  link,
  decorationAccentColor,
  hoverTextAccentColor,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <span
      className={`${
        spaceLeft ? "ml-1" : ""
      } underline  ${decorationAccentColor} ease-in duration-100 ${hoverTextAccentColor} cursor-pointer`}
      onClick={handleClick}
    >
      {children}
    </span>
  );
};

export default InlineLink;
