import React from 'react';

const AIList = () => {
  const aiChats = [
    { name: 'ChatGPT', ownedBy: 'OpenAI', site: 'https://openai.com' },
    { name: 'Bing Copilot', ownedBy: 'Microsoft', site: 'https://www.microsoft.com' },
    { name: 'Claude', ownedBy: 'Claude Inc.', site: 'https://claude.ai' },
    { name: 'Hugging Face Chat', ownedBy: 'Hugging Face', site: 'https://huggingface.co' },
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
                      <div className="text-sm text-gray-900">{chat.name}</div>
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