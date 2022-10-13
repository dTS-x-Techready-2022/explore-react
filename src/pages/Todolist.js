import { TodoList } from "src/components/TodoList/TodoList";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import { SetTodoList } from "src/components/TodoList/SetTodoList";

const TodolistPage = () => {

   return (
      <>
         <Helmet>
            <title>Todolist | Techready</title>
         </Helmet>

         <Container maxWidth="sm" style={{ textAlign: 'center', }}>
            <h1>REA4C Todo List</h1>
            <SetTodoList />
            <TodoList />
         </Container>

      </>
   );
};

export default TodolistPage;
