import { tektur, rubik } from '@/app/fonts'
import { CheckIcon } from "@radix-ui/react-icons"
/* This example requires Tailwind CSS v2.0+ */

const pricing = {
    tiers: [
        {
            title: 'Лайт',
            description: 'набори типу: екобег, блокнот, ручка, стікер ( мінімум 12 штук) .',
            features: ['згадка в пості зі всіма спонсорами', 'окремий пост  в телеграмі Хакатону', 'згадка в статті на сайті університету(якщо така буде)', 'можливість надати свого суддю '],
            cta: 'Monthly billing',
            mostPopular: false,
        },


        {
            title: 'Класік',
            description: 'набори типу: термочашка, павер, худі, термос, рюкзак, блокнот (18 штук)',
            features: [
                'окремий пост  в телеграмі Хакатону ',
                'згадка в статті на сайті університету(якщо така буде) ',
                'можливість надати свого суддю ',
                'реклама в телеграм каналі  ІКНІ (1 окремий пост) ',
                'сторіс в інстаграмі ІКНІ',
                'можливість презентації компанії на події',
            ],
            mostPopular: true,
        },


        {
            title: 'Преміум',
            description: 'курси навчальні в компанії, рюкзаки, чи щось інше з цінних подарунків',
            features: [
                'окремий пост  в телеграмі Хакатону ',
                'згадка в статті на сайті університету(якщо така буде) ',
                'можливість надати свого суддю ',
                'реклама в телеграм каналі  ІКНІ (1 окремий пост) ',
                'сторіс в інстаграмі ІКНІ',
                'можливість презентації компанії на події',
                'база контактів учасників ',
            ],
            mostPopular: false,
        },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8" id='request'>
            <h2 className={`${tektur.className} text-3xl font-bold tracking-tight  text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl`}>
                Варіанти співпраці
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
                Оберіть пакет спонсорства, який підходить вам найбільше
            </p>

            {/* Tiers */}
            <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {pricing.tiers.map((tier) => (
                    <div
                        key={tier.title}
                        className="relative flex flex-col rounded-2xl border border-gray-200 bg-neutral-100 p-8 shadow-lg"
                    >
                        <div className="flex-1">
                            <h3 className="text-3xl font-semibold text-gray-900">{tier.title}</h3>
                            {tier.mostPopular ? (
                                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-500 py-1.5 px-4 text-sm font-semibold text-white">
                                    Most popular
                                </p>
                            ) : null}

                            <p className="mt-6 text-neutral-600 font-bold">{tier.description}</p>

                            {/* Feature list */}
                            <ul role="list" className="mt-6 space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex">
                                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                                        <span className="ml-3 text-gray-500">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}