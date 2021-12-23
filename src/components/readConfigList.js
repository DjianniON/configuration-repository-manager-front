import React, { useEffect, useState } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReadList from './list/readList';
import DeleteModal from './deleteModal';
import ContextMenu from './contextMenu';


export default function ReadConfigList() {
    let params = useParams();
    let referentiel = parseInt(params.id, 10);
    const [APIData, setAPIData] = useState([]);
    const [active, setActive] = useState(true);
    const [currentConfig, setCurrentConfig] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}/configurations`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
                setActive(false);
            })
    }

    const deleteConfiguration = (id) => {
        console.log("delete " + id);
        axios.delete(`http://localhost:8080/api/v1/configuration/${id}`)
            .then(() => {
                setOpenModal(false);
                getData();
            })
    }

    const openDeleteModal = (config) => {
        setCurrentConfig(config);
        setOpenModal(true);
    }

    const exportConfiguration = (id) => {
        console.log("Export " + id);
    }

    return (
        <Container>
            <ContextMenu />
            <Header as="h1">Liste des configurations</Header>
            <ReadList configurations={APIData} type="Configuration" links="configurations/" deleteElement={openDeleteModal} export={exportConfiguration} active={active} />
            <Link to="configurations/create"><Button color='green'>Nouvelle configuration</Button></Link>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentConfig} deleteElement={deleteConfiguration} />
        </Container>
    )
}