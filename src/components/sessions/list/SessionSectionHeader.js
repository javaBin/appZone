// @flow

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../../../common/style'
import moment from 'moment-timezone'


import type { SlotTime } from '../../../reducers/sessions'

const styles = StyleSheet.create({
   container: {
     backgroundColor: style.colors.secondary
   },
   text: {
     color: style.colors.primary,
   }
 })

export type Props = {
  slotTimeId: number,
  slotTimes: Array<SlotTime>
}

type TimeProps = {
  time: moment,
  style: any
}
const Time = (props: TimeProps ) => (<Text style={props.style}>{props.time.tz("Europe/Oslo").format("HH:mm")}</Text>)

const SessionSectionHeader = (props: any) => {
  const slot = props.slotTimes.find(st => st.slotId === props.slotTimeId)
  return (<View style={styles.container}>
    <Text style={styles.text}>
      {`Session: ${props.slotTimeId}: `}
      <Time time={slot.start} style={styles.text} /> - <Time time={slot.end}  style={styles.text} />
    </Text>

  </View>)
}


export default SessionSectionHeader