import html from '../core.js'
import TodosItem from '../component/TodosItem.js'
import { connect } from '../store.js'


function TodosList ({todos, filter, filters}) {
    return html`
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos.filter(filters[filter]).map((todo,index) => TodosItem({todo, index}))}
        </ul>
    </section>
    `
}
export default connect()(TodosList)