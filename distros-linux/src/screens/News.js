import '../css/News.css';

function News () {
  return (
    <main class="main">
      <div class="centralize-row">
        <h1 class="title">News</h1>
      </div>
      <div class="container">
        <div className='News-section-start'>
          <section>
            <img src='/img/news/kde.webp' alt='Random'/>
            <p>KDE Gear 23.08.1 Improves Dolphin, Gwenview, Kdenlive, and Other KDE Apps</p>
          </section>
          <aside>
            <div className='News-aside-box'>
              <img src='/img/news/tuxedo.webp' alt='Random'/>
              <p>TUXEDO Announces Nano Pro Gen12 Mini Linux PC Powered by AMD Ryzen 7000U</p>
            </div>
            <div className='News-aside-box News-box-reverse'>
              <p>HP Linux Imaging and Printing Drivers Now Support Fedora 38 and Ubuntu 23.04</p>
              <img src='/img/news/linux-hp.webp' alt='Random'/>
            </div>
          </aside>
        </div>
        <section className='News-section'>
          <div>
            <img src='/img/news/fedora.webp' alt='Random'/>
            <p>Fedora Linux 39 Beta Released with GNOME 45 and Linux Kernel 6.5</p>
          </div>
          <div>
            <img src='/img/news/fedora2.webp' alt='Random'/>
            <p>Fedora Linux 40 to Offer the KDE Plasma 6 Desktop on Wayland and Drop X11 Session</p>
          </div>
          <div>
            <img src='/img/news/kaos.webp' alt='Random'/>
            <p>KaOS Linux 2023.09 Adds KDE Gear 23.08, Focus To Shift On KDE Plasma 6 ISO</p>
          </div>
          <div>
            <img src='/img/news/gnome.webp' alt='Random'/>
            <p>GNOME 44.5 Arrives with Improvements for GNOME Software, Epiphany, and More</p>
          </div>
          <div>
            <img src='/img/news/gnome2.webp' alt='Random'/>
            <p>GNOME 45 “Riga” Desktop Environment Officially Released, This Is What&apos;s New</p>
          </div>
          <div>
            <img src='/img/news/ubuntu.webp' alt='Random'/>
            <p>Ubuntu 23.10 Beta Released with GNOME 45 and Linux Kernel 6.5</p>
          </div>
          <div>
            <img src='/img/news/ubuntu2.webp' alt='Random'/>
            <p>Ubuntu 23.10 (Mantic Minotaur) Is Now Powered by Linux Kernel 6.5</p>
          </div>
        </section>
        {/* <section className='News-section'>
          <div>
            <img src='http://placehold.it/250x150' alt='Random'/>
            <p>Como a Tecnologia Está Transformando a Maneira como Nos Movemos</p>
          </div>
          <div>
            <img src='http://placehold.it/250x150' alt='Random'/>
            <p>Como a Tecnologia Está Transformando a Maneira como Nos Movemos</p>
          </div>
          <div>
            <img src='http://placehold.it/250x150' alt='Random'/>
            <p>Como a Tecnologia Está Transformando a Maneira como Nos Movemos</p>
          </div>
        </section> */}
      </div>
    </main>
  )
}

export default News