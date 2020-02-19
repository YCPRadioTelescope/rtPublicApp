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

    render() {
        const deviceHeight = Dimensions.get("window").height;
        return (
            <View>
                <LinearGradient colors={['#041628', '#1D364D']} style={{width:'100%',height:'100%'} }>

                <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                    fontSize: 26,
                    left: 57,
                    top: 1043,}}>.
                </Animatable.Text>
                <Text style={{color:'white', position: 'absolute',
                    fontSize: 21,
                    left: 694,
                    top: 79,}}>.
                </Text>

                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 25,
                        left: 491,
                        top: 242,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 28,
                        left: 433,
                        top: 355,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 21,
                        left: 318,
                        top: 20,}}>.
                    </Animatable.Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 27,
                        left: 351,
                        top: 614,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 17,
                        left: 312,
                        top: 846,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                    fontSize: 5,
                    left: 235,
                    top: 658,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 17,
                        left: 311,
                        top: 325,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 16,
                        left: 384,
                        top: 200,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 7,
                        left: 73,
                        top: 564,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 25,
                        left: 423,
                        top: 148,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 15,
                        left: 437,
                        top: 347,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 16,
                        left: 328,
                        top: 570,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 18,
                        left: 108,
                        top: 169,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 22,
                        left: 540,
                        top: 191,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 8,
                        left: 44,
                        top: 682,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 6,
                        left: 709,
                        top: 967,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 24,
                        left: 721,
                        top: 938,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 30,
                        left: 598,
                        top: 569,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 27,
                        left: 614,
                        top: 153,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 5,
                        left: 356,
                        top: 23,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 13,
                        left: 264,
                        top: 848,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 8,
                        left: 600,
                        top: 31,}}>.
                    </Animatable.Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 7,
                        left: 609,
                        top: 1130,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 14,
                        left: 48,
                        top: 372,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 13,
                        left: 264,
                        top: 1229,}}>.
                    </Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 20,
                        left: 292,
                        top: 321,}}>.
                    </Animatable.Text>
                    <Animatable.Text animation="fadeIn" delay={this.random(0,1000)} iterationCount="infinite" style={{color:'white', position: 'absolute',
                        fontSize: 21,
                        left: 600,
                        top: 1188,}}>.
                    </Animatable.Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 9,
                        left: 162,
                        top: 842,}}>.
                    </Text>
                    <Text style={{color:'white', position: 'absolute',
                        fontSize: 15,
                        left: 239,
                        top: 621,}}>.
                    </Text>

                </LinearGradient>
           </View>
        );
    }
}


export default Galaxy;

