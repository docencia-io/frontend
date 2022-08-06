import React,{useState} from 'react';
// import { Select,Checkbox } from 'antd';

// import Admin from './adminBar';
import {Langs} from './codes'



function Bar({Lang,Coder}){
    const [code, setCode] = useState("Cpp");

    let handleChange=(value)=>{
      setCode(value)
      Coder.changeLang(value)
    }



    return  <div className=" sidebar-left sidebar-dark o-hidden" data-perfect-scrollbar  style={{"background":"#2c353c"}}>
    <div className="sidebar-p-y">
      <div className="sidebar-heading">Configuraciones</div>
      <ul className="sidebar-menu sm-active-button-bg">


        <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" >
            {/* <Select defaultValue="C++" value={Lang}  style={{ width: 120 }} onChange={handleChange}>
                 {Langs.map((l,ix)=>{
                        return   <Option selected={Lang==l.val}  value={l.val}>{l.name}</Option> 
                    })}
            </Select> */}
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" onClick={()=>{ Coder.Exec() }} >
            <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">play_circle_outline</i> Ejecutar
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" onClick={()=>{ Coder.Reset(code)}} >
            <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">stop</i> Resetear
          </a>
        </li>
    
      </ul>

   </div>
  </div>
}


export default Bar