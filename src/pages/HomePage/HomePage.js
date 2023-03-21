import React from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


function HomePage() {
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    return (
        <div className={"homePage"}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque dolores est pariatur. Aliquid earum eum illum tempore totam voluptas.  </p>
            <Button onClick={() => navigate("/contact")}
                    color="primary"
                    variant="contained"
            >Contacts</Button>
        </div>
    );
}

export default HomePage;