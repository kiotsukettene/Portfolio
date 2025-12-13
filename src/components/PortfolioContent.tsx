import { AboutSection } from "./sections/AboutSection"
import { HeroSection } from "./sections/HeroSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { ProjectsSection } from "./sections/ProjectSection"

function PortfolioContent() {
  return (<>
  <HeroSection/>
  <AboutSection/>
  <ProjectsSection/>
  <ExperienceSection/>
  <SkillsSection/>
  </>
  )
}

export default PortfolioContent