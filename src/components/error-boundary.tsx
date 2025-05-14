'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-700 mb-6">
          We are sorry, but something went wrong. Our team has been notified.
        </p>
        {error.message && (
          <div className="bg-red-50 p-4 rounded-md mb-6">
            <p className="text-sm text-red-800">{error.message}</p>
          </div>
        )}
        <div className="flex flex-col space-y-3">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Return to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}