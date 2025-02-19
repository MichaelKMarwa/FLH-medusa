// src/app/not-found.tsx
import React from 'react';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans antialiased">
        <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
          <h1 className="text-2xl font-semibold text-gray-800">Page not found</h1>
          <p className="text-small-regular text-gray-600">The page you tried to access does not exist.</p>
          <a className="flex gap-x-1 items-center group" href="/">
            <p className="font-normal font-sans txt-medium text-blue-500">Go to frontpage</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill="none"
              className="group-hover:rotate-45 ease-in-out duration-150"
              color="var(--fg-interactive)"
            >
              <path
                stroke="var(--fg-interactive)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
              />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}