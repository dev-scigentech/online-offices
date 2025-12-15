"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Sparkles, Code, Building2, Play, Headphones, Coffee, Presentation, ChevronRight } from "lucide-react"

const departments = [
  {
    id: "support",
    title: "Support Office",
    subtitle: "Technical Assistance Hub",
    icon: Headphones,
    color: "from-cyan-400 to-blue-600",
    meetLink: "https://meet.google.com/sce-ptnm-yge",
    description: "Get instant help from our expert support team",
    animation: "support",
  },
  {
    id: "dev",
    title: "Dev Office",
    subtitle: "Innovation Laboratory",
    icon: Code,
    color: "from-purple-400 to-pink-600",
    meetLink: "https://meet.google.com/kgr-cawj-iuh",
    description: "Connect with our development specialists",
    animation: "code",
  },
  {
    id: "monday",
    title: "Monday Meeting",
    subtitle: "Weekly Sync Portal",
    icon: Coffee,
    color: "from-green-400 to-emerald-600",
    meetLink: "https://meet.google.com/fwg-xjwb-csm",
    description: "Join our weekly strategy sessions",
    animation: "meeting",
  },
  {
    id: "friday",
    title: "Friday Meeting",
    subtitle: "Progress Review Chamber",
    icon: Users,
    color: "from-orange-400 to-red-600",
    meetLink: "https://meet.google.com/uvk-nbby-uta",
    description: "Weekly progress and team updates",
    animation: "collaboration",
  },
  {
    id: "praxicon",
    title: "Praxicon Events",
    subtitle: "Experience Theater",
    icon: Sparkles,
    color: "from-yellow-400 to-orange-600",
    meetLink: "https://meet.google.com/hhj-qazh-hzm",
    description: "Immersive event experiences",
    animation: "events",
  },
  {
    id: "conference1",
    title: "Conference Room 1",
    subtitle: "Meeting Space",
    icon: Presentation,
    color: "from-blue-400 to-indigo-600",
    meetLink: "https://meet.google.com/izm-nwoe-myw",
    description: "Professional meeting environment",
    animation: "conference1",
  },
  {
    id: "conference2",
    title: "Conference Room 2",
    subtitle: "Collaboration Space",
    icon: Presentation,
    color: "from-indigo-400 to-purple-600",
    meetLink: "https://meet.google.com/aex-xdwm-ktb",
    description: "Team collaboration environment",
    animation: "conference2",
  },
]

function ParticleField() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      opacity: number
      speed: number
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 3 + 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.speed + 6}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}

function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const codeLines = [
    "// SciGen Development Environment",
    "const innovation = await sciGen.initialize();",
    "",
    "function buildFuture() {",
    "  const solutions = [];",
    "  for (let idea of brainstorm()) {",
    "    solutions.push(idea.implement());",
    "  }",
    "  return solutions.deploy();",
    "}",
    "",
    "innovation.transform(world);",
    "console.log('Ready for collaboration! 🚀');",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : 0))
    }, 800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-slate-900/80 rounded-lg border border-slate-700 p-6 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2 text-slate-400 text-xs">dev-environment.js</span>
        </div>
        <div className="space-y-1">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="text-slate-500 w-8 text-right mr-4">{i + 1}</span>
              <span
                className={
                  line.startsWith("//")
                    ? "text-green-400"
                    : line.includes("const") || line.includes("function")
                      ? "text-purple-400"
                      : line.includes("console.log")
                        ? "text-blue-400"
                        : "text-slate-200"
                }
              >
                {line || " "}
              </span>
            </div>
          ))}
          <div className="flex">
            <span className="text-slate-500 w-8 text-right mr-4">{visibleLines + 1}</span>
            <span className="text-slate-200 animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SupportAnimation() {
  const [activeTickets, setActiveTickets] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTickets((prev) => Math.floor(Math.random() * 5) + 1)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-cyan-400 rounded-full flex items-center justify-center bg-cyan-400/10">
          <Headphones className="w-16 h-16 text-cyan-400" />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
            {activeTickets}
          </div>
        </div>
        <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full animate-ping"></div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-cyan-400">Support Center Active</div>
        <div className="text-slate-400">{activeTickets} tickets in queue</div>
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Expert team standing by</span>
        </div>
      </div>
    </div>
  )
}

function MeetingAnimation() {
  const [participants, setParticipants] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => {
      setParticipants((prev) => Math.floor(Math.random() * 8) + 3)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative">
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-500 ${
                i < participants ? "bg-gradient-to-br from-green-400 to-emerald-600 animate-pulse" : "bg-slate-700"
              }`}
            >
              {i < participants && <Users className="w-8 h-8 text-white" />}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-green-400">Meeting in Progress</div>
        <div className="text-slate-400">{participants} participants connected</div>
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          <span className="ml-2 text-green-400">Syncing ideas...</span>
        </div>
      </div>
    </div>
  )
}

function CollaborationAnimation() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative w-48 h-48">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center"
            style={{
              top: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 5 - Math.PI / 2)}%`,
              left: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 5 - Math.PI / 2)}%`,
              transform: "translate(-50%, -50%)",
              animation: `orbit ${3 + i}s linear infinite`,
            }}
          >
            <Users className="w-6 h-6 text-white" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-orange-400">Team Collaboration</div>
        <div className="text-slate-400">Cross-functional alignment session</div>
      </div>
    </div>
  )
}

function EventsAnimation() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const phases = ["Planning", "Coordinating", "Executing", "Analyzing"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-12 w-full max-w-4xl mx-auto">
      {/* Event Planning Board */}
      <div className="relative w-full max-w-2xl h-80 bg-slate-800/50 rounded-2xl border border-yellow-400/30 p-8">
        <div className="text-yellow-400 font-bold text-xl mb-8 text-center">Event Organization Dashboard</div>

        {/* Timeline */}
        <div className="flex justify-between items-center mb-8">
          {phases.map((phase, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full border-3 flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  i === currentPhase
                    ? "border-yellow-400 bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/50"
                    : i < currentPhase
                      ? "border-green-400 bg-green-400 text-slate-900 shadow-lg shadow-green-400/50"
                      : "border-slate-600 text-slate-400 bg-slate-700"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-sm mt-3 font-medium transition-colors duration-500 ${
                  i === currentPhase ? "text-yellow-400" : i < currentPhase ? "text-green-400" : "text-slate-500"
                }`}
              >
                {phase}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="relative h-2 bg-slate-700 rounded-full mb-8 overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full transition-all duration-1000 shadow-lg"
            style={{ width: `${((currentPhase + 1) / phases.length) * 100}%` }}
          />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`h-12 rounded-lg border-2 transition-all duration-500 flex items-center justify-center text-sm font-semibold ${
                i <= currentPhase * 1.5
                  ? "border-yellow-400 bg-yellow-400/20 text-yellow-400 shadow-lg shadow-yellow-400/25"
                  : "border-slate-600 bg-slate-700/50 text-slate-500"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              Event {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <div className="text-3xl font-bold text-yellow-400">Praxicon Event Organization</div>
        <div className="text-lg text-slate-400">Professional event planning & coordination</div>
        <div className="flex items-center justify-center space-x-3 text-yellow-400">
          <Sparkles className="w-5 h-5" />
          <span className="text-lg font-medium">Currently {phases[currentPhase].toLowerCase()}...</span>
        </div>
      </div>
    </div>
  )
}

function Conference1Animation() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto">
      {/* Simple Conference Icon */}
      <div className="relative">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-2xl">
          <Presentation className="w-16 h-16 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Status */}
      <div className="text-center space-y-4">
        <div className="text-3xl font-bold text-blue-400">Conference Room 1</div>
        <div className="text-lg text-slate-400">Professional Meeting Space</div>
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Available</span>
        </div>
      </div>
    </div>
  )
}

function Conference2Animation() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto">
      {/* Simple Conference Icon */}
      <div className="relative">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-2xl">
          <Users className="w-16 h-16 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Status */}
      <div className="text-center space-y-4">
        <div className="text-3xl font-bold text-indigo-400">Conference Room 2</div>
        <div className="text-lg text-slate-400">Team Collaboration Space</div>
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Available</span>
        </div>
      </div>
    </div>
  )
}

function DepartmentAnimation({ type }: { type: string }) {
  switch (type) {
    case "code":
      return <CodeAnimation />
    case "support":
      return <SupportAnimation />
    case "meeting":
      return <MeetingAnimation />
    case "collaboration":
      return <CollaborationAnimation />
    case "events":
      return <EventsAnimation />
    case "conference1":
      return <Conference1Animation />
    case "conference2":
      return <Conference2Animation />
    default:
      return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Building2 className="w-24 h-24 text-slate-600 mb-4" />
          <h3 className="text-2xl font-bold text-slate-400 mb-2">Select a Department</h3>
          <p className="text-slate-500">Choose from the menu to access your collaboration environment</p>
        </div>
      )
  }
}

export default function SciGenOfficeSelector() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null)
  const selectedDepartment = departments.find((d) => d.id === selectedDept)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <ParticleField />

      <div className="relative z-10 flex h-screen">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SciGen
              </span>
            </div>
            <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
              Neural Office Network
            </Badge>
          </div>

          {/* Department Menu */}
          <div className="flex-1 p-6">
            <h2 className="text-lg font-semibold text-white mb-6">SELECT DEPARTMENT</h2>
            <div className="space-y-3">
              {departments.map((dept, index) => {
                const Icon = dept.icon
                const isSelected = selectedDept === dept.id

                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`
                      w-full p-4 rounded-lg border transition-all duration-300 text-left group
                      ${
                        isSelected
                          ? `border-white bg-gradient-to-r ${dept.color} shadow-lg`
                          : "border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-700/50"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                        p-2 rounded-lg transition-all duration-300
                        ${isSelected ? "bg-white/20" : "bg-slate-700 group-hover:bg-slate-600"}
                      `}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isSelected ? "text-white" : "text-slate-400 group-hover:text-white"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold transition-colors duration-300 ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {dept.title}
                        </h3>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            isSelected ? "text-white/80" : "text-slate-500 group-hover:text-slate-400"
                          }`}
                        >
                          {dept.subtitle}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isSelected
                            ? "text-white transform rotate-90"
                            : "text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="p-6 border-b border-slate-700 bg-slate-900/50 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {selectedDepartment ? selectedDepartment.title : "SciGen Office Network"}
                </h1>
                <p className="text-slate-400 mt-1">
                  {selectedDepartment ? selectedDepartment.description : "Select a department to begin collaboration"}
                </p>
              </div>
            </div>
          </div>

          {/* Animation Area */}
          <div className="flex-1 flex flex-col items-center justify-center p-12 space-y-12 overflow-y-auto">
            <div className="flex items-center justify-center py-8">
              <DepartmentAnimation type={selectedDepartment?.animation || ""} />
            </div>

            {selectedDepartment && (
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{selectedDepartment.title}</h3>
                  <p className="text-slate-400 max-w-md mx-auto">{selectedDepartment.description}</p>
                </div>

                <Button
                  size="lg"
                  className={`
                    bg-gradient-to-r ${selectedDepartment.color} 
                    hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105
                    border-0 text-white font-bold text-lg px-12 py-4 rounded-xl
                    transition-all duration-300 transform
                  `}
                  onClick={() => window.open(selectedDepartment.meetLink, "_blank")}
                >
                  <Play className="w-6 h-6 mr-3" />
                  Join {selectedDepartment.title}
                  <ChevronRight className="w-6 h-6 ml-3" />
                </Button>

                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Ready to connect</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes animate-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-float {
          animation: animate-float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
