"use client"
// # Code by AkinoAlice@TyrantRey

import { ThemeSwitch } from "@/app/components/navigation/themeSwitch"
import { QuestionInput } from "@/app/components/page/questionInput"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] pt-3">
      <header className="shadow w-full py-3 pt-5 dark:shadow-gray-300">
        <div className="container mx-auto flex items-center justify-end">
          <ThemeSwitch />
          <nav className="flex space-x-4 justify-end">
          </nav>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="w-full flex justify-center">
          <QuestionInput />
        </div>
      </main>

      <footer className="row-start-3">
        {/* Footer content if needed */}
      </footer>
    </div>
  );
}