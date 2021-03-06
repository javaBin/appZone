// @flow

type Config = {|
  urls: {
    sleepingPill: string,
    devnull: string
  },
  conferenceSlug: string, 
  features: { 
    filtersessions: boolean, 
    myschedule: boolean,
    settings: boolean,
    feedback: boolean
  }
|}

const prodConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no",
    devnull: "https://javazone.no/devnull/server"
  },
  conferenceSlug: "javazone_2017",
  features: {
    filtersessions: false,
    myschedule: false,
    settings: false,
    feedback: true,
  }
} 

const devConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no",
    //sleepingPill: "https://test-sleepingpill.javazone.no",
    //devnull: "https://test.javazone.no/devnull/server"
    devnull: "https://javazone.no/devnull/server"
  },
  conferenceSlug: "javazone_2016",
  //conferenceSlug: "javazone_2017",
  features: {
    filtersessions: true,
    myschedule: true,
    settings: true,
    feedback: true
  }
}

const config: Config = __DEV__ ? devConfig : prodConfig
export default config
