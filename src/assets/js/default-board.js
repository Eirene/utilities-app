import { uuid } from "./trelloUtils";

export default {
    columns: [
        {
            name: 'todo',
            tasks: [
                {
                    description: 'description',
                    name: 'first task',
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: 'todo',
                    name: 'second task',
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: 'todo',
                    name: 'and third',
                    id: uuid(),
                    userAssigned: null
                }
            ]
        },
        {
            name: 'in-progress',
            tasks: [
                {
                    description: 'in-progress',
                    name: 'first task',
                    id: uuid(),
                    userAssigned: null
                }
            ]
        },
        {
            name: 'done',
            tasks: [
                {
                    description: 'done',
                    name: 'first task',
                    id: uuid(),
                    userAssigned: null
                }
            ]
        }
    ]
}
