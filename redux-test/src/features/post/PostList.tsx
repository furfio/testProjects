import { selectPost } from './postSlice';
import { useAppSelector } from '../../app/hooks';
import { useSelector } from 'react-redux'
import { RootState, AppThunk } from '../../app/store';
import { Fragment, ReactNode } from 'react';

export const PostList = () => {
    // const posts = useSelector((state: RootState) => state.post)
    // or
    const posts = useAppSelector(selectPost);

    const postArticles =  posts.map((post)=>{
        return(
            <div>
                <h4>{post.auther}</h4>
                <p>{post.article}</p>
            </div>
        )
    })

    return(
        <div>
          {postArticles}  
        </div>
    )
}