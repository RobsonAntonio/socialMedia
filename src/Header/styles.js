import styled from "styled-components/native";

export const Container = styled.View`
height: 70px;
margin-left: 22px;
margin-right: 22px;
margin-bottom: 20px;
margin-top: 20px;
`;

export const HeaderText = styled.Text`
font-size: 28px;
font-weight: bold;
color: ${(props) => props.theme.topBg};
padding-left: 5px;
padding-top: 5px;
`;

export const HeaderTextFollowers = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${(props) => props.theme.textColor};
padding-left: 5px;
border-bottom-color: ${(props) => props.theme.topBg};
border-bottom-width: 0.5px;
padding-bottom:20px;
     
`;

export const ContainerButton = styled.View`
flex-direction: row;
height: 50px;
margin-bottom: 15px;
align-items: center;
justify-content: space-between;
margin-left: 25px;
margin-right: 25px;
padding-left: 5px;
padding-right: 5px;
margin-top:10px;
`;

export const TextButton = styled.Text`

color: ${(props) => props.theme.textColor};
font-weight: bold;
font-size: 18px;
`;