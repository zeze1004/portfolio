import Link from "next/link"
import { Dumbbell, Heart, LayoutDashboard, LineChart, MessageSquare, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Dumbbell className="h-6 w-6 text-emerald-500" />
            </Link>
            <span className="text-xl font-bold">재무헬스장</span>
            <span className="text-xl font-bold text-emerald-500">ZaeMuGym</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              홈
            </Link>
            <Link href="/search" className="text-sm font-medium">
              기업 검색
            </Link>
            <Link href="/watchlist" className="text-sm font-medium">
              관심 기업
            </Link>
            <Link href="/about" className="text-sm font-medium text-emerald-500">
              서비스 소개
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              로그인
            </Button>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              회원가입
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  재무헬스장 <span className="text-emerald-500">ZaeMuGym</span>
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  재무제표 해석에 어려움을 느끼는 투자 초보자들이 기업의 재무 상태를 시각적으로 이해하고, 자신만의 투자
                  근거를 만들 수 있도록 돕는 가치투자 지원 플랫폼
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 소개</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                재무헬스장은 기업의 재무 상태를 헬스장 컨셉으로 시각화하여 직관적으로 이해할 수 있게 도와줍니다
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <LayoutDashboard className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>재무 헬스 프로필 시각화</CardTitle>
                  <CardDescription>재무제표 핵심 지표를 '헬스장' 은유로 시각화</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    ROE는 회복력, 부채비율은 체지방, 현금흐름은 심폐지구력, 수익성은 코어근육 등으로 비유하여 직관적으로
                    이해할 수 있게 합니다. 색상과 도형 등으로 건강 상태를 표현합니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>종합 요약 리포트</CardTitle>
                  <CardDescription>트레이너 피드백 형식의 재무 분석 요약</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    "이 회사는 탄탄한 코어 근육(수익성)과 안정적인 심폐지구력(현금흐름)을 보입니다." 와 같이 자연어 기반
                    기업 분석 결과를 자동으로 생성합니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>매수/매도 이유 메모 기록</CardTitle>
                  <CardDescription>투자 근거를 기록하고 관리</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    "이 회사는 ROE 추세가 좋아서 매수함", "최근 부채비율 급증으로 불안해서 매도함" 등 자신만의 투자
                    근거를 기록하고 저장할 수 있습니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>관심 기업 알림 기능</CardTitle>
                  <CardDescription>중요한 재무 이벤트 알림 제공</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    유저가 설정한 기업의 재무 이벤트 또는 주가 이벤트(신고가, 신저가 등) 발생 시 알림을 푸시하여 중요한
                    변화를 놓치지 않도록 합니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LineChart className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>추세 분석</CardTitle>
                  <CardDescription>재무 지표의 시간에 따른 변화 추적</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    기업의 재무 지표가 시간에 따라 어떻게 변화하는지 추적하여 건강 상태의 개선 또는 악화 추세를 파악할
                    수 있습니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Dumbbell className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>재무 헬스 교육</CardTitle>
                  <CardDescription>재무제표 해석 능력 향상 지원</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    재무제표 해석과 관련된 기본 개념과 용어를 쉽게 설명하여 사용자의 재무 이해력을 점진적으로
                    향상시킵니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">타겟 사용자</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                재무헬스장은 이런 분들을 위한 서비스입니다
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>사회초년생 투자자</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>주식 유튜브, SNS를 통해 투자를 시작했으나, 재무제표 해석 능력은 낮음</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>PER, PBR 등 단편적인 지표는 들었지만 정확한 개념은 잘 모름</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>정보의 근거는 남들의 말 → 스스로의 판단력을 갖고 싶어 함</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>공부는 어렵고 귀찮지만, 아무것도 안 하면 도태될까봐 불안함</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>사용자의 불편함과 니즈</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>기업 가치 판단 어려움:</strong> 가치투자가 좋다지만, '가치'의 기준을 모름
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>근거 없는 투자:</strong> 추천 종목만 따라 사다보니 확신 없음
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>금융 공부 진입장벽:</strong> 재무제표, 회계 용어가 어려워 접근 자체가 힘듦
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>도태 공포:</strong> 남들은 다 투자하는데, 공부 안 하면 뒤처질까봐 불안함
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">지금 바로 시작하세요</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  재무제표 해석의 어려움에서 벗어나 자신만의 투자 근거를 만들어보세요
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-emerald-500 hover:bg-emerald-600">무료로 시작하기</Button>
                <Button variant="outline">더 알아보기</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-emerald-500" />
            <span className="text-lg font-semibold">재무헬스장</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 ZaeMuGym. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:underline">
              이용약관
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:underline">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:underline">
              고객센터
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
