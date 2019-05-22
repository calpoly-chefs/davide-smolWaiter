// import React from "react";
// import { View, Button, Text } from "react-native"
// import API from "../state/API"
// import { connect } from "react-redux"
// import { authenticate } from "../actions/index"


// class LoginScreen extends React.Component {
//     login() {
//         // these may be stored in redux or the state later
//         const userHeader = {
//             username: "remy",
//             password: "password"
//         }
//         this.props.disptchAuthenticate(userHeader)
//     } w
//     render() {
//         return (
//             <View style={{ marginTop: 50 }}>
//                 <Button
//                     title="Sign In"
//                     onPress={this.login.bind(this)}>
//                 </Button>
//                 <Text>
//                     {/* {this.props.auth} */}
//                 </Text>
//                 {/* TODO: Sign out */}
//             </View>
//         );
//     }
// }


// const mapStateToProps = state => ({
//     auth: state.auth
// })

// const mapDispatchToProps = {
//     disptchAuthenticate: (username, password) => authenticate(username, password)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);