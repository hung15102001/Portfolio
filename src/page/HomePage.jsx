import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import casual from 'casual'
import { addArticle } from '../actions/articleAction';

const HomePage = () => {
  const article = useSelector(state => state.article.list);
  const dispatch = useDispatch();
  console.log(article)
  const handleAdd = () =>{
    const random =  Math.random();
    const newArticle = {
      id: random,
      title: 'title',
      phone: '09************',
    }

    const action = addArticle(newArticle);
    dispatch(action)
  }
  return (
    <div>
    </div>
  )
}

export default HomePage