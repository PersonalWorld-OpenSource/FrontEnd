import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexP = new VuexPersist({
    key: 'personal-world',
    store: window.localStorage
})
const store = createStore({
    plugins: [vuexP.plugin],
    state: {
        inLogin: false,
        changeInLogin: null,
        user: [],
        changeUser: null
    },
    getters: {
        inLogin(state) {return state.inLogin},
        getUser(state) {return state.user},
        getUserId(state) {return state.user.id}
    },
    mutations: {
        setLogin(state) {
            state.inLogin = state.changeInLogin
        },
        setUser(state) {
            state.user = state.changeUser
        }

    },
    actions: {
        changeLogin(context) {
            context.commit('setLogin')
        },
        changeUser(context) {
            context.commit('setUser')
        }
    }
})
export default store