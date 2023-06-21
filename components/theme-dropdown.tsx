'use client'

import { useTheme } from 'next-themes'
import { Menu } from '@headlessui/react'
import {
  LaptopIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'

export function ThemeDropdown() {
  const { setTheme } = useTheme()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex text-sm rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <ChevronDownIcon className="ml-1 h-3 w-3" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 mt-2 w-35 origin-top-right bg-white/90 divide-y divide-gray-100 rounded-md dark:bg-zinc-800/90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            <button
              onClick={() => setTheme('light')}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              <SunIcon className="mr-2 h-3 w-3" aria-hidden="true" />
              Light
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={() => setTheme('dark')}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              <MoonIcon className="mr-2 h-3 w-3" aria-hidden="true" />
              Dark
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={() => setTheme('system')}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              <LaptopIcon className="mr-2 h-3 w-3" aria-hidden="true" />
              System
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}
