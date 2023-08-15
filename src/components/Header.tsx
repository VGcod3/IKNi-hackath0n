import { motion, AnimatePresence } from 'framer-motion';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';
import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';

type MenuItem = {
    name: string;
    href: string;
};

type MobileMenuProps = {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navigation: MenuItem[];
};

export default function Header({
    setMobileMenuOpen,
    navigation,
    mobileMenuOpen,
}: MobileMenuProps) {

    const handleScrollClick = useSmoothScrollTo();

    return (
        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-x-0 top-0 z-50" >
            <Dialog.Root>
                <nav className="flex items-center justify-between px-6 lg:px-8 backdrop-blur-sm" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <span
                            onClick={() => handleScrollClick('#start')}
                            className="-m-1.5 p-1.5 flex align-baseline gap-3 cursor-pointer">
                            <img
                                className="h-20 w-auto"
                                src="/logo.png"
                                alt="logo"
                            />
                        </span>
                    </div>
                    <div className="flex xl:hidden">
                        <Dialog.Trigger asChild>
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </Dialog.Trigger>
                    </div>
                    <div className="hidden xl:flex xl:gap-x-12 ">
                        {navigation.map((item) => (
                            <span
                                key={item.name}
                                onClick={() => { handleScrollClick(item.href) }}
                                className="menu-point"
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                    <div className="hidden xl:flex xl:flex-1 xl:justify-end">
                        <span onClick={() => handleScrollClick('#help')} className="cursor-pointer text-sm font-semibold leading-6 text-gray-200">
                            Підтримати <span aria-hidden="true">&rarr;</span>
                        </span>
                    </div>
                </nav>

                <Dialog.Portal>
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                />

                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: '0%' }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-[#1e234d] from-65% to-[#1e204d] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">


                                            <button
                                                type="button"
                                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <Cross1Icon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="mt-6 flow-root">
                                            <div className="-my-6 divide-y divide-gray-500/10">
                                                <div className="space-y-2 py-6">
                                                    {navigation.map((item) => (
                                                        <span
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                handleScrollClick(item.href)
                                                            }}
                                                            key={item.name}
                                                            className="cursor-pointer transition-all -mx-3 block  px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gradient-to-r hover:shadow-my-pink from-yellow-600 from-30% via-orange-500 to-my-pink"
                                                        >
                                                            {item.name}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="py-6">
                                                    <span
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            handleScrollClick("#help")
                                                        }}
                                                        className="cursor-pointer transition-all -mx-3 block  px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gradient-to-r hover:shadow-my-pink from-yellow-600 from-30% via-orange-500 to-my-pink"
                                                    >
                                                        Підтримати
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </Dialog.Portal>
            </Dialog.Root>
        </motion.header >
    );
}