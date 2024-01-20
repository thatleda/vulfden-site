import React from "react";
import styled from "styled-components";

import Animation from "components/base/Animation";
import Button from "components/base/Button";

import Discord from "./svg/Discord";
import GitHub from "./svg/GitHub";
import LinkedIn from "./svg/LinkedIn";
import Mail from "./svg/Mail";

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  border-radius: var(--border-radius);
  padding: 1rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  font-weight: 800;
`;

const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.125rem;
  line-height: 2rem;
`;

const ActionButtons = styled(Animation)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-height: 2.5rem;
`;

const Contact: React.FC = () => {
  const callToReachOut = `If you have developed a strong desire to communicate or collaborate, please don't hesitate and write to:`;

  return (
    <ContactCard>
      <p>{callToReachOut}</p>
      <Profile>
        <Mail width="5rem" height="5rem" fillColor="var(--primary-color)" />
        <ContactData>
          <Name>
            <u>Leda Wolf</u>
          </Name>
          <a href="mailto:hello@leda.fyi">hello@leda.fyi</a>
        </ContactData>
      </Profile>
      <ActionButtons duration={600} type="fadeLeft">
        <Button
          text="Discord"
          icon={<Discord />}
          href="https://discord.com/users/732667625255075951"
        />
        <Button
          text="GitHub"
          icon={<GitHub />}
          href="https://github.com/thatleda"
        />
        <Button
          text="LinkedIn"
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/thatleda/"
        />
      </ActionButtons>
    </ContactCard>
  );
};

export default Contact;
