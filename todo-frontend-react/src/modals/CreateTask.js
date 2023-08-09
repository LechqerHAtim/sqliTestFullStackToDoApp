import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [id, setid] = useState('');
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "title"){
            settitle(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["id"] = id
        taskObj["title"] = title
        taskObj["description"] = description
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task title</label>
                        <input type="text" className = "form-control" value = {title} onChange = {handleChange} name = "title"/>
                    </div>
                    <div className = "form-group">
                        <label>description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;