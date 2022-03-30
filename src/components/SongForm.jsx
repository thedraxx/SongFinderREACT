import React, { useState } from "react";

let initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ HandleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("datos incompletos");
      return;
    } else {
      HandleSearch(form);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del interprete"
          onChange={handleChange}
          value={form.artist}
        />

        <input
          type="text"
          name="song"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={form.song}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
