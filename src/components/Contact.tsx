import React from "react";

import styled from "styled-components";

import Button from "components/base/Button";

import Card from "./base/Card";
import Discord from "./svg/Discord";
import GitHub from "./svg/GitHub";
import LinkedIn from "./svg/LinkedIn";
import Mail from "./svg/Mail";

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

const Contact: React.FC = () => {
  const callToReachOut = `If you have developed a strong desire to communicate or collaborate, please don't hesitate and write to:`;

  return (
    <Card
      actionButtons={
        <>
          <Button
            href="https://discord.com/users/732667625255075951"
            icon={<Discord />}
            text="Discord"
          />
          <Button
            href="https://github.com/thatleda"
            icon={<GitHub />}
            text="GitHub"
          />
          <Button
            href="https://www.linkedin.com/in/thatleda/"
            icon={<LinkedIn />}
            text="LinkedIn"
          />
        </>
      }
    >
      <p>{callToReachOut}</p>
      <Profile>
        <Mail height="5rem" width="5rem" />
        <ContactData>
          <Name>
            <u>Leda Wolf</u>
          </Name>
          <a href="mailto:leda@hey.com">leda@hey.com</a>
        </ContactData>
      </Profile>
    </Card>
  );
};

export default Contact;
