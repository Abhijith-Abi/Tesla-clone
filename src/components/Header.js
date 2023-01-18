import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <Menu>
                <Models>
                    <ModelLink href="#">Model S</ModelLink>
                </Models>
                <Models>
                    <ModelLink href="#">Model 3</ModelLink>
                </Models>
                <Models>
                    <ModelLink href="#">Model X</ModelLink>
                </Models>
                <Models>
                    <ModelLink href="#">Model Y</ModelLink>
                </Models>
            </Menu>
            <RightMenu>
                <MainLink href="#">Shop</MainLink>
                <MainLink href="#">Tesla Account</MainLink>
                <CustomMenu onClick={() => setBurgerOpen(true)} />
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerOpen(false)} />
                </CloseWrapper>

                <List>
                    <Items href="#">Existing Inventory</Items>
                </List>
                <List>
                    <Items href="#">Used Inventory</Items>
                </List>
                <List>
                    <Items href="#">Trade-in</Items>
                </List>
                <List>
                    <Items href="#">Cybertruck</Items>
                </List>
                <List>
                    <Items href="#">Roadaster</Items>
                </List>
                <List>
                    <Items href="#">Data Map</Items>
                </List>
                <List>
                    <Items href="#">Details</Items>
                </List>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    /* width: 100%; */
    z-index: 1;
`;
const Logo = styled.a``;
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;
const Models = styled.h4`
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
`;
const ModelLink = styled.a``;
const RightMenu = styled.div`
    display: flex;
    align-items: center;
`;
const MainLink = styled.a`
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`;
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;
`;
const List = styled.li`
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Items = styled.a`
    font-weight: 600;
`;
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
