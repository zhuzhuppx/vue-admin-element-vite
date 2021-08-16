import { createStore } from 'vuex'
import appConfig from '../appConfig'
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            toggle: false,
            user: null,
            menus: [
                {
                    title: "导航一",
                    icon: "el-icon-location",
                    children: [
                        {
                            title: "导航一",
                            icon: "el-icon-location",
                            children: [
                                {
                                    title: "导航一",
                                    icon: "el-icon-location",
                                    children: [],
                                }, {
                                    title: "导航二",
                                    icon: "el-icon-location",
                                    children: [],
                                }, {
                                    title: "导航三",
                                    icon: "el-icon-location",
                                    children: [],
                                }, {
                                    title: "导航四",
                                    icon: "el-icon-location",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    },
    mutations: {
        toggleMenu(state) {
            state.toggle = !state.toggle
        },
        login(state, user) {
            state.user = user
            localStorage.setItem(appConfig.appName, JSON.stringify(user))
        },
        loginOut(state) {
            state.user = null
            localStorage.setItem(appConfig.appName, '')
        }
    },
    actions: {
        login({ commit, state }, user) {
            return new Promise((resolve, reject) => {
                commit('login', user)
                resolve()
            })
        },
        loginInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                const userInfo = localStorage.getItem(appConfig.appName)
                if (!!!userInfo) {
                    if (state.user === null) {
                        resolve(null)
                    } else {
                        commit('login', state.user)
                        resolve(state.user)
                    }
                } else {
                    resolve(JSON.parse(userInfo))
                }
            })
        },
        loginOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                commit('loginOut')
                resolve()
            })
        }
    }
})
export default store