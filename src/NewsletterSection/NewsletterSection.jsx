import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="bg-gray-100 py-12 mt-10">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-600 mb-6">Stay up to date with our latest news, articles, and special offers by subscribing to our newsletter.</p>
                <form className="flex flex-col sm:flex-row justify-center items-center">
                    <input type="email" placeholder="Your email address" className="w-full sm:w-auto px-4 py-3 mb-2 sm:mb-0 sm:mr-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="btn bg-red-600 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default NewsletterSection;