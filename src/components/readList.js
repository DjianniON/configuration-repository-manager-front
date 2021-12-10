import React, { useEffect, useState } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function ReadList() {
    let navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/configurations`, { headers: {
        "Content-type": "application/json"
    } })
    .then((response) => {
        setAPIData(response.data);
    })
}, [])

const getData = () => {
    axios.get(`http://localhost:8080/api/v1/configurations`, { headers: {
    "Content-type": "application/json"
} })
.then((getData) => {
    setAPIData(getData.data);
})
}

const deleteConfiguration = (id) => {
    console.log("delete " + id);
    /*axios.delete(`localhost:8080/api/v1/configurations/${id}`)
    .then(() => {
        getData();
    })*/
}

const openConfiguration = (id) => {
    navigate("/configurations/" + id);
  };

const editConfiguration = (id) => {
    navigate("/configurations/edit/" + id);
}

const exportConfiguration = (id) => {
    console.log("Export " + id);
}

return (
    <Table singleLine>
    <Table.Header>
    <Table.Row>
    <Table.HeaderCell>Nom du référentiel</Table.HeaderCell>
    <Table.HeaderCell>Voir</Table.HeaderCell>
    <Table.HeaderCell>Editer</Table.HeaderCell>
    <Table.HeaderCell>Exporter</Table.HeaderCell>
    <Table.HeaderCell>Supprimer</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {APIData.map((configuration) => {
        return (
            <Table.Row>
            <Table.Cell>{configuration.nom}</Table.Cell>
            <Table.Cell>
                <span onClick={() => openConfiguration(configuration.id)}>
                    <Icon link name='eye' />
                </span>
            </Table.Cell>
            <Table.Cell>
                <span onClick={() => editConfiguration(configuration.id)}>
                    <Icon link name='edit' />
                </span>
            </Table.Cell>
            <Table.Cell>
                <span onClick={() => exportConfiguration(configuration.id)}>
                    <Icon link name='download' />
                </span>
            </Table.Cell>
            <Table.Cell>
                <span onClick={() => deleteConfiguration(configuration.id)}>
                    <Icon link name='close' />
                </span>
            </Table.Cell>
            </Table.Row>
            )
        }
        )
    }
    </Table.Body>
    </Table>
    )
}