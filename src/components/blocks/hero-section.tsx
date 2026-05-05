'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Film, Clapperboard, Video, Camera, Sparkles } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance font-heading text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Cinematic Stories, Crafted in Sand</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">Premium video production and visual storytelling that brings your vision to life with unmatched artistry and precision.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full bg-sandreel-accent text-sandreel-dark hover:bg-sandreel-accent/90 pl-5 pr-3 text-base font-semibold">
                                        <Link href="#work">
                                            <span className="text-nowrap">View Our Work</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-sandreel-accent/10">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Get in Touch</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-sandreel-accent/10 sm:aspect-video lg:rounded-[3rem]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="size-full object-cover opacity-35 dark:opacity-75"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"></video>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:border-sandreel-accent/20 md:pr-6">
                                <p className="text-end text-sm text-muted-foreground">Trusted by creators</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Film className="size-5" />
                                        <span className="text-sm font-medium">Film Studios</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Clapperboard className="size-5" />
                                        <span className="text-sm font-medium">Directors</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Video className="size-5" />
                                        <span className="text-sm font-medium">Production Houses</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Camera className="size-5" />
                                        <span className="text-sm font-medium">Photographers</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Sparkles className="size-5" />
                                        <span className="text-sm font-medium">Creative Agencies</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <Film className="size-5" />
                                        <span className="text-sm font-medium">Content Creators</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="Sand Reel Home"
                                className="flex items-center space-x-2">
                                <SandReelLogo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-sandreel-accent block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-sandreel-accent block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-sandreel-accent/30 hover:bg-sandreel-accent/10">
                                    <Link href="#contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-sandreel-accent text-sandreel-dark hover:bg-sandreel-accent/90">
                                    <Link href="#work">
                                        <span>Our Work</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const SandReelLogo = () => {
    return (
        <div className="flex items-center gap-2">
            <svg
                viewBox="0 0 425.2 425.2"
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="425.2" height="425.2" className="fill-sandreel-dark dark:fill-sandreel-light" rx="80"/>
                <path
                    d="M199.64,159.29l-133.39,91.64,117.58-55.87c6.87-3.27,14.77,1.89,14.54,9.49l-.26,8.77c-.23,7.83,7.45,13.46,14.85,10.88l18.07-6.83c3.12-1.18,5.84,2.45,3.84,5.11l-28.6,38.04,50.83-25c6.52-3.21,14.35.34,16.25,7.35h0c1.25,4.64,5.56,7.79,10.36,7.57l75.24-3.36-159.3-87.81ZM208.4,176.07l-8.68-4.78v-8.68l8.68,4.78v8.68ZM226.34,185.95l-8.68-4.78v-8.68l8.68,4.78v8.68ZM244.28,195.83l-8.68-4.78v-8.68l8.68,4.78v8.68ZM262.21,205.71l-8.68-4.78v-8.68l8.68,4.78v8.68ZM280.15,215.59l-8.68-4.78v-8.68l8.68,4.78v8.68ZM298.09,225.47l-8.68-4.78v-8.68l8.68,4.78v8.68ZM316.03,235.35l-8.68-4.78v-8.68l8.68,4.78v8.68ZM325.28,240.45v-8.68l8.68,4.78v8.68l-8.68-4.78Z"
                    className="fill-sandreel-light dark:fill-sandreel-dark"
                />
            </svg>
            <span className="font-heading text-lg font-bold tracking-wider uppercase">Sand Reel</span>
        </div>
    )
}
