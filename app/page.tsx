import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">김소정</span>
            <span className="text-xl font-bold text-emerald-500">Portfolio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium">
              About
            </a>
            <a href="#projects" className="text-sm font-medium">
              Projects
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/zeze1004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    <span className="text-emerald-500">Jr. 증권 개발자</span> 김소정입니다.
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    투자로 n00만원을 잃고, 증권사에 뺏긴 돈을 회수하고자 증권 개발자가 되기로 결심했습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">경력</h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-emerald-500 pl-4">
                      <h3 className="text-lg font-semibold">인프라 엔지니어</h3>
                      <p className="text-sm text-gray-500">커머스 기업 | 2021 - 2023</p>
                      <p className="mt-2">
                        2년간 500 MAU의 커머스 기업에서 인프라 엔지니어로 근무하며 안정적인 서비스 운영과 시스템 최적화를
                        담당했습니다.
                      </p>
                    </div>
                    <div className="border-l-2 border-emerald-500 pl-4">
                      <h3 className="text-lg font-semibold">백엔드 개발자</h3>
                      <p className="text-sm text-gray-500">스타트업 | 2024 (3개월)</p>
                      <p className="mt-2">
                        10만 MAU의 광고 스타트업에서 백엔드 개발자로 근무하며 광고 시스템 개발을 담당했습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">기술 스택</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Java</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Spring Boot</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">MySQL</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">AWS</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Docker</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Kubernetes</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square rounded-lg bg-gray-100 overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="김소정 프로필 사진"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                제가 진행한 프로젝트를 소개합니다.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Link href="/" className="hover:text-emerald-500 transition-colors">
                    재무헬스장 (ZaeMuGym)
                  </Link>
                </CardTitle>
                <CardDescription>가치투자 지원 플랫폼</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video w-full rounded-lg bg-gray-100 overflow-hidden">
                  <Image src="/screen.png" alt="재무헬스장 스크린샷" width={3000} height={3000} />
                </div>

                <p className="text-gray-700">
                  재무제표 해석에 어려움을 느끼는 투자 초보자들을 위해, 헬스장 컨셉으로 기업의 재무 상태를 시각적 쉽게 이해하고
                  자신만의 투자 근거를 만들 수 있도록 돕는 플랫폼입니다.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">React</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Next.js</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">TypeScript</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Tailwind CSS</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Spring Boot</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">MySQL</span>
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="https://v0-financial-health-app.vercel.app/">
                      데모 보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/zeze1004/finance-report" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">더 많은 프로젝트를 준비 중입니다.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">김소정</span>
            <span className="text-lg font-semibold text-emerald-500">Portfolio</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 김소정. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/zeze1004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:underline"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
