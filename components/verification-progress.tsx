"use client"

import { motion } from "framer-motion"
import { Shield, Search, FileCheck, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VerificationProgressProps {
  step: number
  imageUrl: string
}

export default function VerificationProgress({ step, imageUrl }: VerificationProgressProps) {
  const steps = [
    {
      title: "AI Detection Check",
      description: "Verifying artwork originality",
      icon: Shield,
      color: "#044507",
      details:
        "Our deep learning model analyzes brush strokes, texture patterns, and composition to verify human creation.",
    },
    {
      title: "Copyright Analysis",
      description: "Checking for potential infringement",
      icon: Search,
      color: "#e87f14",
      details:
        "Scanning billions of images across global databases to ensure your artwork doesn't infringe on existing copyrights.",
    },
    {
      title: "Generating Signature",
      description: "Creating unique artwork fingerprint",
      icon: FileCheck,
      color: "#044507",
      details:
        "Embedding a cryptographic signature using steganographic techniques that's invisible to the human eye but verifiable.",
    },
    {
      title: "Final Verification",
      description: "Completing the certification process",
      icon: CheckCircle,
      color: "#e87f14",
      details:
        "Finalizing the verification and preparing your artwork for the marketplace with a tamper-proof certificate.",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Verifying Your Artwork</h2>
        <p className="text-gray-600">Please wait while we process your artwork</p>
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

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 w-1 bg-[#e87f14]/50 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-1 bg-[#e87f14]/50 rounded-full"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                  className="absolute right-0 top-0 w-1 bg-[#e87f14]/50 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
                  className="absolute left-0 bottom-0 h-1 bg-[#e87f14]/50 rounded-full"
                />
              </div>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md"
            >
              <Shield className="h-6 w-6 text-[#044507]" />
            </motion.div>
          )}
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-32 h-32 rounded-full border-2 border-[#044507]/30"
            />
          </motion.div>
        )}
      </div>

      <div className="space-y-6">
        {steps.map((s, index) => {
          const isActive = step === index + 1
          const isComplete = step > index + 1
          const Icon = s.icon

          return (
            <div key={index} className="flex items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">{s.details}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
            Our verification process uses advanced AI and blockchain technology to ensure your artwork's authenticity.
            Each step is designed to protect your creative rights and build trust with potential buyers.
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Estimated time remaining: {4 - step} {4 - step === 1 ? "minute" : "minutes"}
          </div>
        </motion.div>
      )}
    </div>
  )
}

