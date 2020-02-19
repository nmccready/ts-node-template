import path from 'path';

import { rootDebug } from '../debug';
import { Config } from './internals';

export * from './internals';

const debug = rootDebug.spawn('config');

process.env.NODE_CONFIG_DIR = path.join(__dirname);

debug(() => `NODE_ENV: ${process.env.NODE_ENV}`);

const configLib = require('config');

const config: Config = configLib.util.toObject(configLib);

debug(() => ({ config }));

export default config;
