export const state = () => ({
  title: 'Brik Labs',
  drawer: false,
  items: [
    {
      title: 'Mission',
      to: '/mission'
    },
    {
      title: 'Prototypes',
      to: '/prototype'
    },
    {
      title: 'Blog',
      to: '/blog'
    }
  ],
  socials: [
    {
      icon: 'twitter',
      to: '/'
    },
    {
      icon: 'kickstarter-k',
      to: '/'
    }
  ]
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  }
}
