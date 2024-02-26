import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <Link href="/">
        <a className="font-bold">AI Chats</a>
      </Link>
    </header>
  );
};

export default Header;