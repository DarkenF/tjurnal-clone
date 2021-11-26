import React from 'react';
import {NextPage} from "next";
import {MainLayout} from "../layouts/MainLayout";
import { WriteForm } from '../components/WriteForm';

interface WritePageProps {

}

const WritePage: NextPage<WritePageProps> = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm/>
    </MainLayout>
  );
};

export default WritePage