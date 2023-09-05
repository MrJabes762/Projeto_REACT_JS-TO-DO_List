import React from 'react'

function TodoForm() {
    return (<div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form >
            <input type="text" placeholder='Digite o Titulo' />
            <select>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="button">Criar Tarefa</button>
        </form>
    </div>
    )
}

export default TodoForm