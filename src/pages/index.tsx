import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Page,
  HeroSection,
  AboutSection,
  ContactSection,
  Seo,
  Section,
  Animation,
} from "gatsby-theme-portfolio-minimal";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page useSplashScreenAnimation>
      <Seo title="Leda Wolf" />
      <HeroSection sectionId="hero" />
      <AboutSection sectionId="leda" heading="Who?" />
      <Animation>
        <Section
          sectionId="previously"
          heading="Previously on Leda's Adventures"
        >
          <p>
            "All men dream: but not equally. Those who dream by night in the
            dusty recesses of their minds wake in the day to find that it was
            vanity: but the dreamers of the day are dangerous men, for they may
            act their dreams with open eyes, to make it possible."
          </p>
          - T.E. Lawrence in "Seven Pillars of Wisdom"
          <p>
            To write someone's story is to impose an ending, however temporary,
            and as tired and anxious as I am, and I suppose, we all are in one
            way or another, to think... to contemplate an end can be painful.
          </p>
          <p>
            So without further ado, and with great pain and suffering, may I
            present:
          </p>
          <b>THE STORY OF MY LIFE SO FAR</b>
          <p>
            I was born in 1991 in Ukraine's beautiful capital Kyiv (home of the
            only valid subway system in the world). When I was 11, my family
            moved to Germany, and slowly fell apart. Aw. After a failed career
            as a funeral director (I will take no questions about that.) and
            urged by everyone I knew, as well as my friends at the Agentur für
            Arbeit, I went to university. After a slight misunderstanding with
            the automated enrollment system, I decided to
            <i>consciously and willingly </i>
            pursue a degree in computer science. Still waiting for disastrous
            consequences, I managed to wrap up my studies with a pleasantly
            surprising A for the bachelor thesis appropriately named
          </p>
          <p>
            <a href="/thesis.pdf">
              Development and Testing of a Hardware Random Number Generator
            </a>
            <small> by Leda Wolf formerly known as Lidiia Lazebnikova.</small>
          </p>
          <p>
            Drunk with power brought on by my ineffable academic success, I have
            quickly but nervously moved all three of my belongings to the South
            of Germany, as well as my German Shepherd Doakes, formerly known as
            alive, currently very much dead.
          </p>
          <p>
            Working for CarGarantie in Germany's sunniest city Freiburg im
            Breisgau was an experience unlike another: a complex microservice
            architecture that was still being developed at the time, in Poland,
            was to be transferred to CarGarantie's own Software Engineering
            department consisting of maybeeee 5...? developers, and a very eager
            work student. (whaddup Hermann, my favorite German) In the meantime,
            a very naughty CRM based on adito's finest but aging work was being
            used as everything. Combining XML visual changes with JavaScript
            data fetching didn't seem like a good idea at the time, and still
            isn't, but very much solidified my judgement-free Whatever Works
            approach to life, giving me some hefty opinions.
          </p>
          <p>
            But precipitating the new microservice system being labeled a hugely
            failed investment and the devastating security incident that
            absolutely didn't have anything to do with me, I decided to advance
            my career from junior to barely competent up North in the Hansa city
            of Hamburg. After a few brief stations, my new home sum.cumo
            enriched my life with many diverse (technologically) projects and
            razor-scooter-based trips through the halls. It was at that time
            that I understood that just doing backend would not help my Whatever
            Works mentality, and merely give me more hefty radical opinions, so
            I decided to drop backend completely.
          </p>
          <p>
            After two years of frontend bliss with Vue.js in its many but very
            similar shapes, I launched a website with my new employer Tallence,
            but due to fundamental disagreements on the use of outdated
            technology, I became part of Grover.
          </p>
          <p>
            To say it was a bad time would be a lie and also in breach of the
            NDA I had to sign, when restructuring made my position redundant.
            But what I can say is that I am proud of what my team achieved,
            thoroughly described{" "}
            <a href="https://engineering.grover.com/articles/grover-search-renewal">
              here
            </a>{" "}
            by my most stoic colleague Lauri Viitala. Please clap.
          </p>
          <p>
            My passion for testing in its appealing pyramid-shaped form became
            an integral part of my glorious return to backend with Node.js in
            its many a-splendid applications, did I mention Node.js? I think I
            did. Node.js!
          </p>
          <p>
            I look forward to the next chapter that life has in store for me,
            but if I had any requests, I'd love a fullstack role that
            accomodates my eccentric (read{" "}
            <a href="https://de.wikipedia.org/wiki/ADHD">"neurodivergent"</a>)
            nature and allows me to benefit from a multicultural and diverse
            environment with many technological challenges and minimal
            organizational problems. Thank you for your time.
          </p>
        </Section>
      </Animation>
      <Animation>
        <Section sectionId="testimonials" heading="Testimonials">
          <div>
            <p>
              Will be carefully curated by our most beautiful women, until then,
              enjoy my work playlist:
            </p>
            <iframe
              src="https://open.spotify.com/embed/playlist/1JNp21xKrHEI7Kt5sWZye7?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </Section>
      </Animation>
      <ContactSection sectionId="github" heading="What is she up to?" />
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vulfden</title>;
