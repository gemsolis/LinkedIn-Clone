import React from 'react'
import styled from 'styled-components'

import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'
import {Navigate} from 'react-router-dom'
import {connect} from 'react-redux'

const Homepage = (props) => {
  return (
    <div>
        <Container>
            {!props.user && <Navigate to='/' />}
            <Section>
            <h4><a>Hiring in a hurry? - </a></h4>
            <p>Find talented pros in record time with Upwork and keep business moving.</p>
            </Section>

            <Layout>
                <div><LeftSide /></div>
                <div><Main/></div>
                <div><RightSide/></div>
            </Layout>

        </Container>
    </div>
  )
}

const Container = styled.div`
    width:100%;
    padding: 80px 20px;
`

const Section = styled.div`
    padding:20px 0;
    text-align: center;
    text-decoration: underline;
    display:flex;
    justify-content: center;

    h4{
        color:#0a66c2;
        font-size:20pz;
        margin-right:10px;
    }

    a{
        font-weight:700;
        cursor:pointer;
    }

    p{
        font-size:15px;
        color:#434639;

    }

    @media (max-width:768px){
        flex-direction:column;
        padding: 5px;

        p{
            padding:10px;
        }
    }
`

const Layout =  styled.div`
    display:grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: 1fr 2fr 1fr;
    column-gap:20px;
    row-gap:20px;
    grid-template-rows:auto;
    margin:20px 0;

    @media (max-width: 768px){
        display:flex;
        flex-direction: column;
    }

`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Homepage)