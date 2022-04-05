export default {
    state: {
        todo: [],
        todoFiltered: [],
    },
    mutations: {
        SET_TODO(state, payload) {
            state.todo = payload;
        },
        SET_TODO_FILTERED(state, payload) {
            state.todoFiltered = payload;
        },
    },
    getters: {
    },
    actions: {
        setTodo({ commit }, payload) {
            commit("SET_TODO", payload);
        },
        setTodoFiltered({ commit }, payload) {
            commit("SET_TODO_FILTERED", payload);
        },
    },
};
