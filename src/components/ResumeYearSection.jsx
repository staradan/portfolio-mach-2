const ResumeYearSection = ({ year, children }) => (
  <div className="flex">
    <div>
      <p className="font-bold text-md mr-4 text-lg">{year}</p>
    </div>
    <div className="w-full">{children}</div>
  </div>
);

export default ResumeYearSection;
