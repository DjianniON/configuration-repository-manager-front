import React from 'react'
import { Icon, Menu, Button } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom';

export default function ContextMenu(props) {
    let navigation = useNavigate();
    return (
        <Menu secondary pointing>
            <Menu.Item as={Button} onClick={() => navigation(-1)} name='back'>
                <Icon name='left arrow' />
                Précédent
            </Menu.Item>
            <Menu.Menu position='right'>
                {props.nom ? <Menu.Item as={Link} to="edit" name='edit'>
                    <Icon name='edit' />
                    Modifier {props.nom}
                </Menu.Item>  : null }
                <Menu.Item as={Link} to="/" name='home'>
                    <Icon name='home' />
                    Accueil
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}