import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ranks = [
  {
    name: "Игрок",
    level: 1,
    color: "text-gray-400",
    bgColor: "bg-gray-600/20",
    borderColor: "border-gray-600",
    price: "Бесплатно",
    features: ["Базовый чат", "Стандартные команды", "Общие территории"],
    current: true,
    progress: 75,
  },
  {
    name: "VIP",
    level: 2,
    color: "text-neon-green",
    bgColor: "bg-emerald-600/20",
    borderColor: "border-neon-green",
    price: "199₽",
    features: ["Цветной ник", "/fly на спавне", "Приватные сундуки", "+2 дома"],
    current: false,
    progress: 0,
  },
  {
    name: "PREMIUM",
    level: 3,
    color: "text-neon-blue",
    bgColor: "bg-blue-600/20",
    borderColor: "border-neon-blue",
    price: "399₽",
    features: [
      "Эффекты частиц",
      "/god 30 мин",
      "Личный варп",
      "+5 домов",
      "Кит раз в день",
    ],
    current: false,
    progress: 0,
  },
  {
    name: "ELITE",
    level: 4,
    color: "text-neon-purple",
    bgColor: "bg-purple-600/20",
    borderColor: "border-neon-purple",
    price: "699₽",
    features: [
      "Смена погоды",
      "/heal без кд",
      "Телепорт к игрокам",
      "+10 домов",
      "2 кита в день",
    ],
    current: false,
    progress: 0,
  },
  {
    name: "LEGEND",
    level: 5,
    color: "text-neon-pink",
    bgColor: "bg-pink-600/20",
    borderColor: "border-neon-pink",
    price: "999₽",
    features: [
      "Креатив в доме",
      "Смена времени",
      "Неограниченные дома",
      "3 кита в день",
      "Особый тег",
    ],
    current: false,
    progress: 0,
  },
];

export default function RankSystem() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-4">
            Система Рангов
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Прокачай свой статус на сервере! Каждый ранг открывает новые
            возможности и привилегии
          </p>
        </div>

        {/* Current Rank Progress */}
        <div className="mb-12">
          <Card className="bg-dark-card/80 border-neon-purple/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Твой прогресс
                  </h3>
                  <p className="text-gray-400">Игрок → VIP</p>
                </div>
              </div>
              <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                Уровень 1
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Прогресс до следующего ранга</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-3 bg-dark-bg">
                <div className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full transition-all duration-500" />
              </Progress>
            </div>
          </Card>
        </div>

        {/* Ranks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ranks.map((rank, index) => (
            <Card
              key={rank.name}
              className={`relative p-6 transition-all duration-300 hover:scale-105 ${
                rank.current
                  ? "bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 border-neon-purple shadow-lg shadow-neon-purple/25"
                  : "bg-dark-card/60 border-dark-border hover:border-neon-purple/50"
              }`}
            >
              {/* Rank Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${rank.bgColor} ${rank.borderColor} border mb-3`}
                >
                  <Icon name="Crown" className={rank.color} size={16} />
                  <span className={`font-semibold ${rank.color}`}>
                    {rank.name}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {rank.price}
                </div>
                {rank.current && (
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50">
                    Текущий ранг
                  </Badge>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {rank.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-neon-green mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Button
                className={`w-full ${
                  rank.current
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white"
                } transition-all duration-300`}
                disabled={rank.current}
              >
                {rank.current ? "Активен" : "Купить"}
              </Button>

              {/* Level Badge */}
              <div className="absolute -top-3 -right-3">
                <div
                  className={`w-8 h-8 rounded-full ${rank.bgColor} ${rank.borderColor} border-2 flex items-center justify-center`}
                >
                  <span className={`text-sm font-bold ${rank.color}`}>
                    {rank.level}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Нужна помощь с выбором? Наша поддержка всегда готова помочь!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg"
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Задать вопрос
            </Button>
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg"
            >
              <Icon name="Gift" className="mr-2" size={18} />
              Промокоды
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
