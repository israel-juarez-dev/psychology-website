import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeSection from './components/HomeSection'
import AboutUsSection from './components/AboutUsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Blog from './components/Blog'
import TestList from './components/Tests/TestList'
import VocacionalForm from './components/Tests/VocacionalForm'
import InteligenciasForm from './components/Tests/InteligenciasForm'
import ViolentometroForm from './components/Tests/ViolentometroForm'
import  GaForm from './components/Tests/GaForm'
import DepForm from './components/Tests/DepForm'
import RosenbergForm from './components/Tests/RosenbergForm'
import AvisoDePrivacidad from './components/AvisoDePrivacidad'
import Autoestima from './blogposts/Autoestima'
import Infidelidad from './blogposts/Infidelidad'
import Ansiedad from './blogposts/Ansiedad'
import DueloAmoroso from "./blogposts/DueloAmoroso";
import Depresion from "./blogposts/Depresion";
import SentidoDeVida from "./blogposts/SentidoDeVida";
import RelacionesToxicas from "./blogposts/RelacionesToxicas";
import ComunicacionEnPareja from "./blogposts/ComunicacionEnPareja";
import CelosEInseguridad from "./blogposts/CelosEInseguridad";
import ManejoDelEnojo from "./blogposts/ManejoDelEnojo";
import AceptacionPersonal from "./blogposts/AceptacionPersonal";
import RupturaDespuesDeAnios from "./blogposts/RupturaDespuesDeAnios";
import ComparacionSocial from "./blogposts/ComparacionSocial";
import PsicologiaDelPerdon from "./blogposts/PsicologiaDelPerdon";
import CrianzaYLimites from "./blogposts/CrianzaYLimites";
import MiedoAlAbandono from "./blogposts/MiedoAlAbandono";
import AutoaceptacionAdulta from "./blogposts/AutoaceptacionAdulta";
import VocacionYProfesion from "./blogposts/VocacionYProfesion";
import CambiosPersonales from "./blogposts/CambiosPersonales";
import TraumaEmocional from "./blogposts/TraumaEmocional";
const App = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavBar />

      <main className="flex-1 bg-white text-green-800 overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><HomeSection /></section>
                {/* <section id="about"><AboutUsSection /></section> */}
                {/* <section id="faq"><FAQSection /></section> */}
                {/* <section id="contact"><ContactSection /></section> */}
              </>
            }
          />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/preguntas-frecuentes" element={<FAQSection />} />
          <Route path="/nosotros" element={<AboutUsSection />} />

          <Route path="/tests" element={<TestList />} />
          <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
          {/* Specific test routes */}
          <Route path="/tests/test-vocacional" element={<VocacionalForm />} />
          <Route path="/tests/violentometro" element={<ViolentometroForm />} />
          <Route path="/tests/inteligencias-multiples" element={<InteligenciasForm />} />
          <Route path="/tests/inquietud-emocional" element={<GaForm />} />
          <Route path="/tests/estado-animo" element={<DepForm />} />
          <Route path="/tests/autoestima-rosenberg" element={<RosenbergForm />} />
          
          {/* Fallback route for any other test IDs */}
          <Route path="/tests/:testId" element={<TestList />} />
          <Route path="/blog/infidelidad" element={<Infidelidad />} />
    <Route path="/blog/autoestima" element={<Autoestima />} />
    <Route path="/blog/ansiedad" element={<Ansiedad />} />
    <Route path="/blog/duelo-amoroso" element={<DueloAmoroso />} />
    <Route path="/blog/depresion" element={<Depresion />} />
    <Route path="/blog/relaciones-toxicas" element={<RelacionesToxicas />} />
    <Route path="/blog/sentido-de-vida" element={<SentidoDeVida />} />
    <Route path="/blog/comunicacion-en-pareja" element={<ComunicacionEnPareja />} />
    <Route path="/blog/celos-e-inseguridad" element={<CelosEInseguridad />} />
    <Route path="/blog/manejo-del-enojo" element={<ManejoDelEnojo />} />
    <Route path="/blog/aceptacion-personal" element={<AceptacionPersonal />} />
    <Route path="/blog/ruptura-despues-de-anos" element={<RupturaDespuesDeAnios />} />
    <Route path="/blog/comparacion-social" element={<ComparacionSocial />} />
    <Route path="/blog/psicologia-del-perdon" element={<PsicologiaDelPerdon />} />
    <Route path="/blog/crianza-y-limites" element={<CrianzaYLimites />} />
    <Route path="/blog/autoaceptacion-adulta" element={<AutoaceptacionAdulta />} />
    <Route path="/blog/miedo-al-abandono" element={<MiedoAlAbandono />} />
    <Route path="/blog/vocacion-y-profesion" element={<VocacionYProfesion />} />
    <Route path="/blog/cambios-personales" element={<CambiosPersonales />} />
  <Route path="/blog/trauma-emocional" element={<TraumaEmocional />} /> 
    
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App