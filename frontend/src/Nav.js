import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function Nav() {
    const navStyleState = useState({ color: "white" });
    const navigate = useNavigate();
    return (
        <Fragment>
            <AppBar style={{ position: "relative" }}>
                <Toolbar>
                    <Typography variant="h6">
                        <Button
                            style={navStyleState[0]}
                            onClick={function onClick() {
                                navigate("/");
                            }}
                        >
                            <img src="https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png" alt="Logo" width="200" height="100" />
                        </Button>
                    </Typography>
                    <ul className="nav-links">
                        <Link to={'/about'} className="nav-link"><li>Despre</li></Link>
                        <Link to={'/restaurants'} className="nav-link"><li>Restaurante</li></Link>
                    </ul>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Nav;