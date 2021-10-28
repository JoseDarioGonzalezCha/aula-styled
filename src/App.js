import React from "react";
import "./styles/main.css";

import { Button } from "./components/Button";
import { Divider } from "./components/Divider";
import { FormHeader } from "./components/Form/FormHeader";
import { TextInput } from "./components/TextInput";

export default function App() {
  return (
    <main className="main">
      <FormHeader titulo="Um formulário simples" subtitulo="criado para aula de styled-components" />
      <Divider />
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <TextInput titulo="Nome" nome="nome" />
        <TextInput titulo="Sobrenome" nome="sobrenome" />
        <div className="form__input-group form__input-group--row form__input-group--spaced form__input-group--footer">
          <Button titulo="Salvar" onClick={() => {}} />
          <Button titulo="Cancelar" onClick={() => {}} />
        </div>
      </form>
    </main>
  );
}
