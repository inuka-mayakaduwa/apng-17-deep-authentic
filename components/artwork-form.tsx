"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Tag, Globe, Shield } from "lucide-react"

interface ArtworkFormProps {
  onSubmit: (data: any) => void
  imageUrl: string
}

export default function ArtworkForm({ onSubmit, imageUrl }: ArtworkFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    medium: "",
    dimensions: "",
    year: new Date().getFullYear(),
    tags: "",
    isLimited: false,
    limitedEditionCount: "1",
    limitedEditionNumber: "1",
    isForSale: true,
    category: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <div className="max-w-4xl mx-auto">
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
        <p className="text-gray-600">
          Your artwork has been successfully verified. Please provide additional details to list it on the marketplace.
        </p>
      </div>

      <Tabs defaultValue="details" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Artwork Details</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Editions</TabsTrigger>
          <TabsTrigger value="verification">Verification Info</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="pt-6">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-1">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="Verified artwork"
                className="rounded-lg w-full object-cover aspect-square"
              />

              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#044507]" />
                <span className="text-sm font-medium">Verified Original</span>
              </div>
            </div>

            <div className="col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Artwork Title*</Label>
                    <Input
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter the title of your artwork"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category*</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="sculpture">Sculpture</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="digital">Digital Art</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                        <SelectItem value="drawing">Drawing</SelectItem>
                        <SelectItem value="printmaking">Printmaking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description*</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="min-h-[100px]"
                    placeholder="Describe your artwork, including inspiration, techniques, and meaning"
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="medium">Medium*</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, medium: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select medium" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oil">Oil Paint</SelectItem>
                        <SelectItem value="acrylic">Acrylic</SelectItem>
                        <SelectItem value="watercolor">Watercolor</SelectItem>
                        <SelectItem value="digital">Digital</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                        <SelectItem value="charcoal">Charcoal</SelectItem>
                        <SelectItem value="pastel">Pastel</SelectItem>
                        <SelectItem value="ink">Ink</SelectItem>
                        <SelectItem value="pencil">Pencil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      placeholder="e.g., 24x36 inches"
                      value={formData.dimensions}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year Created*</Label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      min="1900"
                      max={new Date().getFullYear()}
                      value={formData.year}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Separate with commas</span>
                    </div>
                  </div>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="abstract, landscape, portrait, etc."
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="pt-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-4 flex items-center">
                  <Info className="h-4 w-4 mr-2 text-[#e87f14]" />
                  Pricing Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#044507] font-medium">•</span>
                    <span>Consider your experience level and previous sales</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#044507] font-medium">•</span>
                    <span>Research similar artworks in the marketplace</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#044507] font-medium">•</span>
                    <span>Factor in materials, size, and time invested</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#044507] font-medium">•</span>
                    <span>Limited editions typically command higher prices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch
                    id="isForSale"
                    checked={formData.isForSale}
                    onCheckedChange={(checked) => handleSwitchChange("isForSale", checked)}
                  />
                  <Label htmlFor="isForSale">List for sale</Label>
                </div>
                <div className="text-sm text-gray-500">
                  <Globe className="h-4 w-4 inline mr-1" />
                  Will be visible in marketplace
                </div>
              </div>

              {formData.isForSale && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD)*</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        step="0.01"
                        required
                        value={formData.price}
                        onChange={handleChange}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Switch
                        id="isLimited"
                        checked={formData.isLimited}
                        onCheckedChange={(checked) => handleSwitchChange("isLimited", checked)}
                      />
                      <Label htmlFor="isLimited">Limited Edition</Label>
                    </div>
                  </div>

                  {formData.isLimited && (
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="limitedEditionCount">Edition Size*</Label>
                        <Input
                          id="limitedEditionCount"
                          name="limitedEditionCount"
                          type="number"
                          min="1"
                          required
                          value={formData.limitedEditionCount}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="limitedEditionNumber">Edition Number*</Label>
                        <Input
                          id="limitedEditionNumber"
                          name="limitedEditionNumber"
                          type="number"
                          min="1"
                          max={Number.parseInt(formData.limitedEditionCount) || 1}
                          required
                          value={formData.limitedEditionNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="verification" className="pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#044507]" />
                  Verification Certificate
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Certificate ID:</span>
                    <span className="font-mono">DA-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Verification Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Verification Method:</span>
                    <span>Deep Authentic AI + Blockchain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Signature Type:</span>
                    <span>256-bit Adaptive LSB</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Digital Signature</span>
                    <span className="text-xs text-[#e87f14]">Embedded</span>
                  </div>
                  <div className="bg-black/5 p-2 rounded font-mono text-xs overflow-hidden">
                    {Array.from({ length: 4 }, () => Math.random().toString(36).substring(2, 10)).join("-")}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-medium mb-4">Certificate Benefits</h3>

                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#044507] text-xs">✓</span>
                    </div>
                    <span>Tamper-proof verification that travels with your artwork</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#044507] text-xs">✓</span>
                    </div>
                    <span>Blockchain-backed proof of authenticity and provenance</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#044507] text-xs">✓</span>
                    </div>
                    <span>Increases artwork value by providing buyer confidence</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#044507]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#044507] text-xs">✓</span>
                    </div>
                    <span>Protects against forgery and unauthorized reproduction</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600">
                    Your artwork's certificate will be publicly verifiable through our platform, allowing collectors to
                    confirm authenticity at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center pt-4">
        <Button onClick={handleSubmit} className="bg-[#e87f14] hover:bg-[#e87f14]/90 px-8">
          Publish Artwork
        </Button>
      </div>
    </div>
  )
}

