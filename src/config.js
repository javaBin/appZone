// @flow

type Config = {|
  urls: {
    sleepingPill: string,
    devnull: string
  },
  conferenceSlug: string
|}

const prodConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no",
  },
  conferenceSlug: "javazone_2017"
}

const devConfig: Config = {
  urls: {
    //sleepingPill: "https://test-sleepingpill.javazone.no",
    sleepingPill: "https://sleepingpill.javazone.no",
    devnull: "https://test.javazone.no/devnull/server"
  },
  conferenceSlug: "javazone_2016"
  //conferenceSlug: "javazone_2017"
}

const config: Config = __DEV__ ? devConfig : prodConfig
export default config
