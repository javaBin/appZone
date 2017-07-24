// @flow

type Config = {|
  urls: {
    sleepingPill: string,
  },
  conferenceSlug: string
|}

const prodConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no"
  },
  conferenceSlug: "javazone_2017"
}

const devConfig: Config = {
  urls: {
    sleepingPill: "https://sleepingpill.javazone.no"
  },
  conferenceSlug: "javazone_2016"
}

const config: Config = __DEV__ ? devConfig : prodConfig
export default config
