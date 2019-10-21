export const state = () => ({
  recent_posts: [],
  current_recent_post: null,
})

export const getters = {
  currentRecentPost (state) {
    return state.current_recent_post
  },

  recentPosts (state) {
    return state.recent_posts
  }
}

export const mutations = {
  SET_CURRENT_POST (state, post) {
    state.current_recent_post = post
  },

  SET_RECENT_POSTS (state, posts) {
    state.recent_posts = posts
  }
}

export const actions = {
  async getRecentPosts({ commit }) {
    let response = await this.$axios.get(`/get_recent_posts`)

    commit('SET_RECENT_POSTS', _.get(response, 'data.posts', []))
  }
}
