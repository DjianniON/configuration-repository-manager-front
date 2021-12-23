import React from 'react';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';

export default function DeleteModal(props) {
    return (
        <Modal
          basic
          onClose={() => props.setOpen(!props.open)}
          onOpen={() => props.setOpen(!props.open)}
          open={props.open}
          size='small'
        >
          <Header icon>
            <Icon name='close' />
            Confirmer la suppression
          </Header>
          <Modal.Content>
              <p>Souhaitez-vous supprimer {props.element.nom} ?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={() => props.setOpen(!props.open)}>
              <Icon name='remove' /> Non
            </Button>
            <Button color='green' inverted onClick={() => props.deleteElement(props.element.id)}>
              <Icon name='checkmark' /> Oui
            </Button>
          </Modal.Actions>
        </Modal>
      )
}