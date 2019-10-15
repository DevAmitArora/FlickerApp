import axios from 'axios';

// api key = "f8d6d7791f7caf42d59b1388cde82291";

export default axios.create({
  baseURL: 'https://www.flickr.com/services/rest/',
});
