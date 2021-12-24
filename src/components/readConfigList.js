import React, { useEffect, useState } from 'react';
import { Container, Button, Header, DimmerDimmable, Segment, List } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReadList from './list/readList';
import DeleteModal from './deleteModal';
import ContextMenu from './contextMenu';
import ObjetsList from './list/objetsList';


export default function ReadConfigList() {
    let params = useParams();
    let referentiel = parseInt(params.id, 10);
    const [isConfig, setIsConfig] = useState(true);
    const [referentielConfigs, setreferentielConfigs] = useState([]);
    const [active, setActive] = useState(true);
    const [refNom, setRefNom] = useState('');
    const [referentielObjets, setreferentielObjets] = useState([]);
    const [currentElement, setCurrentElement] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    //@TODO: FIX LES REQUETES
    const getData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setRefNom(response.data.nom);
                getConfigData();
                getObjetsData();
                setActive(false);
            })
    }

    const getConfigData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}/configurations`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setreferentielConfigs(response.data);
            setActive(false);
        })
    }

    const getObjetsData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}/objets`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setreferentielObjets(response.data);
            setActive(false);
        })
    }

    const deleteConfiguration = (id) => {
        axios.delete(`http://localhost:8080/api/v1/configuration/${id}`)
            .then(() => {
                setOpenModal(false);
                getConfigData();
            })
    }

    const deleteObjet = (id) => {
        axios.delete(`http://localhost:8080/api/v1/objet/${id}`)
            .then(() => {
                setOpenModal(false);
                getObjetsData();
            })
    }

    const openDeleteModal = (element) => {
        setCurrentElement(element);
        setIsConfig(true);
        setOpenModal(true);
    }

    const openDeleteObjetModal = (element) => {
        setCurrentElement(element);
        setIsConfig(false);
        setOpenModal(true);
    }

    const exportConfiguration = (id) => {
        console.log("Export " + id);
    }

    return (
        <Container>
            <ContextMenu nom={refNom} />
            <Header as="h1">Liste des configurations</Header>
            <ReadList configurations={referentielConfigs} type="Configuration" links="configurations/" deleteElement={openDeleteModal} export={exportConfiguration} active={active} />
            <Link to="configurations/create"><Button color='green'>Nouvelle configuration</Button></Link>
            <DimmerDimmable as={Segment} textAlign="left" padded='very' loading={active} dimmed={active} blurring>
                <List size="large" verticalAlign='middle'>
                    {referentielObjets.map((objet) => {
                        return (
                            <ObjetsList key={objet.id} objet={objet} deleteObjet={openDeleteObjetModal} />
                        )
                    }
                    )
                    }
                </List>
            </DimmerDimmable>
            <Button as={Link} to={`objets/create`} color='green'>Nouvel objet</Button>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentElement} deleteElement={isConfig ? deleteConfiguration : deleteObjet} />
        </Container>
    )
}