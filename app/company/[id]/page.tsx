"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Bookmark, Dumbbell, Info, MessageSquare, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CompanyPage({ params }: { params: { id: string } }) {
  const [notes, setNotes] = useState("")

  // 예시 데이터 - 실제로는 API에서 가져와야 함
  const companyData = {
    name: "삼성전자",
    code: "005930",
    price: "72,000",
    change: "+1.2%",
    metrics: {
      roe: { value: 15.2, status: "good", percentage: 75 },
      debtRatio: { value: 45.7, status: "moderate", percentage: 45 },
      cashFlow: { value: "양호", status: "good", percentage: 80 },
      profitability: { value: "약함", status: "bad", percentage: 30 },
      growth: { value: "좋음", status: "good", percentage: 70 },
    },
    summary:
      "이 기업은 탄탄한 회복력(ROE)과 안정적인 심폐지구력(현금흐름)을 보유하고 있습니다. 다만 코어근육(수익성)이 약한 편이니 주의가 필요합니다. 체지방(부채비율)은 적정 수준을 유지하고 있으며, 근육성장(성장성)도 양호한 상태입니다.",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-emerald-500"
      case "moderate":
        return "text-amber-500"
      case "bad":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-emerald-500"
      case "moderate":
        return "bg-amber-500"
      case "bad":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

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
            <Link href="/about" className="text-sm font-medium">
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
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">뒤로 가기</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{companyData.name}</h1>
            <p className="text-gray-500">{companyData.code}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">관심 기업 등록</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">알림 설정</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">공유하기</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>재무 헬스 프로필</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">{companyData.price}</div>
                  <div className="text-sm font-medium text-emerald-500">{companyData.change}</div>
                </div>
              </div>
              <CardDescription>기업의 재무 건강 상태를 헬스장 컨셉으로 시각화한 지표입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">ROE (회복력)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              자기자본이익률(ROE)은 기업이 투자한 자본으로 얼마나 효율적으로 이익을 창출하는지 보여주는
                              지표입니다.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className={`font-bold ${getStatusColor(companyData.metrics.roe.status)}`}>
                      {companyData.metrics.roe.value}%
                    </span>
                  </div>
                  <Progress value={companyData.metrics.roe.percentage} className="h-2">
                    <div
                      className={`h-full ${getProgressColor(companyData.metrics.roe.status)} rounded-full`}
                      style={{ width: `${companyData.metrics.roe.percentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">부채비율 (체지방)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              부채비율은 기업의 자기자본 대비 부채의 비율로, 재무 안정성을 나타냅니다.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className={`font-bold ${getStatusColor(companyData.metrics.debtRatio.status)}`}>
                      {companyData.metrics.debtRatio.value}%
                    </span>
                  </div>
                  <Progress value={companyData.metrics.debtRatio.percentage} className="h-2">
                    <div
                      className={`h-full ${getProgressColor(companyData.metrics.debtRatio.status)} rounded-full`}
                      style={{ width: `${companyData.metrics.debtRatio.percentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">현금흐름 (심폐지구력)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              현금흐름은 기업의 영업활동, 투자활동, 재무활동을 통한 현금 유입과 유출을 나타냅니다.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className={`font-bold ${getStatusColor(companyData.metrics.cashFlow.status)}`}>
                      {companyData.metrics.cashFlow.value}
                    </span>
                  </div>
                  <Progress value={companyData.metrics.cashFlow.percentage} className="h-2">
                    <div
                      className={`h-full ${getProgressColor(companyData.metrics.cashFlow.status)} rounded-full`}
                      style={{ width: `${companyData.metrics.cashFlow.percentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">수익성 (코어근육)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              수익성은 기업이 매출에서 얼마나 이익을 창출하는지를 나타내는 지표입니다.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className={`font-bold ${getStatusColor(companyData.metrics.profitability.status)}`}>
                      {companyData.metrics.profitability.value}
                    </span>
                  </div>
                  <Progress value={companyData.metrics.profitability.percentage} className="h-2">
                    <div
                      className={`h-full ${getProgressColor(companyData.metrics.profitability.status)} rounded-full`}
                      style={{ width: `${companyData.metrics.profitability.percentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">성장성 (근육성장)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              성장성은 기업의 매출, 이익 등이 얼마나 빠르게 성장하고 있는지를 나타냅니다.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className={`font-bold ${getStatusColor(companyData.metrics.growth.status)}`}>
                      {companyData.metrics.growth.value}
                    </span>
                  </div>
                  <Progress value={companyData.metrics.growth.percentage} className="h-2">
                    <div
                      className={`h-full ${getProgressColor(companyData.metrics.growth.status)} rounded-full`}
                      style={{ width: `${companyData.metrics.growth.percentage}%` }}
                    />
                  </Progress>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-500" />
                  트레이너 피드백
                </CardTitle>
                <CardDescription>기업의 재무 상태에 대한 종합 평가입니다</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{companyData.summary}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>투자 메모</CardTitle>
                <CardDescription>이 기업에 대한 나만의 투자 근거를 기록해보세요</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="예: 이 회사는 ROE 추세가 좋아서 매수함"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[120px]"
                />
                <div className="flex justify-end mt-4">
                  <Button className="bg-emerald-500 hover:bg-emerald-600">저장하기</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="financial" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3">
              <TabsTrigger value="financial">재무제표 분석</TabsTrigger>
              <TabsTrigger value="trends">추세 분석</TabsTrigger>
              <TabsTrigger value="news">관련 뉴스</TabsTrigger>
            </TabsList>
            <TabsContent value="financial" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>재무제표 분석</CardTitle>
                  <CardDescription>최근 3년간의 재무제표 주요 지표 변화 추이입니다</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">지표</th>
                          <th className="text-right py-2 px-4">2023년</th>
                          <th className="text-right py-2 px-4">2022년</th>
                          <th className="text-right py-2 px-4">2021년</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">ROE (%)</td>
                          <td className="text-right py-2 px-4 text-emerald-500">15.2</td>
                          <td className="text-right py-2 px-4">14.8</td>
                          <td className="text-right py-2 px-4">13.5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">부채비율 (%)</td>
                          <td className="text-right py-2 px-4 text-amber-500">45.7</td>
                          <td className="text-right py-2 px-4">42.3</td>
                          <td className="text-right py-2 px-4">40.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">영업이익률 (%)</td>
                          <td className="text-right py-2 px-4 text-red-500">8.2</td>
                          <td className="text-right py-2 px-4">10.5</td>
                          <td className="text-right py-2 px-4">12.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">매출액 성장률 (%)</td>
                          <td className="text-right py-2 px-4 text-emerald-500">12.5</td>
                          <td className="text-right py-2 px-4">8.7</td>
                          <td className="text-right py-2 px-4">5.2</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">EPS (원)</td>
                          <td className="text-right py-2 px-4 text-emerald-500">5,420</td>
                          <td className="text-right py-2 px-4">4,980</td>
                          <td className="text-right py-2 px-4">4,750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trends" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>추세 분석</CardTitle>
                  <CardDescription>주요 재무 지표의 추세를 분석합니다</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
                    <p className="text-gray-500">추세 차트가 이곳에 표시됩니다</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="news" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>관련 뉴스</CardTitle>
                  <CardDescription>최근 기업 관련 주요 뉴스입니다</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="font-medium hover:underline cursor-pointer">
                        삼성전자, 신형 반도체 생산라인 확충 계획 발표
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">2025년 5월 15일</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="font-medium hover:underline cursor-pointer">
                        삼성전자 1분기 실적 발표, 시장 예상치 상회
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">2025년 4월 28일</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="font-medium hover:underline cursor-pointer">
                        삼성전자, 신규 AI 칩 개발 소식에 주가 상승
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">2025년 4월 15일</p>
                    </div>
                    <div>
                      <h3 className="font-medium hover:underline cursor-pointer">
                        삼성전자, 글로벌 스마트폰 시장 점유율 확대
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">2025년 4월 10일</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
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
