import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './postSlice'
import { PostList } from './PostList'


export const Post:React.FC = () =>{
    const [autherInput, setAutherInput] = useState('');
    const [articleInput, setArticleInput] = useState('');

    const dispatch = useDispatch()

    const onAutherChange = (e:any) => {
        setAutherInput(e.target.value);
    }
    const onArticleChange = (e:any) => {
        setArticleInput(e.target.value);
    }

    const submit = () => {
        if(autherInput === '' || articleInput === ''){
            return;
        }
        console.log('add')
        dispatch(
            add({
                auther: autherInput,
                article:articleInput
            }
            )
        )
        setAutherInput('');
        setArticleInput('');
    }

    return(
        <section>
            <form>
                <label htmlFor='auther'>input auther</label>
                <input id='auther' value={autherInput} onChange={onAutherChange}/>
                <label htmlFor='article'>input article</label>
                <input id='article' value={articleInput} onChange={onArticleChange}/>
                <button type="button" onClick={submit}>submit</button>
            </form>
            <br/>
            <PostList />
        </section>
    )
}