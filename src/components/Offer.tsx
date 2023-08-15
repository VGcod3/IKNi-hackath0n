import { train } from "@/app/fonts"
import { MagicWandIcon, PersonIcon, RocketIcon, BackpackIcon } from "@radix-ui/react-icons";

const features = [
    {
        name: 'Розвинути активну молодь',
        description:
            'Розвиток студентів та пошук талантів',
        icon: RocketIcon,

    },
    {
        name: 'Підвищити впізнаваність',
        description: `Реклама у соцмережах 
        (загальна аудиторія 2000+ людей)
        реклама у день проведення квесту`,
        icon: MagicWandIcon,
    },
    {
        name: 'Виявлення талантів',
        description:
            'Резюме учасників та полегшення роботи рекрутерів',
        icon: BackpackIcon,
    },
    {
        name: 'Аудиторія',
        description:
            'Отримайте зацікавлену аудиторію в 30-60 людей (у день проведення квесту)',
        icon: PersonIcon,
    },
]

export default function Offer() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='offer'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <h2 className={`${train.className} block-title`}>Що ми пропонуємо?</h2>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <div className="text-lg font-semibold font-mono leading-7 text-gray-200">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br  from-blue-600 to-violet-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </div>
                                    <div className="mt-2 text-base leading-7 text-gray-400">{feature.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}