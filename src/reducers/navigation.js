'use strict';

import { NAVIGATION } from '../actions/navigation';

export type Tab = {
  schedule: string,
  mySchedule: string
};

const initialState: Tab = {
  selectedTab: 'schedule'
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION.SWITCH_TAB:
      return {
        ...state,
        selectedTab: action.selectedTab
      };
  }

  return state;
}

module.exports = navigation;
