import React from 'react'
import { Icon, Menu, Button, MessageHeader, Message } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom';

export default function ErrorNotFound() {
    let navigation = useNavigate();
    return (
        <Menu secondary pointing>
            <Menu.Item as={Button} onClick={() => navigation(-1)} name='back'>
                <Icon name='left arrow' />
                Précédent
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to="/" name='home'>
                    <Icon name='home' />
                    Accueil
                </Menu.Item>
            </Menu.Menu>
            
            <Message>
                <MessageHeader>Accès interdit</MessageHeader>
            </Message>
        </Menu>
    )
}
