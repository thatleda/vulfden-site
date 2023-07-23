import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Page, HeroSection, AboutSection, ContactSection} from "gatsby-theme-portfolio-minimal"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page useSplashScreenAnimation>
      <HeroSection sectionId="hero" />
      <AboutSection sectionId="about" heading="About" />
      <ContactSection sectionId="github" heading="What is she up to?" />
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
