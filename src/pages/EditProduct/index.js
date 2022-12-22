import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import ImgToBase64 from 'react-native-image-base64';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { Gap, Header, ModalConfirm, TextInput } from '../../components';
import Button from '../../components/Button';
import { editProduct } from '../../redux/action/home';
import {
  COLOR_RED
} from '../../styles';
import { showMessage } from '../../utils';
import styles from './styles';


const EditProduct = ({navigation, route}) => {
  const data = route.params.data;
  const dispatch = useDispatch();
  const [modalConfirm, setModalConfirm] = useState(false);
  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);
  const [expiredAt, setExpiredAt] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [errName, setErrName] = useState('');
  const [errQty, setErrQty] = useState('');
  const [errExpiredAt, setErrExpiredAt] = useState('');
  const imageDefault =
    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';

  useEffect(() => {
    console.log('dad',data);
    setName(data.name);
    setExpiredAt(data.expiredAt);
    setQty(data.qty+'');
    setImage(data.picture);
  }, [data]);

  const onsubmit = () => {
    if (name.length === 0) {
      setErrName('Nama produk tidak boleh kosong');
    }
    if (qty === 0) {
      setErrQty('Quantity tidak boleh kosong');
    }
    if (expiredAt.length === 0) {
      setErrExpiredAt('Tanggal kadaluarsa tidak boleh kosong');
    }

    if (name.length > 0 && qty !== 0 && expiredAt.length > 0) {
      setModalConfirm(true);
    }
  };

  const updatePhoto = () => {
    launchImageLibrary(
      {
        quality: 0.7,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          ImgToBase64.getBase64String(response.assets[0].uri)
            .then(base64String => {
              setImage('data:image/png;base64,' + base64String);
              console.log(base64String);
            })
            .catch(err => console.log(err));
        }
      },
    );
  };
  
  const onUpdate = () => {
    const params = {
      name,
      qty,
      picture: image,
      expiredAt,
      isActive: true,
    };
    dispatch(editProduct(data.id, params, navigation));
    setModalConfirm(false);
  }

  const modalConfirmation = () => {
    return (
      <ModalConfirm
        visible={modalConfirm}
        btnLeftText={'Tidak'}
        btnRightText={'Iya'}
        content={<Text style={styles.label}>
          Apakah Kamu yakin untuk mengubah data ini?
        </Text>}
        onPressBtnLeft={() => {
          setModalConfirm(false);
        }}
        onPressBtnRight={() => onUpdate()}
      />
    );
  };


  return (
    <View>
      <Header
        title={'Ubah Produk'}
        color={'#FFC700'}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <TouchableOpacity onPress={updatePhoto} style={styles.image}>
          <View style={styles.borderPhoto}>
            <Image
              source={{uri: image ? image : imageDefault}}
              style={styles.photoContainer}
            />
          </View>
        </TouchableOpacity>
        <Gap height={10} />
        <TextInput
          label="Nama Produk"
          placeholder="Nama Produk"
          value={name}
          errorMsg={errName}
          onChangeText={value => {
            setName(value), setErrName('');
          }}
        />
        <Gap height={10} />
        <TextInput
          label="Quantity"
          placeholder="Quantity Produk"
          value={qty}
          errorMsg={errQty}
          onChangeText={value => {
            setQty(value), setErrQty('');
          }}
        />
        <Gap height={10} />
        <Text>Tanggal Kadaluarsa</Text>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.input}>
          <Text>{expiredAt}</Text>
        </TouchableOpacity>
        {errExpiredAt && (
          <Text style={{color: COLOR_RED, fontSize: 12}}>{errExpiredAt}</Text>
        )}
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setExpiredAt(moment(date).format('DD-MM-YYYY'));
            console.log(moment(date).format('DD-MM-YYYY'));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Gap height={10} />
        <Button text="Simpan" onPress={onsubmit} />
      </View>
      {modalConfirmation()}
    </View>
  );
};
export default EditProduct;
