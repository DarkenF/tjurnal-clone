import React, {FC, useEffect} from 'react';
import {Button, Input} from "@material-ui/core";
import classes from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import {TextsmsOutlined as MessageIcon} from "@material-ui/icons";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

interface WriteFormProps {
  title?: string;
}

export const WriteForm: FC<WriteFormProps> = ({title}) => {

  return (
    <div style={{backgroundColor: '#fff'}}>
      <Input className={classes.titleField} placeholder="Заголовок" defaultValue={title}/>
      <div className={classes.editor}>
        <Editor/>
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};