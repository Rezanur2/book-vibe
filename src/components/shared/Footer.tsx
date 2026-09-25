import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 mt-12 border-t border-slate-200 dark:border-slate-800 bg-black text-white text-l">
      <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default Footer;
