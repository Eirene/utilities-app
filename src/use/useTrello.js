import { useStore } from "vuex";

export function useTrello() {
    const store = useStore();
    const board = store.state.trello.board;

    const moveTask = ((e, toTasks, toTaskIndex) => {
        const fromColumnIndex = e.dataTransfer.getData('from-column-index')
        const fromTasks = board.columns[fromColumnIndex].tasks
        const fromTaskIndex = e.dataTransfer.getData('from-task-index')

        store.commit('trello/MOVE_TASK', {
            fromTasks,
            fromTaskIndex,
            toTasks,
            toTaskIndex
        })
    })

    const moveColumn = ((e, toColumnIndex) => {
        const fromColumnIndex = e.dataTransfer.getData('from-column-index')

        store.commit('trello/MOVE_COLUMN', {
            fromColumnIndex,
            toColumnIndex
        })
    })

    const moveTaskOrColumn = ((e, toTasks, columnIndex, toTaskIndex) => {
        const type = e.dataTransfer.getData('type')
        if (type === 'task') {
            moveTask(e, toTasks, toTaskIndex !== undefined ? toTaskIndex : toTasks.length)
        } else {
            moveColumn(e, columnIndex)
        }
    })

    return{
        moveTaskOrColumn, moveTask, moveColumn,
    }
}
