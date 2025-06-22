import React from 'react'
import  '../Styles/LandingPage.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';

class LandingPage extends React.Component{
    
    constructor()
    {
         super();

    }

    render(){
        return(
            <div className="landing-body">
                <p className="hv1">Fast</p><text className="food">Food  </text>
                <span className="deliv">Delivery</span>
                <Box component="section" className="orderbox" >Best in town!</Box>
                <IconButton className="play-button" color="black" ><PlayArrow /></IconButton>
                  <img 
                         src="/assets/lndimg1.png"
                         alt="brand image" 
                         className="framed-img"
                  />

                    <img 
                         src="/assets/star.jpg"
                         alt="Framed Example" 
                         className="star-rating"
                    
                  />
                 <p className="tagline"> Delicious food, delivered fresh. </p>
                 <span className="rating">5 star rating</span>
                <span className="story-header">Our Story</span>
                <p className="story-body" >Launched in a small kitchen in 2019, the online food store started with homemade meals and local deliveries.
                  Word-of-mouth and social media fueled rapid growth, attracting loyal customers seeking convenience and quality. 
                  <br/><br/>By 2021, a user-friendly app and expanded menu helped scale operations. Partnering with local farms ensured 
                  fresh ingredients and sustainability. Amid the pandemic, demand surged, pushing the brand to optimize logistics
                 and hire more staff. Today, the store serves thousands daily across multiple cities, offering ready-to-eat meals 
                 and grocery essentials. Driven by passion, tech, and community trust, it transformed from a side hustle into a 
                 thriving food-tech brand.</p>

                    <span className="watch-here">Watch here!</span>
            </div>
        );
    }

}

export default LandingPage;