 "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node ./src/server.js",
        "start:watch": "start",
        "build": "tsc -b",
        "tsc": "tsc",
        "postinstall": "npm run tsc"
    },

    schema.prisma

datasource db {
  provider = "postgresql"
  url      = "postgres://udodvxawjnmdez:72623c7f96ba9192bfbedd5eb32f4626451ecb77c66bf69aa21d04ea3dc72742@ec2-54-174-172-218.compute-1.amazonaws.com:5432/db38e8hq5sdihm"
}