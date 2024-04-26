'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { BookIcon, MenuIcon, SearchIcon } from './Icons';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 300;

      setIsHidden(!isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`flex items-center h-16 px-4 border-b shrink-0 md:px-6 sticky top-0 bg-white dark:bg-gray-900 z-50 transition-transform duration-300 transform-gpu ${
        isHidden ? '-translate-y-full' : ''
      }`}
    >
      <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
        <BookIcon className="w-6 h-6" />
        <span>Readdit</span>
      </Link>
      <div className="flex-1 ml-auto flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full ml-auto" size="icon" variant="ghost">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <form className="flex-1 ml-auto sm:flex-initial mt-6">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  placeholder="Search books..."
                  type="search"
                />
              </div>
            </form>
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Discover
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                About
              </Link>
              <Button>Login</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <form className="flex-1 ml-auto sm:flex-initial hidden md:block">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" placeholder="Search books..." type="search" />
        </div>
      </form>
      <Link className="ml-4 hidden md:block" href="#">
        Discover
      </Link>
      <Link className="ml-4 hidden md:block" href="#">
        About
      </Link>
      <Button className="ml-4 hidden md:block">Login</Button>
    </header>
  );
};

export default Header;
