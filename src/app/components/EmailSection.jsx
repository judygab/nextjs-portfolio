"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Test EmailJS connection
  const testEmailJS = () => {
    const serviceID = "service_1x0svai";
    const templateID = "template_h319xqd"; 
    const publicKey = "79x3ZduLXUMHgeEnS";
    
    console.log("🔍 EmailJS Test Configuration:");
    console.log("Service ID:", serviceID ? `${serviceID.substring(0, 8)}...` : "❌ Missing");
    console.log("Template ID:", templateID ? `${templateID.substring(0, 8)}...` : "❌ Missing");
    console.log("Public Key:", publicKey ? `${publicKey.substring(0, 8)}...` : "❌ Missing");
    console.log("Environment check:", {
      serviceID: !!serviceID,
      templateID: !!templateID,  
      publicKey: !!publicKey
    });
    
    if (!serviceID || !templateID || !publicKey) {
      console.error("❌ EmailJS not properly configured");
      console.error("Missing variables:", {
        serviceID: !serviceID,
        templateID: !templateID,
        publicKey: !publicKey
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Test configuration first
      if (!testEmailJS()) {
        setError('Email not configured yet. Please contact me directly via the social links above.');
        return;
      }

      // EmailJS configuration - TEMPORARY HARDCODED FOR TESTING
      const serviceID = "service_1x0svai";
      const templateID = "template_h319xqd";
      const publicKey = "79x3ZduLXUMHgeEnS";
      
      // Log what we're using
      console.log("🔧 HARDCODED VALUES FOR TESTING:");
      console.log("Service ID:", serviceID);
      console.log("Template ID:", templateID);

      // Check if EmailJS is configured
      if (!serviceID || !templateID || !publicKey || 
          serviceID === 'demo_service' || templateID === 'demo_template' || publicKey === 'demo_public_key') {
        console.log('📧 EmailJS Configuration Needed');
        console.log('Please follow the setup guide in EMAILJS_SETUP.md');
        setError('Email not configured yet. Please check the setup guide or contact me directly via the social links above.');
        return;
      }

      // Test network connectivity first
      console.log('🌐 Testing network connectivity...');
      try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        console.log('✅ Network connectivity OK');
      } catch (networkErr) {
        console.error('❌ Network test failed:', networkErr);
        throw new Error('Network connection failed. Please check your internet connection.');
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      const templateParams = {
        to_name: 'Pawina',
        from_name: e.target.email.value,
        from_email: e.target.email.value,
        message: e.target.message.value,
        subject: e.target.subject.value,
      };

      console.log('📧 Sending email via EmailJS...');
      console.log('Service ID:', serviceID);
      console.log('Template ID:', templateID);
      console.log('Public Key:', publicKey?.substring(0, 8) + '...');
      console.log('Template Params:', templateParams);
      
      const response = await emailjs.send(
        serviceID,
        templateID, 
        templateParams
      );

      console.log('✅ Email sent successfully:', response);
      setEmailSubmitted(true);
      // Reset form
      e.target.reset();
      
    } catch (err) {
      console.error("❌ Error sending email:", err);
      
      // More specific error messages
      let errorMessage = "Failed to send message. Please try again or contact me directly.";
      
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = "Network error. Please check your connection and try again.";
      } else if (err.status === 400) {
        errorMessage = "Email configuration error. Please contact me directly via the social links above.";
      } else if (err.status === 401) {
        errorMessage = "Authentication failed. Please try again later.";
      } else if (err.text && err.text.includes('service')) {
        errorMessage = "Email service unavailable. Please try the contact links above.";
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2 transition-colors duration-300">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-700 dark:text-[#ADB7BE] mb-4 max-w-md transition-colors duration-300">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start flex-wrap">
          {/* GitHub Link */}
          <Link
            href="https://github.com/Pawina85"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-800 dark:hover:border-white hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Visit GitHub Profile"
          >
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/in/pawina-chanthachon"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Visit LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
          </Link>

          {/* WhatsApp Link */}
          <Link
            href="https://wa.me/66610296940"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900 border-2 border-gray-200 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Contact via WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300" />
          </Link>

          {/* Email Link */}
          <Link
            href="mailto:pawinachanthachon@gmail.com"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900 border-2 border-gray-200 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <p className="text-green-600 dark:text-green-400 font-medium">
              ✅ Email sent successfully!
            </p>
            <p className="text-sm text-green-500 dark:text-green-300 mt-2">
              Thank you for reaching out. I&apos;ll get back to you soon!
            </p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="mt-4 text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 underline transition-colors duration-300"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {error}
                </p>
              </div>
            )}
            
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-900 dark:text-white block mb-2 text-sm font-medium transition-colors duration-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                disabled={isSubmitting}
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="pawinachanthachon@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                disabled={isSubmitting}
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                disabled={isSubmitting}
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-br from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {/* Debug button - remove in production */}
             
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
