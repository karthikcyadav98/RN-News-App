import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import {Container, List} from 'native-base';
import {getArticles} from '../fetchData/newsData';
import Listitem from '../common/Listitem';
import NewModal from '../common/NewModal';

const General = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalArticle, setModalArticle] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getArticles('general')
      .then(articles => {
        setLoading(false);
        setData(articles);
      })
      .catch(err => {
        console.log('eeeee===>', err);
        Alert.alert('Error', 'Something went wrong!');
      });
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    getArticles('general')
      .then(articles => {
        setRefreshing(false);
        setData(articles);
      })
      .catch(err => {
        console.log('eeeee===>', err);
      });
  };

  const handleItemData = article => {
    setModalVisible(true);
    setModalArticle(article);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalArticle({});
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1a7366" />
        <Text style={{marginTop: 10}}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <Container>
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={({item}) => (
            <Listitem item={item} onDetailPress={handleItemData} />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            handleRefresh();
          }}
        />
        <NewModal
          visible={modalVisible}
          data={modalArticle}
          onClose={handleModalClose}
        />
      </Container>
    );
  }
};

export default General;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
