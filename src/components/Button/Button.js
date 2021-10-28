import PropTypes from "prop-types";
import React from "react";

export function Button(props) {
  const { onClick, titulo = "Botão" } = props;

  return (
    <button onClick={onClick} className="form__button form__button--confirm">
      {titulo}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
