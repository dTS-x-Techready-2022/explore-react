import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { DELETE } from "src/store/types/todoList";

export const TodoList = () => {

   const dispatch = useDispatch();
   const todoList = useSelector((state) => state.todoList);

   console.log(todoList);

   const onRemove = (idx) => {
      // eslint-disable-next-line
      const updated = todoList.todoList.filter((_, i) => i != idx);
      dispatch({ type: DELETE, payload: updated });
   };

   return (
      <>
         {todoList.todoList.map((item, i) => {
            return (
               <Card
                  style={{
                     padding: "1rem",
                     display: "flex",
                     justifyContent: "space-between",
                  }}
                  key={`card-${i}`}
                  variant="outlined"
               >
                  {item}
                  <IconButton
                     size="small"
                     aria-label="close"
                     color="inherit"
                     onClick={() => onRemove(i)}
                  >
                     <CloseIcon color="error" fontSize="small" />
                  </IconButton>
               </Card>
            );
         })}
      </>
   );
};