import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function MinecraftHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.2),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple rounded-full animate-pulse-neon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent mb-4 animate-glow">
            CRAFT ZONE
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-2">
            Майнкрафт Сервер
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Получи донат-привилегии и стань легендой сервера! Уникальные ранги,
            особые способности и эксклюзивный контент ждут тебя.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-4 text-lg font-semibold neon-glow transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            Купить Донат
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Icon name="Users" className="mr-2" size={20} />
            Онлайн: 248/500
          </Button>
        </div>

        {/* Server Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Игроков онлайн", value: "248", icon: "Users" },
            { label: "Всего игроков", value: "12.5K", icon: "TrendingUp" },
            { label: "Активных кланов", value: "156", icon: "Shield" },
            { label: "Донатеров", value: "3.2K", icon: "Crown" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card/50 backdrop-blur-sm rounded-lg p-4 border border-dark-border hover:border-neon-purple/50 transition-all duration-300"
            >
              <Icon
                name={stat.icon as any}
                className="mx-auto mb-2 text-neon-purple"
                size={24}
              />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-neon-purple" size={32} />
      </div>
    </section>
  );
}
