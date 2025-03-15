"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedArtworks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const artworks = [
    {
      title: "Cosmic Harmony",
      artist: "Elena Rodriguez",
      price: "$2,500",
      medium: "Acrylic on Canvas",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df941417-657c-4751-ac03-e569b46bc1b4/dj6qjje-77f448c1-9236-4f16-88b5-ac05a98872b8.jpg/v1/fill/w_1063,h_752,q_70,strp/colorfull_street_by_phelostudio_dj6qjje-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmOTQxNDE3LTY1N2MtNDc1MS1hYzAzLWU1NjliNDZiYzFiNFwvZGo2cWpqZS03N2Y0NDhjMS05MjM2LTRmMTYtODhiNS1hYzA1YTk4ODcyYjguanBnIiwiaGVpZ2h0IjoiPD05MDYiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZjk0MTQxNy02NTdjLTQ3NTEtYWMwMy1lNTY5YjQ2YmMxYjRcL3BoZWxvc3R1ZGlvLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.f8PkQJrTlY7L8FVcTd8Oe0UgLHgyjLF7pXte9i4q4p8",
    },
    {
      title: "Digital Dreams",
      artist: "Marcus Chen",
      price: "$1,800",
      medium: "Digital Art",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b5e12ef-6bbc-40d1-a639-4de2770149dd/dj9f7cg-0998995a-e520-46ed-811f-d288b350c220.jpg/v1/fill/w_1175,h_680,q_70,strp/midnight_sentinel_by_emilysmith1994_dj9f7cg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiNWUxMmVmLTZiYmMtNDBkMS1hNjM5LTRkZTI3NzAxNDlkZFwvZGo5ZjdjZy0wOTk4OTk1YS1lNTIwLTQ2ZWQtODExZi1kMjg4YjM1MGMyMjAuanBnIiwiaGVpZ2h0IjoiPD03NDEiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8yYjVlMTJlZi02YmJjLTQwZDEtYTYzOS00ZGUyNzcwMTQ5ZGRcL2VtaWx5c21pdGgxOTk0LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.0bJC1M22RSXdAbbug0x0ZTqY35oy4IfrBCXmlxP1rd8",
    },
    {
      title: "Urban Reflections",
      artist: "Aisha Johnson",
      price: "$3,200",
      medium: "Photography",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/174972fe-0e51-4b4a-a088-72b4f5cb0d29/dghu5ym-afc2d234-33d5-4f19-8513-0e7292a515ed.jpg/v1/fill/w_1154,h_692,q_70,strp/daily_challange___aurora_by_nlamay_dghu5ym-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvMTc0OTcyZmUtMGU1MS00YjRhLWEwODgtNzJiNGY1Y2IwZDI5XC9kZ2h1NXltLWFmYzJkMjM0LTMzZDUtNGYxOS04NTEzLTBlNzI5MmE1MTVlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._mArnDWZxCpn0aTJTKBDg0DVp7H7QI2hIIrEkxg6Csc",
    },
    {
      title: "Ancestral Echoes",
      artist: "Jamal Williams",
      price: "$4,500",
      medium: "Bronze Sculpture",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e8b9173-27aa-42dd-a6ef-231727d73d0f/di71lbp-f6417ec9-2b9f-4836-855d-d96a9059f3db.png/v1/fill/w_994,h_804,q_70,strp/4273_by_anem0ia_di71lbp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkwMCIsInBhdGgiOiJcL2ZcLzBlOGI5MTczLTI3YWEtNDJkZC1hNmVmLTIzMTcyN2Q3M2QwZlwvZGk3MWxicC1mNjQxN2VjOS0yYjlmLTQ4MzYtODU1ZC1kOTZhOTA1OWYzZGIucG5nIiwid2lkdGgiOiI8PTIzNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HJZFbPiLhLQbPQpwtM48cNs62aZCrLMVKdHXT3ouAd4",
    },
    {
      title: "Serenity in Blue",
      artist: "Elena Rodriguez",
      price: "$2,100",
      medium: "Oil on Canvas",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e233d4ee-aa1b-45ea-a847-6f61f59b425c/di58zjz-796d4ff5-47ba-4f10-88dc-f37a132bcc73.jpg/v1/fill/w_1264,h_632,q_70,strp/moonlight_nayade_by_winterkeep_di58zjz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvZTIzM2Q0ZWUtYWExYi00NWVhLWE4NDctNmY2MWY1OWI0MjVjXC9kaTU4emp6LTc5NmQ0ZmY1LTQ3YmEtNGYxMC04OGRjLWYzN2ExMzJiY2M3My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JppYY3AbmllS4fXfFy8o72LlvG9y_u6ZUkZwM1g80SA",
    },
    {
      title: "Neon Nostalgia",
      artist: "Marcus Chen",
      price: "$1,500",
      medium: "Digital Art",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf22a90b-bd9b-4f93-ba8e-fc29195917bc/dhh8l2c-fc7aa034-b8e7-4ddc-aa4f-58f854e7d916.jpg/v1/fill/w_1192,h_670,q_70,strp/cyberpunk_edgerunners___david_martinez_by_animehandler_dhh8l2c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmMjJhOTBiLWJkOWItNGY5My1iYThlLWZjMjkxOTU5MTdiY1wvZGhoOGwyYy1mYzdhYTAzNC1iOGU3LTRkZGMtYWE0Zi01OGY4NTRlN2Q5MTYuanBnIiwiaGVpZ2h0IjoiPD0xMDgwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYmYyMmE5MGItYmQ5Yi00ZjkzLWJhOGUtZmMyOTE5NTkxN2JjXC9hbmltZWhhbmRsZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.Jw1_VsPh2BpCSzjU0JawJDNyeo9NmxK3qn-Arqc7JOU",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork, index) => (
        <motion.div
          key={index}
          className="group relative rounded-xl overflow-hidden"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative aspect-[3/4]">
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
              <ShieldCheck className="h-5 w-5 text-[#044507]" />
            </div>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
          >
            <h3 className="text-xl font-bold text-white mb-1">{artwork.title}</h3>
            <p className="text-white/80 mb-1">by {artwork.artist}</p>
            <p className="text-[#e87f14] font-medium mb-3">{artwork.price}</p>
            <p className="text-white/70 text-sm mb-4">{artwork.medium}</p>
            <div className="flex gap-2">
              <Button size="sm" className="bg-white text-[#044507] hover:bg-white/90">
                View Details
              </Button>
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

