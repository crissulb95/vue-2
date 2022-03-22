export default () => {
  return {
    isLoading: false,
    entries: [
      {
        id: new Date().getTime(),
        title: 'Title: Lorem ipsum dolor sit amet',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit amet consectetur adipisicing elit. Unde',
        date: new Date().toDateString(),
        picture: null
      },
      {
        id: new Date().getTime() + 100,
        title: 'Title2: Lorem ipsum dolor sit amet',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit amet consectetur adipisicing elit. Unde',
        date: new Date().toDateString(),
        picture: null
      },
      {
        id: new Date().getTime() + 150,
        title: 'Title: Lorem 3',
        body: 'Lorem ipsum dolor sit ameconsectetur adipisicing elit. Unde',
        date: new Date().toDateString(),
        picture: null
      },
      {
        id: new Date().getTime() + 200,
        title: 'Titlt',
        body: 'Elit. Unde sit amet consectetur adipisicing elit. Unde',
        date: new Date().toDateString(),
        picture: null
      }
    ]
  }
}
