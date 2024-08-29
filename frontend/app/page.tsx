import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bitcoin, ArrowRightLeft, PiggyBank, Coins, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bitcoin className="h-6 w-6 text-orange-600" />
          <span className="ml-2 text-2xl font-bold">BTCPlus DeFi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#advantages">
            Advantages
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dexlanding">
            Get Started with BTCPlusDEX
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to the Future of DeFi on BitcoinPlus
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Explore our innovative dApp that brings decentralized finance to the BitcoinPlus ecosystem.
                  Trade, lend, borrow, and more with the power of Runes and BRC-20 tokens.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-orange-600 text-white hover:bg-orange-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <ArrowRightLeft className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Decentralized Exchange (DEX)</h3>
                <p className="text-gray-700">
                  Trade a wide variety of digital assets securely and efficiently on our decentralized platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PiggyBank className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Lending and Borrowing</h3>
                <p className="text-gray-700">
                  Lend your assets to earn interest or borrow against your holdings using innovative Runes technology.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coins className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">BRC-20 and Runes Support</h3>
                <p className="text-gray-700">
                  Full support for BRC-20 tokens and Runes, enabling advanced DeFi capabilities on BitcoinPlus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="advantages" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose BTCPlus DeFi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Security and Decentralization</h3>
                  <p className="text-gray-700">
                    Benefit from the robust security and true decentralization offered by the BitcoinPlus ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovative DeFi Solutions</h3>
                  <p className="text-gray-700">
                    Experience cutting-edge DeFi features powered by Runes and BRC-20 tokens, pushing the boundaries of what's possible in decentralized finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Dive In?
            </h2>
            <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl mb-8">
              Join the BTCPlus DeFi revolution today and experience the future of decentralized finance on BitcoinPlus.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-orange-100">Launch App</Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-orange-50">
        <p className="text-xs text-gray-700">© 2024 BTCPlus DeFi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-700 hover:text-orange-600">
            <svg
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-600">
            <svg
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-600">
            <svg
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  )
}