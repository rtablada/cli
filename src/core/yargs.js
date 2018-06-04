import fs from 'fs';
import yargs from 'yargs';
import path from 'path';
require = require('esm')(module);

function loadRCFile (optionsPath) {
  const rcFile = optionsPath || path.resolve(process.cwd(), '.sequelizerc');
  const rcFileResolved = path.resolve(rcFile);

  const rcConfig = fs.existsSync(rcFileResolved) ? require(rcFileResolved) : {};
  const config = rcConfig.default || rcConfig;

  return JSON.parse(JSON.stringify(config));
}

const args = yargs
  .config(loadRCFile(yargs.argv.optionsPath));

export default function getYArgs () {
  const argv = args.argv;
  argv.esm = argv.esm === undefined ? true : argv.esm;

  return Object.assign({}, args, {
    argv
  });
}

export function _baseOptions (yargs) {
  return yargs
    .option('env', {
      describe: 'The environment to run the command in',
      default: 'development',
      type: 'string'
    })
    .option('config', {
      describe: 'The path to the config file',
      type: 'string'
    })
    .option('options-path', {
      describe: 'The path to a JSON file with additional options',
      type: 'string'
    })
    .option('migrations-path', {
      describe: 'The path to the migrations folder',
      default: 'migrations',
      type: 'string'
    })
    .option('seeders-path', {
      describe: 'The path to the seeders folder',
      default: 'seeders',
      type: 'string'
    })
    .option('models-path', {
      describe: 'The path to the models folder',
      default: 'models',
      type: 'string'
    })
    .option('url', {
      describe: 'The database connection string to use. Alternative to using --config files',
      type: 'string'
    })
    .option('debug', {
      describe: 'When available show various debug information',
      default: false,
      type: 'boolean'
    })
    .option('esm', {
      describe: 'Use esm for ECMAScript Module support for config, migrations, etc',
      default: true,
      type: 'boolean'
    });
}

export function _underscoreOption (yargs) {
  return yargs
    .option('underscored', {
      describe: "Use snake case for the timestamp's attribute names",
      default: false,
      type: 'boolean'
    });
}
