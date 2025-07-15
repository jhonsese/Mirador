"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Mountain,
  Snowflake,
  Flame,
  Home,
  FlowerIcon as Rose,
  Phone,
  Mail,
  MapPin,
  Star,
  Play,
  Pause,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function MiradorDynamicLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }

    setIsPlaying(!isPlaying)
  }
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const heroSlides = [
    {
      video: "/videos/chimenea-v.mp4",
      title: "Chimenea",
      subtitle: "Un mundo de hielo y romance",
      description: "Sumérgete en la magia polar con auroras artificiales y decoración invernal",
    },
    {
      video: "/videos/Rosas.mp4",
      title: "Rosas",
      subtitle: "Refugio rústico en el bosque",
      description: "Vive la experiencia de una cabaña romántica con vista panorámica",
    },
    {
      video: "/videos/Cabaña.mp4",
      title: "Cabaña",
      subtitle: "Refugio rústico en el bosque",
      description: "Vive la experiencia d e una cabaña romántica con vista panorámica",
    },
    {
      video: "/videos/Cielo.mp4",
      title: "Cielo",
      subtitle: "Refugio rústico en el bosque",
      description: "Vive la experiencia de una cabaña romántica con vista panorámica",
    },
    {
      video: "/videos/Antartida.mp4",
      title: "Antartida",
      subtitle: "Entre nubes y estrellas",
      description: "Una experiencia celestial donde el amor toca las nubes",
    },
  ]

  const rooms = [
    {
      id: 1,
      name: "Suite Antártida",
      theme: "Experiencia Polar",
      description:
        "Sumérgete en un mundo de hielo eterno donde las auroras danzan sobre tu amor. Paredes azules como glaciares y decoración invernal crean la atmósfera perfecta.",
      icon: <Snowflake className="w-8 h-8 text-cyan-400" />,
      image: "/antartida-room.png",
      features: [
        "Iluminación aurora boreal",
        "Decoración polar auténtica",
        "Ambiente climatizado",
        "Globos temáticos incluidos",
      ],
      price: "Desde $180.000 COP",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      name: "Suite Cabaña",
      theme: "Refugio del Bosque",
      description:
        "Escápate a una auténtica cabaña de madera con terraza privada y vista al bosque. El lugar perfecto para declaraciones de amor eternas.",
      icon: <Home className="w-8 h-8 text-amber-600" />,
      image: "/cabana-room.jpg",
      features: [
        "Construcción en madera natural",
        "Terraza con vista al bosque",
        "Decoración rústica romántica",
        "Setup personalizado incluido",
      ],
      price: "Desde $200.000 COP",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: 3,
      name: "Suite Cielo",
      theme: "Entre las Nubes",
      description:
        "Vive una experiencia celestial donde el cielo es el límite. Globos, corazones y mensajes luminosos crean momentos mágicos.",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      image: "/cielo-room.jpg",
      features: [
        "Decoración celestial única",
        "Mensajes luminosos personalizados",
        "Globos temáticos",
        "Ambiente de ensueño",
      ],
      price: "Desde $190.000 COP",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      name: "Suite Chimenea",
      theme: "Calidez Romántica",
      description:
        "El calor de una chimenea real abraza tu amor mientras las llamas danzan creando sombras románticas en cada rincón.",
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Chimenea real funcionando",
        "Ambiente cálido y acogedor",
        "Decoración rústica elegante",
        "Área de relajación privada",
      ],
      price: "Desde $210.000 COP",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      name: "Suite Rosas",
      theme: "Jardín del Amor",
      description:
        "Un jardín eterno de rosas donde cada pétalo cuenta una historia de amor. Aromas naturales y belleza floral sin límites.",
      icon: <Rose className="w-8 h-8 text-pink-500" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Decoración floral natural",
        "Pétalos de rosa frescos",
        "Aromas románticos",
        "Jardín privado temático",
      ],
      price: "Desde $195.000 COP",
      gradient: "from-pink-500 to-rose-600",
    },
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, heroSlides.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div
          className="absolute w-4 h-4 bg-white/20 rounded-full animate-pulse"
          style={{
            left: mousePosition.x / 50 + "px",
            top: mousePosition.y / 50 + "px",
            transition: "all 0.3s ease",
          }}
        />
        <div
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
          style={{
            left: mousePosition.x / 30 + 100 + "px",
            top: mousePosition.y / 30 + 50 + "px",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 border-0 rounded-full flex items-center justify-center animate-pulse">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Mirador del Bosque</h1>
              <p className="text-sm text-gray-400">San Antonio de Prado, Antioquia</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#habitaciones" className="text-gray-300 hover:text-white transition-colors">
              Habitaciones
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 border-0">
            Reservar Ahora
          </Button>
        </div>
      </header>

      {/* Dynamic Hero Section */}
      <section id="inicio" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-1000">
        <video
          ref={videoRef}
          key={currentSlide}
          src={heroSlides[currentSlide].video}
          loop
          playsInline
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].color || ""} opacity-80`} />

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-200">{heroSlides[currentSlide].subtitle}</p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300">
                {heroSlides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Hero Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

      {/* Immersive Transition */ }
  <div className="h-20 bg-gradient-to-b from-black to-gray-900"></div>

  {/* About Section with Parallax */ }
  <section className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Donde los Sueños se Vuelven Realidad
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          En San Antonio de Prado, Antioquia, cada habitación es un universo diferente diseñado para crear los
          momentos más románticos de tu vida. Desde la magia polar hasta la calidez de una cabaña, cada espacio
          cuenta una historia única de amor.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Romance Auténtico</h3>
            <p className="text-gray-400">Experiencias diseñadas para crear recuerdos eternos</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <Mountain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Naturaleza Pura</h3>
            <p className="text-gray-400">Rodeado de bosques y paisajes que inspiran</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Experiencias Únicas</h3>
            <p className="text-gray-400">Cada habitación es un mundo completamente diferente</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Rooms Section with Advanced Animations */ }
  <section id="habitaciones" className="py-20 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Nuestras Suites Temáticas
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Cada suite es un mundo diferente, cuidadosamente diseñado para despertar emociones únicas y crear los
          momentos más románticos de tu vida.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <Card
            key={room.id}
            className="group bg-gray-900/50 border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${room.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                {room.icon}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white font-semibold text-sm">{room.price}</span>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {room.name}
              </CardTitle>
              <CardDescription className="text-gray-400 font-medium">{room.theme}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">{room.description}</p>
              <ul className="space-y-2 mb-6">
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full bg-gradient-to-r ${room.gradient} hover:shadow-lg hover:shadow-purple-500/25 border-0 font-semibold transition-all duration-300`}
              >
                Reservar {room.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Contact Section */ }
  <section
    id="contacto"
    className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Reserva Tu Momento Mágico
          </h2>
          <p className="text-xl text-gray-300">
            Contáctanos y vive una experiencia romántica inolvidable en el corazón de Antioquia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-lg">WhatsApp</p>
                  <p className="text-gray-300">+57 (XXX) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <p className="text-gray-300">@elmiradordelbosque</p>
                </div>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-lg">Ubicación</p>
                  <p className="text-gray-300">San Antonio de Prado, Antioquia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Síguenos en Redes</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">@</span>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-white font-bold">W</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Solicitar Información</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300">
                  <option value="" className="bg-gray-800">
                    Selecciona una suite
                  </option>
                  <option value="antartida" className="bg-gray-800">
                    Suite Antártida
                  </option>
                  <option value="cabana" className="bg-gray-800">
                    Suite Cabaña
                  </option>
                  <option value="cielo" className="bg-gray-800">
                    Suite Cielo
                  </option>
                  <option value="chimenea" className="bg-gray-800">
                    Suite Chimenea
                  </option>
                  <option value="rosas" className="bg-gray-800">
                    Suite Rosas
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Mensaje o consulta especial"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-semibold py-3 text-lg border-0 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Enviar Consulta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */ }
  <footer className="bg-black border-t border-gray-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Mountain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">Mirador del Bosque</h3>
            <p className="text-sm text-gray-400">San Antonio de Prado, Antioquia</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">© 2024 Mirador del Bosque. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
    </div >
  )
}
