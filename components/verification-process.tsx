"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Upload, Shield, CreditCard } from "lucide-react"

export default function VerificationProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Upload Your Artwork",
      description:
        "Upload high-quality images of your artwork along with details like title, medium, dimensions, and creation date.",
      icon: <Upload className="h-8 w-8" />,
    },
    {
      title: "Verification Process",
      description:
        "Our experts analyze your artwork using proprietary technology to create a unique digital fingerprint.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Receive Certificate",
      description: "Once verified, you'll receive a tamper-proof certificate of authenticity with a unique identifier.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Sell with Confidence",
      description: "List your verified artwork on our marketplace and connect with buyers who value authenticity.",
      icon: <CreditCard className="h-8 w-8" />,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/3">
          <ul className="space-y-6">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-all duration-300 ${activeStep === index ? "opacity-100" : "opacity-60"}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep === index ? "bg-[#e87f14]" : "bg-gray-200"} text-white`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-medium">{step.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-sm">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${activeStep % 2 === 0 ? "bg-[#044507]/10 text-[#044507]" : "bg-[#e87f14]/10 text-[#e87f14]"}`}
            >
              {steps[activeStep].icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{steps[activeStep].title}</h3>
            <p className="text-gray-600">{steps[activeStep].description}</p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeStep === index ? "bg-[#e87f14]" : "bg-gray-300"}`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

