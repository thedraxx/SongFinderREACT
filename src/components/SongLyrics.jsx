import React from "react";

export const SongLyrics = ({ lyrics, title }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
    </section>
  );
};
