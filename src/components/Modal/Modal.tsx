import { Modal, Theme, Typography, SxProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Modal.module.css"

interface ModalProps {
    children: React.ReactNode,
    isOpen: boolean,
    title: string,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalForm: React.FC<ModalProps> = ({ children, isOpen, setModal, title }) => {

    const handleClose = () => setModal(false);

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box className={styles.modal}>
                <CloseIcon onClick={handleClose} fontSize="large" className={styles.closeIcon} />
                <Typography variant='h6'>
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    )
}

export default ModalForm
