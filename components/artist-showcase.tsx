"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"

export default function ArtistShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const artists = [
    {
      name: "Elena Rodriguez",
      specialty: "Abstract Expressionism",
      location: "Barcelona, Spain",
      verified: true,
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/dh6ckmg-7b180c26-2824-4a2c-96e6-13e6fd2c2784.jpg/v1/fill/w_1192,h_670,q_70,strp/landscape_scenery___wallpaper__13_by_milkshake33_dh6ckmg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhOGIzZGI0LTJhZDQtNDNlNS1iY2NkLTNlMDI2MDg3MjgyNFwvZGg2Y2ttZy03YjE4MGMyNi0yODI0LTRhMmMtOTZlNi0xM2U2ZmQyYzI3ODQuanBnIiwiaGVpZ2h0IjoiPD03MjAiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC85YThiM2RiNC0yYWQ0LTQzZTUtYmNjZC0zZTAyNjA4NzI4MjRcL21pbGtzaGFrZTMzLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.LWz9GdosjYHv3-BckliGqypx0RsMGPbB4pP2Q-jhSeI",
      bio: "Elena creates vibrant abstract works that explore the relationship between color and emotion.",
    },
    {
      name: "Marcus Chen",
      specialty: "Digital Art & Animation",
      location: "Tokyo, Japan",
      verified: true,
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/djcyi6y-549a0e5c-67dc-4be6-968b-5bcd5e07c2b4.jpg/v1/fill/w_1257,h_636,q_70,strp/landscape_scenery___wallpaper__58_by_milkshake33_djcyi6y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcxIiwicGF0aCI6IlwvZlwvOWE4YjNkYjQtMmFkNC00M2U1LWJjY2QtM2UwMjYwODcyODI0XC9kamN5aTZ5LTU0OWEwZTVjLTY3ZGMtNGJlNi05NjhiLTViY2Q1ZTA3YzJiNC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Gccav8Cjlnb8chLUc756g82uHxLZ0KUL9h6jqKHhKys",
      bio: "Marcus pushes the boundaries of digital art with his innovative techniques and futuristic vision.",
    },
    {
      name: "Aisha Johnson",
      specialty: "Contemporary Photography",
      location: "New York, USA",
      verified: true,
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/dj4bstd-52e3e651-61ad-4d6e-be82-577e90332b5e.jpg/v1/fill/w_1192,h_670,q_70,strp/landscape_scenery___wallpaper__52_by_milkshake33_dj4bstd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhOGIzZGI0LTJhZDQtNDNlNS1iY2NkLTNlMDI2MDg3MjgyNFwvZGo0YnN0ZC01MmUzZTY1MS02MWFkLTRkNmUtYmU4Mi01NzdlOTAzMzJiNWUuanBnIiwiaGVpZ2h0IjoiPD0xMDgwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOWE4YjNkYjQtMmFkNC00M2U1LWJjY2QtM2UwMjYwODcyODI0XC9taWxrc2hha2UzMy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.cPQ3ve-Cy_scBaZb4akrsuNjzOMvZ8sthcsYIHV6E98",
      bio: "Aisha's photography captures urban landscapes and human stories with a unique perspective.",
    },
    {
      name: "Jamal Williams",
      specialty: "Sculpture & Installation",
      location: "Lagos, Nigeria",
      verified: true,
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e8b9173-27aa-42dd-a6ef-231727d73d0f/di71lbp-f6417ec9-2b9f-4836-855d-d96a9059f3db.png/v1/fill/w_994,h_804,q_70,strp/4273_by_anem0ia_di71lbp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkwMCIsInBhdGgiOiJcL2ZcLzBlOGI5MTczLTI3YWEtNDJkZC1hNmVmLTIzMTcyN2Q3M2QwZlwvZGk3MWxicC1mNjQxN2VjOS0yYjlmLTQ4MzYtODU1ZC1kOTZhOTA1OWYzZGIucG5nIiwid2lkdGgiOiI8PTIzNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HJZFbPiLhLQbPQpwtM48cNs62aZCrLMVKdHXT3ouAd4",
      bio: "Jamal creates powerful sculptures that blend traditional African art with contemporary themes.",
    },
  ]

  const nextArtist = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length)
  }

  const prevArtist = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artists.length) % artists.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevArtist}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Previous artist"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextArtist}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Next artist"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {artists.map((artist, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-square"
                  />
                  {artist.verified && (
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <ShieldCheck className="h-6 w-6 text-[#044507]" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-[#e87f14] font-medium mb-1">{artist.specialty}</p>
                  <p className="text-gray-500 mb-4">{artist.location}</p>
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-5 w-5 text-[#044507] mr-2" />
                    <span className="text-sm font-medium">Verified Artist</span>
                  </div>
                  <p className="text-gray-600 mb-6">{artist.bio}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <Image
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d2f751b-0791-4cb6-a646-8cfecd441a73/dft4um7-f6bb758f-798f-43e2-9bd9-8c957afba159.png/v1/fill/w_1081,h_739,q_70,strp/sano_looking_over_a_cyberpunk_city_2_by_kuramochikomix_dft4um7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2NCIsInBhdGgiOiJcL2ZcLzVkMmY3NTFiLTA3OTEtNGNiNi1hNjQ2LThjZmVjZDQ0MWE3M1wvZGZ0NHVtNy1mNmJiNzU4Zi03OThmLTQzZTItOWJkOS04Yzk1N2FmYmExNTkucG5nIiwid2lkdGgiOiI8PTI0MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DxpmU9CRgpRIt5IGCTsM-2mVB7yGbG_i8peBdwsGw0M"
                      alt="Artwork thumbnail"
                      width={100}
                      height={100}
                      className="rounded-md object-cover aspect-square"
                    />
                    <Image
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/dh6ckmg-7b180c26-2824-4a2c-96e6-13e6fd2c2784.jpg/v1/fill/w_1192,h_670,q_70,strp/landscape_scenery___wallpaper__13_by_milkshake33_dh6ckmg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhOGIzZGI0LTJhZDQtNDNlNS1iY2NkLTNlMDI2MDg3MjgyNFwvZGg2Y2ttZy03YjE4MGMyNi0yODI0LTRhMmMtOTZlNi0xM2U2ZmQyYzI3ODQuanBnIiwiaGVpZ2h0IjoiPD03MjAiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC85YThiM2RiNC0yYWQ0LTQzZTUtYmNjZC0zZTAyNjA4NzI4MjRcL21pbGtzaGFrZTMzLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.LWz9GdosjYHv3-BckliGqypx0RsMGPbB4pP2Q-jhSeI"
                      alt="Artwork thumbnail"
                      width={100}
                      height={100}
                      className="rounded-md object-cover aspect-square"
                    />
                    <Image
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/djcyi6y-549a0e5c-67dc-4be6-968b-5bcd5e07c2b4.jpg/v1/fill/w_1257,h_636,q_70,strp/landscape_scenery___wallpaper__58_by_milkshake33_djcyi6y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcxIiwicGF0aCI6IlwvZlwvOWE4YjNkYjQtMmFkNC00M2U1LWJjY2QtM2UwMjYwODcyODI0XC9kamN5aTZ5LTU0OWEwZTVjLTY3ZGMtNGJlNi05NjhiLTViY2Q1ZTA3YzJiNC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Gccav8Cjlnb8chLUc756g82uHxLZ0KUL9h6jqKHhKys"
                      alt="Artwork thumbnail"
                      width={100}
                      height={100}
                      className="rounded-md object-cover aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        {artists.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-[#e87f14]" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

