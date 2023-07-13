import { View } from "@tarojs/components";
import { useTabItemTap } from "@tarojs/taro";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useTabItemTap((item) => {
    console.log("tabclick", item);
  });
  return <View>home</View>;
}
