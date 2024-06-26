import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSnapchat, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Copyright from './Copyright'
const Footer = () => {
  return (
    <div className="bg-dark-magenta py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-blue">
          Connect with us at our socials
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <FontAwesomeIcon
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-magenta"
            icon={faWhatsapp}
          />
          <FontAwesomeIcon
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-magenta"
            icon={faInstagram}    
          />
          <FontAwesomeIcon
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-magenta"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 text-magenta"
            icon={faTiktok}
            
          />
          <FontAwesomeIcon
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 text-magenta"
            icon={faSnapchat}            
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-dark-magenta py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-blue sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-light-grayish-red">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-blue shadow-sm ring-1 ring-inset ring-gray-blue focus:ring-2 focus:ring-inset focus:ring-gray-blue sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-dark-green px-3.5 py-2.5 text-sm font-semibold text-gray-blue shadow-sm hover:bg-magenta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-magenta p-2 ring-1 ring-dark-magenta">
                <CalendarDaysIcon className="h-6 w-6 text-gray-blue " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-blue">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-light-grayish-red">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-magenta p-2 ring-1 ring-dark-magenta">
                <HandRaisedIcon className="h-6 w-6 text-gray-blue " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-blue">No spam</dt>
              <dd className="mt-2 leading-7 text-light-grayish-red">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Footer