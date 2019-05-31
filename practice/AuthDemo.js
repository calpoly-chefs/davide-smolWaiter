import React from "react"
import { View, Text, Button } from "react-native"
import { connect } from 'react-redux'
import { fetchLogin, fetchAllRecipes } from "../actions/actions"

/* 1. triggers /action/ to retreive bearer token (using redux-promise-middleware and axios http client)
 * 2. saves bearer token in user.authorization slice
 * 3. loading state example 
 * 4. display token
 */
class AuthDemo extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                {/* Trigger authentication and save token*/}
                <Button title="Get Authentication Tokens" onPress={this.props.fetchLogin} />
                <Button title="Request Recipe" onPress={this.props.fetchAllRecipes} />
                <View>
                    {/* Loading state while fetching token */}
                    {
                        this.props.user.isFetching && <Text>Loading</Text>
                    }
                    {/* Show token */}
                    {
                        <Text> {this.props.user.authorization} </Text>
                    }
                    {
        
                        this.props.recipes.data.map((recipe) => 
                            <Text>{JSON.stringify(recipe)}</Text>
                        )
                    }
                    
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLogin: () => dispatch(fetchLogin()),
        fetchAllRecipes: () => dispatch(fetchAllRecipes())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthDemo)