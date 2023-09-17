import '../css/Distros.css'

function HomePage () {
  return (
    <main className="main">
      <div className="centralize-row">
        <h1 className="title">Distros Linux</h1>
      </div>
      <div className="container">
        <div className="box">
          <img 
            src="/img/ubuntu-gnome-workspace.jpg"
            alt="Ubuntu Logo"
            className="logo"
          />
          <div className="text">
            <h2 className="text-title">
              <a href="a">Ubuntu</a>
            </h2>
            <p className="description">
              &emsp; &ensp;
              Ubuntu é uma antiga palavra africana que significa “humanidade para os outros”. Muitas vezes é descrito como um lembrete de que “sou o que sou por causa de quem todos nós somos”. Trazemos o espírito do Ubuntu para o mundo dos computadores e software. A distribuição Ubuntu representa o que de melhor a comunidade mundial de software compartilhou com o mundo.
            </p>
          </div>
        </div>
        <div className="box box-reverse">
          <div className="text">
            <h2 className="text-title">
              <a href="a">Linux Mint</a>
            </h2>
            <p className="description">
              &emsp; &ensp;
              Linux Mint é uma distribuição Linux para desktop altamente popular, servindo milhões de usuários como uma alternativa atraente ao Windows e MacOS. Sua missão principal é criar um sistema operacional moderno, fácil de usar e poderoso. Linux Mint se destaca por sua funcionalidade perfeita, suporte multimídia robusto, natureza de código aberto e envolvimento ativo da comunidade.
            </p>
          </div>
          <img 
            src="/img/linux-mint-cinnamon-workspace.png"
            alt="Linux Mint Logo"
            className="logo"
          />
        </div>
        <div className="box">
          <img 
            src="/img/fedora-kde-workspace.jpg"
            alt="Fedora Logo"
            className="logo"
          />
          <div className="text">
            <h2 className="text-title">
              <a href="a">Fedora</a>
            </h2>
            <p className="description">
              &emsp; &ensp;
              O Fedora é uma distribuição Linux líder para desktop, conhecida por sua modernidade e usabilidade. Ele oferece uma experiência pronta para uso com forte suporte multimídia, ao mesmo tempo em que segue os princípios de código aberto. Como um projeto conduzido pela comunidade, incentiva a contribuição do usuário para melhoria contínua.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage