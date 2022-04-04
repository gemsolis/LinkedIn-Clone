import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {getArticlesAPI} from "../../actions"
import ReactPlayer from 'react-player'

import styled from 'styled-components'
import PostModal from './PostModal';


import {BsImage, BsPlayBtnFill, BsCalendarEvent, BsBlockquoteLeft} from 'react-icons/bs'
import {FaEllipsisH , FaRegCommentDots, FaPaperPlane} from 'react-icons/fa'
import {FiCornerUpRight, } from 'react-icons/fi'
import {GoThumbsup} from 'react-icons/go'
import {MdOutlineWavingHand} from 'react-icons/md'

import user from '../../assets/user.svg'



const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    return () => {
      props.getArticles();
    };
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
        default:
        setShowModal("close");
        break;
    }
  }
  return (
    <>
    { props.articles.length === 0 ? <p>There is no post yet.</p> :
    <Container>
        <ShareBox>
          <div>
          {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src={user} alt="" />)
          }
            <button onClick={handleClick}>Start a post</button>
          </div>
      
          <div>
            <button>
               <BsImage style={{
                  color:"#70B5F9",
                  fontSize:"24px",
              }}/>
                <span>Photo</span>
            </button>

            <button>
               <BsPlayBtnFill style={{
                  color:"#7FC15E",
                  fontSize:"24px",
              }}/>
               <span>Video</span>
            </button>

            <button>
               <BsCalendarEvent style={{
                  color:"#E7A849",
                  fontSize:"24px",
              }}/>
               <span>Event</span>
            </button>

            <button>
               <BsBlockquoteLeft style={{
                  color:"#FC9295",
                  fontSize:"24px",
              }}/>
               <span>Write Article</span>
            </button>
          </div>
        </ShareBox>
        <Content>
          {props.articles.length > 0 && props.articles.map((article,key) => (
          <Article key={key}>
              <SharedActor>
                <a> <img src={article.actor.image} alt=""/>
                  <div>
                    <span>{article.actor.title}</span>
                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                  </div>
                  </a>
               <button><FaEllipsisH/></button>
              </SharedActor>
              <Description>
              {article.description}
              </Description>
              <SharedImg>
                <a>
                  {
                    !article.sharedImg && article.video ? <ReactPlayer width="100%" url={article.video}/> : article.sharedImg && <img src={article.sharedImg} alt=""/>
                  }
                </a>
              </SharedImg>
              <SocialCounts>
                <li>
                  <button>
                    <GoThumbsup style={{
                    backgroundColor:"#70B5F9",
                    color:"#fff",
                    fontSize:"24px",
                    borderRadius:"50%",
                    padding:"3px",
              }}/>
                    <MdOutlineWavingHand 
                    style={{
                      backgroundColor:"#7FC15E",
                      color:"#fff",
                      fontSize:"24px",
                      borderRadius:"50%",
                      padding:"3px",
                      
                  }}/>
                  <span>75</span>
                  </button>
                </li>
                <li>
                  <a>2 comments</a>
                </li>
              </SocialCounts>
              <SocialActions>  <button>
                <GoThumbsup/>
                <span>Like</span>
              </button>
              <button>
                <FaRegCommentDots/>
                <span>Comments</span>
              </button>
              <button>
                <FiCornerUpRight/>
                <span>Share</span>
              </button>
              <button>
                <FaPaperPlane/>
                <span>Send</span>
              </button></SocialActions>
            
          </Article>
                    ))}
          </Content>

        <PostModal showModal={showModal} handleClick={handleClick} />

    </Container>
    }
    </>
   
  )
}


const Container = styled.div`
    grid-area: main;
`

const CommonCard = styled.div`
  text-align: center;
  overflow:hidden;
  margin-bottom:10px;
  background-color: #fff;
  border-radius:5px;
  border:none;
  box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
`

const ShareBox = styled(CommonCard)`
  display:flex;
  flex-direction: column;
  color:#958b7b;
  background:#fff;
  padding-top:10px;

  div{
    button{
      font-size:1rem;
      background:transparent;
      display:flex;
      flex-direction:row;
      align-items:center;
      padding:10px;
      border-radius:5px;
      font-weight:600;
      }


    :first-child{
      display:flex;
      align-items:center;
      padding:10px;
      
      img{
        width:48px;
        border-radius:50%;
        margin-right:10px;
      }

      button{
        margin:5px;
        flex-grow: 1;
        border-radius:20px;
        padding-left:15px;
        border:1px solid #d3d3d3;
        background-color: #fff;
        text-align:left;
      }
    }

    :nth-child(2) {
      display:flex;
      align-items:center;
      justify-content:space-around;
      padding-bottom:10px;
      

      button{
        cursor:pointer;

        span{
          margin-left:10px;
          color:#70b5f9;
        }

        :hover{
          background-color:#d3d3d3;
        }
      }

      @media (max-width:768px){
        button{
          padding:2px;
          svg{
          width:12px;
          margin:2px;
          }
        }

        span{
          margin-left:2px;
          font-size:12px;
        }
      }

    }
    
    }

  `
  
const Content = styled.div`
  text-align:center;
  img{
    width:30px;
  }
`

const Article = styled(CommonCard)`
  padding:0;
  margin-top:20px;
  overflow:visible;

`


const SharedActor = styled.div`
  display:flex;
  align-items: center;
  flex-wrap:nowrap;
  padding:20px;
  margin-bottom:10px;
  position:relative;

  a{
    color:#727272;
    margin-right:15px;
    font-size:1rem;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    

    img{
      width:48px;
      border-radius:50%;

    }

    div{
      display:flex;
      flex-direction:column;
      flex-grow:1;
      margin-left:10px;
      overflow:hidden;

      span{
        text-align:left;
        padding-bottom:5px;

        :first-child{
          font-size:20px;
          font-weight:800;
          color: #000;;

        }
      }
    }
  }


  button{
      position:absolute;
      right:12px;
      top:10px;
      background:transparent;
      font-size:16px;
      outline:none;
    }
`

const Description = styled.div`
    padding:0 16px;
    overflow:hidden;
    color: #000;
    font-size:1rem;
    text-align:left;

`
const SharedImg = styled.div`
    margin-top:10px;
    width:100%;
    display:block;
    position:relative;
    background-color:#f9fafb;

    img{
      object-fit:contain;
      width:100%;
    }
`

const SocialCounts = styled.ul`
    line-height:1.5;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0 15px;
    padding:10px 0;
    
    li{
      margin-right:5px;
      font-size:1rem;

      button{
        display:flex;
        align-items:center;
        background:transparent;

        span{
          font-size:12px;
          margin-left:5px;
        }
      }
    }

`

const SocialActions = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:5px 0;


    button{
      display:flex;
      align-items:center;
      margin:0 5px;
      padding:10px 20px;
      color: #0a66c2;
      background: transparent;
      font-size: 20px;
      border-radius: 5px;
      cursor:pointer;

      @media (max-width:568px){
        span{
          display:none;
        }
      }

      span{
        margin-left:5px;
      }

      :hover{
        background-color: #d3d3d3;
      }
    }
`



const mapStateToProps = (state) => {
  return {
      user: state.userState.user,
      articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)