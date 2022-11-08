import React, { useState } from 'react';
// import Admin from './adminBar';
import { Langs } from './codes'
import { BsFillXCircleFill, BsFillPlayCircleFill,BsSave2,BsRecord,BsRecord2 } from "react-icons/bs";
import ListFiles from './files/List';
import SaveFile from './files/save';

export default function Bar({ Lang, Coder }) {
  const [code, setCode] = useState("Cpp");
  let handleChange = (value) => {
   
    setCode(value.target.value)
    Coder.changeLang(value.target.value)
  }
  return <div className=" sidebar-left sidebar-dark o-hidden" style={{ "background": "#2c353c" }}>

    <div className="sidebar-heading">Configuraciones</div>
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li>

          <select className="form-select form-select-sm mb-3 mt-3" aria-label=".form-select-lg example" style={{ "width": "150px", "marginLeft": "1.2rem" }}  onChange={handleChange}>
            {Langs.map((lang, ix) => <option key={ix} value={lang.val}>{lang.name}</option>)}
          </select>
        </li>
        <li>
          <a href="#" onClick={()=>{ Coder.Exec() }}>
            <BsFillPlayCircleFill className='editor-icon'/>Ejecutar</a>
        </li>
     
        {/* <li>
          <a href="#"  onClick={()=>{  Coder.AutoSave() }}>
             <BsRecord className='editor-icon'/>Auto Guardar</a>
        </li> */}
        <li>
          <ListFiles Coder={Coder}/>
        </li>
        <li>
            <SaveFile Coder={Coder}/>
        </li>
     

        <li>
          <a href="#"  onClick={()=>{  Coder.Reset() }}> <BsFillXCircleFill className='editor-icon'/>Restablecer</a>
        </li>
        {/* <li>
          <a href="#"  onClick={()=>{  Coder.Reset() }}> <BsRecord2 className='editor-icon'/>Tareas</a>
        </li> */}
        <li>
          <a href="#"  onClick={()=>{  Coder.Reset() }}> <BsRecord2 className='editor-icon'/>Administrador</a>
        </li>

        {/* <li>
          <a href="#"  onClick={()=>{  Coder.Reset() }}> <BsRecord2 className='editor-icon'/>Seguimiento</a>
        </li> */}


      </ul>
    </div>
  </div>
}