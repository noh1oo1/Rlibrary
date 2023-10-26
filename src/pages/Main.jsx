import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'

const user = {
  name: '',
  email: '',
  imageUrl:'https://lh3.googleusercontent.com/a/ACg8ocKCkSO6hoVCnvbGBtjo2zEQ4-PN4rMi5V6A04Ma3Qe6VQ=s576-c-no',
}
const navigation = [
  { name: '도서목록', href: '#', current: true },
  { name: '이달의 도서 랭킹', href: '#', current: false },
]
const userNavigation = [
  { name: '대여이력', href: '#' },
  { name: '개선 및 아이디어 제안', href: '#' },
  { name: '로그아웃', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        className="h-10 w-10"
                        src="https://img.icons8.com/color/96/google-books.png"
                        alt="알서재 로고"
                      />
                    </div>

                    {/* 메뉴 */}
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 알람 */}
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* 프로필 메뉴 */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="프로필 이미지" />
                          </Menu.Button>
                        </div>
                          <Menu.Items className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
            {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">도서</h1> */}
        <main>
          <Search />
          <Card />
        </main>
      </div>
    </>
  )
}