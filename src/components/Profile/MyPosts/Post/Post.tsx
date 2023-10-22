import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    likesCount: string;
    message: string
}
export const Post = (props: PostPropsType) => {
    return (
            <div className={s.item}>
                {props.message}
                <div>
                    {props.likesCount} <span>♥</span>
                </div>

            </div>

    )
}