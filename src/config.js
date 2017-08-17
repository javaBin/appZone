// @flow

type Config = {|
  urls: {
    sleepingPill: string,
  },
  conferenceSlug: string, 
  features: { 
    filtersessions: boolean, 
    myschedule: boolean,
    settings: boolean,
  }
|}

const prodConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no"
  },
  conferenceSlug: "javazone_2017",
  features: {
    filtersessions: false,
    myschedule: false,
    settings: false
  }
} 

const devConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no"
  },
  conferenceSlug: "javazone_2016",
  features: {
    filtersessions: true,
    myschedule: true,
    settings: true
  }
}

const config: Config = __DEV__ ? devConfig : prodConfig
export default config
