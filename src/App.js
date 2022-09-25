import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
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
  <div className="flex">
    <div>
      <p className="font-bold text-md mr-4 text-lg">{year}</p>
    </div>
    <div className="w-3/5">{children}</div>
  </div>
);

const ResumeActivitySection = ({ title, description, link }) => (
  <div className="border-b border-dashed border-black dark:border-gray-100 pb-4 mb-4 w-full">
    <div className="w-full">
      <a
        className="font-bold text-md underline cursor-pointer w-full"
        href={link}
      >
        <InlineLink>{title}</InlineLink>
      </a>
      <p className="text-gray-500 mt-2 dark:text-gray-400 w-full">
        {description}
      </p>
    </div>
  </div>
);

const SecondaryButton = ({ children, onClick }) => (
  <div
    className="p-2 px-4 bg-gray-200 rounded mr-2 text-gray-800 cursor-pointer ease-in duration-100 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-200"
    onClick={onClick}
  >
    <p>{children}</p>
  </div>
);

const PageSection = ({ children, isFlex }) => (
  <div className={"my-4 " + (isFlex ? "flex overflow-x-auto" : "")}>
    {children}
  </div>
);

const InlineLink = ({ children, spaceLeft }) => (
  <span
    className={`${
      spaceLeft ? "ml-1" : ""
    } underline  ${decorationAccentColor} ease-in duration-100 ${hoverTextAccentColor} cursor-pointer`}
  >
    {children}
  </span>
);

const AccentColorChoiceBox = ({ className }) => (
  <div
    className={
      "h-6 w-6 rounded cursor-pointer mr-1 border-2 ease-in duration-100 " +
      className
    }
  ></div>
);

const experienceList = {
  2022: [
    {
      title: "Tapp Sports | Co-Founder",
      description:
        "Helping coaches measure what matters | TypeScript, React, Firebase",
      link: "https://tappsports.com",
      year: 2022,
    },
    {
      title: "University of Nebraska - Lincoln Raikes School",
      description:
        "Studying at the intersection of computer science and business management",
      link: "https://raikes.unl.edu/",
      year: 2022,
    },
    {
      title: "Husker Women's Basketball",
      description: "Scout team player",
      link: "https://huskers.com/sports/womens-basketball",
      year: 2022,
    },
    {
      title: "FOCUS Greek",
      description:
        "Planned 3+ months of activity for missionary, serving 100+ students",
      link: "https://focusoncampus.org/greek",
      year: 2022,
    },
  ],
  2020: [
    {
      title: "NRC Health",
      description:
        "Full stack software development | Ember.js, Node.js, MSSQL, AWS",
      link: "https://nrchealth.com/",
      year: 2020,
    },
    {
      title: "Husker Baseball",
      description: "Bullpen catcher for the Nebraska baseball team",
      link: "https://huskers.com/sports/baseball",
      year: 2020,
    },
    {
      title: "UNL Food Delivery",
      description: "Capitalized on new dining options at UNL",
      link: "https://unlfd.netlify.com",
      year: 2020,
    },
  ],
  2019: [
    {
      title: "Independent Research | Smart Football Helmet",
      description:
        "Cloud-connect smart football helmet that controls variable padding based on predicted impact",
      link: "",
      year: 2019,
    },
    {
      title: "Bell Chime for St. Anthony's Church",
      description:
        "Arduino controlled bell chime running in St. Anthony's in Bruno, NE",
      link: "https://github.com/staradan/st-anthonys-automated-bell-clock",
      year: 2019,
    },
  ],
  2017: [
    {
      title: "Stara iPhone Repair",
      description: "Fixing the destroyed phones of rural NE",
      link: "",
      year: 2017,
    },
  ],
};

const roadmapTasks = [
  {
    title: "Implement accent color choice",
    description: "So many colors, so little time",
    link: "",
    year: 2017,
  },
  {
    title: "Improve dark mode",
    description: "Use system setting & persist choice after refresh",
    link: "",
    year: 2017,
  },
  {
    title: "Add hyperlinks to all underlined text",
    description: "Consistency is key",
    link: "",
    year: 2017,
  },
  {
    title: "Add cool art when dark mode is switched",
    description: "Coming soon",
    link: "",
    year: 2017,
  },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="p-4 md:py-12 md:px-48 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex">
          <div
            className="h-6 w-6 rounded cursor-pointer mr-1 bg-gray-500 ease-in duration-100 hover:bg-gray-600 hover:border-gray-600 border-gray-500 border-2 text-center"
            onClick={handleDarkModeClick}
          >
            {isDarkMode ? (
              <BiSun className="text-white h-5 w-5" />
            ) : (
              <BiMoon className="text-white h-5 w-5" />
            )}
          </div>
          <div className="pr-2 mr-3 border-r-2 border-black"></div>
          <AccentColorChoiceBox className="bg-amber-400 hover:bg-amber-500 border-amber-500" />
          <AccentColorChoiceBox className="bg-lime-400 hover:bg-lime-500 border-lime-500" />
          <AccentColorChoiceBox className="bg-red-400 hover:bg-red-500 border-red-500" />
          <AccentColorChoiceBox className="bg-orange-400 hover:bg-orange-500 border-orange-500" />
          <AccentColorChoiceBox className="bg-cyan-400 hover:bg-cyan-500 border-cyan-500" />
          <AccentColorChoiceBox className="bg-violet-400 hover:bg-violet-500 border-violet-500" />
          <AccentColorChoiceBox className="bg-pink-400 hover:bg-pink-500 border-pink-500" />
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
            individuals, synergize teams, and improve communities. I spend my
            time
            <InlineLink spaceLeft>reading</InlineLink>,
            <InlineLink spaceLeft>designing</InlineLink>,
            <InlineLink spaceLeft>building</InlineLink>, playing sports, and
            talking about cool new startups. Simplicity is the ultimate
            sophistication.
          </p>
          <MarkupStyledText text="</p>" />
        </PageSection>
        <div className="border-b border-black dark:border-gray-200 my-6"></div>
        <PageSection>
          <MarkupStyledText text="<h3>" />
          <h1 className="font-bold text-xl uppercase">Résumé</h1>
          <MarkupStyledText text="</h3>" />
        </PageSection>
        <MarkupStyledText text="<résumé>" />
        {Object.keys(experienceList)
          .sort((a, z) => {
            return z - a;
          })
          .map((experienceListKey) => (
            <ResumeYearSection year={experienceListKey}>
              {experienceList[experienceListKey]
                .filter(
                  (experienceObj) => experienceObj.year == experienceListKey
                )
                .map((experienceObj) => (
                  <ResumeActivitySection
                    title={experienceObj.title}
                    description={experienceObj.description}
                    link={experienceObj.link}
                  />
                ))}
            </ResumeYearSection>
          ))}
        <MarkupStyledText text="</résumé>" />
        <div className="border-b border-black dark:border-gray-200 my-6"></div>
        <PageSection>
          <MarkupStyledText text="<h3>" />
          <h1 className="font-bold text-xl uppercase">Portfolio Roadmap</h1>
          <MarkupStyledText text="</h3>" />
        </PageSection>

        <ResumeYearSection year="High Priority">
          {roadmapTasks.map((experienceObj) => (
            <ResumeActivitySection
              title={experienceObj.title}
              description={experienceObj.description}
              link={experienceObj.link}
            />
          ))}
        </ResumeYearSection>
        <PageSection>
          <MarkupStyledText text="<p>" />
          <p>
            This page was inspired by a number of portfolios made by talented
            developers. They are
            <a href="https://nathangentry.me/">
              <InlineLink spaceLeft>Nathan Gentry</InlineLink>
            </a>
            ,
            <a href="https://www.nicksiscoe.com/">
              <InlineLink spaceLeft>Nick Siscoe</InlineLink>
            </a>
            ,
            <a href="https://timroty.github.io/">
              <InlineLink spaceLeft>Tim Roty</InlineLink>
            </a>
            ,
            <a href="https://www.jboesch.xyz/">
              <InlineLink spaceLeft>Jordan Boesch</InlineLink>
            </a>
            ,
            <a href="https://www.parker-miller.com/">
              <InlineLink spaceLeft>Parker Miller</InlineLink>
            </a>
            , and
            <a href="https://daneden.me/">
              <InlineLink spaceLeft>Daniel Eden</InlineLink>
            </a>
          </p>
          <MarkupStyledText text="</p>" />
        </PageSection>

        <PageSection>
          <MarkupStyledText text="<signoff>" />
          <p>Made with ❤️ by Daniel Stara</p>
          <MarkupStyledText text="</signoff>" />
        </PageSection>
      </div>
    </div>
  );
};

export default App;
