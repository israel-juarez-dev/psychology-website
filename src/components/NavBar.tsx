import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import logo from '../assets/images/logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import { navbarMotion, mobileMenuMotion, navItemVariants } from '../animations'

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Inicio' },
    // { id: 'about', label: 'Nosotros' },
    // { id: 'faq', label: 'Preguntas' },
    // { id: 'contact', label: 'Contacto' },
  ]

  const navLinks = navItems.map((item, i) => (
    <motion.button
      key={item.id}
      onClick={() => handleScroll(item.id)}
      className="hover:underline text-left"
      custom={i}
      variants={navItemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }}
    >
      {item.label}
    </motion.button>
  ))

  return (
    <motion.nav
      {...navbarMotion}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between"
    >
      {/* Logo + Título */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <motion.span
          whileHover={{ scale: 1.03 }}
          onClick={() => handleScroll('home')}
          className="cursor-pointer text-2xl font-semibold text-green-600"
        >
          Integralis Psicología
        </motion.span>
      </div>

      {/* Desktop links + Info */}
      <div className="hidden md:flex items-center gap-6 text-green-700 font-medium">
        {/* Info personal */}
        <div className="flex items-center gap-2 border-l pl-4 border-gray-300">
          <span className="text-sm font-semibold">Psic. Juan Perez</span>
          <a
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp logo"
              className="h-5 w-5"
            />
            <span className="text-sm">XXX XXX XXXX</span>
          </a>
        </div>

        {navLinks}

        <motion.div
          custom={navItems.length}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
            Contacto
          </Link>
        </motion.div>
        <motion.div
          custom={navItems.length}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/tests" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
            Tests psicológicos
          </Link>
        </motion.div>
        <motion.div
          custom={navItems.length}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/preguntas-frecuentes" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
            Preguntas
          </Link>
        </motion.div>
        <motion.div
          custom={navItems.length}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
            Blog
          </Link>
        </motion.div>
        <motion.div
          custom={navItems.length}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/nosotros" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
            Nosotros
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.85, rotate: 15 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-green-700 text-xl"
          aria-label="Menú"
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            {...mobileMenuMotion}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-6 py-4 text-green-700 font-medium md:hidden"
          >
            {/* Info personal móvil */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Psic. Juan Perez</span>
              <a
                href="https://wa.me/52XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp logo"
                  className="h-5 w-5"
                />
                <span className="text-sm">XXX XXX XXXX</span>
              </a>
            </div>

            {navLinks}

            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
                Contacto
              </Link>
            </motion.div>
            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/tests" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
                Tests psicológicos
              </Link>
            </motion.div>
            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/preguntas-frecuentes" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
                Preguntas
              </Link>
            </motion.div>
            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/nosotros" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
                Nosotros
              </Link>
            </motion.div>
            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:underline text-left">
                Blog
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar
