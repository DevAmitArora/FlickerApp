import {useState, useEffect} from 'react';
import flickerApi from '../api/flickerApi';
import axios from 'axios';

// method=flickr.photos.search&api_key=95ead65d7260738a0d18c535f4302efa&format=json&nojsoncallback=1&per_page=20&text=india
export default () => {
  const [results, setResult] = useState([]);
  const [err, setError] = useState('');
  const source = axios.CancelToken.source;

  const searchAPI = async (searchText, page, loadMorePages) => {
    console.log('search begin');
    console.log(
      'LOAD MORE SEARCH : ' + loadMorePages + ' ' + page + ' ' + searchText,
    );

    if (searchText.length == 0 && !loadMorePages) {
      setResult([]);
    } else {
      try {
        if (source) {
          source.cancel;
        }
        const response = await flickerApi.get(
          '',
          {
            params: {
              method: 'flickr.photos.search',
              api_key: '95ead65d7260738a0d18c535f4302efa',
              format: 'json',
              nojsoncallback: 1,
              page,
              per_page: 20,
              text: `${searchText}`,
            },
          },
          {
            cancelToken: source.token,
          },
        );

        if (
          response &&
          response.data &&
          response.data.photos.photo.length > 0
        ) {
          if (!loadMorePages) {
            setResult(response.data.photos.photo);
            console.log('NEW CALL');
          } else {
            console.log(response.data.photos.photos);
            setResult([...results, ...response.data.photos.photo]);
            console.log('ADDED', results.length);
          }
        }
      } catch (exp) {
        if (axios.isCancel()) {
          console.log('Call Cancelled');
        }
        setError(exp);
        console.log(exp);
      }
    }
  };

  useEffect(() => {
    searchAPI('India', 1, false);
  }, []);

  return [searchAPI, results, err];
};
