import React from 'react';
import AIList from '../components/AIList';

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center my-8">AI Chats</h1>
      <AIList />
    </div>
  );
}