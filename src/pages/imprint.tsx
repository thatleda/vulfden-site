import React from "react"
import { PageProps } from "gatsby"
import { Page, LegalSection } from "gatsby-theme-portfolio-minimal"

const ImprintPage: React.FC<PageProps> = () => {
    return (
        <Page>
            <LegalSection sectionId="imprint" heading="Imprint" />
        </Page>
    )
}

export default ImprintPage