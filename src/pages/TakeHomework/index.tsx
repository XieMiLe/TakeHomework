import Taro, { CameraContext } from "@tarojs/taro";
import React, { Component } from "react";
import { View, Camera } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class index extends Component {
  componentWillMount() {
    const cameraContext: CameraContext = Taro.createCameraContext();

    console.log(cameraContext);

    const listener = cameraContext.onCameraFrame(frame => {
      console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height);
    });

    cameraContext.takePhoto({
      quality: "high",
      success: res => {
        console.log(res);
      }
    });

    Taro.getSetting({
      success(res) {
        if (!res.authSetting["scope.record"]) {
          Taro.authorize({
            scope: "scope.camera",
            success() {
              console.log("scope.record ok");
              listener.start();
            }
          });
        }
      }
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='PageTakeHomework'>
        <AtButton type='secondary' circle>
          PageTakeHomework
        </AtButton>
        <Camera />
      </View>
    );
  }
}
