import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='Home'id='Home'>
        <main>
        <h1>CodeStar</h1>
        <p>give thomsup to our website</p>
        </main>
    </div>
<div className="Home2" >
    <img src="https://media.istockphoto.com/id/1154936720/vector/protect-diploma-online-distance-education-vector.jpg?s=170667a&w=0&k=20&c=C3yfKw7Ceb-jy9MZxhE5pvIsUoWevcjsPQlyv_Y9POg=" alt="" />
    <div>
        <p>Again welcome to our website and give some feedback in bottom form of website 
Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi!

        </p>
    </div>
</div>

<div className="Home3" id='About'>
    <div>    <h1>Support our team</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor itaque
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deserunt voluptas!
         Excepturi saepe deleniti cum eum, quos eveniet necessitatibus deserunt eius, quas voluptatibus in. voluptas hic incidunt rerum.</p>
</div>
</div>
<div className="Home4" id='Brand'>
    <div className='hm-ch'>
        <h1>Brand</h1>
        <article>
            <div style={
                {animationDelay:'0.3s',}
            }>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={
                {animationDelay:'0.7s',}
            }>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={
                {animationDelay:'0.9s',}
            }>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>

            <div style={
                {animationDelay:'1s',}
            }>
                <AiFillYoutube/>
                <p>YouTube</p>
            </div>
        </article>
    </div>
</div>
    </>
  )
}

export default Home;