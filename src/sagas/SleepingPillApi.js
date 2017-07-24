// @flow

import config from '../config'

export const allSession: () => any =
  () =>
    fetch(`${config.urls.sleepingPill}/public/allSessions`)
      .then((res) => res.json())

export const sessionBySlug: (string) => any =
  (slug) => fetch(`${config.urls.sleepingPill}/public/allSessions/${slug}`)
    .then((res) => res.json())

