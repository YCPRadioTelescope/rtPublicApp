import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

class ScrollElements extends Component {
    state = {
        names: [
            {'name': 'Ben', 'id': 1, 'type': 'CELESTIAL_BODY', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Susan', 'id': 2, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Robert', 'id': 3, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Mary', 'id': 4, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Daniel', 'id': 5, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Laura', 'id': 6, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'John', 'id': 7, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Debra', 'id': 8, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Aron', 'id': 9, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Ann', 'id': 10, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Steve', 'id': 11, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Olivia', 'id': 12, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8}
        ]
    }
    render() {
        return (
            <View>
                <ScrollView style = {styles.element}>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {styles.item}>
                                <View style = {styles.text}>
                                    <Text style = {styles.name}>{item.name}'s Appointment</Text>
                                    <Text style = {styles.type}>{item.type}</Text>
                                    <Text style = {styles.RightAscension}> RightAscension: {item.RightAscension}</Text>
                                    <Text style = {styles.Declination}> Declination: {item.Declination}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
export default ScrollElements
