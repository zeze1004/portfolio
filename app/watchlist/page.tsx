"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Bookmark, Dumbbell, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WatchlistPage() {
  // 예시 데이터 - 실제로는 API에서 가져와야 함
  const [watchlist, setWatchlist] = useState([
    {
      id: "005930",
      name: "삼성전자",
      price: "72,000",
      change: "+1.2%",
      status: "good",
      metrics: {
        roe: { value: 15.2, status: "good" },
        debtRatio: { value: 45.7, status: "moderate" },
        profitability: { value: "약함", status: "bad" },
      },
    },
    {
      id: "000660",
      name: "SK하이닉스",
      price: "125,000",
      change: "-0.8%",
      status: "moderate",
      metrics: {
        roe: { value: 12.5, status: "moderate" },
        debtRatio: { value: 52.3, status: "moderate" },
        profitability: { value: "보통", status: "moderate" },
      },
    },
    {
      id: "035420",
      name: "네이버",
      price: "215,000",
      change: "+2.5%",
      status: "good",
      metrics: {
        roe: { value: 18.7, status: "good" },
        debtRatio: { value: 38.2, status: "good" },
        profitability: { value: "좋음", status: "good" },
      },
    },
    {
      id: "068270",
      name: "셀트리온",
      price: "178,500",
      change: "-1.5%",
      status: "bad",
      metrics: {
        roe: { value: 8.3, status: "bad" },
        debtRatio: { value: 65.1, status: "bad" },
        profitability: { value: "매우 약함", status: "bad" },
      },
    },
  ])

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

  const getChangeColor = (change: string) => {
    return change.startsWith("+") ? "text-emerald-500" : "text-red-500"
  }

  const getBgStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-emerald-100 text-emerald-500"
      case "moderate":
        return "bg-amber-100 text-amber-500"
      case "bad":
        return "bg-red-100 text-red-500"
      default:
        return "bg-gray-100 text-gray-500"
    }
  }

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter((company) => company.id !== id))
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
            <Link href="/watchlist" className="text-sm font-medium text-emerald-500">
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">관심 기업</h1>
          <Button variant="outline" asChild>
            <Link href="/search">
              <Search className="h-4 w-4 mr-2" />
              기업 검색하기
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>알림 설정</CardTitle>
            <CardDescription>관심 기업의 재무 상태 변화나 주가 변동 시 알림을 받을 수 있습니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-emerald-500" />
                  <span>재무 지표 악화 알림</span>
                </div>
                <Button variant="outline" size="sm">
                  설정
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-emerald-500" />
                  <span>주가 변동 알림 (5% 이상)</span>
                </div>
                <Button variant="outline" size="sm">
                  설정
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-emerald-500" />
                  <span>실적 발표 알림</span>
                </div>
                <Button variant="outline" size="sm">
                  설정
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>내 관심 기업 목록</CardTitle>
            <CardDescription>관심 있는 기업들의 재무 건강 상태를 한눈에 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            {watchlist.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>기업명</TableHead>
                    <TableHead>현재가</TableHead>
                    <TableHead>ROE (회복력)</TableHead>
                    <TableHead>부채비율 (체지방)</TableHead>
                    <TableHead>수익성 (코어근육)</TableHead>
                    <TableHead>종합 상태</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {watchlist.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell className="font-medium">
                        <Link href={`/company/${company.id}`} className="hover:underline">
                          {company.name}
                        </Link>
                      </TableCell>
                      <TableCell className={getChangeColor(company.change)}>
                        {company.price} ({company.change})
                      </TableCell>
                      <TableCell className={getStatusColor(company.metrics.roe.status)}>
                        {company.metrics.roe.value}%
                      </TableCell>
                      <TableCell className={getStatusColor(company.metrics.debtRatio.status)}>
                        {company.metrics.debtRatio.value}%
                      </TableCell>
                      <TableCell className={getStatusColor(company.metrics.profitability.status)}>
                        {company.metrics.profitability.value}
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBgStatusColor(company.status)}`}
                        >
                          {company.status === "good" ? "건강" : company.status === "moderate" ? "보통" : "주의"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => removeFromWatchlist(company.id)}>
                          <X className="h-4 w-4" />
                          <span className="sr-only">삭제</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">관심 기업이 없습니다</h3>
                <p className="text-gray-500 mb-4">기업을 검색하여 관심 기업으로 등록해보세요</p>
                <Button asChild>
                  <Link href="/search">
                    <Search className="h-4 w-4 mr-2" />
                    기업 검색하기
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
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
