import { useParams, useNavigate, useLocation } from 'react-router-dom'
import './pdetail.css'

export function ProjectDetail () {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { name, id, description, title } = state

  const projectImages = {
    1: '/src/img/mcdo.png',
    2: '/src/img/bites.png',
    3: '/src/img/icestudy.png',
    4: '/src/img/mcdo.png',
    5: '/src/img/nexus.png',
    6: '/src/img/taste.png'

  }

  return (
    <>
      <div className='absolute top-20 right-0 mt-0 mr-0' style={{ width: '25%' }}>
        <img src='/src/img/minirect.png ' alt='Imagen PNG' />
      </div>
      <div className='absolute top-60 right-0 mr-0 mt-20' style={{ width: '25%' }}>
        <img src='/src/img/1blueelip.png' alt='Imagen PNG' />
      </div>
      <div className='max-w-md ml-20 mt-4'>
        <img src='/src/img/projtitle.png ' alt='Imagen PNG' style={{ width: '100%' }} />
      </div>

      <div className='relative flex justify-between items-end'>
        {/* Contenedor del texto */}
        <div className='w-1/2 pl-8'>
          <div className='left-align'>
            <p id='ptitle' className='text-5xl  mb-60 '>
              {name}
            </p>
            {id === 1
              ? (
                <p id='paragraph1' className='text-lg mb-8'>
                  {description.split('\n\n')[0]}
                </p>
                )
              : (
                <p id='description' className='text-lg mb-4'>
                  {description}
                </p>
                )}
          </div>
        </div>

        {/* Contenedor de la imagen */}
        <div className='w-1/2'>
          <div className='img-container mb-60'>
            <img src={projectImages[id]} alt={`imagen de ${title}`} style={{ width: '80%' }} />
          </div>
        </div>
      </div>
      <a onClick={() => navigate('/projects')} className='block text-blue-500 mt-4 cursor-pointer'>
        Go back
      </a>
    </>
  )
}
