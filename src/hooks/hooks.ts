import axios from 'axios';
import {useEffect} from 'react';

export const useCreateNft = async (imageFiles, tags, desc, name) => {
  const formData = new FormData();

  for (let i = 0; i < imageFiles.length; i++) {
    formData.append('file', imageFiles[i][0]);
  }
  formData.append('tags', tags);
  formData.append('details', desc);
  formData.append('title', name);
  formData.append('creator', 'Aaron');
  formData.append('ether_link', '');
  formData.append('ipfs_link', '');

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
  // const data = await axios.post(' http://10.0.2.2:8000/nfts', formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   withCredentials: true,
  // });

  console.log(data);
};
export const useGetNft = async () => {
  useEffect(() => {
    const fetch = async () => {
      axios
        .get('http://10.0.2.2:8000/nfts')
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetch();
  }, []);
};
