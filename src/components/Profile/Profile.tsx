import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'/>
        </div>
        <div className={s.item}>
            <img src='https://t3.ftcdn.net/jpg/04/78/07/98/360_F_478079824_w4ma0uISN4rEN8G6gUYAJEQ5hXBCqk9x.jpg'/>
        </div>
        <MyPosts />
    </div>
}