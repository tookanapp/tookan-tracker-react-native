# tookan-tracker-react-native
Sample project for implementing react-native-tookan-tracker module.

## What is the use of this Package
React Native Tookan Tracker lets you add live location tracking to your mobile app via Tookan platform. This repo contains an example client app that has everything you need to get started in minutes. This repo written in JavaScript, checkout quickstart if your feel more comfortable with it.

<b>Add and setup these packages to your project before adding react-native-tookan-tracker:</b> <br><br>
<a href="https://www.npmjs.com/package/react-native-maps">react-native-maps</a> (install + link) <br>
<br>
<a href="https://www.npmjs.com/package/axios">axios</a> (install only) <br><br>
<a href="https://www.npmjs.com/package/sp-react-native-mqtt">sp-react-native-mqtt</a> (install + link) <br>
<b>Note</b> ->: After running `react-native link sp-react-native-mqtt`, Don't forget to add `pod 'MQTTClient'` in ios Pod file and the run `pod install` in ios.<br><br>
<a href="https://www.npmjs.com/package/@mapbox/polyline">@mapbox/polyline</a> (install only) <br>

## Install

Install the library from npm:<br><br>
`$ npm install --save react-native-tookan-tracker`<br><br>
or<br><br>
`$ yarn add react-native-tookan-tracker`<br><br>

## Usage

With UI

`import {MapTracking} from 'react-native-tookan-tracker'`<br>
 
`export default class testTracking extends Component {`<br>
`  render() {`<br>
`    return (` <br>
`       <MapTracking jobId=”1234567” userId= ”123”/>`<br>
`    );`<br>
`  }`<br>
`}`<br>

Without UI

`import {getSocketData} from 'react-native-tookan-tracker'`<br>
 
`export default class testTracking extends Component {`<br>

`   getSocketData(your_jobId, your_user_id, data => {`<br>
`       console.log(data);`<br>
`    });`<br>
`}`<br>


## Props

| Prop | Type | Default | Note |
|---|---|---|---|
| `jobId` | `string (required)` |  | Tookan JobId that you want to track.
| `userId` | `string (required)` |  | Tookan UserId.
| `mapKey` | `string (required)` |  | Google Map Key
| `pathUpdateTimer` | `Number(in milliseconds)` | `60000(60 sec)` | Time after which google direction hit will be called.
| `destinationIcon` |  `Image source`  |  <img src="https://tookan.s3.amazonaws.com/task_images/kkhZ1583400432821-nodemodulesreactnativetookantrackercommonimagesarriveddeliverycopy.png" />  |  Image source used for indicating the destination spot on a map.
| `pickupIcon` |  `Image source`  |  <img src="https://tookan.s3.amazonaws.com/task_images/oEvb1583400400836-nodemodulesreactnativetookantrackercommonimagesarrivedpickup.png" /> |  Image source used for indicating the pickup spot on a map.
| `deliveryIcon` | `Image source`  | <img src="https://tookan.s3.amazonaws.com/task_images/kkhZ1583400432821-nodemodulesreactnativetookantrackercommonimagesarriveddeliverycopy.png" />  | Image source used for indicating the delivery spot on a map.
| `agentMarkerImage` | `Image source` | <img style="width:30px;height:50px;" src="https://tookan.s3.amazonaws.com/task_images/P5Gi1583400484958-icmarker.png" />  | Image source used for indicating the agent marker on a map.
| `anchorX` | `Number` | `0.4` | For adjusting the agent marker on x-axis.
| `anchorY` | `Number` | `0.4` | For adjusting the agent marker on y-axis.
| `getData` | `function` |  | For getting raw data from sockets(with UI).
| `getSocketData`|`function` | | For getting raw data of sockets (without UI)
| `stopTracking`|`function` | | For disconnecting the sockets (without UI)

<br>
<br>

<b> Npm Package Link <a href="https://www.npmjs.com/package/react-native-tookan-tracker">react-native-tookan-tracker</a>
