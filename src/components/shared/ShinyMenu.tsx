"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ShinyButton = styled(Button)({
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    border: 0,
    borderRadius: 50,
    boxShadow: "0px 4px 20px rgba(255, 105, 135, 0.5)",
    color: "white",
    padding: "16px 40px",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "none",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0px 6px 24px rgba(255, 105, 135, 0.7)",
        transform: "scale(1.05)",
    },
});

const MUIButton = ({ href, children }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <Button variant="contained" size={'large'} sx={{paddingY:5}} component="a">{children}</Button>
        </Link>
    );
};

export default MUIButton;
