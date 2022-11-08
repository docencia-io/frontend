import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSave2 } from "react-icons/bs";
import { useSession } from "next-auth/react";


function SaveFile({Coder}) {
    const { data } = useSession();
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [proyect, setProyect] = useState({name:data.Me.username, id:0});
    const [pos, setPos] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        let name = Coder.repository.file;
        if (name != "" && name != undefined) {
            let names = name.split("/")
            if (names.length > 1) {
                name = names[names.length - 1];
            } else {
                name = names[0];
            }
            name = name.split(".")[0];
        }
        setName(name);
        setShow(true);
    } 
    const handleFile = (e) => setName(e.target.value);
    const fechSave =  ()=>{

        let Name ;
        if (proyect.id == 0) {
            Name = "cpp/"+name+".cpp"
        } else {
            Name = name+".cpp"
        }
        Coder.Save(Name)
        handleClose()
    }

    let proyects = [];
    for(let section of   data.Me.info.data.user.sectionsByOwnerId.edges){
        proyects.push({ id:section.node.gitlabProyectId,owner: section.node.courseByCourseId.code+"-"+section.node.section })
    }
  
    for(let section of data.Me.info.data.user.usersSectionsByUserId.edges){
        if (section.node.role==3){
            continue
        }
        proyects.push({ id:section.node.sectionBySectionId.gitlabProyectId,owner: section.node.sectionBySectionId.courseByCourseId.code+"-"+section.node.sectionBySectionId.section })
    }

    let change=(pos)=>{
        console.log("POs",pos)
        setPos(pos)
        if (pos==0){
            setProyect({name:data.Me.username, id:0})
            return 
        }
        let project = proyects[pos-1]
        setProyect({name:project.owner, id:project.id})
       
    }

    return (
        <>
            <a href="#" onClick={handleShow}> <BsSave2 className='editor-icon' />Guardar</a>
            <Modal
            size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Guardar Documentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <InputGroup>
                        <Form.Select value={pos} onChange={(e)=>{ change(e.target.value) } }>
                            <option value={0}>{data.Username}</option>
                            {proyects.map((proyect,ix) => (<option value={ix+1} key={ix}>{proyect.owner}</option>))}  
                        </Form.Select>
                        <Form.Control
                            placeholder="Nombre del archivo"
                            aria-label="Nombre del archivo"
                            size="lg"
                            value={name}
                            defaultValue={name}
                            onChange={handleFile}
                        />
                        <Form.Control
                            width={10}
                            size="sm"
                            disabled={true}
                            defaultValue={".cpp"}
                        />
                        <Button variant="outline-secondary"  onClick={fechSave} >Guardar</Button>
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SaveFile;