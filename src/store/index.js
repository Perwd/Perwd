import { createStore } from 'vuex'


export default createStore({
    state: {
        // 仓库
        obj: 'hello',
        num: 1,
        count: 4,
    },
    getters: {
        // 里面的函数都要state，和payload2个参数
        // 计算属性功能，vuex4没有实现
        // 定义一个getters
        formatInfo(state) {
            return state.obj + ' Tom'
        },
        doubles(state, payload) {
            state.count += payload;
        }
    },
    mutations: {
        // 更改状态
        // 定义mutations，用于修改状态(同步)

    },
    actions: {
        // 调用actin，mutations
        // 这里可以写逻辑，但是不能修改
        add(state, payload) {
            state.num += 1;
        }
    },


})
