import defaultBoard from "../assets/js/default-board";
import { saveStatePlugin } from "../assets/js/trelloUtils";

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default {
    namespaced: true,
    plugins: ['saveStatePlugin'],
    state: () => ({
        board
    }),
    mutations: {
    },
    actions: {
    },
    getters: {
        getTask (state) {
            return (id) => {
                for (const column of state.board.columns) {
                    for (const task of column.tasks) {
                        if (task.id === id) {
                            return task
                        }
                    }
                }
            }
        }
    },
};
