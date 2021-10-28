import React from "react";
import PropType from "prop-types";

export function TextInput(props) {
  const { id, nome, titulo = "Título do campo", placeholder = null } = props;

  //
  return (
    <div className="form__input-group">
      <label htmlFor={id} className="form__input-label">
        {titulo}
      </label>
      <input id={id ?? nome} name={nome} type="text" className="form__input" placeholder={placeholder} />
    </div>
  );
}

TextInput.propTypes = {
  id: PropType.string,
  nome: PropType.string,
  titulo: PropType.string,
  placeholder: PropType.string,
};
