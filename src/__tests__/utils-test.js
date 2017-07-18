import { getDays } from '../util'

describe('utils', () => {
  const testSuite = (slug) => {
    it('should include JavaZone days for slug ' + slug, () => {
      const days = getDays(slug)
      expect(days.day1).not.toBeNull()
      expect(days.day2).not.toBeNull()
    })
  }

  testSuite('javazone_2015')
  testSuite('javazone_2016')
  testSuite('javazone_2017')

  it('should return empty values for invalid slug ', () => {
    const days = getDays('not_existing_javazone_slug')
    expect(days.day1).toBeNull()
    expect(days.day2).toBeNull()
  })
})
