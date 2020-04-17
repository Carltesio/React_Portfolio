import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <div className="ui main container">
        <img className="ui background image" src="/src/pic/bergen.jpg" ></img>
        <h1 className="ui header" >About Me</h1>
        <Grid>
          <Grid.Column width={4}>
            <p>
              Thanks for visiting my Portfolio webpage. <br></br>

                My life journey has been enriched by the mix of different cultures, from Italy to the US, South America to China and currently Sweden.<br></br>
                I started my career as a Technician in a Design Studio developing Wearable Technologies right after two years of Mechanical Engineering.<br></br>
                Today I am fully commited to become a Fullstack developer to concentrate my whole life experience into digital products.<br></br>
                I am a life lover, I love to exercise outdoors,travel and understand how the "other" thinks.
              </p>
          </Grid.Column>
          <Grid.Column floated = 'right' width={3}>
          <img src="/src/pic/carlos-erik.jpeg" ></img>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default About;

// const GridExampleColumnWidth = () => (
//   <Grid>
//     <Grid.Column width={4}>
//       <Image src='/images/wireframe/image.png' />
//     </Grid.Column>
//     <Grid.Column width={9}>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//     <Grid.Column width={3}>
//       <Image src='/images/wireframe/media-paragraph.png' />
//     </Grid.Column>
//   </Grid>
// )

// export default GridExampleColumnWidth