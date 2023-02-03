import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Typography, Button } from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import RestaurantIcon from "@material-ui/icons/Restaurant"


function Home() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Typography variant="h6">Home</Typography>
            <ButtonGroup variant="contained">
                <Button
                    startIcon={<InfoIcon />}
                    color="primary"
                    size="small"
                    onClick={
                        function onClick() {
                            navigate("/about");

                        }}>Despre</Button>
                <Button
                    startIcon={<RestaurantIcon />}
                    color="secondary"
                    size="small"
                    onClick={
                        function onClick() {
                            navigate("/restaurants");
                        }}>Restaurante</Button>
            </ButtonGroup>
        </Fragment>
    )
}

export default Home;