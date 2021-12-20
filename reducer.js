import storage from "./until/storage.js"

const init = {
    todos : storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.complete,
        completed: todo => todo.complete
    },
    editIndex: null,
}
const actions = {
    add({todos}, tiltle) {
        if(tiltle){
            todos.push({tiltle, complete:false })
            storage.set(todos);
        }
    },
    toggle({todos}, index){
        const todo = todos[index]
        todo.complete = !todo.complete
        storage.set(todos)
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => todo.complete = completed)
        storage.set(todos)
    },
    delete({todos}, index){
        todos.splice(index, 1)
        storage.set(todos)
    },
    switch(state, filter){
        state.filter = filter
    },
    clear(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    edit(state, index){
        state.editIndex = index;
    },
    endEdit(state, title, ){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].tiltle = title
                storage.set(state.todos)
            } else {
                this.delete(state, state.editIndex)
            }
            state.editIndex = null
        }
    }
}
export default function reducer (state=init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}