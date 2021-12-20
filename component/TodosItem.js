import html from '../core.js'
import { connect } from '../store.js'
function TodosItem ({todo, index, editIndex}) {

    return html`
        <li class="${todo.complete && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                ${todo.complete && 'checked'}
                onchange="dispatch('toggle', ${index})"
                >
                <label ondblclick="dispatch('edit', ${index})">${todo.tiltle}</label>
                <button class="destroy"
                onclick="dispatch('delete', ${index})"
                ></button>
            </div>
            <input class="edit" value="${todo.tiltle}" 
            onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())"
            onblur="dispatch('endEdit', this.value.trim())"
            >
        </li>
    `
}
export default connect()(TodosItem)
