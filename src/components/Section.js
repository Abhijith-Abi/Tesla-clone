import React from "react";
import styled from "styled-components";

function Section({
    title,
    description,
    backgroundImg,
    leftBtnText,
    rightBtnText,
}) {
    console.log();
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <MainHead>{title}</MainHead>
                <SubHead>{description}</SubHead>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    <RightButton>{rightBtnText}</RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: orange; */
    /* background-image: url("/images/model-s.jpg"); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`;
const MainHead = styled.h1``;
const SubHead = styled.p``;
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.5;
    color: #000;
`;
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
