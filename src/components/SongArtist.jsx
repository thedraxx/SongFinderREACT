import React from "react";

export const SongArtist = ({ artist }) => {
  return (
    <section>
      <h2>{artist.strArtist}</h2>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Present"}
      </p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre} - {artist.strStyle}</p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Web</a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};
