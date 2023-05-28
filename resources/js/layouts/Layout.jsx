import React from 'react';
// import { Head } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
      <div>
          <Head>
              <title>My App</title>
              <meta type="description" name="description" content="Information about My App" />
              {/* <meta type="description" content="Information about My App" head-key="description"> */}
          </Head>
          <section className="p-6 bg-gray-200">
              <header className="flex justify-between">
                  <div className="flex item-center">
                      <h1 className="font-bold text-lg">My App</h1>
                      <p className="text-sx ml-4">
                          Welcome back,{" "}
                          <span className="font-bold text-gray-600">
                              {{ username }}
                          </span>
                          !
                      </p>
                  </div>
                  <Navbar />
              </header>
          </section>
          <section className="p-6">
              <div className="max-w-3xl mx-auto">
                  {/* <!-- <iframe
                className="mb-6"
                width="100%"
                frameborder="no"
                scrolling="no"
                seamless
                src="https://player.simplecast.com/fd0bd2ba-c553-466c-a060-b144797ce369?dark=false"
                /> --> */}
                  <slot />
              </div>
          </section>
      </div>
  );
}

export default Layout
