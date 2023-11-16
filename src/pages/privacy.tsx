import React from "react"
import { PageProps } from "gatsby"
import { Page, LegalSection } from "gatsby-theme-portfolio-minimal"

const PrivacyPage: React.FC<PageProps> = () => {
    return (
        <Page>
            <LegalSection sectionId="privacy" heading="Privacy" />
        </Page>
    )
}

export default PrivacyPage