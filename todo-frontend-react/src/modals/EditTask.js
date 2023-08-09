import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [title, settitle] = useState('');
    const [id, setid] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "title"){
            settitle(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        settitle(taskObj.title)
         setid(taskObj.id)
        setDescription(taskObj.description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}

        tempObj['id'] = id
        tempObj['title'] = title
        tempObj['description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;