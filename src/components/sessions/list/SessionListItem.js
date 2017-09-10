// @flow

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import style from '../../../common/style'
import moment from 'moment'
import config from '../../../config'

import type { Session } from '../../../types/SleepingPill'

const styles = StyleSheet.create({
   sessionTitle: {
     color: style.colors.primary,
     fontSize: style.fontSizes.heading3,
   },
   textStyle: {
     color: style.colors.primary,
   },
   listItemWrapper: {
     padding: 10,
     flexDirection: 'row',
     borderBottomColor: style.colors.backgroundSecondary,
     borderBottomWidth: 1, 
   },
   formatPresentation: {
     color: style.colors.color3,
     fontSize: style.fontSizes.heading3,
   },
   formatLightningTalk: {
     color: style.colors.color4,
     fontSize: style.fontSizes.heading3,
   },
   formatWorkshop: {
     color: style.colors.color1,
     fontSize: style.fontSizes.heading3,
   }, 
   addToMyScheduleButton: {
      justifyContent: 'center',
   }
 })

const getSessionFormat = (room, format) =>  {
  if (format === 'presentation') {
    return <Text style={ styles.formatPresentation }>{room} - {format}</Text>
  } else if(format === 'lightning-talk') {
    return <Text style={ styles.formatLightningTalk }>{room} -  {format}</Text>
  } else {
    return <Text style={ styles.formatWorkshop }>{room} - {format}</Text>
  }
}

const getTimeSpan = (fromTime: ?string, endTime: ?string): ?string => {
  if (fromTime && endTime ) {
    const from = (moment.utc(fromTime).format('HH:mm'))
    const end = (moment.utc(endTime).format('HH:mm dddd, DD MMM '))
  return (from + ' - ' + end)
  } else {
    return null
  }
}

type Props = {
  onRowPressed: (s: Session) => void, session: Session
}

const SessionListItem = (props: Props) => (
  <View style={ styles.listItemWrapper} key={ props.session.sessionId }>
    { config.features.myschedule &&
      <View style={ styles.addToMyScheduleButton }>
        <Icon
          name="plus" style={{ paddingRight: 10 }}
          size={ 30 }
          color={style.colors.color4}/>
      </View>
    }
    <TouchableOpacity
        style={{ paddingRight: 40 }}
        onPress={ () => props.onRowPressed(props.session) } key={ props.session.sessionId }>
      <Text style={ styles.sessionTitle }>{props.session.title}</Text>
      { getSessionFormat(props.session.room, props.session.format) }
      <Text style={ styles.textStyle }>
        { getTimeSpan(props.session.startTime, props.session.endTime) }
      </Text>
    </TouchableOpacity>
  </View>
)

export default SessionListItem