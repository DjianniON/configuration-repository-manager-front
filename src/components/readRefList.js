import React, { useEffect, useState } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReadList from './list/readList';
import DeleteModal from './deleteModal';


export default function ReadRefList() {
    const [APIData, setAPIData] = useState([]);
    const [active, setActive] = useState(true);
    const [currentElement, setCurrentElement] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/referentiels`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
                setActive(false);
            })
    }

    const deleteRef = (id) => {
        axios.delete(`http://localhost:8080/api/v1/referentiel/${id}`)
        .then(() => {
            setOpenModal(false);
            getData();
        })
    }

    const exportRef = (id) => {
        console.log("Export " + id);
    }

    const openDeleteModal = (config) => {
        setCurrentElement(config);
        setOpenModal(true);
    }

    return (
        <Container>
            <Header as="h1">Liste des référentiels</Header>
            <ReadList referentiels={APIData} type="Référentiel" links="" deleteElement={openDeleteModal} export={exportRef} active={active} />
            <Link to="/create"><Button color='green'>Nouveau référentiel</Button></Link>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentElement} deleteElement={deleteRef} />
        </Container>
    )
}