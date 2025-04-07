import { ContentSection } from "../../ui/ContentSection/ContentSection"
import { Hero } from "../../ui/Hero/Hero"
import { LessSection } from "../../ui/LessSection/LessSection"

export const Main = () => {
    return (
        <main className="main">
            <section className="hero">
                <Hero />
            </section>
            <section className="content">
                <ContentSection />
            </section>
            <section className="less">
                <LessSection />
            </section>
        </main>
    )
}