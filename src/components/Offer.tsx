import { train } from "@/app/fonts"
import { MagicWandIcon, PersonIcon, RocketIcon, BackpackIcon } from "@radix-ui/react-icons";

import AnimatedElement from "@/hooks/AnimatedElement";

const features = [
    {
        name: 'Розвинути активну молодь',
        description:
            'Розвиток студентів та пошук талантів',
        icon: BackpackIcon,

    },
    {
        name: 'Збільшення аудиторії в соц мережах',
        description: `Сотні студентів зможе
            дізнатися більше про
            Вашу компанію задяки
            нашим каналам
            комунікації
            `,
        icon: RocketIcon,
    },
    {
        name: ' Інвестиція в майбутнє країни',
        description:
            `Ви інвестуватимете в
            талановиту молодь, яка
            найімовірніше
            звернеться до Вас при
            пошуку кар
            '
            єрних
            можливостей`,
        icon: MagicWandIcon,
    },
    {
        name: 'Аудиторія',
        description:
            'Отримайте зацікавлену аудиторію з можливістю нетворкінгу в 30-60 людей (у день проведення проекту)',
        icon: PersonIcon,
    },
]

export default function Offer() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='offer'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <AnimatedElement direction='bottom'>
                    <h2 className={`${train.className} block-title`}>Чому нас варто підтримати?</h2>
                </AnimatedElement>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-14 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
                            {features.map((feature, i) => (
                                <AnimatedElement direction={i % 2 ? 'right' : 'left'}>
                                    <div key={feature.name} className="relative pl-20 gap-8">
                                        <div className="text-lg font-semibold font-mono leading-7 text-gray-200">
                                            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br  from-blue-600 to-violet-600">
                                                <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </div>
                                        <div className="mt-2 text-base leading-7 text-gray-400">{feature.description}</div>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}