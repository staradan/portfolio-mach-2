import PdfResume from "./assets/resume.pdf";

const githubLink = "https://github.com/staradan";
const linkedInLink = "https://www.linkedin.com/in/danielpstara/";
const bookListLink =
  "https://tested-theater-a99.notion.site/Books-7b13a362879d4d70ba3d597033234cd5";

let textAccentColor = "text-amber-500";
let hoverTextAccentColor = "hover:text-amber-500";
let decorationAccentColor = "decoration-amber-500";

const MarkupStyledText = ({ text }) => (
  <span className={`${textAccentColor} text-sm italic`}>{text}</span>
);

const ResumeYearSection = ({ year, children }) => (
  <div className="flex w-full">
    <div>
      <p className="font-bold text-md mr-4">{year}</p>
    </div>
    <div>{children}</div>
  </div>
);

const ResumeActivitySection = ({ title, children }) => (
  <div className="border-b border-dashed border-black pb-4 mb-4">
    <p className="font-bold text-sm">{title}</p>
    <p className="text-sm text-gray-800">{children}</p>
  </div>
);

const SecondaryButton = ({ children, onClick }) => (
  <div
    className="p-2 px-4 bg-gray-100 rounded mr-2 text-gray-800 cursor-pointer ease-in duration-100 hover:bg-gray-200"
    onClick={onClick}
  >
    <p>{children}</p>
  </div>
);

const PageSection = ({ children, isFlex }) => (
  <div className={"my-4 " + (isFlex ? "flex" : "")}>{children}</div>
);

const InlineLink = ({ children }) => (
  <span
    className={`ml-1 underline  ${decorationAccentColor} ease-in duration-100 ${hoverTextAccentColor} cursor-pointer`}
  >
    {children}
  </span>
);

const App = () => {
  return (
    <div className="m-12">
      <div className="flex float-right">
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-amber-400 hover:bg-amber-500 border-amber-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-lime-400 hover:bg-lime-500 border-lime-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-red-400 hover:bg-red-500 border-red-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-orange-400 hover:bg-orange-500 border-orange-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-cyan-400 hover:bg-cyan-500 border-cyan-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-violet-400 hover:bg-violet-500 border-violet-500 border-2"></div>
        <div className="h-5 w-5 rounded cursor-pointer mr-1 bg-pink-400 hover:bg-pink-500 border-pink-500 border-2"></div>
      </div>

      <PageSection>
        <MarkupStyledText text="<h1>" />
        <h1 className="font-bold text-3xl uppercase">Daniel Stara</h1>
        <MarkupStyledText text="</h1>" />
      </PageSection>

      <PageSection isFlex>
        <a href={githubLink}>
          <SecondaryButton>GitHub</SecondaryButton>
        </a>
        <a href={linkedInLink}>
          <SecondaryButton>LinkedIn</SecondaryButton>
        </a>
        <a href={PdfResume} without rel="noopener noreferrer" target="_blank">
          <SecondaryButton>Résumé</SecondaryButton>
        </a>

        <a href={bookListLink}>
          <SecondaryButton>Books</SecondaryButton>
        </a>
      </PageSection>

      <PageSection>
        <MarkupStyledText text="<p>" />
        <p>
          I am a problem-solver who loves leveraging technology to empower
          individuals, synergize teams, and improve communities. I spend my time
          <InlineLink>reading</InlineLink>,<InlineLink>designing</InlineLink>,
          <InlineLink>building</InlineLink>, playing sports, and talking about
          cool new startups. Simplicity is the ultimate sophistication.
        </p>
        <MarkupStyledText text="</p>" />
      </PageSection>

      <MarkupStyledText text="<résumé>" />
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
      <MarkupStyledText text="</résumé>" />

      <PageSection>
        <MarkupStyledText text="<p>" />
        <p>
          This page was inspired by a number of portfolios made by talented
          developers. They are
          <a href="https://nathangentry.me/">
            <InlineLink>Nathan Gentry</InlineLink>
          </a>
          ,
          <a href="https://www.nicksiscoe.com/">
            <InlineLink>Nick Siscoe</InlineLink>
          </a>
          ,
          <a href="https://timroty.github.io/">
            <InlineLink>Tim Roty</InlineLink>
          </a>
          ,
          <a href="https://www.jboesch.xyz/">
            <InlineLink>Jordan Boesch</InlineLink>
          </a>
          ,
          <a href="https://www.parker-miller.com/">
            <InlineLink>Parker Miller</InlineLink>
          </a>
          , and
          <a href="https://daneden.me/">
            <InlineLink>Daniel Eden</InlineLink>
          </a>
        </p>
        <MarkupStyledText text="</p>" />
      </PageSection>
    </div>
  );
};

export default App;
