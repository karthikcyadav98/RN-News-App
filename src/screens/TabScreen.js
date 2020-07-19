import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import General from './General';
import Technology from './Technology';
import Business from './Business';

class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Image
              style={styles.image}
              source={require('../../HatchfulExport-All/logo_transparent.png')}
            />
          </Left>
          <Body>
            <Title style={styles.title}>Virnews</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab
            tabStyle={{backgroundColor: '#1a7366'}}
            activeTabStyle={{backgroundColor: '#1a7366'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="General">
            <General />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#1a7366'}}
            activeTabStyle={{backgroundColor: '#1a7366'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Technology">
            <Technology />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#1a7366'}}
            activeTabStyle={{backgroundColor: '#1a7366'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Business">
            <Business />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a7366',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  tabs: {
    backgroundColor: '#1a7366',
  },
  image: {
    width: 50,
    height: 50,
  },
});
