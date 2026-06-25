import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-background/40 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={28} className="text-accent" />
                </div>
                <h3 className="text-foreground font-semibold text-lg">Лицензии</h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                  Прозрачные условия: от базовой до эксклюзивной лицензии. Покупай биты легально для своих треков.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-background/40 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="ListMusic" size={28} className="text-accent" />
                </div>
                <h3 className="text-foreground font-semibold text-lg">Жанры</h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                  Trap, Drill, Hip-Hop, Lo-Fi, R&B и десятки других. Фильтруй по настроению, темпу и тональности.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-background/40 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Headphones" size={28} className="text-accent" />
                </div>
                <h3 className="text-foreground font-semibold text-lg">Прослушивание</h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                  Слушай биты онлайн прямо в плеере, как в любимом музыкальном сервисе. Выбирай лучшее перед покупкой.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm w-28">Платформа</span>
                <span className="text-foreground font-mono text-sm">Маркетплейс битов с лицензиями</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm w-28">Для кого</span>
                <span className="text-foreground font-mono text-sm">Битмейкеры, артисты и продюсеры</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm w-28 shrink-0">Что внутри</span>
                <span className="text-foreground font-mono text-sm">
                  Тысячи битов в разных жанрах, удобный плеер для прослушивания и честные лицензии — продавай свои работы или находи саунд для своего хита.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index