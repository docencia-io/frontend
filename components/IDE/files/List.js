import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsSearch } from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSession } from "next-auth/react";

function ListFiles({ Coder }) {

  const [show, setShow] = useState(false);
  const [documents, setDocuments] = useState([]);
  const handleClose = () => setShow(false);
  const fetchData = async () => {
    const req = await fetch('/app/api/gitlab/list');
    const newData = await req.json();
    console.log(newData);
    return setDocuments(newData);

  };
  const fetchFile = async (owner,projectID, file) => {
    // console.log('/app/api/gitlab/pull?projectID=' + projectID + '&file=' + file)
    const req = await fetch('/app/api/gitlab/pull?projectID=' + projectID +'&file=' + file);
    const newData = await req.json();
    console.log(newData);
    Coder.setRepository({
      owner: owner,
      file: file,
      projectID: projectID,
    })
    Coder.setCode(atob(atob(newData.content)));

    handleClose();

  };

  const handleShow = () => {
    setShow(true);
    fetchData();
  }





  const { data } = useSession();
  return (
    <>
      <a href="#" onClick={handleShow}> <BsSearch className='editor-icon' />Cargar</a>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size='lg'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Documentos Disponibles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            <Form.Control
              placeholder="Buscar"
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Table striped>
            <thead>
              <tr>

                <th>Proyecto</th>
                <th>Lenguaje</th>
                <th>Archivo</th>
                <th>Opcion</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((repository, ix) => {
                return repository.files.map((file, jx) => <tr key={ix + "-" + jx}>
                  <td>{repository.owner}</td>
                  <td>{file.type}</td>
                  <td>{file.file}</td>
                  <td><Button variant="secondary" onClick={() => fetchFile(repository.owner,repository.projectID, file.file)}>
                    Cargar
                  </Button>
                  </td>
                </tr>)
              })}
            </tbody>
          </Table>
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

export default ListFiles;