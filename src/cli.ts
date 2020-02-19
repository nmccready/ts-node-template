import yargs from 'yargs';
import { rootDebug } from '../debug';

const debug = rootDebug.spawn('cli');

// --oldVersion, --newVersion args
const { oldVersion, newVersion } = yargs.options({
  oldVersion: { type: 'string', demandOption: true },
  newVersion: { type: 'string', demandOption: true },
}).argv;

debug(() => ({ oldVersion, newVersion }));
