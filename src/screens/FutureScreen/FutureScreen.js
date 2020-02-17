import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollview/ScrollView'

class CompleteScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Future Appointments</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.scroll}>
                    <ScrollElements />
                </View>
            </View>
        );
    }
}

export default CompleteScreen ;
