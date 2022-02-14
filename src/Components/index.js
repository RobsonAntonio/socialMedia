import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Header, HeaderCardText, ViewDias, TextOverView, TextCardFollowers, ContainerCard, TextCardTotal } from './styles';


import Facebook from '../Logos/Facebook'
import Twitter from '../Logos/Twitter'
import Instagram from '../Logos/Instagram'
import Youtube from '../Logos/Youtube'
import Up from '../Logos/Up'
import Down from '../Logos/Down'

function Components(props) {

    function selectColorValor(typeColorValor) {
        switch (typeColorValor) {
            case 'positivo':
                return 'hsl(163, 72%, 41%)'
            default:
                return 'hsl(356, 69%, 56%)'

        }
    }
    function selectLogoValor(typeValor) {
        switch (typeValor) {
            case 'positivo':
                return <Up />
            default:
                return <Down />

        }
    }
    function selectLogo(type) {
        switch (type) {
            case 'facebook':
                return <Facebook />;
            case 'youtube':
                return <Youtube />;
            case 'instagram':
                return <Instagram />;

            default:
                return <Twitter />
        }
    }

    return props.data.type === 'header' ? <View style={styles.headerOverView}><TextOverView >Overview - Today</TextOverView></View> : (
        <ContainerCard type={props.data.type}>
            <Header >
                {selectLogo(props.data.type)}
                <HeaderCardText>{props.data.nome}</HeaderCardText>
            </Header>


            <TextCardTotal>{props.data.total}</TextCardTotal>
            <TextCardFollowers>{props.data.descricao}</TextCardFollowers>

            <ViewDias>
                {selectLogoValor(props.data.typeValor)}
                <Text style={{ ...styles.textoCard, color: `${selectColorValor(props.data.typeColorValor)}` }}>{props.data.dias}</Text>
            </ViewDias>
        </ContainerCard>
    );
}
const styles = StyleSheet.create({

    textoCard: {

        fontSize: 16,
        paddingBottom: 25,
        paddingTop: 7,
        fontWeight: 'bold',

    },
    headerOverView: {
        height: 50,
        marginHorizontal: 10,
        marginBottom: 5,
        paddingLeft: 10,
        marginTop: 15,
    },

})

export default Components;