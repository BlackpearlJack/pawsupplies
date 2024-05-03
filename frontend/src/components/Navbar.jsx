import { useState, useContext } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import images from '../constants/images'
import { ShopContext } from '../Context/ShopContext'

//import { PlayCircleIcon, PhoneIcon } from '@heroicons/react/outline'

// Remove unused variable
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// Remove unused function
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <header className="bg-dark-magenta">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pawsupplies</span>
            <img className="h-12 w-auto rounded-full" src={images.logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-blue"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 hover:text-light-grayish-red text-gray-blue">
            Shop
          </Link>          
          <Link to="/cats" className="text-sm font-semibold leading-6 hover:text-light-grayish-red text-gray-blue">
            Cats
          </Link>
          <Link to="/dogs" className="text-sm font-semibold leading-6 hover:text-light-grayish-red text-gray-blue">
            Dogs
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 hover:text-light-grayish-red text-gray-blue">
            Pawsupplies
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {
                localStorage.getItem('auth-token')?<button
                className="text-sm font-semibold leading-6 text-gray-blue"
                        onClick={() => {
                    localStorage.removeItem('auth-token');
                    window.location.replace('/')}
                }>
                        Logout
                </button> :
                <Link to="/loginsignup" className="text-sm font-semibold leading-6 text-gray-blue">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            }

        </div>
        <div className="ml-auto flex items-center">
            {/* Search */}
            <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-blue hover:text-light-grayish-red">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>
            </div>

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
                <Link to="/cart" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-blue group-hover:text-light-grayish-red"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-blue group-hover:text-light-grayish-red">{getTotalCartItems()}</span>
                <span className="sr-only">items in cart, view bag</span>
                </Link>
            </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark-magenta px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pawsupplies</span>
              <img
                className="h-12 w-auto rounded-full"
                src={images.logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-blue hover:bg-magenta"
                >
                  Shop
                </Link>
                <Link
                  to="/cats"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-blue hover:bg-magenta"
                >
                  Cats
                </Link>
                <Link
                  to="/dogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-blue hover:bg-magenta"
                >
                  Dogs
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-blue hover:bg-magenta"
                >
                  Pawsupplies
                </Link>
              </div>
              <div className="py-6">
                  {localStorage.getItem('auth-token')?<button
                      className="text-sm font-semibold leading-6 text-gray-blue"
                      onClick={() => {
                          localStorage.removeItem('auth-token');
                          window.location.replace('/')}
                      }>
                      Logout
                  </button> : <Link
                      to="/loginsignup"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-blue hover:bg-magenta"
                  >
                      Log in
                  </Link>
                  }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar