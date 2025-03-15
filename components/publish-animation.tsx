"use client"

import { motion } from "framer-motion"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PublishAnimationProps {
  isComplete: boolean
}

export default function PublishAnimation({ isComplete }: PublishAnimationProps) {
  return (
    <div className="text-center py-12 w-full max-w-md mx-auto">
      {!isComplete ? (
        <div className="space-y-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 mx-auto"
          >
            <Loader2 className="w-16 h-16 text-[#e87f14]" />
          </motion.div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Publishing Your Artwork</h2>
            <p className="text-gray-600 mb-8">Please wait while we finalize your listing...</p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle className="h-4 w-4 text-[#044507]" />
              <span>Generating certificate of authenticity</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle className="h-4 w-4 text-[#044507]" />
              <span>Recording on blockchain ledger</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2 text-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Loader2 className="h-4 w-4 text-[#e87f14]" />
              </motion.div>
              <span>Preparing marketplace listing</span>
            </motion.div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 mx-auto bg-[#044507]/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#044507]" />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Successfully Published!</h2>
            <p className="text-gray-600 mb-6">Your artwork has been verified and published to the marketplace.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-4 rounded-lg text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Certificate ID:</span>
                <span className="font-mono">DA-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Marketplace URL:</span>
                <span className="text-[#e87f14]">
                  deepauthentic.com/art/{Math.random().toString(36).substring(2, 10)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/marketplace">
                <Button className="w-full bg-[#e87f14] hover:bg-[#e87f14]/90">
                  View in Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

