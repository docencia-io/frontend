import { BsGoogle, BsFillTerminalFill, BsBook, BsFillFileCodeFill, BsColumnsGap, BsUnion,BsFillPatchQuestionFill } from "react-icons/bs";

import { signIn } from "next-auth/react";

export default function Login() {
    return <div>
        <div className="row justify-content-center mt-4">
            <div className="col-6">
                <div className="card p-3">
                    <h1>Inicio de sesión</h1>
                    <p>Para poder acceder a los servicios de docencia </p>
                    <button className="btn btn-button btn-outline-dark mb-3 w-2" onClick={() => { signIn('docencia') }} >  <BsFillTerminalFill className="editor-icon" /> Docencia </button>
                    <button className="btn btn-button btn-outline-dark mb-3 w-2" onClick={() => { signIn('google') }} > <BsGoogle className="editor-icon" /> Google </button>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="col-6">
                <div className="card p-3">
                    <h1>Servicios  </h1>
                    <a className="btn btn-button btn-outline-dark mb-3 w-2" href="https://docencia-eit.udp.cl/salas/">  <BsBook className="editor-icon" /> Salas </a>
                    <a className="btn btn-button btn-outline-dark mb-3 w-2" href="https://giteit.udp.cl/">  <BsFillFileCodeFill className="editor-icon" /> GitEIT </a>
                    <a className="btn btn-button btn-outline-dark mb-3 w-2" href="https://proyectos-eit.udp.cl/">  <BsColumnsGap className="editor-icon" /> Youtrack </a>
                    <a className="btn btn-button btn-outline-dark mb-3 w-2" href="https://labeit.udp.cl/">  <BsUnion className="editor-icon" /> Lab-Eit </a>
                    <a className="btn btn-button btn-outline-dark mb-3 w-2" href="https://faq.docencia.io/">  <BsFillPatchQuestionFill className="editor-icon" /> Preguntas Frecuentes </a>
                </div>
            </div>
        </div>
    </div>;
}
