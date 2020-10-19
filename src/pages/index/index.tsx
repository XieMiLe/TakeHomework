import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  adda() {
    Taro.navigateTo({
      url: "/pages/TakeHomework/index"
    });
  }

  render() {
    return (
      <View className='PageHome'>
        <AtButton type='secondary' circle onClick={this.adda.bind(this)}>
          拍照批改
        </AtButton>
      </View>
    );
  }
}
