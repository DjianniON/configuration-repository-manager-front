import React from 'react';
import { Button, Table, Container } from 'semantic-ui-react'
export default function Read() {
    const setData = (data) => {
        console.log(data);
    }
    const onDelete = (id) => {
    }
    return (
        <div>
            <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Configuration</Table.HeaderCell>
                        <Table.HeaderCell>Test</Table.HeaderCell>
                        <Table.HeaderCell>Read</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Configuration</Table.Cell>
                        <Table.Cell>Oui</Table.Cell>
                        <Table.Cell>
                            <Button>Read</Button>
                        </Table.Cell>
                        <Table.Cell> 
                            <Button onClick={() => setData()}>Update</Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => onDelete()}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            </Container>
        </div>
    )
}
