import {useState} from 'react';


const TodoForm = () => {
    const [value,setValue] = useState ("")
    const [category, setcategory] = useState ("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        id (!value || !category) return;
        console.log(value,category);
        //adicionar todo
        setValue ("");
        setcategory ("");
    };

    return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            placeholder='Digite o Titulo' 
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <select value = {category} onChange={(e) => setcategory(e.target.value)}>
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