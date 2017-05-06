import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const ListSessions = (props) => (
  <View>
    {props.sessions.map((session) => (
      <Text key={session.sessionId}>
        {session.title}
      </Text>
    ))}
  </View>
);

export default connect(
  (state) => ({sessions: state.sessions})
)(ListSessions)
