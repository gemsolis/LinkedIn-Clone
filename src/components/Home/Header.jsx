import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {signOutAPI} from '../../actions';

import homeLogo from '../../assets/home-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import navHome from '../../assets/nav-home.svg';
import navJobs from '../../assets/nav-jobs.svg';
import navMessaging from '../../assets/nav-messaging.svg';
import navNetwork from '../../assets/nav-network.svg';
import navNotification from '../../assets/nav-notifications.svg';
import navWork from '../../assets/nav-work.svg';
import user from '../../assets/user.svg';
import downIcon from '../../assets/down-icon.svg'


const Header = (props) => {
  return (
    <Container>
        <Content>
            <Logo>
                <a href="/home">
                    <img src={homeLogo} alt="Linked In" />
                </a>
            </Logo>
            <Search>
                    <img src={searchIcon} alt="Search" />
                    <input type="text" placeholder="Search"/>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className="active">
                        <a href="/home">
                        <img src={navHome} alt="Home" />
                        <label>Home</label>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src={navNetwork} alt="Home" />
                        <span>My Network</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src={navJobs} alt="Home" />
                        <span>Jobs</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src={navMessaging} alt="Home" />
                        <span>Messaging</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src={navNotification} alt="Home" />
                        <span>Notifications</span>
                        </a>
                    </NavList>
                    <User>
                        <a>
                            {
                            props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src={user} alt="" />)
                            }
                        <span>
                            Me
                            <img src={downIcon} alt="User" />
                        </span>
                        </a>

                        <SignOut onClick={() =>props.signOut()}>
                            <a>
                            Sign Out
                            </a>
                        </SignOut>

                    </User>
                    <Work>
                        <a>
                        <img src={navWork} alt="Work" />
                        <span>
                            Work
                            <img src={downIcon} alt="Work" />
                        </span>
                        </a>

                    </Work>
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
}

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    background-color: #fff;
    width:100%;
    padding:5px 20px;
    z-index:100;
`;


const Content = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.span`
    margin-right:20px;
`

const Search = styled.div`
    display: flex;
    flex:2;
    justify-self: flex-start;
    max-width:400px;
    width:100%;
    background-color: #eef6f8;
    border-radius: 5px;

    img{
        width:20px;
        margin:10px;
    }

    input{
        width:100%;
        font-size: 1rem;
        background-color: #eef6f8;
        outline:none;
        border:none;
    }
`



const Nav = styled.div`
    display:block;
    margin-left: auto;


    @media (max-width:768px){
    position:fixed;
    display:flex;
    justify-content: space-around;
    overflow-y: hidden;
    overflow-x:auto;
    left:0;
    bottom:0;
    width:100%;
    background-color: #fff;

    ::-webkit-scrollbar {
     width: 0;
}
    }

    @media (max-width:568px){
        justify-content: flex-start;
    }

`

const NavListWrap = styled.ul`
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position:relative;
    margin-left:20px;

    .active::after{
        position:absolute;
        width:100%;
        height:100%;
        content:"";
        color: #000;
        border-bottom:2px solid #000;
        }
    
`


const NavList = styled.li`
    display: flex;
    align-items: center;
    position:relative;

    a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    width: 70px;
    cursor:pointer;
    align-items: center;
    font-size:14px;
    font-weight:400;
    margin:5px;

    }

    @media (max-width:768px){
        
        a{  
            width: 70px;
            font-size:12px;
            margin:5px 0 5px 5px;


        }


    }

    span{
        display: flex;
        align-items: center;
        text-align: center;
        color:rgba (0, 0, 0, 0.6);
        padding-top:5px;

        :hover{
            color:#1166C2;
            }

  
    }
    

`


const SignOut = styled.div` 
    display:none;
    position:absolute;
    top:55px;
    left:0;
    padding:10px;
    background-color: #fff;
    border-radius:5px;
    box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.25);
`


const User = styled(NavList)` 
    a > img {
        border-radius:50%;
        width:25px;
    }

    &:hover{
        ${SignOut} {
            display:flex;
            align-items:center;
            justify-content: center;
            transition:1s all ease;
        }
    }
    
`

const Work = styled(NavList)`
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);