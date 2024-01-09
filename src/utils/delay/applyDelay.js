export const applyDelay = (func, delay) => {
  return setTimeout(() => {
    func()
  }, delay)
}