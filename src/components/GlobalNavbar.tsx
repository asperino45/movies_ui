import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button, Modal, ModalBody, ModalFooter, ModalHeader, Container, Toast, Spinner } from "reactstrap";
import { MoviesApiInstance } from "../resources/movies-api-client";

const GlobalNavbar: React.FC = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [loadingImport, setLoadingImport] = useState(false);
    const [toast, setToast] = useState(0);

    const toggle = () => setIsOpen(!isOpen);
    const toggleModal = () => setModal(!modal);

    const importMovies = () => {
        setLoadingImport(true)
        MoviesApiInstance.postSeed().then(() => {
            setToast(1)
        }).catch(err => {
            setToast(-1)
        }).finally(() => {
            toggleModal()
            setLoadingImport(false)
            setTimeout(() => {
                setToast(0)
            }, 5000)
        })
    }

    return (
        <Container>
            <Navbar {...args} color="secondary" dark>
                <NavbarBrand href="/">Wa Project</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href='/movies'>Movies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggleModal} href='#'>
                                Import Movies
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><a href="https://www.github.com/asperino45/movies_ui">GitHub</a></NavbarText>
                </Collapse>
            </Navbar>

            <Modal isOpen={modal} toggle={toggleModal} {...args}>
                <ModalHeader toggle={toggleModal}>Import Movies</ModalHeader>
                <ModalBody>
                    If you choose to continue, all the movies from the Ghibli Studios Api will be imported.
                </ModalBody>
                <ModalFooter>
                    {loadingImport ? (<Spinner />) : ''}
                    <Button color="primary" onClick={importMovies}>
                        Import
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            <Toast isOpen={toast != 0}>
                {toast > 0 ? 'Seed was successful!' : 'An error has ocurred'}
            </Toast>

        </Container>
    )
}

export default GlobalNavbar;