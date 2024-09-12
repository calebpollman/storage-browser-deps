## Description

Installs `StorageBrowser` tagged dependencies and creates tarballs of all tagged deps.

## Usage

1. Install dependencies

```sh
$ npm i --no-packge-lock
```

2. Pack tarballs

```sh
$ npm run pack-modules
```

3. Do whatever with tarballs

Tarballs are written to _packed_modules_ and can be installed by referencing them in the consuming _package.json_ _dependencies_ field, example:

```json
"dependencies": {
  "@aws-amplify/analytics": "aws-amplify-analytics-7.0.48-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/api": "aws-amplify-api-6.0.50-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/api-graphql": "aws-amplify-api-graphql-4.3.1-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/api-rest": "aws-amplify-api-rest-4.0.48-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/auth": "aws-amplify-auth-6.4.1-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/core": "aws-amplify-core-6.4.1-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/datastore": "aws-amplify-datastore-5.0.50-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/notifications": "aws-amplify-notifications-2.0.48-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/storage": "aws-amplify-storage-6.6.6-storage-browser.4949269.0+4949269.tgz",
  "aws-amplify": "aws-amplify-6.6.1-storage-browser.4949269.0+4949269.tgz",
  "@aws-amplify/ui": "aws-amplify-ui-0.0.0-storage-browser-alpha-5147028-20240909221818.tgz",
  "@aws-amplify/ui-react": "aws-amplify-ui-react-0.0.0-storage-browser-alpha-5147028-20240909221818.tgz",
  "@aws-amplify/ui-react-core": "aws-amplify-ui-react-core-0.0.0-storage-browser-alpha-5147028-20240909221818.tgz",
  "@aws-amplify/ui-react-storage": "aws-amplify-ui-react-storage-0.0.0-storage-browser-alpha-5147028-20240909221818.tgz"
}
```

> More info: https://docs.npmjs.com/cli/v10/commands/npm-pack
