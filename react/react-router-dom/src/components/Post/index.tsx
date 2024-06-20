import React from 'react'
import "./style.css";
import { useParams, useSearchParams } from 'react-router-dom';

const Post = () => {

  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  return (
    <div>
      <h1>Post {`Para: ${id}`} {`QS: ${qs}`}</h1>
    </div>
  )
}

export default Post
