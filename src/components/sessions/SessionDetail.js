import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import moment from 'moment';


export default class SessionDetail extends React.Component {  
  render() {

    const { params } = this.props.navigation.state;
    let fromTime = moment(new Date(params.sessionData.startTime)).format('dddd, MMMM DD HH:mm');
    let toTime = moment (new Date(params.sessionData.endTime)).format('HH:mm');
    return (
      <ScrollView>
        <Text>Tittel: {params.sessionData.title}</Text>
        <Text>Format: {params.sessionData.format}</Text>
        <Text>{fromTime} - {toTime}</Text>
        <Text>Publikum: {params.sessionData.intendedAudience}</Text>
        <Text>Sammendrag: {params.sessionData.abstract}</Text>
        { 
          params.sessionData.speakers.map( (speaker, index) => {
            return (
              <View key={index}>
                <Text>Speaker: { speaker.name }</Text>
                <Text>Bio: { speaker.bio }</Text>
              </View>);
          })
        }        
        <Text>Nøkkelord: {
          params.sessionData.keywords.toString()
        }</Text> 
        <Button
          onPress={() => this.props.navigation.navigate('SessionList')}
          title="Gå tilbake"
        />
    </ScrollView>
    )
  }
}

// dispatch params.sessiondata.sessionId
