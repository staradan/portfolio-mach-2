import InlineLink from "./InlineLink";

const ResumeActivitySection = ({
  title,
  description,
  link,
  decorationAccentColor,
  hoverTextAccentColor,
}) => (
  <div className="border-b border-dashed border-gray-600 pb-4 mb-4 w-full">
    <div className="w-full">
      <p className="font-bold text-md underline cursor-pointer w-full">
        <InlineLink
          link={link}
          decorationAccentColor={decorationAccentColor}
          hoverTextAccentColor={hoverTextAccentColor}
        >
          {title}
        </InlineLink>
      </p>
      <p className="text-gray-500 mt-2 dark:text-gray-400 w-full">
        {description}
      </p>
    </div>
  </div>
);

export default ResumeActivitySection;
