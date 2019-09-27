'use strict'

/*
|--------------------------------------------------------------------------
| Redis Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for redis server. A single application
| can make use of multiple redis connections using the redis provider.
|
*/

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | connection
  |--------------------------------------------------------------------------
  |
  | Redis connection to be used by default.
  |
  */
  connection: Env.get('NODE_ENV'),

  /*
  |--------------------------------------------------------------------------
  | development connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  development: {
    host: Env.get('REDIS_HOST', '127.0.0.1'),
    user: Env.get('REDIS_USER', null),
    port: Env.get('REDIS_PORT', 6379),
    password: Env.get('REDIS_PASSWORD', null),
    database: Env.get('REDIS_DATABASE', 0),
    keyPrefix: '',
  },

  /*
  |--------------------------------------------------------------------------
  | cluster config
  |--------------------------------------------------------------------------
  |
  | Below is the configuration for the redis cluster.
  |
  */
  cluster: {
    clusters: [
      {
        host: '127.0.0.1',
        port: 6379,
        password: null,
        db: 0,
      },
      {
        host: '127.0.0.1',
        port: 6380,
        password: null,
        db: 0,
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Production config
  |--------------------------------------------------------------------------
  |
  | Below is the configuration for the redis production.
  |
  */
  production: {
    url: Env.get('REDIS_URL'),
  },
}
