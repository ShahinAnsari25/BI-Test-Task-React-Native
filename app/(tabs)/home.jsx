import { View, Text } from "react-native"
import Header from "../../components/home/header"
import { StyleSheet } from "react-native";
import ItemList from "../../components/home/itemList"

const Home = () => {
   return <View style={styles.container}>
      {/* header */}
      <Header></Header>
      {/* itemList */}
      <ItemList></ItemList>
   </View>
}
export default Home;
const styles = StyleSheet.create({

})