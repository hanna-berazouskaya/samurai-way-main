import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string
}
export const Post = (props: PostPropsType) => {
    return (
            <div className={s.item}>
                {props.message}
                <div>
                    <span>like</span>
                </div>

            </div>

    )
}