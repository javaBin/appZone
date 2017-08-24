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
   addToMyScheduleButotn: {
      justifyContent: 'center',
   }
 })

const getSessionFormat = (format) =>  {
  if (format === 'presentation') {
    return <Text style={ styles.formatPresentation }>{format}</Text>
  } else if(format === 'lightning-talk') {
    return <Text style={ styles.formatLightningTalk }>{format}</Text>
  } else {
    return <Text style={ styles.formatWorkshop }>{format}</Text>
  }
}

const getTimeSpan = (fromTime: ?string, endTime: ?string): ?string => {
  if (fromTime && endTime ) {
    const from = (moment(fromTime).format('dddd, DD MMM HH:mm'))
    const end = (moment (endTime).format('HH:mm'))
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
      <View style={ styles.addToMyScheduleButotn }>
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
      { getSessionFormat(props.session.format) }
      <Text style={ styles.textStyle }>
        { getTimeSpan(props.session.startTimeZulu, props.session.endTimeZulu) }
      </Text>
      <Text style={ styles.textStyle }>{ props.session.room }</Text>
    </TouchableOpacity>
  </View>
)

export default SessionListItem