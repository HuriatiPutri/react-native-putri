import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
  },
  row: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
  },
  contentItem: {
    // backgroundColor:'green'
    width: '50%',
  },
  img: {
    marginRight: 10,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  txtSmall: {
    fontSize: 14,
    width: 150,
    color: 'grey',
    flexWrap: 'wrap',
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  btnAdd: {
    position: 'absolute',
    bottom: 90,
    zIndex: 1,
    padding: 17,
    width: '100%',
  },
  action: {
    justifyContent: 'space-around',
    alignContent: 'flex-end',
  },
});

export default styles;
