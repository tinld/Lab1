import React from 'react'
import { Avatar } from '@mui/material'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ExpandMoreOutlined } from '@mui/icons-material'

const Post = ({ profilePic, message, timestamp, imgName, username }) => {
  return (
    <PostWrapper>
      <PostTop>
        <Avatar src={profilePic} className='post__avatar'/>
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </PostTop>
      <PostBottom>
        <p>{message}</p>
      </PostBottom>
      {
        imgName ? (
          <div className='post__image'>
            <img src={`http://localhost:9000/images/single?name=${imgName}`} />
          </div>
        ) : (
          console.log('DEBUG >>> no image here')
        )
      }
      <PostOptions>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlined/>
        </div>
      </PostOptions>
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  .post__image{
    img{
      width: 100%;
    }
  }
`
const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
  .post__avatar{
    margin-right: 10px;
  }
  .post__topInfo{
    h3{
      font-size: medium;
    }
    p{
      font-size: small;
      color: gray;
    }
  }
`

const PostBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`

const PostOptions = styled.div`
  padding: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
  .post__option{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex: 1;
    p {
      margin-left: 10px;
    }
    &:hover{
      background-color: #eff2f5;
      border-radius: 10px;
    }
  }
`
export default Post