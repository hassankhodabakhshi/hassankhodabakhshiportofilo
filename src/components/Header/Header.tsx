import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/hassankhodabakhshi_Resume.pdf'
//import { NavLink } from 'react-router-dom';
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<iso "}</span>
          <span>{"network/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            صفحه اصلی
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            درباره من
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            پروژه ها
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            ارتباط با من
          </NavHashLink>
          <a href="https://blog.isonetwork.ir" target="_blank" rel="noopener noreferrer"> وبلاگ</a>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="button">
    رزومه من
  </a>

        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
