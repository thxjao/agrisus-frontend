import React from "react";
import "./cadastro.css";
import logo from "../../assets/logo_agrisus_cadastro.svg";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

function CadastroConsumidor() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      <div className="info">
        <h6>Para realizar o cadastro, precisamos de algumas informações.</h6>
      </div>

      <div className="form">
        <div className="linha">
          <div className="classInput">
            <label> Nome </label>
            <input placeholder="Digite seu nome completo"></input>
          </div>

          <div className="classInput">
            <label> E-mail </label>
            <input placeholder="Digite seu e-mail" type="email"></input>
          </div>
        </div>

        <div className="linha">
          <div className="classInput">
            <label> Telefone </label>
            <input placeholder="Digite seu telefone"></input>
          </div>

          <div className="classInput">
            <label> CPF/CNPJ </label>
            <input placeholder="Digite seu CPF ou CNPJ" type="email"></input>
          </div>
        </div>

        <div className="linha">
          <div className="classInput" style={{ width: "100%" }}>
            <label> Endereço </label>
            <input placeholder="Rua, 000, Bairro Santa Casa, Belo Horizonte, Minas Gerais"></input>
          </div>
        </div>
      </div>

      <div className="termos">
        <Checkbox />
        <h6>Aceito os termos e condições</h6>
      </div>

      <div className="botao">
        <button className="button-yellow">Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroConsumidor;