import React, {FC, useState} from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import { AddCommentForm } from '../AddCommentForm';
import data from '../../data';


export const PostComments:FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const comments = data.comments[activeTab ? 'new': 'popular']

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm/>
        <div className="mb-20" />
        {
          comments.map(comment =>
            <Comment key={comment.id} user={comment.user} text={comment.text} createdAt={comment.createdAt} />)
        }
      </div>
    </Paper>
  );
};