# deyml
Loads environment structured objects from .yml for nodejs projects. 

by `DeNetwork`.

# Install
```shell
npm install deyml --save
```

# Usage

create a .yml file in the root directory of your project and add some configurations :
```yaml
# HTTP
HTTP_PORT: 6612

# P2p
P2P_PORT: 9011
P2P_PEER_ID:
P2P_SWARM_KEY:
P2P_BOOTSTRAPPERS:
  - /ip4/8.9.10.111/tcp/8011/p2p/QmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL

# cache
REDIS_PORT: 6379
REDIS_HOST: host.docker.internal
REDIS_USERNAME:
REDIS_PASSWORD:
REDIS_DB: 0

```

in any file you want to load the configurations :
```typescript
import "deyml/config";
```

**deyml** will load your structured objects from `.yml` and merge them to `process.env` :
```typescript
process.env
{
        TERM_PROGRAM: 'Apple_Terminal',
        NODE: '/Users/x/.nvm/versions/node/v18.17.1/bin/node',
        PWD: '/Users/x/wwwroot/deyml',
        HOME: '/Users/x',
        ... 
        ...

        /**
         *      http config
         */
        HTTP_PORT: 6612,

        /**
         *      p2p config
         */
        P2P_PORT: 9011,
        P2P_PEER_ID: null,
        P2P_SWARM_KEY: null,
        P2P_BOOTSTRAPPERS: 
        [
                '/ip4/8.9.10.111/tcp/8011/p2p/QmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL'
        ],

        /**
         *      Redis config
         */
        REDIS_PORT: 6379,
        REDIS_HOST: 'host.docker.internal',
        REDIS_USERNAME: null,
        REDIS_PASSWORD: null,
        REDIS_DB: 0,

        /**
         *      it's me
         */
        _deyml: true,
}
```

so, now use your configurations :
```typescript
console.log( `P2P_PORT: `, process.env.P2P_PORT );
```
will output:
```
P2P_PORT: 9011
```
