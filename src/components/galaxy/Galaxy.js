import React from 'react';
import { Text, Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

class Galaxy extends React.Component {

    constructor(props) {
        super(props);
    }

    // Gives us a random value between a min and max
    random = (min, max) => {
        if (min > max) {
          var hold = max;
          max = min;
          min = hold;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Gives each star their own stylesheet
    // based on screen size and random values
    starStyle = function(options) {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height;
        return {
            color:'white',
            fontSize: this.random (5,30),
            position: 'absolute',
            left: this.random(0, deviceWidth),
            top: this.random(0, deviceHeight),
        }
    }

    render() {
        return (
            <View>
                <LinearGradient colors={['#041628', '#1D364D']}>
                
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>                     
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={this.starStyle()}>.</Animatable.Text>
                <Text style={this.starStyle()}>.</Text>
                <Text style={this.starStyle()}>.</Text>
                
                </LinearGradient>
           </View>
        );
    }
}


export default Galaxy;

