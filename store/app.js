export const state = () => ({
  title: 'BRIK LABS',
  legal: 'Brik Labs LLC &copy; 2019',
  email: 'hello@briklabs.com',
  drawer: false,
  items: [
    {
      title: 'Mission',
      to: '/mission'
    },
    {
      title: 'Prototypes',
      to: '/prototypes'
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
