// @flow
export const NAVIGATION = {
  SWITCH_TAB: 'SWITCH_TAB',
  SWITCH_DAY: 'SWITCH_DAY'
};



export function switchTab(selectedTab) {
  return {
    type: NAVIGATION.SWITCH_TAB,
    selectedTab
  }
}
