"use client"
import { Header } from "@/components/profile_ui/header"
import { Body } from "@/components/profile_ui/body"
import { Footer } from "@/components/profile_ui/footer"
export default function Page(){
    return(
        <main className="container mx-auto min-h-screen max-w-5xl p-2 lg:p-8">
            <Header/>
            <Body/>
            <Footer/>
        </main>
    )
}