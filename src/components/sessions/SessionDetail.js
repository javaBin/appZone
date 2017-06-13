import React from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../common/style.js'

const styles = StyleSheet.create({
  sessionHeader: {
    flex: 1,
    padding: 5,
    backgroundColor: style.colors.background,
  },
  heading1: {
    color: style.colors.color1,
    fontSize: style.fontSizes.heading1,
    fontFamily: style.fonts.juraBold,
  },
  heading2: {
    fontSize: style.fontSizes.heading2,
    fontFamily: style.fonts.juraBold,
    padding: 5,
  },
  headingSpeakerName: {
    color: style.colors.color2,
    fontWeight: "500",
    padding: 5,
  },
  textStyleHeder: {
    color: style.colors.color1,
  },
  textStyle: {
    color: style.colors.primary,
    padding: 5,
  },
  container: {
    backgroundColor: style.colors.backgroundSecondary,
  },
  keywordContainer: {
    fontFamily: style.fonts.juraLight,
    padding: 3, 
    margin: 5, 
  }
});

export default class SessionDetail extends React.Component {  
  
  render() {
    const { params } = this.props.navigation.state;
    let fromTime = moment(new Date(params.sessionData.startTime)).format('dddd, MMMM DD HH:mm');
    let toTime = moment (new Date(params.sessionData.endTime)).format('HH:mm');
    return (
      <ScrollView>
        <View style={ styles.sessionHeader }>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon name="arrow-left" style={{padding: 15}} size={40} color={style.colors.color4} 
              onPress={() => this.props.navigation.navigate('SessionList')}/>   
            <Icon name="star-o" style={{padding: 15}}size={40} color={style.colors.color4}/>   
          </View>
          <Text style={ styles.heading1 }>{ (params.sessionData.title).toUpperCase() }</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text style={ styles.textStyleHeder }>{ params.sessionData.room } { params.sessionData.format }</Text>
              <Text style={{color: style.colors.color1}}>{ fromTime } - { toTime }</Text>
            </View>
          </View>
        </View>
        <View style={ styles.container }>
          <Text style={ styles.textStyle }>{ params.sessionData.abstract }</Text>
          <Text style={ styles.textStyle }>{ params.sessionData.intendedAudience }</Text>
          <Text style={ styles.heading2 }>SPEAKER:</Text>
          { 
            params.sessionData.speakers.map( (speaker, index) => {
              return (
                <View key={index}>
                  <Text style={ styles.headingSpeakerName }>{ speaker.name }</Text>
                  <Text style={ styles.textStyle }>{ speaker.bio }</Text>
                </View>);
            })
          }
          <Text style={ styles.heading2 }>KEYWORDS:</Text>        
          <View>
          {
            params.sessionData.keywords.map( (keyword, index) => {
              return <Text style={ styles.keywordContainer } key={index}>{keyword}</Text>
            })
          }
          </View>
        </View>
      </ScrollView>
    )
  }
}
