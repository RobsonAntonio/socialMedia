import styled from "styled-components/native";

export const AreaCard = styled.View`

background-color: ${(props) => props.theme.cardBg};
margin-top: 7px;
margin-bottom: 7px;
margin-left: 25px;
margin-right: 25px;
justify-content: center;
border-radius: 5px;
height: 110px;
padding: 10px;
`;


export const Header = styled.View`
flex-Direction: row;
padding-left: 15px;
padding-right: 15px;
padding-top: 10px;
margin-top: 5px;
align-items: baseline;
margin-bottom: 5px;
justify-content: space-between;
`;


export const TextValor = styled.Text`

padding-top: 10px;
`;

export const HeaderText = styled.Text`
padding-top: 15px;
color: ${(props) => props.theme.textColor};
font-size: 14px;
font-weight: bold;     
`;

export const CardTotal = styled.Text`
color: ${(props) => props.theme.textCard};
font-size: 30px;
font-weight: bold;
     
`;
