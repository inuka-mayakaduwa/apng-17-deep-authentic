"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, Shield, Check, ShieldCheck, ArrowLeft, Info, FileText, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import VerificationProgress from "@/components/verification-progress"
import PublishAnimation from "@/components/publish-animation"
import ArtworkForm from "@/components/artwork-form"

export default function CertifyPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [step, setStep] = useState<"upload" | "verifying" | "details" | "publishing">("upload")
  const [verificationStep, setVerificationStep] = useState(0)
  const [isPublishing, setIsPublishing] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")

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
    if (!file) return // safeguard if no file is selected
    setStep("verifying")

    // Simulate verification steps
    const steps = [
      { delay: 2000, step: 1 }, // AI Detection
      { delay: 3000, step: 2 }, // Copyright Check
      { delay: 2500, step: 3 }, // Signature Generation
      { delay: 2000, step: 4 }, // Final Verification
    ]

    for (const { delay, step } of steps) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      setVerificationStep(step)
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStep("details")
  }

  const handlePublish = async (formData: any) => {
    setStep("publishing")
    setIsPublishing(true)

    // Simulate publishing delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsPublishing(false)
    // Redirect to success page or marketplace
    router.push("/marketplace")
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
            <h1 className="text-3xl font-bold">Certify Your Artwork</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Need help?</span>
              <Button variant="outline" size="sm">
                View Guide
              </Button>
            </div>
          </div>

          {step === "upload" && (
            <Tabs defaultValue="upload" className="mb-8" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
              <TabsContent value="upload" className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-xl shadow-sm p-8"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-xl font-semibold mb-2">Upload Your Artwork</h2>
                        <p className="text-gray-600">
                          We'll verify your artwork's authenticity and prepare it for the marketplace
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
                            <p className="text-gray-600 mb-2">Drag and drop your artwork here</p>
                            <p className="text-sm text-gray-500">or click to browse</p>
                          </div>
                        )}

                        {/* Button now triggers file input via useRef */}
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
                          Start Verification
                          <Shield className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Info className="h-4 w-4 mr-2 text-[#e87f14]" />
                        Verification Tips
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                          <Check className="h-4 w-4 text-[#044507] flex-shrink-0 mt-0.5" />
                          <span>Upload high-resolution images for best results</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-4 w-4 text-[#044507] flex-shrink-0 mt-0.5" />
                          <span>Ensure good lighting with minimal glare</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-4 w-4 text-[#044507] flex-shrink-0 mt-0.5" />
                          <span>Include the entire artwork in the frame</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-4 w-4 text-[#044507] flex-shrink-0 mt-0.5" />
                          <span>JPG, PNG, and TIFF formats are supported</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <h3 className="font-semibold mb-4 flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-[#e87f14]" />
                          Supported File Types
                        </h3>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-gray-100 rounded p-2 text-center">.JPG</div>
                          <div className="bg-gray-100 rounded p-2 text-center">.PNG</div>
                          <div className="bg-gray-100 rounded p-2 text-center">.TIFF</div>
                          <div className="bg-gray-100 rounded p-2 text-center">.WEBP</div>
                          <div className="bg-gray-100 rounded p-2 text-center">.HEIC</div>
                          <div className="bg-gray-100 rounded p-2 text-center">.BMP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Process and Technology tabs remain unchanged */}
              <TabsContent value="process" className="pt-6">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-xl font-semibold mb-6">The Verification Process</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b5e12ef-6bbc-40d1-a639-4de2770149dd/dj9f7cg-0998995a-e520-46ed-811f-d288b350c220.jpg/v1/fill/w_1175,h_680,q_70,strp/midnight_sentinel_by_emilysmith1994_dj9f7cg-pre.jpg"
                        alt="Verification Flowchart"
                        className="rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2 text-[#044507]">1. AI Detection</h3>
                        <p className="text-gray-600">
                          Our advanced deep learning model analyzes your artwork to verify it was created by a human
                          artist, not generated by AI. This ensures authenticity and originality.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2 text-[#044507]">2. Copyright Analysis</h3>
                        <p className="text-gray-600">
                          We scan global databases to ensure your artwork doesn't infringe on existing copyrights,
                          protecting both you and potential buyers from legal issues.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2 text-[#044507]">3. Signature Generation</h3>
                        <p className="text-gray-600">
                          A unique digital signature is embedded into your artwork using steganographic techniques,
                          creating a tamper-proof certificate of authenticity.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2 text-[#044507]">4. Marketplace Listing</h3>
                        <p className="text-gray-600">
                          Once verified, your artwork is ready to be listed on our marketplace, where collectors can
                          discover and purchase authentic art with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technology" className="pt-6">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-xl font-semibold mb-6">Our Verification Technology</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg text-[#e87f14]">Adaptive LSB Extraction</h3>
                      <p className="text-gray-600">
                        Our proprietary Least Significant Bit (LSB) algorithm creates an invisible digital watermark
                        that can be verified at any time without degrading the visual quality of your artwork.
                      </p>
                      <h3 className="font-medium text-lg text-[#e87f14] mt-6">Swin Transformer</h3>
                      <p className="text-gray-600">
                        We utilize the state-of-the-art Swin Transformer neural network architecture to analyze artistic
                        style, technique, and composition to verify human creation.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg text-[#e87f14]">Reverse Image Search</h3>
                      <p className="text-gray-600">
                        Our system scans billions of images across the web to detect potential copyright issues and
                        ensure your artwork is original.
                      </p>
                      <h3 className="font-medium text-lg text-[#e87f14] mt-6">Blockchain Certification</h3>
                      <p className="text-gray-600">
                        Each verified artwork receives an immutable blockchain entry, creating a permanent record of
                        authenticity that can be traced throughout the artwork's lifetime.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-lg mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">AI Detection Model:</p>
                        <p className="text-gray-600">Custom Swin-T with 99.7% accuracy</p>
                      </div>
                      <div>
                        <p className="font-medium">Signature Algorithm:</p>
                        <p className="text-gray-600">256-bit Adaptive LSB with error correction</p>
                      </div>
                      <div>
                        <p className="font-medium">Blockchain:</p>
                        <p className="text-gray-600">Ethereum-compatible smart contracts</p>
                      </div>
                      <div>
                        <p className="font-medium">Image Database:</p>
                        <p className="text-gray-600">17+ billion indexed images</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}

          <AnimatePresence mode="wait">
            {step === "verifying" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <VerificationProgress step={verificationStep} imageUrl={previewUrl} />
              </motion.div>
            )}

            {step === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <ArtworkForm onSubmit={handlePublish} imageUrl={previewUrl} />
              </motion.div>
            )}

            {step === "publishing" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center"
              >
                <PublishAnimation isComplete={!isPublishing} />
              </motion.div>
            )}
          </AnimatePresence>

          {step === "upload" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#044507]/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#044507]" />
                    </div>
                    <h3 className="font-medium">Secure Verification</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our multi-stage verification process ensures your artwork's authenticity is protected with
                    military-grade encryption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#e87f14]/10 flex items-center justify-center">
                      <Palette className="h-5 w-5 text-[#e87f14]" />
                    </div>
                    <h3 className="font-medium">Artist-Focused</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Designed by artists for artists, our platform prioritizes your creative rights and fair
                    compensation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#044507]/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#044507]" />
                    </div>
                    <h3 className="font-medium">Detailed Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Track views, engagement, and sales of your artwork with comprehensive analytics and insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
