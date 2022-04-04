import React from 'react'
import loginLogo from '../../assets/login-logo.svg'
import loginHero from '../../assets/login-hero.svg'
import google from '../../assets/google.svg'
import styled from 'styled-components';

import {connect} from 'react-redux';
import { signInAPI } from '../../actions';
import { Navigate } from 'react-router';

const Login = (props) => {
  return (
    <div>
        <Container>
            {props.user && <Navigate to ='/home' />}
            <Nav>
                <a href="/">
                    <img src={loginLogo} alt="Linked In" className="nav-logo" />
                </a>
                <div>
                    <Join onClick={() => props.signIn()}>Join Now</Join>
                    <SignIn onClick={() => props.signIn()}>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <div>
                    <h1>Welcome to your professional community.</h1>
                    <Form>
                   <Google onClick={() => props.signIn()}>
                       <img src={google} alt="Sign In with Google" />
                       Sign In with Google
                   </Google>
               </Form>
                    </div>
                    <img src={loginHero} alt="Linked In Community"/>
                </Hero>

            </Section>
        </Container>
    </div>
  )
}

const Container = styled.div`
    padding:0px;

`

const Nav = styled.nav`
    padding:20px 30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap: nowrap;

    @media(max-width:568px) {
            padding: 15px;
        }
    
    & > a{
        width:135px;
        height:34px;

        @media(max-width:568px) {
            width:100px;
        }
    }

`

const Join = styled.a`
    font-size:16px;
    padding:10px 15px;
    color: #000;
    margin-right:10px;
    cursor:pointer;
    transition:0.5s all ease;

    &:hover{
        background-color: #383838;
        color:#fff;
        border-radius:20px;
    }


    @media(max-width:568px) {
            font-size:12px;
        }

`


const SignIn = styled.a`
    font-size:16px;
    font-weight:600;
    padding:10px 15px;
    border: 1px solid #243c96;
    border-radius:10px;
    color: #243c96;
    cursor:pointer;
    transition:0.5s all ease;

    &:hover{
        background-color: #243c96;
        color:#fff;
        border-radius:20px;
    }

    @media(max-width:568px) {
            font-size:12px;
        }

`

const Section = styled.section`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    min-height:65vh;
    padding:30px 20px;
    flex-wrap: wrap;



`

const Hero = styled.section`
    display:flex;
    align-items: center;
    justify-content: space-around;
    width:100%;

    & > div {

        @media(max-width:1000px) {
        display:flex;
        flex-direction: column;
        align-items: center;
        }
    } 

    &  > div > h1 {
    font-size:3rem;
    color:#243c96;
    font-weight: 200;
    margin:10px;



    @media(max-width:820px) {
        text-align:center;
        }


        @media(max-width:812px) {
            font-size: 2rem;
        }
    }


    @media(max-width:920px) {
            flex-direction: column;
        }

    & > img {
        width:100%;
        max-width:600px;
    }

`

const Form = styled.div`
    margin:20px;
`

const Google = styled.button`
    display:flex;
    align-items: center;
    margin:20px 0;
    font-size:1rem;
    font-weight: 700;
    color:#243c96;
    border: 1px solid #243c96;
    padding: 10px 20px;
    border-radius: 20px;
    cursor:pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #243c95;
        color:#fff;
    }


    img {
        margin-right:10px;
    }
`

const mapStateToProps = (state) =>{
    return {
        user:state.userState.user,
    };
};



const mapDispatchToProps = (dispatch) => ({
    signIn:() => dispatch(signInAPI()),
});



export default connect (mapStateToProps, mapDispatchToProps)(Login);

