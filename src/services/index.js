import axios from 'axios';
import { YOUTUBE_API_URL } from 'config';
import videosSevice from './videosService';

const client = axios.create({
  baseURL: YOUTUBE_API_URL,
  timeout: 1000
});

export default {
  videosSevice: videosSevice(client)
};
