import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h1>Login</h1>
            <Button className='mb-2' variant="outline-primary "><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With GitHub</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;