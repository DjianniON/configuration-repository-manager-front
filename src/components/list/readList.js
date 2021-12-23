import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ReadList(props) {
    let elements = props.referentiels ? props.referentiels : props.configurations ? props.configurations : props.objets ? props.objets : [];
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{props.type}</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={1}>Voir</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={1}>Editer</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={1}>Exporter</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={1}>Supprimer</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {elements.map((element) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{element.nom}</Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Link
                                    to={`${props.links}${element.id}`}
                                    key={element.id}
                                >
                                    <Icon link name='eye' />
                                </Link>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Link
                                    to={`${props.links}${element.id}/edit`}
                                    key={element.id}
                                >
                                    <Icon link name='edit' />
                                </Link>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                <span onClick={() => props.export(element.id)}>
                                    <Icon link name='download' />
                                </span>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                <span onClick={() => props.delete(element.id)}>
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