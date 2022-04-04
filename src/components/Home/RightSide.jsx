import React from 'react'
import styled from 'styled-components'

import FeedIcon from '../../assets/feed-icon.svg'
import HashtagAvatar from '../../assets/hashtag.png'
import RightIcon from '../../assets/right-icon.svg'
import BannerAd from '../../assets/banner-ads.png'

const RightSide = () => {
  return (
    <Container>
        <FollowCard>
          <Title>
            <h3>Add to your Feed</h3>
            <img src={FeedIcon} alt=""/>
          </Title>
          <FeedList>
            <li>
              <a>
                <Avatar style={{
                  
                  background: `url(${HashtagAvatar})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}/>
              </a>
              <div>
                <span>#LinkedIn</span>
                <button>Follow</button>
              </div>
            </li>
            <li>
              <a>
              <Avatar style={{
                  
                  background: `url(${HashtagAvatar})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}/>
              </a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </li>
          </FeedList>
          <Recommendation>
            <span>View all recommendations</span>
            <img src={RightIcon} alt="" />
          </Recommendation>

        </FollowCard>
        <Banner>
          <img src={BannerAd} alt=""/>
        </Banner>
        <Footer>
          <h3>Coded by Gem Solis with 🌧</h3>
          <h4>Powered by:</h4>
          <span>React</span>
          <span>Firebase</span>
          <span>Redux</span>

        </Footer>          
    </Container>
  )
}


const Container = styled.div`
    grid-area: rightside;
    

`

const FollowCard = styled.div`
    text-align:center;
    background-color: #fff;
    padding:20px;
    border-radius: 5px;
    box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 6px 11px 0px rgba(0,0,0,0.1);
`

const Title = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:1rem;

  img{
    width:20px;
  }
`

const FeedList = styled.ul`
  margin-top:16px;
  font-size: 1rem;

  li{
    display:flex;
    align-items: center;
    margin:12px;

    div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button{
      border: 1px solid #000;
      padding: 5px 20px;
      margin:10px 0;
      border-radius: 20px;
      font-size:1rem;
      background-color: transparent;
      cursor: pointer;
      transition:0.5s all ease;

      :hover{
        background-color: #d3d3d3;

      }
    }
    }
  }


`

const Avatar = styled.div`
  width:24px;
  height:40px;
  padding:30px;
  margin-right:20px;
  border:1px solid rgba(0,0,0,0.45);
  border-radius: 50%;

`


const Recommendation = styled.div`
  color:#0a66c2;
  display:flex;
  align-items: center;
  justify-content: space-between;
  font-size:14px;
  padding-top:10px;

`

const Banner = styled(FollowCard)`
  overflow:hidden;
  margin-top:10px;

  img{
    object-fit:cover;
  }
`

const Footer = styled(FollowCard)`
  margin-top:10px;
  padding:50px 0;

  h3, h4{
    font-size:1.2rem;
    margin-bottom:20px;
  }

  span{
    margin:15px 5px;
    background-color:#0a66c2;
    padding:5px 15px;
    color: #fff;;
    font-size:1.1rem;
    font-weight:800;
    border-radius:20px;

  }


`

export default RightSide