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
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="h-8 w-8"
      />
    </a>
  );
}
