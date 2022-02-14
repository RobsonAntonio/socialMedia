import styled from "styled-components/native";

export const ContainerCard = styled.View`
    background-color: ${(props) => props.theme.cardBg};
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 25px;
    margin-right: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-top-color: ${(props) => {
        switch (props.type) {
            case 'facebok':
                return 'hsl(208, 92%, 53%)'
            case 'instagram':
                return  'hsl(37, 97%, 70%)', 'hsl(329, 70%, 58%)'
            case 'youtube':
                return 'hsl(348, 97%, 39%)'
            default:
                return 'hsl(203, 89%, 53%)'

        }
    }};
    border-top-width: 4px;
`;

export const TextOverView = styled.Text`

    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    padding-left: 10px;
    padding-top: 5px;
`;

export const Header = styled.View`
flex-direction: row;
padding-top: 20px;
justify-content: center;
`;

export const HeaderCardText = styled.Text`
color: ${(props) => props.theme.textColor};
font-size: 14px;
padding-left: 10px;
font-weight: bold;
`;

export const TextCardTotal = styled.Text`
color: ${(props) => props.theme.textCard};
font-size: 70px;
font-weight: bold;
`;

export const TextCardFollowers = styled.Text`
color: ${(props) => props.theme.textColor};
font-size: 18px;
padding-bottom: 10px;
letter-spacing:5px;

`;

export const ViewDias = styled.View`
flex-direction: row;
align-items: baseline;

`;
