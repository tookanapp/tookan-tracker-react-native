# tookan-tracker-react-native
Sample project for implementing react-native-tookan-tracker module.

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
