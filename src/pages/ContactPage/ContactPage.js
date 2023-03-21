import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function ContactPage() {
    const navigate = useNavigate();

    return (
            <div className={"contacts"}>
            <h1>Information </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea earum facilis magni maxime necessitatibus quibusdam voluptates? Ad, aspernatur cumque ex ipsum libero, maxime neque placeat quam quod saepe sequi similique vel vitae. Architecto distinctio fugit harum vel. Autem cupiditate eveniet ipsam iure minus nisi, provident quidem quisquam quod, saepe sed sequi, unde! A ad, animi, consectetur consequuntur debitis, delectus doloremque eaque eum facere iste magnam nihil odit quos voluptate?</p>
            <h2>Contacts</h2>
                <span>+996 777 555 444</span>
                <span>+996 111 888 999</span>
                <span>+996 123 456 789</span>
            <Button onClick={() => navigate("/",{state:"kyial"})}
                    color="secondary"
                    variant="contained"
            >Back to Homepage</Button>

        </div>
    );
}

export default ContactPage;