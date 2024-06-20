import React from 'react'
import "./style.css";
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

const Posts = () => {

  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  return (
    <div>
      <h1>Posts {`Para: ${id}`} {`QS: ${qs}`}</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Posts
