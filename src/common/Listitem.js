import React from 'react';
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
  Text,
  Right,
  Button,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Time from '../common/time';

const Listitem = ({item, onDetailPress}) => {
  const handleDetailView = () => {
    const {url, title} = item;
    onDetailPress({url, title});
  };

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              item.urlToImage !== null
                ? item.urlToImage
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAG1BMVEX4+vvb4OTx9PXl6ezf4+f19/ni5unq7fDt8PJPRI4QAAACDUlEQVR4nO3b0baiIBiA0cLy9P5PPLVm6phAMuaCsL1vvfm/lRqYHQ4AAAAAAAAAAAAAAAAAAAAAAABchXe1DngtjMf3jR8c+bNB382ldUjOZaPAj008bxZ4PJ5bxyRtdY7e/LSOSTptWHhqHZO0YeDx2Dom6csKT5dwPof1l2brmKTpgI/b/drGliFZ6fnCLgufvs3WrQNaRbz0mG72ZbZqrdomYUFuulXnaZOCJffhxtyB3RRGK641p2mLgEX34aKNwe4Ko88wv2A9hdydtkXAovtw5dfhbX2d2XM1mH9ZbrrsvfTvBiKdWH/8Ao/pZhdi7jK875CSidWnL/E7XtGa5ncLmEqsPn2J9Hy5c3S6x00k1h6+yHTAxwPB3N7ieRMfJ1afvsRzweUamd8fzp9SRIlNCpbkagoC48QG8y97JzBKrD59ibcC54mVZy/zXuAsserkpVI1Y7zwzD8KnSZWnLtcInA4RF+Ir571ThJrDf1f0oGzxNcPs4fOCod/B0JpYG+Fw+NIKAzsrHCYHAplgX0VDk/HQlFgV4XD7GAo+sWso8J54HWbWPKTYD+FcWCZbgrXBnZTGD1sK9ZL4eqPUGFrCgsobOyLCsfV75aOnRRuoXVMksL+C/f/buL+3y/d8jRtnZKx+/e8t0v82MAv+L/Fzc7/MwMAAAAAAAAAAAAAAAAAAAAAAFDLH7AQD4nZpWIVAAAAAElFTkSuQmCC',
          }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{item.title}</Text>
        <Text note numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.detailsView}>
          <Text note>{item.source.name}</Text>
          <Time time={item.publishedAt} />
        </View>
      </Body>
      <Right>
        <Button onPress={() => handleDetailView()} transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Listitem;

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
