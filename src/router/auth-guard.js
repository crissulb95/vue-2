const isAuthenticatedGuard = (to, from, next) => {
  // console.log({ to, from, next })
  next()
}

export default isAuthenticatedGuard
