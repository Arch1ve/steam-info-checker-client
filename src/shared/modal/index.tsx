import { ModalProps, styled } from "@mui/material";
import {Modal as MuiModal} from "@mui/material";
import { FC } from "react";


const ModalContainer = styled("div")({
    minWidth: "300px",
    minHeight: "300px",
    background: "white",
})

export const Modal: FC<ModalProps> = ({children, ...props }) => {

    return (
        <MuiModal closeAfterTransition disableEnforceFocus {...props} sx={{display: "flex", alignItems: "center", justifyContent: "center"}} > 
            <ModalContainer>
                {children}
            </ModalContainer>
        </MuiModal>
    )
}