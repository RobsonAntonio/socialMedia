import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components/native'
import { StyleSheet, FlatList} from 'react-native';
import Components from '../Components';
import { DarkmodeContext } from '../contexts/DarkmodeContext';
import Header from '../Header';
import OverView from '../OverView';
import darkTheme from '../theme/darkTheme'
import lightTheme from '../theme/lightTheme'

import { ContainerScroll } from './styles'


export default function Home() {
  const { theme } = useContext(DarkmodeContext)

  console.log(theme)
  const [feed, setFeed] = useState([

    { id: '1', nome: '@nathanf', total: 1987, descricao: 'FOLLOWERS', dias: '12 Today', type: 'facebook', typeValor: 'positivo', typeColorValor: 'positivo' },
    { id: '2', nome: '@nathanf', total: 1044, descricao: 'FOLLOWERS', dias: '99 Today', type: 'twitter', typeValor: 'positivo', typeColorValor: 'positivo' },
    { id: '3', nome: '@realnathanf', total: '11k', descricao: 'FOLLOWERS', dias: '1099 Today', type: 'instagram', typeValor: 'positivo', typeColorValor: 'positivo' },
    { id: '4', nome: 'Nathan F.', total: 8239, descricao: 'SUBSCRIBERS', dias: '144 Today', type: 'youtube', typeValor: 'negativo', typeColorValor: 'negativo' },
    { id: '5', nome: 'Overview - Today', type: 'header' },
  ])

  const [overView, setOverView] = useState([

    { id: '1', nome: 'Page Views', total: 87, valor: '3%', type: 'facebook', typeValor: 'positivo' },
    { id: '2', nome: 'Likes', total: 52, valor: '2%', type: 'facebook', typeValor: 'negativo' },
    { id: '3', nome: 'Likes', total: 5462, valor: '2257%', type: 'instagram', typeValor: 'positivo' },
    { id: '4', nome: 'Profile Views', total: '52k', valor: '1375%', type: 'instagram', typeValor: 'positivo' },
    { id: '5', nome: 'Retweets', total: 117, valor: '303%', type: 'twitter', typeValor: 'positivo' },
    { id: '6', nome: 'Likes', total: 507, valor: '553%', type: 'twitter', typeValor: 'positivo' },
    { id: '7', nome: 'Retweets', total: 107, valor: '19%', type: 'youtube', typeValor: 'negativo' },
    { id: '8', nome: 'Total Views', total: 1407, valor: '12%', type: 'youtube', typeValor: 'negativo' },
  ])

  console.log(theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
      <ContainerScroll>
        <Header />
        <FlatList
          keyExtractor={(item) => item.id}
          data={feed}
          renderItem={({ item }) => <Components data={item} />}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={overView}
          renderItem={({ item }) => <OverView data={item} />}
        />
      </ContainerScroll>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
})