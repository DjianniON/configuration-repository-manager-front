import React, { useEffect, useState } from 'react';
import { Segment, List, Container, Button, Header, DimmerDimmable, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ObjetsList from './list/objetsList';
import DeleteModal from './deleteModal';

export default function ReadRootList() {
    let params = useParams();
    let configuration = parseInt(params.configId, 10);
    const [APIData, setAPIData] = useState([]);
    const [ConfigName, setConfigName] = useState('');
    const [ConfigDescription, setConfigDescription] = useState('');
    const [active, setActive] = useState(true);
    const [activeMain, setActiveMain] = useState(true);
    const [currentObject, setCurrentObject] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setActive(true);
        setActiveMain(true);
        axios.get(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setConfigName(response.data.nom);
            setConfigDescription(response.data.description);
            setActiveMain(false);
            axios.get(`http://localhost:8080/api/v1/configuration/${configuration}/objets`, {
                headers: {
                    "Content-type": "application/json"
                }
            }).then((response) => {
                setAPIData(response.data);
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
            <Header as="h1" textAlign='center'>{ConfigName}</Header>
            <Header as="h4" textAlign='center'>{ConfigDescription}</Header>
            <DimmerDimmable as={Segment} textAlign="left" padded='very' loading={active} dimmed={active} blurring>               
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
            <Button as={Link} to={`create`} color='green'>Nouvel objet</Button>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentObject} deleteElement={deleteObject} />
            <Dimmer active={activeMain} inverted>
                <Loader>Chargement en cours...</Loader>
            </Dimmer>
        </Container>
    )
}