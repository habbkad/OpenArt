import axios from 'axios';
import {useEffect} from 'react';
import {Platform} from 'react-native';

import {addNfts} from '../redux/nftSlice';
import {useAppDispatch} from './reduxhooks';

export const useCreateNft = async (imageFiles, name, tags, desc) => {
  console.log(imageFiles[0].assets[0]);

  let formData = new FormData();

  for (let i = 0; i < imageFiles.length; i++) {
    formData.append('files', {
      name: imageFiles[i].assets[0].fileName,
      type: imageFiles[i].assets[0].type,
      uri:
        Platform.OS === 'android'
          ? imageFiles[i].assets[0].uri
          : imageFiles[i].assets[0].uri.replace('file://', ''),
    });
  }
  formData.append('title', name);
  formData.append('creator', name);
  formData.append('details', desc);
  formData.append('tags', tags);
  formData.append('auctionTime', tags);

  await axios
    .post('http://10.0.2.2:8000/nfts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const useGetNft = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      axios
        .get('http://10.0.2.2:8000/nfts')
        .then(function (response) {
          // handle success
          // console.log(response.data.data);
          dispatch(addNfts(response.data.data));
        })
        .catch(function (error) {
          // handle error
          console.log(error);

          dispatch;
        });
    };
    fetch();
  }, []);
};
