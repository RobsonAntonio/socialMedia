import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AreaCard, Header, HeaderText, CardTotal,HeaderValor,TextValor } from './styles';
import Facebook from '../Logos/Facebook'
import Twitter from '../Logos/Twitter'
import Instagram from '../Logos/Instagram'
import Youtube from '../Logos/Youtube'
import Up from '../Logos/Up'
import Down from '../Logos/Down'



function OverView(props) {

    function selectColorValor(typeValor) {
        switch (typeValor) {
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

    return (
        <AreaCard>
            <Header>
                <HeaderText>{props.data.nome}</HeaderText>
                {selectLogo(props.data.type)}
            </Header>

            <Header>
                <CardTotal>{props.data.total}</CardTotal>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <TextValor>{selectLogoValor(props.data.typeValor)}</TextValor>
                    <Text style={{ ...styles.CardValor, color: `${selectColorValor(props.data.typeValor)}` }}>{props.data.valor}</Text>
                </View>
            </Header>

        </AreaCard>

    );
}
const styles = StyleSheet.create({

    CardValor: {
        
        fontSize: 16,
        paddingBottom: 25,
        paddingTop: 15,
        
    }})

export default OverView;