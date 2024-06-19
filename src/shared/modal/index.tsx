import { ModalProps, styled } from "@mui/material";
import {Modal as MuiModal} from "@mui/material";
import { FC, useState } from "react";


const ModalContainer = styled("div")({
    minWidth: "300px",
    minHeight: "300px",
    background: "white",
})

export const Modal: FC<ModalProps> = ({children, open, ...props }) => {

    const [isOpen, setIsOpen] = useState(open)

    return (
        <MuiModal closeAfterTransition disableEnforceFocus open={isOpen}  {...props} sx={{display: "flex", alignItems: "center", justifyContent: "center"}} > 
            <ModalContainer>
                {children}
            </ModalContainer>
        </MuiModal>
    )
}