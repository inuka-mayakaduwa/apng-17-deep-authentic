"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Upload,
  Shield,
  Search,
  CheckCircle,
  ShieldCheck,
  ArrowLeft,
  Info,
  User,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import VerificationScan from "@/components/verification-scan"

export default function VerifyPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [step, setStep] = useState<"upload" | "verifying" | "results">("upload")
  const [verificationStep, setVerificationStep] = useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setPreviewUrl(url)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile)
      const url = URL.createObjectURL(droppedFile)
      setPreviewUrl(url)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const startVerification = async () => {
    if (!file) return
    setStep("verifying")

    // Simulate verification steps
    const steps = [
      { delay: 2000, step: 1 }, // Scanning artwork
      { delay: 2500, step: 2 }, // Extracting signature
      { delay: 2000, step: 3 }, // Verifying authenticity
    ]

    for (const { delay, step } of steps) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      setVerificationStep(step)
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStep("results")
  }

  const resetVerification = () => {
    setFile(null)
    setPreviewUrl("")
    setStep("upload")
    setVerificationStep(0)
  }

  // Dummy certificate data
  const certificateData = {
    id: "DA-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    creationDate: "2023-09-15",
    verificationDate: "2023-09-18",
    blockchain: "Ethereum",
    transactionId: "0x" + Math.random().toString(36).substring(2, 30),
    signature: Array.from({ length: 4 }, () => Math.random().toString(36).substring(2, 10)).join("-"),
  }

  // Dummy artist data
  const artistData = {
    name: "Elena Rodriguez",
    location: "Barcelona, Spain",
    joined: "2021-05-12",
    verified: true,
    artworks: 37,
    sales: 24,
    bio: "Elena creates vibrant abstract works that explore the relationship between color and emotion. Her work has been featured in galleries across Europe and North America.",
    avatar:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130097424/original/70d0542134a327e7247f6847303c3eddaa500f1c/draw-a-bright-cartoon-profile-pic.png",
  }

  // Dummy artwork data
  const artworkData = {
    title: "Cosmic Harmony",
    medium: "Acrylic on Canvas",
    dimensions: "36 × 48 inches",
    year: "2023",
    price: "$2,500",
    description:
      "An exploration of the interconnectedness of celestial bodies and human emotion, rendered in vibrant blues and purples with gold accents.",
    tags: ["abstract", "cosmos", "spiritual", "blue"],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-[#e87f14]" />
                <span className="text-xl font-bold tracking-tight">Deep Authentic</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              How It Works
            </Link>
            <Link href="/verify" className="text-sm font-medium transition-colors text-[#e87f14]">
              Verify Art
            </Link>
            <Link href="/#artists" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Artists
            </Link>
            <Link href="/#pricing" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Log in
            </Link>
            <Button className="bg-[#044507] hover:bg-[#044507]/90">Get Started</Button>
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-[#e87f14] flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Verify Artwork Authenticity</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Need help?</span>
              <Button variant="outline" size="sm">
                View Guide
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === "upload" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm p-8">
                      <div className="text-center mb-8">
                        <h2 className="text-xl font-semibold mb-2">Upload Artwork to Verify</h2>
                        <p className="text-gray-600">
                          Check if an artwork has been authenticated on the Deep Authentic platform
                        </p>
                      </div>

                      <div
                        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl p-8 mb-6"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                      >
                        {previewUrl ? (
                          <div className="relative w-full max-w-md aspect-square mb-4">
                            <img
                              src={previewUrl || "/placeholder.svg"}
                              alt="Artwork preview"
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="text-center p-8">
                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-gray-600 mb-2">Drag and drop artwork here</p>
                            <p className="text-sm text-gray-500">or click to browse</p>
                          </div>
                        )}

                        <Button
                          variant={previewUrl ? "outline" : "default"}
                          className="mt-4"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          {previewUrl ? "Choose Different File" : "Select File"}
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="sr-only"
                          id="artwork-upload"
                        />
                      </div>

                      <div className="flex justify-center">
                        <Button
                          onClick={startVerification}
                          disabled={!file}
                          className="bg-[#044507] hover:bg-[#044507]/90"
                        >
                          Verify Authenticity
                          <Shield className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Info className="h-4 w-4 mr-2 text-[#e87f14]" />
                        How Verification Works
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#044507] font-bold text-xs">1</span>
                          </div>
                          <span>Upload an image of the artwork you want to verify</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#044507] font-bold text-xs">2</span>
                          </div>
                          <span>Our system scans for the embedded digital signature</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#044507] font-bold text-xs">3</span>
                          </div>
                          <span>If verified, you'll see the certificate and artist information</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <h3 className="font-semibold mb-4 flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-[#e87f14]" />
                          Why Verify?
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Verification ensures you're purchasing authentic artwork directly from the original artist,
                          protecting your investment and supporting creators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#044507]/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-[#044507]" />
                        </div>
                        <h3 className="font-medium">Tamper-Proof</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Our digital signatures cannot be copied or forged, ensuring absolute authenticity verification.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#e87f14]/10 flex items-center justify-center">
                          <Search className="h-5 w-5 text-[#e87f14]" />
                        </div>
                        <h3 className="font-medium">Instant Verification</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Get immediate confirmation of an artwork's authenticity before making a purchase.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#044507]/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-[#044507]" />
                        </div>
                        <h3 className="font-medium">Artist Information</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Connect with the original creator and learn about their background and artistic journey.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {step === "verifying" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <VerificationScan step={verificationStep} imageUrl={previewUrl} />
              </motion.div>
            )}

            {step === "results" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-[#044507]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-[#044507]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </motion.svg>
                    </motion.div>
                    <h2 className="text-xl font-semibold mb-2">Artwork Verified!</h2>
                    <p className="text-gray-600">This artwork has been authenticated on the Deep Authentic platform</p>
                  </div>

                  <Tabs defaultValue="artwork" className="mb-8">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="artwork">Artwork Details</TabsTrigger>
                      <TabsTrigger value="certificate">Certificate</TabsTrigger>
                      <TabsTrigger value="artist">Artist Information</TabsTrigger>
                    </TabsList>

                    <TabsContent value="artwork" className="pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="relative aspect-square w-full">
                            <img
                              src={previewUrl || "/placeholder.svg"}
                              alt="Verified artwork"
                              className="rounded-lg object-cover w-full h-full"
                            />
                            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                              <Shield className="h-5 w-5 text-[#044507]" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">{artworkData.title}</h3>
                            <Badge className="bg-[#044507]">Verified</Badge>
                          </div>

                          <div className="space-y-4 mb-6">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Artist</p>
                                <p className="font-medium">{artistData.name}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Year</p>
                                <p>{artworkData.year}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Medium</p>
                                <p>{artworkData.medium}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Dimensions</p>
                                <p>{artworkData.dimensions}</p>
                              </div>
                            </div>

                            <div>
                              <p className="text-gray-500 text-sm">Description</p>
                              <p className="text-sm mt-1">{artworkData.description}</p>
                            </div>

                            <div>
                              <p className="text-gray-500 text-sm">Price</p>
                              <p className="text-xl font-bold text-[#044507]">{artworkData.price}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {artworkData.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button className="bg-[#e87f14] hover:bg-[#e87f14]/90">View in Marketplace</Button>
                            <Button variant="outline">Contact Artist</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="certificate" className="pt-6">
                      <div className="max-w-2xl mx-auto">
                        <div className="border border-gray-200 rounded-lg p-6 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#044507] to-[#e87f14]" />

                          <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="h-6 w-6 text-[#044507]" />
                              <h3 className="text-lg font-bold">Certificate of Authenticity</h3>
                            </div>
                            <Badge className="bg-[#044507]">Verified</Badge>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-gray-500 text-sm">Certificate ID</p>
                                  <p className="font-mono">{certificateData.id}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Artwork Title</p>
                                  <p className="font-medium">{artworkData.title}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Artist</p>
                                  <p>{artistData.name}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Creation Date</p>
                                  <p>{new Date(certificateData.creationDate).toLocaleDateString()}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Verification Date</p>
                                  <p>{new Date(certificateData.verificationDate).toLocaleDateString()}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-gray-500 text-sm">Blockchain</p>
                                  <p>{certificateData.blockchain}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Transaction ID</p>
                                  <p className="font-mono text-xs break-all">{certificateData.transactionId}</p>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Digital Signature</p>
                                  <div className="bg-gray-50 p-2 rounded font-mono text-xs overflow-hidden break-all">
                                    {certificateData.signature}
                                  </div>
                                </div>

                                <div>
                                  <p className="text-gray-500 text-sm">Verification Method</p>
                                  <p>Adaptive LSB + Blockchain</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 pt-6 border-t text-center">
                            <p className="text-sm text-gray-600 mb-4">
                              This certificate verifies that the artwork is an original creation by the artist and has
                              been authenticated by Deep Authentic's verification system.
                            </p>
                            <div className="flex justify-center">
                              <Button variant="outline" size="sm" className="text-xs">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Verify on Blockchain
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="artist" className="pt-6">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                          <div className="text-center">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                              <img
                                src={artistData.avatar || "/placeholder.svg"}
                                alt={artistData.name}
                                className="rounded-full object-cover w-full h-full"
                              />
                              {artistData.verified && (
                                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                                  <CheckCircle className="h-4 w-4 text-[#044507]" />
                                </div>
                              )}
                            </div>

                            <h3 className="text-xl font-bold mb-1">{artistData.name}</h3>
                            <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-4">
                              <MapPin className="h-3 w-3" />
                              <span>{artistData.location}</span>
                            </div>

                            <div className="flex justify-center gap-4 text-sm">
                              <div>
                                <p className="font-bold">{artistData.artworks}</p>
                                <p className="text-gray-500">Artworks</p>
                              </div>
                              <Separator orientation="vertical" className="h-10" />
                              <div>
                                <p className="font-bold">{artistData.sales}</p>
                                <p className="text-gray-500">Sales</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-2">About the Artist</h3>
                              <p className="text-gray-600">{artistData.bio}</p>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-3">Artist Information</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                  <div>
                                    <p className="text-gray-500">Member Since</p>
                                    <p>{new Date(artistData.joined).toLocaleDateString()}</p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Award className="h-4 w-4 text-gray-400" />
                                  <div>
                                    <p className="text-gray-500">Verification Status</p>
                                    <p className="text-[#044507] font-medium">Verified Artist</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-3">More Artworks by {artistData.name}</h3>
                              <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                  <div key={i} className="relative aspect-square">
                                    <img
                                      src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf22a90b-bd9b-4f93-ba8e-fc29195917bc/dhh8l2c-fc7aa034-b8e7-4ddc-aa4f-58f854e7d916.jpg`}
                                      alt={`Artwork ${i}`}
                                      className="rounded-md object-cover w-full h-full"
                                    />
                                    <div className="absolute top-2 right-2">
                                      <Shield className="h-3 w-3 text-[#044507]" />
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-4 text-center">
                                <Button variant="link" className="text-[#e87f14]">
                                  View All Artworks
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex justify-center gap-4">
                    <Button onClick={resetVerification} variant="outline">
                      Verify Another Artwork
                    </Button>

                    <Button className="bg-[#e87f14] hover:bg-[#e87f14]/90">View in Marketplace</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
