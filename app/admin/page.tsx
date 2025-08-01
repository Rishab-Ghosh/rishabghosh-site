'use client';

import { useState } from 'react';

export default function Admin() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogUrl, setBlogUrl] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          blogTitle, 
          blogUrl: blogUrl || 'https://www.rishabghosh.org/blog' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
        setBlogTitle('');
        setBlogUrl('');
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Failed to send notification');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              ADMIN
            </h1>
            <p className="text-xl font-inter text-text/60">
              Send email notifications to blog subscribers
            </p>
          </div>

          <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50">
            <form onSubmit={handleSendNotification} className="space-y-6">
              <div>
                <label className="block text-sm font-inter font-medium text-text mb-2">
                  Blog Title *
                </label>
                <input
                  type="text"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="e.g., Why I Built a Volatility Surface Dashboard"
                  required
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-text mb-2">
                  Blog URL (optional)
                </label>
                <input
                  type="url"
                  value={blogUrl}
                  onChange={(e) => setBlogUrl(e.target.value)}
                  placeholder="https://www.rishabghosh.org/blog/your-post"
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                />
              </div>

              {message && (
                <div className={`p-4 rounded-lg ${
                  message.includes('✅') 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending || !blogTitle}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Email Notification'}
              </button>
            </form>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg">
              <h3 className="font-space font-semibold text-primary mb-2">Email Preview:</h3>
              <div className="text-sm text-text/70 space-y-1">
                <p><strong>From:</strong> rishab_14@icloud.com</p>
                <p><strong>Subject:</strong> {blogTitle || '[Blog Title]'} - New Post</p>
                <p><strong>Body:</strong> Hey there! I just uploaded a new blog! Check it out!</p>
                <p><strong>Link:</strong> {blogUrl || 'https://www.rishabghosh.org/blog'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 