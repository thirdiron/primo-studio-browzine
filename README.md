# Primo Studio BrowZine Addon

## Overview

Add Third Iron powered enhancements to your search results: LibKey Instant PDF Downloading for fast content access, Viewing the Complete Issue of an article inside of BrowZine to increase serendipitous discovery and Journal Cover Images to improve journal recognition.

## Configuration

BrowZine Library Id and BrowZine API Key are REQUIRED fields. Please contact Third Iron support to obtain your API Key.

![Primo Studio BrowZine Addon](https://i.imgur.com/nI32tIR.png "Primo Studio BrowZine Addon")

## Development

Write code to support browsers Chrome, Firefox, Safari, Edge and IE11.

To run Primo Studio locally,

```
npm install gulp-cli -g
npm install gulp -D
npm install forever -g
git clone https://github.com/ExLibrisGroup/Primo-Studio.git
cd Primo-Studio
npm install && cd primo-explore && npm install && cd ..
```

Locate the "Community Addons" repo in the codebase:
https://github.com/ExLibrisGroup/Primo-Studio/blob/7af0f8e98ddc399f267c7829fb4fe64bc793a4ab/primo-explore/www/utils/features.service.ts#L21

```
this.featuresJsonURL = 'https://raw.githubusercontent.com/primousers/primostudio/' + featuresJSONBranch + '/features.json';
```

and swap it with our own:

```
this.featuresJsonURL = 'https://raw.githubusercontent.com/thirdiron/primo-studio-browzine/master/features.json';
```

Then update the express port from port `80` to something cross-platform like port `8000`:
https://github.com/ExLibrisGroup/Primo-Studio/blob/3b4c4cff93600f18d7b5a01c013a1b1853c882f9/gulp/tasks/express.js#L41

```
server.listen(8000, function () {
```


Then run the following gulp task:

```

gulp web
```

And visit the following Url in your browser:

```
http://localhost:8000
```

## Deployment

Two steps. First step, deploy our updates to npm. Then submit a PR with our Primo Studio addon features.config to the Primo Studio Community repo.

### npm

Here's the npm repo:
https://www.npmjs.com/package/primo-studio-browzine

Bump the npm versions in features.json and package.json
https://github.com/thirdiron/primo-studio-browzine/blob/master/features.json#L9
https://github.com/thirdiron/primo-studio-browzine/blob/master/package.json#L3

Commit those changes, then `npm publish`

### Primo Studio Community Repo

Fork the Primo Studio Community Repo (as of this writing)
https://github.com/primousers/primostudio

Then copy our feature.json snippet into the features.json found in the community repo. Finally, submit a PR to the `primousers/primostudio` repo. Once merged, our addon will be live in the production version of Primo Studio, including any updates pushed to npm.
