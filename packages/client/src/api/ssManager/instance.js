import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'http://192.168.7.105:7300/mock/623e9db650fc9100184e5171/ss-manager',
  dev: 'http://localhost:18001',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
