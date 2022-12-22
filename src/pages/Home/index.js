import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image, Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IcDelete, IcUpdate } from '../../assets';
import { Header, ModalConfirm } from '../../components';
import Button from '../../components/Button';
import { deleteProduct, getProduct } from '../../redux/action/home';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalConfirm, setModalConfirm] = useState(false);
  const [messageModal, setMessageModal] = useState('');
  const [item, setItem] = useState({});
  const {product, isDelete, isUpdate, isSave} = useSelector(
    state => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, [isDelete, isUpdate, isSave]);

  const onDelete = id => {
    dispatch(deleteProduct(id));
    setModalConfirm(false);
  };

  const renderItem = item => {
    return (
      item.isActive && (
        <View style={styles.row}>
          <Image source={{uri: item?.picture}} style={styles.img} />
          <View style={styles.contentItem}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.txtSmall}>{`Stok: ${item.qty}`}</Text>
            <Text style={styles.txtSmall}>Expired</Text>
            <Text style={styles.txtSmall}>{item.expiredAt}</Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProduct', {data: item});;
              }}>
              <IcUpdate />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMessageModal('Apakah kamu yakin ingin menghapus data ini?');
                setModalConfirm(true);
                setItem(item);
              }}>
              <IcDelete />
            </TouchableOpacity>
          </View>
        </View>
      )
    );
  };

  const modalConfirmation = () => {
    return (
      <ModalConfirm
        visible={modalConfirm}
        btnLeftText={'Tidak'}
        btnRightText={'Iya'}
        content={<Text style={styles.label}>{messageModal}</Text>}
        onPressBtnLeft={() => {
          setModalConfirm(false);
        }}
        onPressBtnRight={() => onDelete(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Daftar Produk'} color={'#FFC700'} />
      <View style={styles.btnAdd}>
        <Button
          text={'Tambah Produk'}
          onPress={() => {
            navigation.navigate('AddProduct');
          }}
        />
      </View>
      <FlatList data={product} renderItem={({item}) => renderItem(item)} />
      {modalConfirmation()}
    </View>
  );
};

export default HomeScreen;

