import { useState } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import firebase from 'firebase/app'
import {postArticlesAPI} from "../../actions"


import {GrClose} from 'react-icons/gr'
import {BsImage, BsCameraVideoFill} from 'react-icons/bs'
import {FaRegCommentDots} from 'react-icons/fa'

import user from '../../assets/user.svg'

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("")
    const [assetArea, setAssetArea] = useState("")

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`not an image, the file is ${typeof image}`);
            return;
        }
        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    }

    const postArticles = (e) =>{

        e.preventDefault();
        if (e.target !== e.currentTarget){
            return;
        }
     
        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description:editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
        props.postArticles(payload);
        reset(e);
    }

    const reset = (e) =>{
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }

  return (
    <>
    {props.showModal === "open" && (

    <Container>
        <Content>
            <Header>
                <h2>Create a post</h2>
                <button onClick={(event) => reset(event)}>
                    <GrClose onClick={(event) => reset(event)}/>
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                {
                 props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src={user} alt="" />)
                }
                <span>{props.user ? props.user.displayName : "User"}</span>
                </UserInfo>
                <Editor>
                    <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder="What do you want to talk about?" autoFocus={true}/>
                    {assetArea === 'image' ? (
                    <UploadImage>
                    <input 
                    type="file" 
                    accept="image/gif, image/jpeg, image/png" 
                    name="image"
                    id="file"
                    style={{display:"none"}}
                    onChange={handleChange}  
                    />
                    <p>
                    <label htmlFor="file">Select an image to share</label>
                    </p>
                    <div>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt=""/>}
                    </div>
                    </UploadImage>
                    ):(assetArea === 'media' &&
                    <>
                    <UploadVideo>

                    <input
                    type="text"
                    placeholder="Input a video link"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)} />
                    {videoLink && (<ReactPlayer width={"100%"} url={videoLink}/>)}
                    </UploadVideo>
                   
                    </>)
                    }
                </Editor>
            </SharedContent>
            <ShareCreation>
                <AttachAssets>
                <button onClick={() => switchAssetArea('image')}><BsImage/></button>
                <button onClick={() => switchAssetArea('media')}><BsCameraVideoFill/></button>
                </AttachAssets>
                <ShareComment>
                    <button><FaRegCommentDots/><span>Anyone</span></button>
                </ShareComment>

                <PostButton disabled={!editorText ? true : false}  onClick={(event) => postArticles(event)}>Post</PostButton>
            </ShareCreation>
        </Content>
    </Container>
    )}
    </>
  )
}

const Container = styled.div`
    position:fixed;
    width:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9999;
    color:#000;
    background-color: rgba(0,0,0,0.7);
    

`

const Content = styled.div`
    width:100%;
    max-width:550px;
    background-color:#fff;
    max-height:90%;
    border-radius:5px;
    position:relative;
    display:flex;
    flex-direction:column;
    top:40px;
    margin:0 auto;
    animation:zoomIn 0.5s;


    @media(max-width:768){
        width:200px;
    }
`

const Header = styled.div`
    padding:20px;
    border-bottom:2px solid rgba(0,0,0, 0.09);
    font-size:16px;
    display:flex;
    justify-content: space-between;
    align-items:center;


    button{
        padding:5px;
        transition:0.3s all ease;

        :hover{
            transform: rotate(180deg);
            transition: 1s all ease;
        }

        svg{
        font-size:20px;
        cursor:pointer;
        }

    }
`

const SharedContent = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    padding:10px;

`

const UserInfo = styled.div`
    display:flex;
    align-items:center;
    padding:10px;

    img{
        width:55px;
        border-radius:50%;
        border:2px solid transparent;

    }

    span{
        font-weight:800;
        font-size:1rem;
        margin-left:15px;
        
    }
    
`

const ShareCreation = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;


`

const AttachAssets = styled.div`
    display:flex;
    align-items: center;

    button{
        font-size:1.5rem;
        color:#656565;
        margin-right:5px;
        padding:8px;
        background-color:transparent;
        cursor:pointer;
        border-radius:10px;

        :hover{
            background-color:#d3d3d3;
        }
    }
`

const ShareComment = styled(AttachAssets)`
    flex-grow:1;
    border-left: 2px solid #d3d3d3;
    padding-left:10px;

    button{
        display:flex;
        align-items: center;
    }
    
    span{
        margin-left:5px;
        font-size:14px;
    }

`


const PostButton = styled.div`
        font-size:1rem;
        font-weight:700;
        color:#fff;
        padding:10px 20px;
        background-color:${(props) => (props.disabled ? "#d3d3d3" : "#639ede")};
        cursor:pointer;
        border-radius:20px;
        transition:0.5s all ease;

        :hover{
            background-color:${(props) => (props.disabled ? "#d3d3d3" : "#265b94")};
        }
`

const Editor = styled.div`
    margin:5px;

    textarea{
        width:100%;
        min-height:100px;
        outline:none;
        resize:none;
        font-family: "Source Sans 3";
        font-size:16px;
        padding:10px;
        border-radius:5px;

        ::placeholder{
            padding:5px;
            font-family: "Source Sans 3", sans-serif;
        }

    }

`

const UploadImage = styled.div`
    text-align:center;
    margin:10px 0;

    p{
        padding:5px;
    }

    label{
        font-weight:600;
        font-size:1rem;
        cursor:pointer;
        text-decoration: underline;
        
    }

    img{
        width:100%;
    }
`

const UploadVideo = styled.div`
    margin:10px 0;

    input{
        font-size:14px;
        width:100%;
        padding:10px;
        border-radius:10px;
        border:none;
        outline:none;
        background-color:#d3d3d3;
    }
`



const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
  };

const mapDispatchToProps = (dispatch) => ({
    postArticles: (payload) => dispatch(postArticlesAPI(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(PostModal)