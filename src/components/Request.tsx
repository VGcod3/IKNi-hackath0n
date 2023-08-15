import { train } from "@/app/fonts"

import { CheckIcon } from "@radix-ui/react-icons"

const features = [
    {
        name: 'Перебування в офісі',
        description: 'дозвіл на перебування протягом дня нашого активіста та команд-учасниць (загалом квест займає близько 5 годин)',
    },
    {
        name: 'Завдання для учасників квесту',
        description: 'до 30 хв, було б добре використати особливість Вашої компанії'
    },
    {
        name: 'Презентація',
        description: 'Презентуйте свою компанію в будь-якій формі',
    },
    {
        name: 'Мерч',
        description: 'Брендовані подарунки учасникам'
    }
]

export default function Request() {
    return (

        <div className="bg-white" id='request'>
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
                <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Що нам потрібно</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Яку допомогу від вас нам потрібно для успішного проведення проекту
                    </p>
                </div>
                <div className="mt-12 lg:col-span-2 lg:mt-0">
                    <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 grid-rows-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-violet-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}