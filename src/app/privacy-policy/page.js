import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for user data on my personal website"
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-100 min-h-screen p-8 font-sans">
      <section className="max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">Privacy Policy</h1>
        <p className="mb-4 text-gray-800">
          Your privacy is important to me. This Privacy Policy explains how I collect, use, disclose, and protect your personal information when you visit my website or use my services.
        </p>
        <p className="mb-4 text-gray-800">
          By accessing this website or using my services, you agree to the practices described in this Privacy Policy. Please read it carefully to understand how your personal information is managed.
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Information I Collect</h2>
        <p className="mb-2 text-gray-700"><strong>Personal Information:</strong> Includes your name, email address, phone number, and any other information you provide when contacting me or filling out forms.</p>
        <p className="mb-2 text-gray-700"><strong>Usage Information:</strong> Details about your interactions with my website, such as your IP address, browser type, and browsing behavior.</p>
        <p className="mb-4 text-gray-700"><strong>Cookies:</strong> I use cookies to collect information about your browsing preferences and actions on my website.</p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">How I Use Your Information</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>To provide and maintain my website and services.</li>
          <li>To communicate with you and respond to inquiries.</li>
          <li>To improve and personalize your experience.</li>
          <li>To send marketing communications if you have opted in.</li>
          <li>To analyze website usage and trends.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Sharing Your Information</h2>
        <p className="mb-2 text-gray-700"><strong>Service Providers:</strong> I may share your information with trusted service providers who assist in operating my website, provided they agree to keep it confidential.</p>
        <p className="mb-2 text-gray-700"><strong>Legal Requirements:</strong> I may disclose your information in response to legal obligations or requests.</p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Your Choices</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li><strong>Access and Correction:</strong> You can access, update, or correct your information by contacting me.</li>
          <li><strong>Opt-Out:</strong> You can opt out of marketing communications by following the unsubscribe instructions or contacting me directly.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Data Security</h2>
        <p className="mb-4 text-gray-700">I implement reasonable security measures to protect your information, but please be aware that no method of transmission over the internet is completely secure.</p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700">This Privacy Policy may be updated periodically to reflect changes in practices or legal requirements. Any updates will be posted on this page with an updated "Last Revised" date.</p>

      </section>
    </main>
  );
}
