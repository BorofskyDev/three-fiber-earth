import React from 'react';
import styled from 'styled-components';

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #00000021;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;
    z-index: 99;
`;

const Logo = styled.h1`
    margin: 0;
    color: #ffffff;
    font-weight: 800;
    font-size: 80px;
`;

const Slogan = styled.h4`
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
`;

const Paragraph = styled.p`
    margin: 0;
    margin-top: 1em;
    color: #ffffff;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    max-width: 60%;
    text-align: center;
`;

const ContactButton = styled.button`
    outline: none;
    border: none;
    background-color: #ff4546;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 20px;
    padding: 24px 64px;
    margin-top: 3em;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #ff4546;
    }
`;


export function TopSection() {
    return <TopSectionContainer>
        <Logo>Joel Borofsky</Logo>
        <Slogan>I Design Web Experiences</Slogan>
        <Paragraph>Everything in this section is being rendered via React-Three-Fiber
        </Paragraph>
        <Paragraph>Imagine what I can do for you</Paragraph>
        <ContactButton>Hire Me</ContactButton>
    </TopSectionContainer>
}