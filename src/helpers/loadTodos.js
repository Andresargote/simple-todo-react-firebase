import {db} from './../firebase/firebaseConfig';

export const loadTodos = async (uid) => {
    const todosSnap = await db.collection(`${uid}/todos/todo`).get();
    const todos = [];

    todosSnap.forEach(snapHijo => {
        todos.push({
            id: snapHijo.id,
            ...snapHijo.data(),
        })
    });

    console.log(todos);
    return todos;
}