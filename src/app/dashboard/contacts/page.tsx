"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Localized = { en: string; ar: string };

type ContactInfoType = {
  address: Localized;
  phone: Localized;
  email: string;
};

export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.ebmksa.com/contact-info");
      const data: ContactInfoType = await res.json();
      setContactInfo(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updated: ContactInfoType) => {
    try {
      const res = await fetch("https://api.ebmksa.com/contact-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error("Failed to update");
      setContactInfo(updated);
      alert("Contact info updated successfully");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (loading)
    return <div className="p-8 text-center text-gray-600">Loading...</div>;

  if (!contactInfo)
    return (
      <div className="p-8 text-center text-gray-600">No contact info found</div>
    );

  return (
    <div className="w-full flex flex-col p-6">
      <div className="w-full max-w-[1200px] border rounded-2xl shadow-md bg-white overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full text-[1.1rem] table-auto border-collapse">
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              <TableRow>
                <TableHead className="w-1/3 text-gray-700 text-lg font-semibold">
                  Information (English)
                </TableHead>
                <TableHead className="w-1/3 text-gray-700 text-lg font-semibold">
                  Information (Arabic)
                </TableHead>
                <TableHead className="w-[12rem] text-center text-gray-700 text-lg font-semibold">
                  Field
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 max-w-[25rem] break-words">
                  {contactInfo.address.en}
                </TableCell>
                <TableCell className="p-4 max-w-[25rem] break-words text-right">
                  {contactInfo.address.ar}
                </TableCell>
                <TableCell className="text-center">Address</TableCell>
              </TableRow>

              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 max-w-[25rem] break-words">
                  {contactInfo.phone.en}
                </TableCell>
                <TableCell className="p-4 max-w-[25rem] break-words text-right">
                  {contactInfo.phone.ar}
                </TableCell>
                <TableCell className="text-center">Phone</TableCell>
              </TableRow>

              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 break-words">
                  {contactInfo.email}
                </TableCell>
                <TableCell className="p-4 break-words text-right">
                  {contactInfo.email}
                </TableCell>
                <TableCell className="text-center">Email</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Modify Button */}
        <div className="p-4 flex justify-end">
          <ModifyDialog contactInfo={contactInfo} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}

/* ----------------------
   ModifyDialog Component
----------------------- */
function ModifyDialog({
  contactInfo,
  onSave,
}: {
  contactInfo: ContactInfoType;
  onSave: (updated: ContactInfoType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [addressEn, setAddressEn] = useState(contactInfo.address.en);
  const [addressAr, setAddressAr] = useState(contactInfo.address.ar);
  const [phoneEn, setPhoneEn] = useState(contactInfo.phone.en);
  const [phoneAr, setPhoneAr] = useState(contactInfo.phone.ar);
  const [email, setEmail] = useState(contactInfo.email);

  const handleSave = () => {
    onSave({
      address: { en: addressEn, ar: addressAr },
      phone: { en: phoneEn, ar: phoneAr },
      email,
    });
    setOpen(false);
  };

  useEffect(() => {
    setAddressEn(contactInfo.address.en);
    setAddressAr(contactInfo.address.ar);
    setPhoneEn(contactInfo.phone.en);
    setPhoneAr(contactInfo.phone.ar);
    setEmail(contactInfo.email);
  }, [contactInfo, open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Modify Contact Info
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Modify Contact Information</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <div>
            <label className="font-medium text-sm">Address (EN)</label>
            <input
              className="w-full border rounded-md p-2 text-sm"
              value={addressEn}
              onChange={(e) => setAddressEn(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium text-sm">Address (AR)</label>
            <input
              className="w-full border rounded-md p-2 text-sm text-right"
              value={addressAr}
              onChange={(e) => setAddressAr(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium text-sm">Phone (EN)</label>
            <input
              className="w-full border rounded-md p-2 text-sm"
              value={phoneEn}
              onChange={(e) => setPhoneEn(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium text-sm">Phone (AR)</label>
            <input
              className="w-full border rounded-md p-2 text-sm text-right"
              value={phoneAr}
              onChange={(e) => setPhoneAr(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium text-sm">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
