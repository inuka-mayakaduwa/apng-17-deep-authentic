"use client"

import { motion } from "framer-motion"
import { Shield, FileCheck, CheckCircle, Loader2, AlertCircle, Scan } from "lucide-react"

interface VerificationScanProps {
  step: number
  imageUrl: string
}

export default function VerificationScan({ step, imageUrl }: VerificationScanProps) {
  const steps = [
    {
      title: "Scanning Artwork",
      description: "Looking for embedded digital signature",
      icon: Scan,
      color: "#044507",
    },
    {
      title: "Extracting Signature",
      description: "Decoding steganographic data",
      icon: FileCheck,
      color: "#e87f14",
    },
    {
      title: "Verifying Authenticity",
      description: "Validating against blockchain records",
      icon: Shield,
      color: "#044507",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Verifying Artwork</h2>
        <p className="text-gray-600">Please wait while we check the authenticity of this artwork</p>
      </div>

      <div className="relative mb-8">
        <div className="relative w-full max-w-md mx-auto aspect-square">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Artwork being verified"
            className="rounded-lg w-full h-full object-cover"
          />

          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/5 rounded-lg"
            />
          )}

          {/* Scanning animation */}
          {step === 1 && (
            <motion.div
              initial={{ top: 0 }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute left-0 w-full h-1 bg-[#044507]/50 z-10"
            >
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-[#044507] blur-sm"
              />
            </motion.div>
          )}

          {/* Signature extraction animation */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-2 border-[#e87f14] rounded-lg"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e87f14]/10 to-transparent"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-md p-2 text-xs font-mono"
                >
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Extracting...
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Blockchain verification animation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    borderRadius: ["20%", "50%", "20%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-12 h-12 border-4 border-t-[#044507] border-r-[#e87f14] border-b-[#044507] border-l-[#e87f14]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-md p-2 text-xs font-mono text-center"
              >
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Validating on blockchain...
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {steps.map((s, index) => {
          const isActive = step === index + 1
          const isComplete = step > index + 1
          const Icon = s.icon

          return (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isComplete
                    ? "bg-[#044507] text-white"
                    : isActive
                      ? "bg-[#e87f14] text-white"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {isComplete ? (
                  <CheckCircle className="h-5 w-5" />
                ) : isActive ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Loader2 className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`font-medium ${
                    isActive ? "text-[#e87f14]" : isComplete ? "text-[#044507]" : "text-gray-400"
                  }`}
                >
                  {s.title}
                </h3>
                <p className={`text-sm ${isActive || isComplete ? "text-gray-600" : "text-gray-400"}`}>
                  {s.description}
                </p>
              </div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#e87f14] text-sm font-medium"
                >
                  Processing...
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {step > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-gray-50 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-5 w-5 text-[#e87f14]" />
            <h3 className="font-medium">Verification Process</h3>
          </div>
          <p className="text-sm text-gray-600">
            Our verification system uses steganographic analysis to detect the invisible digital signature embedded in
            authentic artworks. This signature is then validated against our blockchain records.
          </p>
        </motion.div>
      )}
    </div>
  )
}

