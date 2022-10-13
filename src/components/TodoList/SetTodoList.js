import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DELETE } from "../../store/types/todoList";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const SetTodoList = () => {
   const dispatch = useDispatch();
   const todoList = useSelector((state) => state.todoList);

   const [value, setValue] = useState("");
   const [openSnackbar, setOpenSnackbar] = useState(null);
   const [justAdded, setJustAdded] = useState("");

   const onOpenSnakbar = (value) => {
      setOpenSnackbar(value);
   };

   const onCloseSnakbar = () => {
      setOpenSnackbar(null);
   };

   const onUndoSnakbar = () => {
      const updated = todoList.todoList;
      updated.pop();
      dispatch({ type: DELETE, payload: updated });
      onCloseSnakbar();
   };

   const onSubmit = (value) => {
      if (value) {
         setJustAdded(value);
         dispatch({ type: ADD, payload: value });
         onOpenSnakbar(value);
      }
   };

   return (
      <>
         <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={onCloseSnakbar}
            message={`${justAdded} just added to the list`}
            action={
               <>
                  <Button color="secondary" size="small" onClick={onUndoSnakbar}>
                     UNDO
                  </Button>
                  <IconButton
                     size="small"
                     aria-label="close"
                     color="inherit"
                     onClick={onCloseSnakbar}
                  >
                     <CloseIcon fontSize="small" />
                  </IconButton>
               </>
            }
         />
         <TextField
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            className=""
            style={{ marginBottom: "2rem", width: "100%" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
               if (e.code === "Enter") {
                  onSubmit(value);
                  setValue("");
               }
            }}
         />
      </>
   );
};