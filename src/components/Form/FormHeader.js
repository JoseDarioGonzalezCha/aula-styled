import React from "react";
import PropTypes from "prop-types";

export const FormHeader = ({ titulo = "Um título", subtitulo = "um subtítulo" }) => {
  return (
    <header className="main__header">
      <h2 className="main__title main__title--primary">{titulo}</h2>
      <span className="main__subtitle main__subtitle--secondary">{subtitulo}</span>
    </header>
  );
};

FormHeader.propTypes = {
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
};
