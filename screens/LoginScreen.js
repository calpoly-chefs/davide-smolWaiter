import React from "react"; 
import { View, Image } from "react-native"
import s from "../constants/GlobalStyle"

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title = null
    }
    
    render(){
        return(
            <View style={s.container}> 
                <View style={styles.logoContainer}>
                    <Image 
                    source={require("../assets/images/chef-hat-black")} 
                    style={styles.chefHatImage}>
                    </Image>
                </View>
                {/* TODO: add form fields */}
                {/* TODO: add sign in buttons */}
            </View> 
        ); 
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
      },
      chefHatImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
      }
})