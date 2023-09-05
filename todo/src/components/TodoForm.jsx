import {useState} from 'react';


const TodoForm = () => {
    const [value,setValue] = useState ("")
    const [category, setcategory] = useState ("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Enviou form !");
    };

    return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit} >
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
    );
}

export default TodoForm