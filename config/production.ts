import path from 'path';
import { Config } from './internals';

const isProd = true;

export default {
  ui: {
    isProd,
    bundle: `assets/dist/bundle.js`,
  },
  isProd: true,
  server: {
    isSsl: true,
    cert: path.resolve('/etc/pki/certs/server.crt'),
    key: path.resolve('/etc/pki/private/server.key'),
  },
} as Config;
