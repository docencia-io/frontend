import React, { useState } from 'react';
// import Admin from './adminBar';
import { Langs } from './codes'
// import { BsBoxArrowInRight, BsPersonCircle } from "react-icons/bs";

export default function Bar({ Lang, Coder }) {
  const [code, setCode] = useState("Cpp");
  let handleChange = (value) => {
    setCode(value)
    Coder.changeLang(value)
  }
  return <div className=" sidebar-left sidebar-dark o-hidden" style={{ "background": "#2c353c" }}>

    <div className="sidebar-heading">Configuraciones</div>
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li>

          <select className="form-select form-select-sm mb-3 mt-3" aria-label=".form-select-lg example" style={{ "width": "150px", "marginLeft": "1.2rem" }}>
            {Langs.map((lang, ix) => <option key={ix} value={lang.val}>{lang.name}</option>)}
          </select>
        </li>
        <li>
          <a href="#">Ejecutar</a>
        </li>
        <li>
          <a href="#">Restablecer</a>
        </li>
      </ul>
    </div>
  </div>
}