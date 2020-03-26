import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            numbers: []
        }
    }
    
    render (){
        return (
            <View style={styles.container}>
                <Text>
                    {
                        this.state.numbers.map((item) => {
                            return item + '   '
                        })
                    }
                </Text>
                <Button
                    title="Gerar números da mega sena"
                    onPress={() => {
                        var numbers = [];
                        for (var i = 0; i < 6; i++) {
                            do {
                                var newNumber = Math.floor(Math.random() * 100);
                                if (newNumber < 10) {
                                    newNumber = "0" + newNumber;
                                }
                            } while (newNumber < 1 || newNumber > 60 || numbers.includes(newNumber))

                            numbers.push(newNumber);
                        }

                        numbers.sort();

                        this.setState({
                            numbers: numbers
                        })
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
