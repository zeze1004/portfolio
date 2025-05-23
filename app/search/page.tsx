"use client"

import { useState } from "react"
import Link from "next/link"
import { Dumbbell, Search, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // 예시 데이터 - 실제로는 API에서 가져와야 함
  const popularCompanies = [
    { id: "005930", name: "삼성전자", sector: "전자", status: "good" },
    { id: "000660", name: "SK하이닉스", sector: "반도체", status: "moderate" },
    { id: "035420", name: "네이버", sector: "서비스업", status: "good" },
    { id: "035720", name: "카카오", sector: "서비스업", status: "moderate" },
    { id: "005380", name: "현대차", sector: "자동차", status: "good" },
    { id: "051910", name: "LG화학", sector: "화학", status: "good" },
    { id: "068270", name: "셀트리온", sector: "제약", status: "bad" },
    { id: "207940", name: "삼성바이오로직스", sector: "제약", status: "moderate" },
  ]

  const getStatusColor = (status: string) => {
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

  const filteredCompanies = searchQuery
    ? popularCompanies.filter(
        (company) => company.name.toLowerCase().includes(searchQuery.toLowerCase()) || company.id.includes(searchQuery),
      )
    : popularCompanies

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
            <Link href="/search" className="text-sm font-medium text-emerald-500">
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">기업 검색</h1>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="기업명 또는 종목코드 검색"
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>인기 기업</CardTitle>
              <CardDescription>많은 사용자들이 찾는 기업들입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {popularCompanies.slice(0, 4).map((company) => (
                  <Button
                    key={company.id}
                    variant="outline"
                    className="h-auto flex flex-col items-center p-4 gap-2"
                    asChild
                  >
                    <Link href={`/company/${company.id}`}>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(company.status)}`}
                      >
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <span>{company.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>검색 결과</CardTitle>
              <CardDescription>
                {searchQuery ? `"${searchQuery}" 검색 결과입니다` : "모든 기업 목록입니다"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company) => (
                    <Link
                      key={company.id}
                      href={`/company/${company.id}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(company.status)}`}
                        >
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{company.name}</div>
                          <div className="text-sm text-gray-500">
                            {company.id} | {company.sector}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        상세보기
                      </Button>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">검색 결과가 없습니다</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
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
