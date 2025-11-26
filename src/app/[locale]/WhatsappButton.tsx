"use client";

import { useEffect, useState } from "react";

type ContactInfoType = {
  address: { en: string; ar: string };
  phone: { en: string; ar: string };
  email: string;
  whatsappNumber: string;
};
export function WhatsappButton() {
  const [contactData, setContactData] = useState<ContactInfoType>();
  useEffect(() => {
    fetch("https://api.ebmksa.com/contact-info")
      .then((data) => data.json())
      .then((finalData) => setContactData(finalData));
  }, []);
  return (
    <a
      href={`https://wa.me/${contactData?.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="white"
        viewBox="0 0 448 512"
      >
        <path d="M380.9 97.1C339-3.9 226.8-33.7 136.5 18.5 61.3 60-5.5 150.1 1.6 249.3c2.8 40.6 14.6 79.1 35.4 112.9L0 480l122.4-32.5c31.8 17.5 67.5 26.7 103.7 26.5h.1C337.7 474 448 366.1 448 232.5c0-45.8-12.8-90.4-37.1-128.3zM224.3 438.2c-30.1.1-59.7-8-85.4-23.2l-6.1-3.6-72.6 19.2 19.4-70.8-3.9-6.3c-19.5-31.1-30.2-67.1-30.2-104C45.5 170.1 129.9 85 233.3 85c88.2 0 167.3 57.3 167.3 147.4 0 104.4-100.5 205.8-176.3 205.8zm101.8-138.2c-5.6-2.8-33.1-16.3-38.2-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12.1 1.4s-23.6-8.7-45-27.8c-16.6-14.8-27.8-33.1-31-38.7s-.3-8.6 2.5-11.4c2.6-2.6 5.6-6.8 8.5-10.3 2.9-3.5 3.7-6.1 5.6-10.1 1.9-3.9.9-7.4-.5-10.2s-12.5-30.1-17.1-41.3c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.8-.2-10.4-.2s-9.5 1.4-14.5 6.8c-5 5.6-19 18.5-19 45.1s19.5 52.3 22.2 55.9c2.8 3.7 38.4 58.7 93.3 82.3 13 5.6 23.1 8.9 31 11.4 13 4.1 24.8 3.5 34.1 2.1 10.4-1.6 33.1-13.5 37.7-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.5-5-3.9-10.6-6.7z" />
      </svg>
    </a>
  );
}
