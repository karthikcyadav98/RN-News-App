import React from 'react';
import {Dimension, Modal, Share, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Title,
  Button,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {WebView} from 'react-native-webview';

const NewModal = ({visible, data, onClose}) => {
  const {url} = data;

  const handleShare = () => {
    const {url, title} = data;

    message = `${title}\n\nRead More ${url}\n\nShared via Virnews`;

    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => onClose()}>
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button onPress={() => onClose()} transparent>
              <Icon style={styles.closeIcon} name="close" />
            </Button>
          </Left>
          <Body>
            <Title children={data.title} style={styles.articleTitle} />
          </Body>
          <Right>
            <Button onPress={() => handleShare()} transparent>
              <Icon style={styles.closeIcon} name="sharealt" />
            </Button>
          </Right>
        </Header>

        <WebView
          source={{uri: url}}
          style={{flex: 1}}
          onError={() => onClose()}
          startInLoadingState
          scalesPageToFit
        />
      </Container>
    </Modal>
  );
};

export default NewModal;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#1a7366',
  },
  closeIcon: {
    color: 'white',
    fontSize: 30,
  },
  articleTitle: {
    color: 'white',
  },
});
