export const applyDelay = (func: () => void, delay: number) => {
  return setTimeout(() => {
    return func()
  }, delay)
}