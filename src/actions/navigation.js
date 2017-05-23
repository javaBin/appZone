// @flow
// @flow
export const NAVIGATION = {
  SWITCH_TAB: 'SWITCH_TAB',
  SWITCH_DAY: 'SWITCH_DAY'
};



export const switch_tab =
  {
    type: NAVIGATION.SWITCH_TAB,
    tab: 'schedule' | 'my-schedule' | 'map' | 'notifications' | 'info'
  };
