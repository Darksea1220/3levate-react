import { Link } from 'react-router-dom'
const projects = [
  {
    id: 1,
    description: 'An interactive DOOH experience in which you can interact with a mupi, play and win a McDonald’s combo.This project was developed thinking in an information environment to test the use of arduino, intercommunication through web sockets using express and an attractive design for loyalty and collection of information from new customers.',
    image: 'src/img/mcdo.png',
    name: 'Mcdonalds DOOH'
  },
  {
    id: 2,
    description: 'Bites cookies is a revolutionary brand of cookies for the teenage audience,made to enjoy every bite in an amazing way. A bite worth to remember. Bites cookies introduced a completely new product to the market, a product that become one of the top trends of 2021',
    image: 'src/img/bites.png',
    name: 'Bites Cookies'
  },
  {
    id: 3,
    description: 'Icestudy is a recommendation system developed with Python, based on preferences from more than 80 potential student users. It addresses the friction faced by thousands of university students who encounter issues such as wasting time and effort when specifically looking for a place to study',
    image: 'src/img/icestudy.png',
    name: 'Icestudy'
  },
  {
    id: 4,
    description: 'An interactive DOOH experience in which you can interact with a mupi, play and win a McDonald’s combo.This project was developed thinking in an information environment to test the use of arduino, intercommunication through web sockets using express and an attractive design for loyalty and collection of information from new customers.',
    image: 'src/img/mcdo.png',
    name: 'Mcdonalds DOOH'
  },
  {
    id: 5,
    description: 'Nexus serves the large community of gamers and enables them to explore the ever growing world of video games. From physical and digital copies for all platforms, codes and keys for games, to membership bundles with collectible items from your favorite games, get the most out of this universe with us',
    image: 'src/img/nexus.png',
    name: 'Nexus'
  },

  {
    id: 6,
    description: 'TripTaste is a mobile application that was born as a result of the fusion of the best features offered by Duolingo and didifood. Created for all those interested in learning new lenguages and enjoying new culinary experiences.',
    image: 'src/img/taste.png',
    name: 'TripTaste'
  }
]

export function ProjectsPage () {
  return (
    <div className='bg-[#1C1C1C]'>
      {/* Imagen PNG arriba del proyecto central */}

      <div className='max-w-md ml-20 mt-4'>
        <img src='src/img/projtitle.png ' alt='Imagen PNG' style={{ width: '100%' }} />
      </div>

      <div className='absolute top-0 right-10 mt-0 mr-40 ' style={{ width: '25%' }}>
        <img src='src/img/yellowellipse.png ' alt='Imagen PNG' />
      </div>

      <div className='flex justify-center items-start'>
        {/* Proyecto central */}
        <div className='max-w-md'>
          <h2 className='text-2xl font-bold '>{projects[0].title}</h2>
          <div className='img-container ml-80 mb-80' style={{ width: '200%' }}>
            <Link to={`/projects/project/${projects[0].title}`} state={projects[0]}>
              <img src={projects[0].image} alt='imagen de mcdo' />
            </Link>
          </div>
        </div>

        {/* Lista de proyectos a la derecha */}
        <div className='flex flex-col items-start ml-auto mr-20' style={{ width: '20%' }}>
          {/* Botón de Edit */}
          <div className='mt-4'>
            <Link to='/login' className='text-blue-500'>Edit</Link>
          </div>

          {projects.slice(1).map((project) => (
            <div key={project.id} className='mb-2'>
              <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
              <div className='img-container'>
                <Link to={`/projects/project/${project.title}`} state={project}>
                  <img src={project.image} alt={project.title} className='w-full' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
