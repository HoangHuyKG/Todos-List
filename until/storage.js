const TODOS_LIST_KEY = 'TODOS'

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_LIST_KEY)) || []
    },
    set(Todos){
        localStorage.setItem(TODOS_LIST_KEY, JSON.stringify(Todos))
    }
}