import React from 'react';
import Link from 'next/link';

const AIList = () => {
  const aiChats = [
    { name: 'ChatGPT', ownedBy: 'OpenAI', site: 'https://openai.com', logo: '/logos/openai.png', description: 'ChatGPT is a large-scale, multi-turn, Transformer-based language model trained by OpenAI.', capabilities: 'Text generation, Conversational AI', price: 'Free tier available, paid plans start at $20/month' },
    { name: 'Bing Copilot', ownedBy: 'Microsoft', site: 'https://www.microsoft.com', logo: '/logos/microsoft.png', description: 'Bing Copilot is a conversational AI developed by Microsoft.', capabilities: 'Text generation, Conversational AI', price: 'Free tier available, paid plans start at $20/month' },
    { name: 'Claude', ownedBy: 'Claude Inc.', site: 'https://claude.ai', logo: '/logos/claude.png', description: 'Claude is a conversational AI developed by Claude Inc.', capabilities: 'Text generation, Conversational AI', price: 'Free tier available, paid plans start at $20/month' },
    { name: 'Hugging Face Chat', ownedBy: 'Hugging Face', site: 'https://huggingface.co', logo: '/logos/huggingface.png', description: 'Hugging Face Chat is a conversational AI developed by Hugging Face.', capabilities: 'Text generation, Conversational AI', price: 'Free tier available, paid plans start at $20/month' },
    // Add more AI chats as needed
  ];

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Logo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owned By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Visit Site
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {aiChats.map((chat, chatIdx) => (
                  <tr key={chatIdx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <img src={chat.logo} alt={chat.name} className="h-10 w-10 rounded-full" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <Link href={`/ai/${chat.name.toLowerCase().replace(/ /g, '')}`}>
                          <a>{chat.name}</a>
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{chat.ownedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      <a href={chat.site} target="_blank" rel="noopener noreferrer">Visit Site</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIList;