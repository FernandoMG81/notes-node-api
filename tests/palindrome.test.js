const { palindrome } = require('../utils/for_testing')

test.skip('Palindrome of Fernando', () => {
  const result = palindrome('Fernando')

  expect(result).toBe('odnanreF')
})

test.skip('Palindrome of Empty string', () => {
  const result = palindrome('')

  expect(result).toBe('')
})

test.skip('Palindrome of undefined', () => {
  const result = palindrome()

  expect(result).toBeUndefined()
})
