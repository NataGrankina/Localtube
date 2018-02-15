Localtube retrieves the latest 50 Youtube videos by the location specified on the map (+/- 10Km). If user allows access to his current location Localtube will load videos for it. Users can expand details on every video to view it's Youtube rating. Localtube also supports authorization with Google account. Authorized users can set their own rating to a video (👍 / 👎). Please note that ratings set by Youtube API are not immediately reflected on Youtube so it can take some time to see an updated video rating on your Youtube account. Also rating for a video is fetched from Youtube API every time user expands video details and is not stored anywhere in Localtube. That's why not immediate updates of rating can also happen when re-expand video details.

The live demo can be found here ➡️ [Localtube App](https://natagrankina.github.io/Localtube/).

## Running

To run application locally please clone this repo and execute the following command:

```sh
npm install && npm start
```

## Known issues

* Setting location on the map is buggy on mobile devices.
* Logic for specifying search radius is implemented but there are no corresponding UI.
* Setting 👍 / 👎 is asynchronous but rating controls are not locked so if you click 👍 / 👎 several times in a row only one action will be reflected.
* Setting 👍 / 👎 in unauthorized state will simply result in asking user for manually login.

## Technical details and assumptions

* The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to avoid any time-consuming setup.
* All errors are handled in redux store but no displaying mechanisms are implemented. Only several types of errors are reflected on UI with a help of alerts for simplification.
* [Redux-saga](https://redux-saga.js.org/) middleware was used instead of more popular redux-thunk middleware to handle asynchronous actions. It makes application side effects easier to manage, more efficient to execute, simple to test, and better at handling failures. An example of testing saga logic is provided.
* Test coverage is very low, only several tests are provided to represent an approach. ([Jest](https://facebook.github.io/jest/) is used). Tests can be run locally by `sh npm run test` command.
* There are no pagination for video results, application simply retrieves the latest 50.
* No app-level mechanisms for making authorized requests are implemented, auth token is simply stored in redux state and passed to a corresponding service when needed.
* Gapi client library is used to get access to Google Api from JS client. It can only be imported globally (see the issue [here](https://github.com/google/google-api-javascript-client/issues/319)); the logic of importing is incapsulated in GapiInjector component.
* Just simple CSS is used in the project. Current webpack setup allows to import CSS files to JS, minifies and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer).
