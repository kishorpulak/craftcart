import React from 'react';
import styled from 'styled-components';
import {textColor, bgColor, shadow, borderRadius} from './CustomColor';

export const CustomButton = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: ${bgColor};
    color: ${textColor};
    border: 2px solid white;
    box-shadow: ${shadow};
    border-radius: ${borderRadius};
    :hover {
        color: orange;
        text-decoration: none;
    }
    :focus {
        color: orange;
        text-decoration: none;
    }
`

export const CustomButton2 = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: white;
    border: 2px solid white;
`