import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import InlineLink from "./components/InlineLink.jsx";
import SecondaryButton from "./components/SecondaryButton.jsx";
import ResumeYearSection from "./components/ResumeYearSection.jsx";
import MarkupStyledText from "./components/MarkupStyleText.jsx";
import PageSection from "./components/PageSection.jsx";
import AccentColorChoiceBox from "./components/AccentColorChoiceBox.jsx";
import ResumeActivitySection from "./components/ResumeActivitySection.jsx";
import PdfResume from "./assets/resume.pdf";
import experienceList from "./data/experience";
import roadmapTasks from "./data/roadmap";
import accentColors from "./data/accentColors.js";

const githubLink = "https://github.com/staradan";
const linkedInLink = "https://www.linkedin.com/in/danielpstara/";
const bookListLink =
  "https://tested-theater-a99.notion.site/Books-7b13a362879d4d70ba3d597033234cd5";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeAccentColorId, setActiveAccentColorId] = useState("amber");
  const [textAccentColor, setTextAccentColor] = useState(
    accentColors["amber"].textAccentColor
  );
  const [hoverTextAccentColor, setHoverTextAccentColor] = useState(
    accentColors["amber"].hoverTextAccentColor
  );
  const [decorationAccentColor, setDecorationAccentColor] = useState(
    accentColors["amber"].decorationAccentColor
  );

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAccentColorChange = (id) => {
    setActiveAccentColorId(id);
    setTextAccentColor(accentColors[id].textAccentColor);
    setHoverTextAccentColor(accentColors[id].hoverTextAccentColor);
    setDecorationAccentColor(accentColors[id].decorationAccentColor);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="p-4 lg:py-12 lg:px-48 dark:bg-gray-900 dark:text-gray-100">
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
          <div className="pr-2 mr-3 border-r-2 border-gray-400 dark:border-gray-600"></div>
          {Object.keys(accentColors).map((key) => (
            <AccentColorChoiceBox
              className={accentColors[key].selectBoxStyle}
              onClick={handleAccentColorChange}
              id={key}
              activeAccentColorId={activeAccentColorId}
            />
          ))}
        </div>
        <PageSection>
          <MarkupStyledText text="<h1>" textAccentColor={textAccentColor} />
          <h1 className="font-bold text-3xl uppercase">Daniel Stara</h1>
          <MarkupStyledText text="</h1>" textAccentColor={textAccentColor} />
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
          <MarkupStyledText text="<p>" textAccentColor={textAccentColor} />
          <p>
            I am a problem-solver who loves leveraging technology to empower
            individuals, synergize teams, and improve communities. I spend my
            time
            <InlineLink
              spaceLeft
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
            >
              reading
            </InlineLink>
            ,
            <InlineLink
              spaceLeft
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
            >
              designing
            </InlineLink>
            ,
            <InlineLink
              spaceLeft
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
            >
              building
            </InlineLink>
            , playing sports, and talking about cool new startups. Simplicity is
            the ultimate sophistication.
          </p>
          <MarkupStyledText text="</p>" textAccentColor={textAccentColor} />
        </PageSection>
        <div className="border-b border-black dark:border-gray-200 my-6"></div>
        <PageSection>
          <MarkupStyledText text="<h3>" textAccentColor={textAccentColor} />
          <h1 className="font-bold text-xl uppercase">Résumé</h1>
          <MarkupStyledText text="</h3>" textAccentColor={textAccentColor} />
        </PageSection>
        <MarkupStyledText text="<résumé>" textAccentColor={textAccentColor} />
        {Object.keys(experienceList)
          .sort((a, z) => {
            return z - a;
          })
          .map((experienceListKey, index) => (
            <ResumeYearSection year={experienceListKey}>
              {experienceList[experienceListKey]
                .filter(
                  (experienceObj) =>
                    String(experienceObj.year) === String(experienceListKey)
                )
                .map((experienceObj) => (
                  <ResumeActivitySection
                    title={experienceObj.title}
                    description={experienceObj.description}
                    link={experienceObj.link}
                    decorationAccentColor={decorationAccentColor}
                    hoverTextAccentColor={hoverTextAccentColor}
                    id={index}
                  />
                ))}
            </ResumeYearSection>
          ))}
        <MarkupStyledText text="</résumé>" textAccentColor={textAccentColor} />
        <div className="border-b border-black dark:border-gray-200 my-6"></div>
        <PageSection>
          <MarkupStyledText text="<h3>" textAccentColor={textAccentColor} />
          <h1 className="font-bold text-xl uppercase">Portfolio Roadmap</h1>
          <MarkupStyledText text="</h3>" textAccentColor={textAccentColor} />
        </PageSection>

        <ResumeYearSection year="ToDo">
          {roadmapTasks
            .filter((experienceObj) => experienceObj.status === "ToDo")
            .map((experienceObj, index) => (
              <ResumeActivitySection
                title={experienceObj.title}
                description={experienceObj.description}
                link={experienceObj.link}
                decorationAccentColor={decorationAccentColor}
                hoverTextAccentColor={hoverTextAccentColor}
                id={index}
              />
            ))}
        </ResumeYearSection>

        <ResumeYearSection year="Done">
          {roadmapTasks
            .filter((experienceObj) => experienceObj.status === "Done")
            .map((experienceObj, index) => (
              <ResumeActivitySection
                title={experienceObj.title}
                description={experienceObj.description}
                link={experienceObj.link}
                decorationAccentColor={decorationAccentColor}
                hoverTextAccentColor={hoverTextAccentColor}
                id={index}
              />
            ))}
        </ResumeYearSection>
        <PageSection>
          <MarkupStyledText text="<p>" textAccentColor={textAccentColor} />
          <p>
            This page was inspired by a number of portfolios made by talented
            developers. They are
            <InlineLink
              link="https://nathangentry.me/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Nathan Gentry
            </InlineLink>
            ,
            <InlineLink
              link="https://www.nicksiscoe.com/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Nick Siscoe
            </InlineLink>
            ,
            <InlineLink
              link="https://timroty.github.io/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Tim Roty
            </InlineLink>
            ,
            <InlineLink
              link="https://www.jboesch.xyz/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Jordan Boesch
            </InlineLink>
            ,
            <InlineLink
              link="https://www.parker-miller.com/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Parker Miller
            </InlineLink>
            , and
            <InlineLink
              link="https://daneden.me/"
              decorationAccentColor={decorationAccentColor}
              hoverTextAccentColor={hoverTextAccentColor}
              spaceLeft
            >
              Daniel Eden
            </InlineLink>
          </p>
          <MarkupStyledText text="</p>" textAccentColor={textAccentColor} />
        </PageSection>

        <PageSection>
          <MarkupStyledText
            text="<signoff>"
            textAccentColor={textAccentColor}
          />
          <p>Made with ❤️ by Daniel Stara</p>
          <MarkupStyledText
            text="</signoff>"
            textAccentColor={textAccentColor}
          />
        </PageSection>
      </div>
    </div>
  );
};

export default App;
