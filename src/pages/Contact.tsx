import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl font-serif text-gray-900 dark:text-white">Get in Touch</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions about our products or need skincare advice? We're here to help!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>support@lumiere.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>123 Skincare Street, Beauty City, BC 12345</span>
              </div>
            </div>
          </div>

          <form className="space-y-6 animate-fadeIn" style={{ animationDelay: '150ms' }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}