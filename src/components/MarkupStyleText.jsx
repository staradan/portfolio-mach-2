const MarkupStyledText = ({ text, textAccentColor }) => (
  <span className={`${textAccentColor} text-sm italic opacity-70`}>{text}</span>
);

export default MarkupStyledText;
