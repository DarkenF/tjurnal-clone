import React, {FC, useState} from 'react';
import {Button, Input} from "@material-ui/core";
import classes from "./AddCommentForm.module.scss";

interface Props {

}

export const AddCommentForm: FC<Props> = () => {
  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState('')
  const onAddComment = () => {
    setClicked(false)
    setText('');
  }

  return (
    <div className={classes.form}>
      <Input value={text} onChange={(e) => setText(e.target.value)} minRows={clicked ? 5 : 1} onFocus={() => setClicked(true)} classes={{root: classes.fieldRoot }} placeholder="Написать комментарий..." fullWidth multiline />
      {clicked &&
        <Button onClick={onAddComment} className={classes.addButton} style={{height: 42}} variant="contained" color="primary">
          Отправить
        </Button>
      }
    </div>
  );
};