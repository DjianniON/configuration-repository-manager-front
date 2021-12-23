import React, { useEffect, useState } from 'react';
import { Segment, List, Container, Button, Header, DimmerDimmable } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ObjetsList from './list/objetsList';
import DeleteModal from './deleteModal';

export default function ReadRootList() {
    let params = useParams();
    let configuration = parseInt(params.configId, 10);
    const [APIData, setAPIData] = useState([]);
    const [ConfigName, setConfigName] = useState('');
    const [active, setActive] = useState(true);
    const [currentObject, setCurrentObject] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/configuration/${configuration}/objets`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
                axios.get(`http://localhost:8080/api/v1/configuration/${configuration}`, {
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((response) => {
                    setConfigName(response.data.nom);
                    setActive(false);
                })
            })
    }

    const deleteObject = (id) => {
        axios.delete(`http://localhost:8080/api/v1/objet/${id}`)
        .then(() => {
            getData();
            setOpenModal(false);
        })
        .catch(() => {
            console.log('fail');
        })
    }

    const openDeleteModal = (objet) => {
        setCurrentObject(objet);
        setOpenModal(true);
    }

    return (
        <Container>
            <DimmerDimmable as={Segment} textAlign="left" padded='very' loading={active} dimmed={active} blurring={active}>
                <Header as="h1" textAlign='center'>{ConfigName}</Header>
                <List size="large" verticalAlign='middle'>
                    {APIData.map((objet) => {
                        return (
                            <ObjetsList key={objet.id} objet={objet} deleteObjet={openDeleteModal} />
                        )
                    }
                    )
                    }
                </List>
            </DimmerDimmable>
            <Link to={`/objects/${configuration}/create`}><Button color='green'>Nouvel objet</Button></Link>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentObject} deleteElement={deleteObject} />
        </Container>
    )
}