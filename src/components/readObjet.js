import React from 'react';
import { Divider, Container, Grid, Image, Segment, Table, Button } from 'semantic-ui-react'

const readObjet = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Objet</Table.HeaderCell>
                        <Table.HeaderCell>Read</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Objet</Table.Cell>
                        <Table.Cell>
                            <Button>Read</Button>
                        </Table.Cell>
                        <Table.Cell> 
                            <Button>Update</Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button type='creerObjet'>Nouvel Objet</Button>
            </Container>
      </Grid.Column>
      <Grid.Column>
      <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Paramètre</Table.HeaderCell>
                        <Table.HeaderCell>Read</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>ID</Table.Cell>
                        <Table.Cell>
                            <Button>Read</Button>
                        </Table.Cell>
                        <Table.Cell> 
                            <Button>Update</Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button type='creerPara'>Nouveau Paramètre</Button>
            </Container>
      </Grid.Column>
    </Grid>

    <Divider vertical>-</Divider>
  </Segment>
)

export default readObjet
