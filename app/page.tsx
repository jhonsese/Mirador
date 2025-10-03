"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Mountain,
  Snowflake,
  Flame,
  Home,
  Cross as Rose,
  Phone,
  Mail,
  MapPin,
  Star,
  Play,
  Pause,
  Calendar,
  Utensils,
  Moon,
  MessageCircle,
  Sparkles,
  Trees,
  Flower2,
  Sprout,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function MiradorDynamicLanding() {
  const [selectedLocation, setSelectedLocation] = useState("mirador")
  const [showReservationDialog, setShowReservationDialog] = useState(false)
  const [reservationStep, setReservationStep] = useState(1)
  const [reservationData, setReservationData] = useState({
    experienceType: "",
    date: "",
    suite: "",
  })
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

  const locations = {
    mirador: {
      name: "Mirador del Bosque",
      description: "5 habitaciones temáticas únicas en San Antonio de Prado",
      icon: <Mountain className="w-6 h-6" />,
      color: "from-blue-600 to-purple-600",
      rooms: [
        {
          id: 1,
          name: "Plan 1 - Chimenea",
          theme: "Calidez Romántica",
          location: "Mirador del Bosque",
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
          id: 2,
          name: "Plan 2 - Rosas",
          theme: "Jardín del Amor",
          location: "Mirador del Bosque",
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
        {
          id: 3,
          name: "Plan 3 - Cabaña del Amor",
          theme: "Refugio del Bosque",
          location: "Mirador del Bosque",
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
          id: 4,
          name: "Plan 4 - El Cielo",
          theme: "Entre las Nubes",
          location: "Mirador del Bosque",
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
          id: 5,
          name: "Plan 5 - La Antártida",
          theme: "Experiencia Polar",
          location: "Mirador del Bosque",
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
      ],
    },
    cabanas: {
      name: "Cabañas Zona Rural",
      description: "Escapes románticos en medio de la naturaleza",
      icon: <Trees className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      rooms: [
        {
          id: 6,
          name: "Chalet Margarita",
          theme: "Refugio Alpino",
          location: "Zona Rural",
          description:
            "Un chalet acogedor inspirado en los alpes, perfecto para parejas que buscan privacidad total en medio de la naturaleza.",
          icon: <Flower2 className="w-8 h-8 text-yellow-400" />,
          image: "/placeholder.svg?height=300&width=400",
          features: ["Cabaña independiente", "Vista panorámica al campo", "Cocina equipada", "Fogata exterior"],
          price: "Desde $250.000 COP",
          gradient: "from-yellow-500 to-orange-500",
        },
        {
          id: 7,
          name: "Cabaña Chowa",
          theme: "Esencia Rural",
          location: "Zona Rural",
          description:
            "Conecta con la naturaleza en esta cabaña rústica que combina comodidad moderna con el encanto del campo colombiano.",
          icon: <Home className="w-8 h-8 text-green-500" />,
          image: "/placeholder.svg?height=300&width=400",
          features: ["Arquitectura tradicional", "Hamacas en terraza", "Zona de BBQ privada", "Senderos naturales"],
          price: "Desde $240.000 COP",
          gradient: "from-green-500 to-teal-600",
        },
      ],
    },
    finca: {
      name: "Finca Entre Guayacanes",
      description: "Experiencia campestre completa para parejas",
      icon: <Sprout className="w-6 h-6" />,
      color: "from-lime-600 to-green-600",
      rooms: [
        {
          id: 8,
          name: "Finca Entre Guayacanes",
          theme: "Paraíso Campestre",
          location: "Finca",
          description:
            "Una finca completa para ti y tu pareja. Disfruta de amplios espacios verdes, jardines floridos y la tranquilidad del campo antioqueño.",
          icon: <Sprout className="w-8 h-8 text-lime-500" />,
          image: "/placeholder.svg?height=300&width=400",
          features: [
            "Finca privada completa",
            "Piscina natural",
            "Jardines de guayacanes",
            "Zona de camping opcional",
            "Cocina campestre",
            "Actividades al aire libre",
          ],
          price: "Desde $350.000 COP",
          gradient: "from-lime-500 to-green-600",
        },
      ],
    },
  }


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

  const getAllRooms = () => {
    return [...locations.mirador.rooms, ...locations.cabanas.rooms, ...locations.finca.rooms]
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleReservationSubmit = () => {
    const experienceText = reservationData.experienceType === "dinner" ? "Cena Privada" : "Amanecida Romántica"
    const dateText = reservationData.date || "fecha por confirmar"
    const suiteText = reservationData.suite || "cualquier suite disponible"

    const message = `Hola! Me gustaría hacer una reserva para una *${experienceText}* en la *${suiteText}* para el *${dateText}*. ¿Podrían confirmarme disponibilidad y costos? 😊`

    const whatsappUrl = `https://wa.me/573163519046?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setShowReservationDialog(false)
    setReservationStep(1)
    setReservationData({ experienceType: "", date: "", suite: "" })
  }

  const handleNextStep = () => {
    if (reservationStep < 3) {
      setReservationStep(reservationStep + 1)
    } else {
      handleReservationSubmit()
    }
  }

  const canProceed = () => {
    if (reservationStep === 1) return reservationData.experienceType !== ""
    if (reservationStep === 2) return true // Date is optional
    if (reservationStep === 3) return reservationData.suite !== ""
    return false
  }

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

      {/* Componente Header Mejorado */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300 shadow-md">
        <div className="container mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">

          {/* Logo e Identidad Visual */}
          <div className="flex items-center space-x-4">
            {/* Contenedor del Logo con Animación y Sombra */}
            <div className="w-12 h-12 p-1 bg-gradient-to-br from-red-600 to-pink-500 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-500/40">
              {/* Imagen del Logo (Asegúrate que el fondo de la imagen sea transparente para el mejor efecto) */}
              <img
                src="/banner-removebg-preview.jpg"
                alt="Logo Mirador del Bosque"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Título y Subtítulo */}
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                Mirador del Bosque
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                San Antonio de Prado, Antioquia
              </p>
            </div>
          </div>

          {/* Navegación Principal (Solo en escritorio) */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Inicio
              {/* Indicador de Hover Sutil */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#habitaciones"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Habitaciones
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#contacto"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>

          {/* Botón de Reserva (Más Llamativo) */}
          <Button
            onClick={() => setShowReservationDialog(true)}
            // Clase principal: Estilo moderno, borde y sombra.
            className="group relative bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-xl shadow-red-500/50 transition-all duration-300 hover:scale-[1.03] overflow-hidden border border-red-700"
          >
            {/* 1. Efecto "Brillo" o "Flare" al hacer hover */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"
            />

            {/* 2. Contenido (Texto y Emojis) */}
            <span className="relative z-10 flex items-center space-x-2">
              <span className="text-lg leading-none">✨</span>
              <span>Reservar Ahora</span>
              <span className="text-lg leading-none">💖</span>
            </span>
          </Button>

        </div>
      </header>


      {/* Reservation Dialog */}
      <Dialog open={showReservationDialog} onOpenChange={setShowReservationDialog}>
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900 to-black border-purple-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Crea Tu Experiencia Perfecta
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-lg">
              Personaliza tu momento mágico en el Mirador del Bosque
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-6">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step <= reservationStep
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-110"
                      : "bg-gray-700 text-gray-400"
                      }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-300 ${step < reservationStep ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-gray-700"
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Experience Type */}
            {reservationStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">¿Qué experiencia deseas vivir?</h3>
                  <p className="text-gray-400">Elige el momento perfecto para tu celebración</p>
                </div>
                <RadioGroup
                  value={reservationData.experienceType}
                  onValueChange={(value) => setReservationData({ ...reservationData, experienceType: value })}
                  className="grid gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem value="dinner" id="dinner" className="peer sr-only" />
                    <Label
                      htmlFor="dinner"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-700 cursor-pointer transition-all hover:border-pink-500 peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-500/10 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Utensils className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-semibold text-white mb-1">Cena Privada Romántica</div>
                          <div className="text-sm text-gray-400">
                            Una velada íntima con decoración especial y ambiente único
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-pink-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                    </Label>
                  </div>

                  <div className="relative">
                    <RadioGroupItem value="overnight" id="overnight" className="peer sr-only" />
                    <Label
                      htmlFor="overnight"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-700 cursor-pointer transition-all hover:border-purple-500 peer-data-[state=checked]:border-purple-500 peer-data-[state=checked]:bg-purple-500/10 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <Moon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-semibold text-white mb-1">Amanecida Romántica</div>
                          <div className="text-sm text-gray-400">
                            Pernocta en tu suite favorita y despierta en un mundo mágico
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-purple-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {reservationStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">¿Tienes una fecha en mente?</h3>
                  <p className="text-gray-400">Puedes elegir ahora o decidirlo después</p>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <input
                      type="date"
                      value={reservationData.date}
                      onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500">
                    Si no estás seguro de la fecha, no te preocupes. Puedes dejarlo en blanco y coordinarlo después por
                    WhatsApp
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Suite Selection */}
            {reservationStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">¿Cuál suite te enamora?</h3>
                  <p className="text-gray-400">Cada una tiene su propia magia especial</p>
                </div>
                <RadioGroup
                  value={reservationData.suite}
                  onValueChange={(value) => setReservationData({ ...reservationData, suite: value })}
                  className="grid gap-3 max-h-96 overflow-y-auto pr-2"
                >
                  {rooms.map((room) => (
                    <div key={room.id} className="relative">
                      <RadioGroupItem value={room.name} id={room.name} className="peer sr-only" />
                      <Label
                        htmlFor={room.name}
                        className="flex items-center p-4 rounded-lg border-2 border-gray-700 cursor-pointer transition-all hover:border-purple-500 peer-data-[state=checked]:border-purple-500 peer-data-[state=checked]:bg-purple-500/10 peer-data-[state=checked]:scale-105"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${room.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            {room.icon}
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-lg font-semibold text-white">{room.name}</div>
                            <div className="text-sm text-gray-400">{room.theme}</div>
                          </div>
                          <div className="text-sm font-medium text-purple-400">{room.price}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            {reservationStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setReservationStep(reservationStep - 1)}
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Atrás
              </Button>
            )}
            <Button
              onClick={handleNextStep}
              disabled={!canProceed()}
              className={`ml-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 ${!canProceed() ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {reservationStep === 3 ? (
                <>
                  Enviar a WhatsApp <MessageCircle className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continuar <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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

          <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide] || ""} opacity-80`} />

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

                {/* Beautiful CTA Button */}
                <div className="flex flex-col items-center space-y-4">
                  <Button
                    onClick={() => setShowReservationDialog(true)}
                    size="lg"
                    // CLASES MODIFICADAS: Fondo rojo y ajustes de hover
                    className="group relative bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-12 py-8 rounded-2xl border-0 shadow-2xl shadow-red-500/50 hover:shadow-red-500/75 transition-all duration-300 hover:scale-110 overflow-hidden"
                  >
                    {/* 1. Degradado Blanco Sutil (Aparece al hacer hover) */}
                    <div
                      // CLASES MODIFICADAS: Degradado de blanco transparente
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative flex items-center space-x-3">
                      <Sparkles className="w-6 h-6 animate-pulse text-yellow-300" />
                      <span className="text-xl tracking-wider">
                        Reserva Tu Experiencia Mágica
                      </span>
                      <Heart className="w-6 h-6 animate-pulse text-pink-300" />
                    </div>
                  </Button>
                  <p className="text-sm text-gray-300 animate-pulse">
                    ✨ Personaliza tu momento perfecto en 3 pasos ✨
                  </p>
                </div>
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
        <div className="absolute bottom-8 left-8 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Immersive Transition */}
      <div className="h-20 bg-gradient-to-b from-black to-gray-900"></div>

      {/* Locations Section */}
      <section id="lugares" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Descubre Nuestros Espacios Mágicos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tres ubicaciones únicas, múltiples experiencias románticas. Cada espacio diseñado para crear momentos
              inolvidables.
            </p>
          </div>

          <Tabs defaultValue="mirador" value={selectedLocation} onValueChange={setSelectedLocation} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-4xl mx-auto mb-12 bg-black/50 p-2 rounded-2xl border border-gray-700">
              <TabsTrigger
                value="mirador"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300 py-4"
              >
                <div className="flex items-center space-x-2">
                  <Mountain className="w-5 h-5" />
                  <span className="hidden sm:inline">Mirador del Bosque</span>
                  <span className="sm:hidden">Mirador</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="cabanas"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-xl transition-all duration-300 py-4"
              >
                <div className="flex items-center space-x-2">
                  <Trees className="w-5 h-5" />
                  <span className="hidden sm:inline">Cabañas Rurales</span>
                  <span className="sm:hidden">Cabañas</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="finca"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-lime-600 data-[state=active]:to-green-600 data-[state=active]:text-white rounded-xl transition-all duration-300 py-4"
              >
                <div className="flex items-center space-x-2">
                  <Sprout className="w-5 h-5" />
                  <span className="hidden sm:inline">Finca</span>
                  <span className="sm:hidden">Finca</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {Object.entries(locations).map(([key, location]) => (
              <TabsContent key={key} value={key} className="mt-0 animate-in fade-in slide-in-from-bottom duration-500">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${location.color} rounded-full flex items-center justify-center`}
                    >
                      {location.icon}
                    </div>
                    <h3 className="text-4xl font-bold text-white">{location.name}</h3>
                  </div>
                  <p className="text-lg text-gray-400">{location.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {location.rooms.map((room) => (
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
                          onClick={() => {
                            setReservationData({
                              ...reservationData,
                              suite: room.name,
                              location: room.location,
                            })
                            setShowReservationDialog(true)
                          }}
                          className={`w-full bg-gradient-to-r ${room.gradient} hover:shadow-lg hover:shadow-purple-500/25 border-0 font-semibold transition-all duration-300`}
                        >
                          Reservar {room.name}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
