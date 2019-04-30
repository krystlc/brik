export const state = () => ({
  title: 'Brik Labs',
  drawer: false,
  items: [
    {
      icon: 'apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'bubble_chart',
      title: 'Mission',
      to: '/mission'
    },
    {
      icon: 'bubble_chart',
      title: 'Timeline',
      to: '/timeline'
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
  ]
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  }
}
