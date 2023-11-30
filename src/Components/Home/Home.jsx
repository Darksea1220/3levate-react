import React from 'react'
import './Home.css'
import redstar from '../../img/4redstar.png'
import pinkball from '../../img/5pinkcircle.png'
import orangeTriangle from '../../img/6orangetriang.png'
import greenRombo from '../../img/7greenrombo.png'
import bluecircle from '../../img/1blueelip.png'
import arrow from '../../img/3whitearrow.png'
import ross from '../../img/8ross.png'
import rossProject from '../../img/9rossproject.png'
import doug from '../../img/10doug.png'
import dougProject from '../../img/11dougproject.png'
import jota from '../../img/12jota.png'
import jotaProject from '../../img/13jotaproject.png'
import juan from '../../img/14juan.png'
import juanProject from '../../img/15juanproject.png'
import elevatelogo from '../../img/elevatelogo.png'

export function Home () {
  return (
    <div className='w-full flex flex-col bg-[#1C1C1C]'>
      <img src={bluecircle} className='w-[500px] block absolute top-[-350px] left-[45%]' />
      <div className='flex items-center justify mb-8'>
        <img src={elevatelogo} alt='Logo' className='w-627 h-234 mr-2' />
      </div>
      <div className='w-full flex pb-20'>
        <div className='w-1/5 h-[400px] flex items-center'>
          <span className='bg-yellow-500 w-full h-56' />
        </div>
        <div className='w-4/5 flex flex-col'>
          <div className='text-gray-50 text-3xl h-full flex items-center px-12'>_________ About Us</div>
          <div className='w-full text-end text-gray-50 text-3xl px-36'>
            Welcome! We are a collective of <b className='text-yellow-500'>three</b> passionate designers <br />
            dedicated to turning your concepts into creative reality. Explore <br />
            our portfolio and discover how together we can <b className='text-blue-600'>elevate</b> your <br />
            projects to new horizons.
          </div>
        </div>
      </div>
      <div className='w-full flex h-[600px]'>
        <div className='w-full h-full flex pt-20'>
          <div className='w-full h-full flex justify-end'>
            <img src={redstar} className='' />
          </div>
          <div className='w-full h-full text-gray-50 text-3xl flex items-end pb-32'>
            _________ We believe...
          </div>
        </div>
        <div className='w-full h-full flex justify-end px-36'>
          <img src={arrow} className='w-96 h-44' />
        </div>
      </div>
      <div className='w-full flex h-[500px] px-36 flex-col pt-20'>
        <div className='w-full text-gray-50 text-4xl border-b pl-[600px]'>
          That <b>Curiosity</b> is the key to unlocking fresh ideas and <br />
          pushing the boundaries of design, to explore <br />
          uncharted territories, to challenge assumptions, and <br />
          to find innovative solutions to complex problems.<br />
        </div>
        <div className='w-full text-gray-50 text-7xl'>
          Curiosity
        </div>
        <img src={pinkball} className='w-52 block relative bottom-44 left-[350px]' />
      </div>
      <div className='w-full flex h-[500px] px-36 flex-col'>
        <div className='w-full text-gray-50 text-4xl border-b pl-[600px]'>
          That every pixel, every line of code, and every <br />
          interaction matters. <b>Precision</b> extends beyond <br />
          aesthetics—it encompasses the accuracy of our <br />
          research, the rigor of our testing, and the reliability <br />
          of our products.
        </div>
        <div className='w-full text-gray-50 text-7xl'>
          Precision
        </div>
        <img src={orangeTriangle} className='w-52 block relative bottom-44 left-[350px]' />
      </div>
      <div className='w-full flex h-[500px] px-36 flex-col'>
        <div className='w-full text-gray-50 text-4xl border-b pl-[600px]'>
          That <b>Fun</b> is the heartbeat of our design studio. We <br />
          approach our projects with enthusiasm, a sense of <br />
          playfulness, and a lighthearted spirit. We find delight <br />
          in solving complex challenges, experimenting with <br />
          new ideas, and celebrating our successes.
        </div>
        <div className='w-full text-gray-50 text-7xl'>
          Fun
        </div>
        <img src={greenRombo} className='w-52 block relative bottom-44 left-[350px]' />
      </div>
      <p className='w-full h-full text-gray-50 text-3xl flex items-end pl-[20%] pb-32'>_________ Meet the Team</p>
      <div className='w-full flex '>
        <div className='w-1/3 h-full'>
          <img src={ross} />
        </div>
        <div className='w-2/3 flex flex-col h-full gap-16 items-end'>
          <div className='text-4xl text-gray-50 h-full w-full pt-40'>
            I'm Rossy, a <b className='text-blue-600'>passionate interactive media designer</b> <br />
            who sees life through the eyes of a curious child. <br />
            With an open mind and a deep love of observation, <br />
            I find inspiration in the world around me.<br />
            <br />
            My main focus is <b className='text-yellow-500'>UI/UX design and branding</b>. I <br />
            combine creativity and experience to create immersive <br />
            interactive media. My goal with my profession is to <br />
            always evoke emotions and <b className='text-pink-500'>create meaningful  <br />
              connections
            </b> with my clients.<br />
            <br />
            I have 3 passions that, combined with design, make <br />
            me fall in love with life: photography, music and <br />
            sunsets.
          </div>
          <a href='https://www.behance.net/gallery/128425939/Slovenia-Visual-Identity' target='_blank' rel='noopener noreferrer'>
            <img src={rossProject} className='h-28 w-[600px] -mr-14' alt='Ross Project' />
          </a>
        </div>
      </div>
      <div className='w-full flex '>
        <div className='w-1/3 h-full'>
          <img src={doug} />
        </div>
        <div className='w-2/3 flex flex-col h-full gap-16 items-end'>
          <div className='text-4xl text-gray-50 h-full w-full pt-40'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            I'm Douglas O, a <b className='text-pink-500'>designer of Interactive Media</b>. <br />
            <br />
            My primary focus is on <b className='text-yellow-500'>research and information <br />
              analysis for UX design
            </b>. <br />
            <br />
            I enjoy <b className='text-blue-700'>editing audiovisual content</b>, and I'm an <br />
            avid <b className='text-blue-700'>gamer</b>—whether it's board games, video <br />
            games, or sports, I find joy in anything that's fun <br />
            and regulated for play.
          </div>
          <a href='https://www.behance.net/gallery/142133801/House-Watcher-interfaces' target='_blank' rel='noopener noreferrer'>
            <img src={dougProject} className='h-28 w-[600px] -mr-14' alt='Doug Project' />
          </a>
        </div>
      </div>
      <div className='w-full flex '>
        <div className='w-1/3 h-full'>
          <img src={jota} />
        </div>
        <div className='w-2/3 flex flex-col h-full gap-16 items-end'>
          <div className='text-4xl text-gray-50 h-full w-full pt-40'>
            <br />
            <br />
            <br />
            I'm Jota Barney, and I'm a <b className='text-blue-700'>Designer of <br />
              Interactive Media and a Marketing and <br />
              Advertising professional
            </b>. <br />
            <br />
            I specialize in creating exceptional digital <br />
            experiences, particularly through <b className='text-yellow-500'>UX research</b>. <br />
            <br />
            When I'm not immersed in design projects, I <br />
            enjoy reading romances and participating as a <br />
            judge in artistic gymnastics. I consider myself <br />
            passionate about <b className='text-pink-500'>data and empathy</b>, which is <br />
            why I allow them to guide me in my profession.
          </div>
          <a href='https://www.behance.net/gallery/141070369/Friends-Mp3-Player' target='_blank' rel='noopener noreferrer'>
            <img src={jotaProject} className='h-28 w-[600px] -mr-14' alt='Jota Project' />
          </a>
        </div>
      </div>
      <div className='w-full flex pb-60'>
        <div className='w-1/3 h-full'>
          <img src={juan} />
        </div>
        <div className='w-2/3 flex flex-col h-full gap-16 items-end'>
          <div className='text-4xl text-gray-50 h-full w-full pt-40'>
            <br />
            <br />
            <br />
            I'm Juan Buesaquillo, Interactive Media <br />
            Designer, my main focus is UX research and <br />
            photo editing. <br />
            <br />
            I'm experienced in digital product creation, user <br />
            experience and UI design.<br />
            <br />
            In my free time I like to dedicate it to take care <br />
            of my physical and mental health, I like to <br />
            exercise, ride my bike and hang out with old <br />
            friends. I like to enjoy every day to the fullest <br />
            and learn something new every day.<br />
          </div>
          <a href='https://www.behance.net/gallery/142047863/YouIn' target='_blank' rel='noopener noreferrer'>
            <img src={juanProject} className='h-28 w-[600px] -mr-14' alt='Juan Project' />
          </a>
        </div>
      </div>
    </div>
  )
}
