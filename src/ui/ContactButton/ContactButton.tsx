import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ContactButton = () => {
    return (
    <Button
        component={RouterLink}
        to="/form"
        variant="contained"
        sx={{
            backgroundColor: "black",
            color: "white",
            width: 200,
            borderRadius: 3,
        }}
        >
        Contact us
        </Button>
);
};
