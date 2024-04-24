import React from "react";
import styled from "styled-components";

import Section from "components/base/Section";

const IFrame = styled.iframe`
  width: 100%;
`;

const PlaylistSection: React.FC = () => {
  return (
    <Section>
      <IFrame
        title="Leda's work playlist"
        frameBorder="0"
        loading="lazy"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/de/playlist/five-more-minutes/pl.u-LB4tR02oN5?theme=auto"
      ></IFrame>
    </Section>
  );
};

export default PlaylistSection;
