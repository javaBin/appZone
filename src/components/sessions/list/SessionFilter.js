// @flow

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../../common/style'
import config from '../../../config'

const styles = StyleSheet.create({
   filterButtonWrapper: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   filterButton: {
     flexGrow: 2,
     backgroundColor: style.colors.backgroundColor,
     borderColor: style.colors.backgroundSecondary,
     borderWidth: 3,
   },
   filterButtonText: {
     alignSelf: 'center',
     paddingTop: 10,
     fontSize: 15,
     color: style.colors.color3,
   }
 })

type Props = {
  onFilterSessionPressed: () => void,
  onFilterDayPressed: (day: ?string) => void,
  day1: ?string,
  day2: ?string
}

const getFilterButton = (props) => {
  if(config.features.filtersessions) {
    return (
      <Icon.Button
          borderRadius={0}
          backgroundColor={style.colors.backgroundSecondary}
          name="filter"
          size={30}
          onPress={props.onFilterSessionPressed()}>
      </Icon.Button>
    )
  }
}

const SessionFilter = (props: Props) => (
  <View style= { styles.filterButtonWrapper }>
    <TouchableOpacity
        style={ styles.filterButton }
        onPress={ ()=> props.onFilterDayPressed(props.day1) }
        title="Day 1"
        accessibilityLabel="List sessions, day one">
      <Text style={styles.filterButtonText}>DAY 1</Text></TouchableOpacity>
    <TouchableOpacity
        style={ styles.filterButton }
        onPress={() => props.onFilterDayPressed(props.day2)}
        title="Day 2"
        accessibilityLabel="List sessions, day two">
      <Text style={ styles.filterButtonText}>DAY 2</Text>
    </TouchableOpacity>
    { getFilterButton(props) }
  </View>
)

export default SessionFilter