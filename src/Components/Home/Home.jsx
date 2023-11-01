import React from 'react'
import './Home.css'

export function Home () {
  return (
    <div>
      <h1>3levate</h1>
      <h3>About us</h3>
      <p className='welcome'>Welcome! We are a collective of three passionate designers dedicated to turning your
        concepts into creative reality. Explore our portfolio and discover how together we can elevate your
        projects to new horizons.
      </p>
      <h3>We belive...</h3>
      <div className='aboutUs'>
        <h2>Curiosity</h2>
        <div>img1</div>
        <p>That Curiosity is the key to unlocking fresh ideas and pushing the boundaries of design, to explore uncharted territories, to challenge assumptions, and to find innovative solutions to complex problems.</p>
        <h2>Precision</h2>
        <div>img2</div>
        <p>That every pixel, every line of code, and every interaction matters. Precision extends beyond aesthetics—it encompasses the accuracy of our research, the rigor of our testing, and the reliability of our products.</p>
        <h2>Fun</h2>
        <div>img3</div>
        <p>That Fun is the heartbeat of our design studio. We approach our projects with enthusiasm, a sense of playfulness, and a lighthearted spirit. We find delight in solving complex challenges, experimenting with new ideas, and celebrating our successes.</p>
      </div>
      <h3>meet the team</h3>
      <div className='team'>
        <img src='https://github.com/Darksea1220/Im-genes-para-FB/blob/master/ross.png?raw=true' />
        <p>I'm Rossy, a passionate interactive media designer who sees life through the eyes of a curious child.
          With an open mind and a deep love of observation, I find inspiration in the world around me.<br />
          My main focus is UI/UX design and branding. I combine creativity and experience to create immersive interactive media. My goal with my profession is to always evoke emotions and create meaningful connections with my clients.<br />
          I have 3 passions that, combined with design, make me fall in love with life: photography, music and sunsets.
        </p>
        <img src='https://github.com/Darksea1220/Im-genes-para-FB/blob/master/Doug.png?raw=true' />
        <p>I'm Douglas O, a designer of Interactive Media. <br />
          My primary focus is on research and information analysis for UX design.<br />
          I enjoy editing audiovisual content, and I'm an avid gamer—whether it's board games, video games, or sports, I find joy in anything that's fun and regulated for play.
        </p>
        <img src='https://github.com/Darksea1220/Im-genes-para-FB/blob/master/jota.png?raw=true' />
        <p>I'm Jota Barney, and I'm a Designer of Interactive Media and a Marketing and Advertising professional.<br />
          I specialize in creating exceptional digital experiences, particularly through UX research.<br />
          When I'm not immersed in design projects, I enjoy reading romances and participating as a judge in artistic gymnastics. I consider myself passionate about data and empathy, which is why I allow them to guide me in my profession.
        </p>
        <img src='https://github.com/Darksea1220/Im-genes-para-FB/blob/master/juan.png?raw=true' />
        <p>I'm Juan Buesaquillo, Interactive Media Designer, my main focus is UX research and photo editing.<br />
          I'm experienced in digital product creation, user experience and UI design.<br />
          In my free time I like to dedicate it to take care of my physical and mental health, I like to exercise, ride my bike and hang out with old friends. I like to enjoy every day to the fullest and learn something new every day.
        </p>
      </div>
    </div>
  )
}
