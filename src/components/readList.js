import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';


export default function ReadList() {
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
    
    const onDelete = (id) => {
        axios.delete(`localhost:8080/api/v1/configurations/${id}`)
        .then(() => {
            getData();
        })
    }
    
    return (
        <Table singleLine>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell>Nom du référentiel</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        {APIData.map((configuration) => {
            return (
                <Table.Row>
                <Table.Cell>{configuration.nom}</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>No</Table.Cell>
                </Table.Row>
                )})}
                <Table.Row>
                </Table.Row>
                </Table.Body>
                </Table>
                )
            }