import Link from "next/link"
import { ArrowRight, CheckCircle, Palette, ShieldCheck, Banknote, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ArtistShowcase from "@/components/artist-showcase"
import HeroAnimation from "@/components/hero-animation"
import VerificationProcess from "@/components/verification-process"
import FeaturedArtworks from "@/components/featured-artworks"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-[#e87f14]" />
            <span className="text-xl font-bold tracking-tight">Deep Authentic</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              How It Works
            </Link>
            <Link href="/verify" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Verify Art
            </Link>
            <Link href="#artists" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Artists
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-[#e87f14]">
              Log in
            </Link>
            <Button className="bg-[#044507] hover:bg-[#044507]/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#044507] via-[#e87f14] to-[#044507]">
                Verify, Authenticate, and Monetize Your Art
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Deep Authentic empowers artists to certify the authenticity of their work, connect with genuine buyers,
                and maximize their earning potential.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/certify">
                  <Button size="lg" className="bg-[#e87f14] hover:bg-[#e87f14]/90">
                    Certify Your Art
                    <ShieldCheck className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button size="lg" variant="outline" className="border-[#044507] text-[#044507]">
                    Verify Authentic & Certified Art
                    <Palette className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <HeroAnimation />
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Why Artists Choose Deep Authentic</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#044507]/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-[#044507]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Verify Authenticity</h3>
                <p className="text-gray-600">
                  Our proprietary verification system ensures your artwork is certified authentic, building trust with
                  collectors and increasing your work's value.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#e87f14]/10 rounded-full flex items-center justify-center mb-6">
                  <Palette className="h-6 w-6 text-[#e87f14]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Showcase Your Work</h3>
                <p className="text-gray-600">
                  Display your portfolio to a global audience of art enthusiasts and collectors who value authentic,
                  verified artwork.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#044507]/10 rounded-full flex items-center justify-center mb-6">
                  <Banknote className="h-6 w-6 text-[#044507]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Monetize Your Art</h3>
                <p className="text-gray-600">
                  Sell directly to buyers who appreciate authentic art, with secure transactions and fair compensation
                  for your creative work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">How Deep Authentic Works</h2>
            <VerificationProcess />
          </div>
        </section>

        <section className="py-20 bg-[#044507]">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">The Problem We're Solving</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Unverified art reduces job opportunities and limits artists' ability to earn a living. Deep Authentic
              bridges this gap by providing a trusted platform for verification and monetization.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#e87f14]" />
                  Authentication Crisis
                </h3>
                <p className="text-white/80">
                  Artists struggle to prove the authenticity of their work in an increasingly digital world.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#e87f14]" />
                  Limited Exposure
                </h3>
                <p className="text-white/80">
                  Talented artists lack platforms that connect them with buyers who value authentic art.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#e87f14]" />
                  Undervalued Work
                </h3>
                <p className="text-white/80">
                  Without verification, artists' work is often undervalued and underpriced in the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="artists" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Artists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Discover authentic artwork from our community of verified artists.
            </p>
            <ArtistShowcase />
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Featured Authentic Artworks</h2>
            <FeaturedArtworks />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-[#044507] to-[#044507]/90 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Authenticate Your Art?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Join thousands of artists who have increased their visibility and income through Deep Authentic.
            </p>
            <Button size="lg" className="bg-[#e87f14] hover:bg-[#e87f14]/90">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Choose the plan that works best for your artistic journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-gray-500 mb-6">For emerging artists</p>
                <p className="text-4xl font-bold mb-6">
                  $9<span className="text-lg text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Verify up to 10 artworks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Basic artist profile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Standard marketplace access</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#044507] border border-[#044507] hover:bg-[#044507] hover:text-white">
                  Get Started
                </Button>
              </div>
              <div className="border rounded-xl p-8 shadow-md bg-gradient-to-b from-white to-gray-50 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e87f14] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-gray-500 mb-6">For established artists</p>
                <p className="text-4xl font-bold mb-6">
                  $29<span className="text-lg text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Verify up to 50 artworks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Enhanced artist profile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Priority marketplace placement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#e87f14] hover:bg-[#e87f14]/90">Get Started</Button>
              </div>
              <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-500 mb-6">For galleries & collectives</p>
                <p className="text-4xl font-bold mb-6">
                  $99<span className="text-lg text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Unlimited artwork verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Premium gallery profile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Featured marketplace placement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#044507] mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#044507] border border-[#044507] hover:bg-[#044507] hover:text-white">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium">How does the verification process work?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="mt-3 text-gray-600">
                  Our verification process uses a combination of digital fingerprinting, expert review, and blockchain
                  technology to create a tamper-proof certificate of authenticity for your artwork.
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium">How much does it cost to sell my art?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="mt-3 text-gray-600">
                  Deep Authentic charges a 10% commission on sales, which is lower than traditional galleries. This
                  includes payment processing, verification, and marketing support.
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium">Can I verify physical and digital artwork?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="mt-3 text-gray-600">
                  No, Our verification system works for digital artwork, only.
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium">How long does verification take?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="mt-3 text-gray-600">
                  Most artworks are instantly verified within dew seconds. Once verified, your certificate is immediately
                  available and your artwork can be listed on our marketplace.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#044507] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Deep Authentic</h3>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-[#e87f14]" />
                <span className="font-bold">Deep Authentic</span>
              </div>
              <p className="text-sm text-white/80">
                Empowering artists through authenticity verification and monetization.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Verification
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Deep Authentic. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

