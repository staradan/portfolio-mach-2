import logo from "./logo.svg";
import "./App.css";

const MarkupStyledText = ({ text }) => (
  <span className="text-amber-400 text-sm italic">{text}</span>
);

const ResumeYearSection = ({ year, children }) => (
  <div className="flex w-full">
    <div>
      <p className="font-bold text-lg mr-4">{year}</p>
    </div>
    <div>{children}</div>
  </div>
);

const ResumeActivitySection = ({ title, children }) => (
  <div className="border-b border-dashed border-black pb-4 mb-4">
    <p className="font-bold text-lg">{title}</p>
    <p>{children}</p>
  </div>
);

const SecondaryButton = ({ children, onClick }) => (
  <div
    className="p-2 px-4 bg-gray-100 rounded mr-2 text-gray-800 cursor-pointer hover:bg-gray-200"
    onClick={onClick}
  >
    <p>{children}</p>
  </div>
);

const PageSection = ({ children, isFlex }) => (
  <div className={"my-4 " + (isFlex ? "flex" : "")}>{children}</div>
);

const InlineLink = ({ children }) => (
  <span className="ml-1 underline ease-in duration-100 hover:text-amber-400 cursor-pointer">
    {children}
  </span>
);

const App = () => {
  return (
    <div className="m-12">
      <PageSection>
        <MarkupStyledText text="<h1>" />
        <h1 className="font-bold text-3xl uppercase">Daniel Stara</h1>
        <MarkupStyledText text="</h1>" />
      </PageSection>

      <PageSection isFlex>
        <SecondaryButton>GitHub</SecondaryButton>
        <SecondaryButton>LinkedIn</SecondaryButton>
        <SecondaryButton>Résumé PDF</SecondaryButton>
      </PageSection>

      <PageSection>
        <MarkupStyledText text="<p>" />
        <p>
          I am a problem-solver who is fired up by leveraging technology to
          empower individuals, synergize teams, and improve communities. I spend
          my time<InlineLink>reading</InlineLink>,
          <InlineLink>designing</InlineLink>,<InlineLink>building</InlineLink>,
          playing sports, and talking about cool new startups.
        </p>
        <MarkupStyledText text="</p>" />
      </PageSection>

      <PageSection>
        <MarkupStyledText text="<h3>" />
        <h1 className="font-bold text-xl uppercase">Résumé</h1>
        <MarkupStyledText text="</h3>" />
      </PageSection>

      <ResumeYearSection year="2022">
        <ResumeActivitySection title="SpaceX Project Manager">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>
      </ResumeYearSection>
      <ResumeYearSection year="2022">
        <ResumeActivitySection title="SpaceX Project Manager">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>

        <ResumeActivitySection title="Point Guard, Chicago Bulls">
          <p>
            Some kind of activity description talking about the impact that it
            had and all the technical challenges overcame
          </p>
        </ResumeActivitySection>
      </ResumeYearSection>

      <PageSection>
        <MarkupStyledText text="<p>" />
        <p>
          This page was inspired by a number of portfolios made by talented
          developers. They are
          <InlineLink>Nathan Gentry</InlineLink>,
          <InlineLink>Nick Siscoe</InlineLink>,<InlineLink>Tim Roty</InlineLink>
          ,<InlineLink>Jordan Boesch</InlineLink>,
          <InlineLink>Parker Miller</InlineLink>, and
          <InlineLink>Daniel Eden</InlineLink>
        </p>
        <MarkupStyledText text="</p>" />
      </PageSection>
    </div>
  );
};

export default App;
