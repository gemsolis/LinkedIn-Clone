import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'


import user from '../../assets/user.svg'
import CardBg from '../../assets/cover-photo.png'
import WidgetIcon from '../../assets/widget-icon.svg'
import ItemIcon from '../../assets/item-icon.svg'
import PlusIcon from '../../assets/plus-icon.svg'


const LeftSide = (props) => {
  return (
    <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground style={{background: `url(${CardBg})`,}} />
                <Photo>
                <a>
                {
                props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src={user} alt="" />)
                            }
                </a>
                </Photo>

                <Link>
                Welcome, {props.user ? props.user.displayName : "there"}! 
                </Link>

                <AddPhotoText>Add a Photo</AddPhotoText>


            </UserInfo>
            <Widget>
                <a>
                    <div>
                    <span>Connections</span>
                    <span>Grow your network</span>
                    </div>
                    <img src={WidgetIcon} alt=""/>
                </a>
            </Widget>
            <Item>
                <span>
                    <img src={ItemIcon} alt="" />
                    My Items
                </span>
            </Item>
        </ArtCard>

        <CommunityCard>
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>
                    Events
                    <img src={PlusIcon} alt="" />
                </span>
            </a>
            <a>
                <span>Follow Hashtags</span>
            </a>
            <a>
                <span>Discover more</span>
            </a>
        </CommunityCard>

    </Container>
  )
}


const Container = styled.div`
    grid-area: leftside;
`

const ArtCard = styled.div`
    text-align: center;
    overflow:hidden;
    margin-bottom:8px;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
    border:none;
    box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
`

const UserInfo = styled.div`
    border-bottom:1px solid rgba(0, 0, 0, 0.09);
    
`

const CardBackground = styled.div`
    background-position:center;
    background-size: contain;
    background-repeat: no-repeat;
    height:100px;
`

const Photo = styled.div`
    width:75px;
    height:75px;
    border:3px solid #fff;
    border-radius: 50%;
    margin:-38px auto 12px;
    cursor:pointer;

    img{
        width:100%;
        border-radius: 50%;
    }


`
const Link = styled.div`
    font-size:18px;
    line-height: 1.5;
    font-weight: 700;

`
const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-bottom:20px;
    font-weight:700;

`

const Widget = styled.div`
    border-bottom:1px solid rgba(0, 0, 0, 0.09);
    padding:20px;
    cursor: pointer;
    
 

    a{
        text-decoration:none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    :hover{
        background-color: #d3d3d3;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span{
            font-size:1rem;
            line-height:1.5;

        }
    }

    img{
        width:25px;
    }


`

const Item = styled.div`
    padding:15px;
    font-size:1rem;
    display:block;
    text-align:left;
    cursor: pointer;
    border-bottom:1px solid rgba(0, 0, 0, 0.09);

    span{
        display:flex;
        align-items: center;

        img{
            width:20px;
            margin-right:10px;
        }

    }

    :hover{
        background-color: #d3d3d3;
    }
`

const CommunityCard = styled(ArtCard)`
    text-align:left;
    display:flex;
    flex-direction:column;
    font-size:1rem;
    cursor:pointer;
    padding-top:10px;



    a{
        color:#000;
        padding: 12px 20px;

        :hover{
            color:#0a66c2;
        }

        &:last-child {
        border-top:1px solid rgba(0,0,0,0.09);
        padding:12px 20px;

        :hover{
            background-color:#d3d3d3;
            color:#000;

        }
    }

    }

    span{
        display:flex;
        align-items:center;
        justify-content:space-between;


    }


`


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(LeftSide);