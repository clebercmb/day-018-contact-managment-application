import React, { useState, useEffect, useContext } from 'react';
import "./Contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function Contact (props) {
    console.log("Contact")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return (
           <div className="card mb-3 Contact">

                <div className="row no-gutters">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-3 card-body">
                        <img src="/img/photo_cleber_miranda.jpg" className="" alt="..."/>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-left">Cleber</h5>
                            <p className="card-text text-left ContactDetail">5842 Hillcrest Rd</p>
                            <p className="card-text text-left ContactDetail">(870) 288-4149</p>
                            <p className="card-text text-left ContactDetail"><small className="text-muted">cleber@gmail.com</small></p>
                        </div>
                    </div>
                    <div className="col-md-1 card-body d-flex justify-content-between">
                        <FontAwesomeIcon className="CRUD" icon={faTrash} onClick={handleShow}/>
                        <FontAwesomeIcon className="CRUD" icon={faPencilAlt}/>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>


            </div>







    )

}

export default Contact