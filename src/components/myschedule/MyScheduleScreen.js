import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
  StyleSheet, 
  View, 
  Text, 
  SectionList,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'

import style from '../../common/style'

class MyScheduleScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hei</Text>
          <SectionList
          sections={[
            {title: 'D', data: ['Devin']}, 
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>} 
        />
      </View>
    );
  }
}

  /*constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
   })
    this.state = {
      ds: ds.cloneWithRowsAndSections(this.props.selectedSessions)
    }
  }

  static propTypes = {
    selectedSessions: PropTypes.array,
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.selectedSessions !== nextProps.selectedSessions) {
      this.setState(()=> {
        return { ds: this.state.ds.cloneWithRowsAndSections(nextProps.selectedSessions) }
      })
    }
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>{sectionID}</Text>
      </View>
      )
  }

  renderRow(rowData, rowID) {
    // console.warn(rowData)
    return (
      <View key={ rowData.id }>
        <Text>{ rowData.session.title }</Text>
      </View>
    )
  }*/

  // render() {


    // var getRowData = (selectedSessions, sectionID, rowID) => {
    //   return selectedSessions[sectionID + ':' + rowID];
    // }

    // var getSectionData = (selectedSessions, sectionID) => {
    //   return selectedSessions[sectionID];
    // }

    /*return (
      <View>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        />
      </View>
    );
  }
}*/

// const getSection = (sectionList, tf) => {
//   if (sectionList.length < 1 ) {
//     console.warn("no sessions");
//     return;
//   } 
//   let timeFrom = moment.utc(new Date(tf)).format('HH:mm')

//   sectionList.forEach(function(element) {
//     if (timeFrom > element.from && timeFrom < element.to) {
//       return element.key;
//     }
//   });
// }

const mapStateToProps = (state) => {

  // let sectionReadyList = state.filter.days.scheduleTime.day1;

//   // state.sessions.map( session => {
//   //   let index = getSection(sectionReadyList, sessions.from);
//   //  //  [index].list.push(session);
//   // });

  return {
   // selectedSessions: sectionReadyList, 
  }
}

export default connect(mapStateToProps)(MyScheduleScreen)
