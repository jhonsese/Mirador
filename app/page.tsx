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
  Instagram,
  Facebook,
  Quote,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function MiradorDynamicLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedLocation, setSelectedLocation] = useState("mirador")
  const [showReservationDialog, setShowReservationDialog] = useState(false)
  const [reservationStep, setReservationStep] = useState(1)
  const [reservationData, setReservationData] = useState({
    experienceType: "",
    date: "",
    location: "",
    suite: "",
  })

  const videoRef = useRef<HTMLVideoElement>(null)

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

  const heroSlides = [
    {
      video: "/videos/chimenea-v.mp4",
      title: "Chimenea",
      subtitle: "Calidez y Romance",
      description: "Déjate envolver por el calor de las llamas en un ambiente íntimo y acogedor",
    },
    {
      video: "/videos/Rosas.mp4",
      title: "Rosas",
      subtitle: "Jardín del Amor",
      description: "Un mar de pétalos y aromas que despiertan los sentidos más románticos",
    },
    {
      video: "/videos/Cabaña.mp4",
      title: "Cabaña",
      subtitle: "Refugio Natural",
      description: "Escapa a la naturaleza en un espacio rústico lleno de encanto",
    },
    {
      video: "/videos/Cielo.mp4",
      title: "Cielo",
      subtitle: "Entre las Estrellas",
      description: "Una experiencia celestial donde tus sueños tocan las nubes",
    },
    {
      video: "/videos/Antartida.mp4",
      title: "Antártida",
      subtitle: "Magia Polar",
      description: "Sumérgete en un mundo de hielo y auroras que iluminan tu amor",
    },
  ]

  const locations = {
    mirador: {
      name: "Mirador del Bosque",
      description: "5 habitaciones temáticas únicas en San Antonio de Prado",
      icon: <Mountain className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      rooms: [
        {
          id: 1,
          name: "Plan 1 - Chimenea",
          theme: "Calidez Romántica",
          location: "Mirador del Bosque",
          description:
            "El calor de una chimenea real abraza tu amor mientras las llamas danzan creando sombras románticas en cada rincón.",
          icon: <Flame className="w-8 h-8 text-orange-500" />,
          image: "/img/chimenea.jpg",
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
          image: "/img/rosas.jpg",
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
          image: "/img/cabaña.jpg",
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
          image: "/img/cielo.jpg",
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
          image: "/img/antartida.jpg",
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
      color: "from-green-500 to-emerald-500",
      rooms: [
        {
          id: 6,
          name: "Chalet Margarita",
          theme: "Refugio Alpino",
          location: "Zona Rural",
          description:
            "Un chalet acogedor inspirado en los alpes, perfecto para parejas que buscan privacidad total en medio de la naturaleza.",
          icon: <Flower2 className="w-8 h-8 text-yellow-400" />,
          image: "/img/chalet.jpg",
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
      color: "from-lime-500 to-green-500",
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

  const testimonials = [
    {
      name: "María & Carlos",
      location: "Medellín",
      text: "¡Fue la propuesta de matrimonio perfecta! La Suite Antártida superó todas nuestras expectativas. La decoración, la atención y cada detalle nos hicieron sentir en otro mundo. ¡Ella dijo que sí! 💍",
      rating: 5,
      date: "Enero 2025",
      suite: "Suite Antártida",
    },
    {
      name: "Laura & Andrés",
      location: "Envigado",
      text: "Celebramos nuestro aniversario en la Cabaña del Amor y fue simplemente mágico. El ambiente rústico con la vista al bosque nos transportó a un cuento de hadas. Volveremos sin duda ❤️",
      rating: 5,
      date: "Diciembre 2024",
      suite: "Cabaña del Amor",
    },
    {
      name: "Daniela & Sebastián",
      location: "Sabaneta",
      text: "La Suite Rosas fue el escenario perfecto para nuestra cena romántica. Los pétalos, las velas y cada detalle fueron cuidadosamente preparados. Es el lugar ideal para sorprender a tu pareja 🌹",
      rating: 5,
      date: "Noviembre 2024",
      suite: "Suite Rosas",
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

  const getAllRooms = () => {
    return [...locations.mirador.rooms, ...locations.cabanas.rooms, ...locations.finca.rooms]
  }

  const handleReservationSubmit = () => {
    const experienceText = reservationData.experienceType === "dinner" ? "Cena Privada" : "Amanecida Romántica"
    const dateText = reservationData.date || "fecha por confirmar"
    const locationText = reservationData.location || "cualquier ubicación"
    const suiteText = reservationData.suite || "cualquier suite disponible"

    const message = `Hola! Me gustaría hacer una reserva para una *${experienceText}* en *${suiteText}* (${locationText}) para el *${dateText}*. ¿Podrían confirmarme disponibilidad y costos? 😊`

    const whatsappUrl = `https://wa.me/573163519046?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setShowReservationDialog(false)
    setReservationStep(1)
    setReservationData({ experienceType: "", date: "", location: "", suite: "" })
  }

  const handleNextStep = () => {
    if (reservationStep < 4) {
      setReservationStep(reservationStep + 1)
    } else {
      handleReservationSubmit()
    }
  }

  const canProceed = () => {
    if (reservationStep === 1) return reservationData.experienceType !== ""
    if (reservationStep === 2) return true
    if (reservationStep === 3) return reservationData.location !== ""
    if (reservationStep === 4) return reservationData.suite !== ""
    return false
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div
          className="absolute w-4 h-4 bg-red-300/30 rounded-full animate-pulse"
          style={{
            left: mousePosition.x / 50 + "px",
            top: mousePosition.y / 50 + "px",
            transition: "all 0.3s ease",
          }}
        />
        <div
          className="absolute w-2 h-2 bg-pink-400/30 rounded-full animate-bounce"
          style={{
            left: mousePosition.x / 30 + 100 + "px",
            top: mousePosition.y / 30 + 50 + "px",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300 shadow-md">
        <div className="container mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 p-1 bg-gradient-to-br from-red-600 to-pink-500 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-500/40">
              <img
                src="/banner-removebg-preview.jpg"
                alt="Logo Mirador del Bosque"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">Mirador del Bosque</h1>
              <p className="text-xs text-gray-500 font-medium">San Antonio de Prado, Antioquia</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#lugares"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Lugares
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#experiencias"
              className="text-gray-700 font-semibold hover:text-red-600 transition-colors relative group py-2"
            >
              Experiencias
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>

          <Button
            onClick={() => setShowReservationDialog(true)}
            className="group relative bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-xl shadow-red-500/50 transition-all duration-300 hover:scale-[1.03] overflow-hidden border border-red-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
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
        <DialogContent className="sm:max-w-[680px] bg-gradient-to-br from-gray-50 to-white border-red-200 text-gray-800 max-h-[85vh] p-8 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Crea Tu Experiencia Perfecta
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-gray-600">
              Personaliza tu momento mágico en nuestros espacios románticos
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-10 py-4">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-3 mb-10 overflow-x-auto pb-3">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-shrink-0 mt-1">
                  <div
                    className={`w-10 h-10 mx-3 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step <= reservationStep
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white scale-110"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-12 h-1 mx-2 transition-all duration-300 ${
                        step < reservationStep ? "bg-gradient-to-r from-red-500 to-pink-500" : "bg-gray-200"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Qué experiencia deseas vivir?</h3>
                  <p className="text-gray-600">Elige el momento perfecto para tu celebración</p>
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
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-red-400 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <Utensils className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-semibold text-gray-800 mb-1">Cena Privada Romántica</div>
                          <div className="text-sm text-gray-600">
                            Una velada íntima con decoración especial y ambiente único
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-red-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                    </Label>
                  </div>

                  <div className="relative">
                    <RadioGroupItem value="overnight" id="overnight" className="peer sr-only" />
                    <Label
                      htmlFor="overnight"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-pink-400 peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-50 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <Moon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-semibold text-gray-800 mb-1">Amanecida Romántica</div>
                          <div className="text-sm text-gray-600">
                            Pernocta en tu suite favorita y despierta en un mundo mágico
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-pink-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {reservationStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Tienes una fecha en mente?</h3>
                  <p className="text-gray-600">Puedes elegir ahora o decidirlo después</p>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                    <input
                      type="date"
                      value={reservationData.date}
                      onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-800 focus:border-red-400 focus:outline-none transition-all"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500">
                    Si no estás seguro de la fecha, no te preocupes. Puedes dejarlo en blanco y coordinarlo después por
                    WhatsApp
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Location Selection */}
            {reservationStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Qué lugar prefieres?</h3>
                  <p className="text-gray-600">Cada ubicación ofrece una experiencia única</p>
                </div>
                <RadioGroup
                  value={reservationData.location}
                  onValueChange={(value) => setReservationData({ ...reservationData, location: value })}
                  className="grid gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem value="Mirador del Bosque" id="mirador" className="peer sr-only" />
                    <Label
                      htmlFor="mirador"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-red-400 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${locations.mirador.color} rounded-full flex items-center justify-center`}
                        >
                          {locations.mirador.icon}
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-xl font-semibold text-gray-800 mb-1">{locations.mirador.name}</div>
                          <div className="text-sm text-gray-600">{locations.mirador.description}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-red-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity flex-shrink-0" />
                    </Label>
                  </div>

                  <div className="relative">
                    <RadioGroupItem value="Zona Rural" id="cabanas" className="peer sr-only" />
                    <Label
                      htmlFor="cabanas"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-green-400 peer-data-[state=checked]:border-green-500 peer-data-[state=checked]:bg-green-50 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${locations.cabanas.color} rounded-full flex items-center justify-center`}
                        >
                          {locations.cabanas.icon}
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-xl font-semibold text-gray-800 mb-1">{locations.cabanas.name}</div>
                          <div className="text-sm text-gray-600">{locations.cabanas.description}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-green-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity flex-shrink-0" />
                    </Label>
                  </div>

                  <div className="relative">
                    <RadioGroupItem value="Finca" id="finca" className="peer sr-only" />
                    <Label
                      htmlFor="finca"
                      className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-lime-400 peer-data-[state=checked]:border-lime-500 peer-data-[state=checked]:bg-lime-50 peer-data-[state=checked]:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${locations.finca.color} rounded-full flex items-center justify-center`}
                        >
                          {locations.finca.icon}
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-xl font-semibold text-gray-800 mb-1">{locations.finca.name}</div>
                          <div className="text-sm text-gray-600">{locations.finca.description}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-lime-500 opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity flex-shrink-0" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 4: Suite Selection */}
            {reservationStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Cuál espacio te enamora?</h3>
                  <p className="text-gray-600">Cada uno tiene su propia magia especial</p>
                </div>
                <RadioGroup
                  value={reservationData.suite}
                  onValueChange={(value) => setReservationData({ ...reservationData, suite: value })}
                  className="grid gap-3 max-h-96 overflow-y-auto pr-2"
                >
                  {getAllRooms()
                    .filter((room) => {
                      if (!reservationData.location) return true
                      return room.location === reservationData.location
                    })
                    .map((room) => (
                      <div key={room.id} className="relative">
                        <RadioGroupItem value={room.name} id={room.name} className="peer sr-only" />
                        <Label
                          htmlFor={room.name}
                          className="flex items-center p-4 rounded-lg border-2 border-gray-200 bg-white cursor-pointer transition-all hover:border-red-400 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:scale-105"
                        >
                          <div className="flex items-center space-x-4 flex-1">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${room.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                            >
                              {room.icon}
                            </div>
                            <div className="text-left flex-1 min-w-0">
                              <div className="text-lg font-semibold text-gray-800 truncate">{room.name}</div>
                              <div className="text-sm text-gray-600">{room.theme}</div>
                            </div>
                            <div className="text-sm font-medium text-red-600 flex-shrink-0">{room.price}</div>
                          </div>
                        </Label>
                      </div>
                    ))}
                </RadioGroup>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            {reservationStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setReservationStep(reservationStep - 1)}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Atrás
              </Button>
            )}
            <Button
              onClick={handleNextStep}
              disabled={!canProceed()}
              className={`ml-auto bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0 ${
                !canProceed() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {reservationStep === 4 ? (
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

          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />

          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-2xl md:text-3xl mb-6 text-gray-100 font-semibold">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col items-center space-y-4">
                  <Button
                    onClick={() => setShowReservationDialog(true)}
                    size="lg"
                    className="group relative bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-12 py-8 rounded-2xl border-0 shadow-2xl shadow-red-500/50 hover:shadow-red-500/75 transition-all duration-300 hover:scale-110 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center space-x-3">
                      <Sparkles className="w-6 h-6 animate-pulse text-yellow-300" />
                      <span className="text-xl tracking-wider">Reserva Tu Experiencia Mágica</span>
                      <Heart className="w-6 h-6 animate-pulse text-pink-300" />
                    </div>
                  </Button>
                  <p className="text-sm text-gray-200 animate-pulse font-medium">
                    ✨ Personaliza tu momento perfecto en 4 pasos ✨
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
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
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

      {/* Locations Section */}
      <section id="lugares" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12 leading-tight bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Descubre Nuestros Espacios Mágicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres ubicaciones únicas, múltiples experiencias románticas. Cada espacio diseñado para crear momentos
              inolvidables.
            </p>
          </div>
          <Tabs defaultValue="mirador" value={selectedLocation} onValueChange={setSelectedLocation} data-active={selectedLocation} className="w-full group">
            <div className="relative w-full max-w-5xl mx-auto mb-12 group">
              <div className="absolute top-4 left-4 h-[56px] w-[calc((100%-3rem)/3-0.5rem)] rounded-xl transition-all duration-500 ease-out pointer-events-none group-data-[active=mirador]:translate-x-0 group-data-[active=mirador]:bg-gradient-to-r group-data-[active=mirador]:from-red-500 group-data-[active=mirador]:to-pink-500 group-data-[active=cabanas]:translate-x-[calc(100%+1rem)] group-data-[active=cabanas]:bg-gradient-to-r group-data-[active=cabanas]:from-green-500 group-data-[active=cabanas]:to-emerald-500 group-data-[active=finca]:translate-x-[calc(200%+2rem)] group-data-[active=finca]:bg-gradient-to-r group-data-[active=finca]:from-lime-500 group-data-[active=finca]:to-green-500" />
              <TabsList className="relative grid grid-cols-3 gap-4 w-full max-w-5xl mx-auto mb-12 bg-transparent p-4 min-h-[96px] rounded-2xl border-2 border-gray-200 shadow-lg">
              <TabsTrigger
              value="mirador"
              className="relative z-10 w-full flex items-center justify-center py-4 rounded-xl bg-transparent data-[state=active]:bg-transparent text-gray-700 transition-colors duration-300 data-[state=active]:text-white">
              <div className="flex items-center space-x-2">
                  <Mountain className="w-5 h-5" />
                  <span className="hidden sm:inline">Mirador del Bosque</span>
                  <span className="sm:hidden">Mirador</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="cabanas"
                className="relative z-10 w-full flex items-center justify-center py-4 rounded-xl bg-transparent data-[state=active]:bg-transparent text-gray-700 transition-colors duration-300 data-[state=active]:text-white">
                <div className="flex items-center space-x-2">
                  <Trees className="w-5 h-5" />
                  <span className="hidden sm:inline">Cabañas Rurales</span>
                  <span className="sm:hidden">Cabañas</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="finca"
                className="relative z-10 w-full flex items-center justify-center py-4 rounded-xl bg-transparent data-[state=active]:bg-transparent text-gray-700 transition-colors duration-300 data-[state=active]:text-white">
                <div className="flex items-center space-x-2">
                  <Sprout className="w-5 h-5" />
                  <span className="hidden sm:inline">Finca</span>
                  <span className="sm:hidden">Finca</span>
                </div>
              </TabsTrigger>
            </TabsList>
            </div>
            {Object.entries(locations).map(([key, location]) => (
              <TabsContent key={key} value={key} className="mt-0 animate-in fade-in slide-in-from-bottom duration-500">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${location.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      {location.icon}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800">{location.name}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{location.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {location.rooms.map((room) => (
                    <Card
                      key={room.id}
                      className="group bg-white border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
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
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                          {room.icon}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-red-600 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white font-semibold text-sm">{room.price}</span>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-800 group-hover:text-red-600 transition-all duration-300">
                          {room.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-medium">{room.theme}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 leading-relaxed">{room.description}</p>
                        <ul className="space-y-2 mb-6">
                          {room.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-3 group-hover:animate-pulse"></div>
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
                          className={`w-full bg-gradient-to-r ${room.gradient} hover:shadow-lg hover:shadow-red-500/25 border-0 font-semibold transition-all duration-300 text-white`}
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

      {/* Testimonials & Social Proof Section */}
      <section
        id="experiencias"
        className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Historias de Amor Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de parejas han creado momentos inolvidables en nuestros espacios. Lee sus experiencias y déjate
              inspirar para crear la tuya.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-red-500/50">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">2,500+</h3>
              <p className="text-gray-600 font-medium">Parejas Felices</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-pink-500/50">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">4.9/5</h3>
              <p className="text-gray-600 font-medium">Calificación Promedio</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/50">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Volverían a Reservar</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {testimonial.location} • {testimonial.date}
                      </CardDescription>
                    </div>
                    <Quote className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
                  <div className="inline-block bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-red-700">{testimonial.suite}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">¿Listo Para Crear Tu Historia?</h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de parejas que han confiado en nosotros para sus momentos más especiales. Tu historia de
              amor merece un escenario perfecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowReservationDialog(true)}
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Reservar Mi Experiencia
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/573163519046", "_blank")}
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chatear con Nosotros
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white mb-4 font-medium">Síguenos en redes sociales</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://instagram.com/elmiradordelbosque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:text-red-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-6 h-6 text-white group-hover:text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-500 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Mirador del Bosque</h3>
                  <p className="text-sm text-gray-400">San Antonio de Prado, Antioquia</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Creando momentos mágicos y recuerdos inolvidables desde 2020</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#lugares" className="hover:text-white transition-colors">
                    Nuestros Espacios
                  </a>
                </li>
                <li>
                  <a href="#experiencias" className="hover:text-white transition-colors">
                    Experiencias
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>WhatsApp: +57 316 351 9046</li>
                <li>Instagram: @elmiradordelbosque</li>
                <li>San Antonio de Prado, Antioquia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mirador del Bosque. Todos los derechos reservados. Hecho con ❤️ para parejas enamoradas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
