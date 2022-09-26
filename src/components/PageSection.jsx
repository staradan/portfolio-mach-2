const PageSection = ({ children, isFlex }) => (
  <div className={"my-4 " + (isFlex ? "flex overflow-x-auto" : "")}>
    {children}
  </div>
);

export default PageSection;
