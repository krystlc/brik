export const state = () => ({
  title: 'Brik Labs',
  drawer: false,
  items: [
    {
      icon: 'bubble_chart',
      title: 'Mission',
      to: '/mission'
    },
    {
      icon: 'bubble_chart',
      title: 'Prototypes',
      to: '/prototype'
    },
    {
      icon: 'bubble_chart',
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
