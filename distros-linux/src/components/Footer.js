import '../css/Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <ul className="footer-items">
        <li>&copy; 2023</li>
        <li>
          <a 
            href="a"
            target="_blank"
            rel="noreferrer"
          >
          <i className="bi bi-file-earmark-text-fill"> About Us</i>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Michel-Rooney/Frontend/tree/main/distros-linux"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"> GitHub</i>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/michel-rooney-aabb63234/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"> Linkedin</i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer