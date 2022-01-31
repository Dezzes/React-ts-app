import { Modal, Theme, Typography, SxProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: React.ReactNode,
    isOpen: boolean,
    title: string,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalForm: React.FC<Props> = ({ children, isOpen, setModal, title }) => {

    const styles = {
        BoxStyle: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: "100%", sm: 400 },
            height: { xs: "100vh", sm: "auto" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "rgb(231, 235, 240)",
            boxShadow: 24,
            p: 4,
        } as const,
        CloseIconStyle: {
            position: "absolute",
            top: "10px",
            right: "10px"
        } as const
    }

    const handleClose = () => setModal(false);

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box sx={styles.BoxStyle}>
                <CloseIcon onClick={handleClose} fontSize="large" sx={styles.CloseIconStyle} />
                <Typography variant='h6'>
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    )
}

export default ModalForm
