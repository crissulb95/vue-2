const getRandomInt = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 20 + 1))
    }, 1000)
  })

export default getRandomInt
