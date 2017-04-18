// @flow

export const allSession: () => any =
  () =>
    fetch('https://sleepingpill.javazone.no/public/allSessions')
      .then((res) => res.json());

export const sessionBySlug: (string) => any =
  (slug) => fetch(`https://sleepingpill.javazone.no/public/allSessions/${slug}`)
    .then((res) => res.json());

