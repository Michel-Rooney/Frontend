import '../css/HomePage.css'

function HomePage () {
  return (
    <main className="main">
      <div className="Home-wallpaper">
        <div className='Home-box'>
          <h1 className='Home-title'>Distros Linux</h1>
          <p className='Home-description'>Explore, aprenda e conecte-se com o emocionante universo das distribuições Linux. Nosso site é o seu guia definitivo para todas as coisas relacionadas ao Linux. Desde as distribuições mais populares até dicas para iniciantes e especialistas, estamos aqui para compartilhar conhecimento, inspirar e ajudá-lo a se tornar parte desta incrível comunidade de código aberto. Comece sua jornada agora!</p>
        </div>
      </div>
      <div className='Home-middle-content'>
        <ul className='Home-middle-content-items'>
          <li>
            <img src='/img/home-page.png' alt='Página de Notícias do Site' />
            <h3>Fique por dentro das notícias</h3>
          </li>
          <li>
            <img src='/img/distros-linux-page.png' alt='Página de Distros do Site' />
            <h3>Saiba tudo sobre as distros</h3>
          </li>
          <li>
            <img src='/img/register-page.png' alt='Página de Registro do Site' />
            <h3>Cadastre-se para conteúdos exclusivos</h3>
          </li>
        </ul>
      </div>
      {/* <div className='Home-below-content'>
        <h2 className='Home-below-content-title'>Patrocinadores</h2>
        <ul className='Home-below-content-items'>
          <li>
            <img src='/img/logo_brands/aws.png' alt='AWS Logo' />
          </li>
          <li>
            <img src='/img/logo_brands/duckduckgo.png' alt='DuckDuckGo Logo' />
          </li>
          <li>
            <img src='/img/logo_brands/azure.png' alt='Azure Logo' />
          </li>
          <li>
            <img src='/img/logo_brands/google-cloud.png' alt='Google Cloud Logo' />
          </li>
          <li>
            <img src='/img/logo_brands/apple.png' alt='Apple Logo' />
          </li>          
          <li>
            <img src='/img/logo_brands/yahoo.png' alt='Yahoo Logo' />
          </li>
        </ul>
      </div> */}
    </main>
  )
}

export default HomePage