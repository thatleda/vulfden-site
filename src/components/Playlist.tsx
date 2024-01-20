import React from "react";

import Section from "components/base/Section";

const PlaylistSection: React.FC = () => {
  return (
    <Section>
      <iframe
        title="Leda's work playlist"
        src="https://open.spotify.com/embed/playlist/1JNp21xKrHEI7Kt5sWZye7?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Section>
  );
};

export default PlaylistSection;
