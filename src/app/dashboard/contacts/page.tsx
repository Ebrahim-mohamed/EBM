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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactInfo() {
  return (
    <div className="w-full flex flex-col  p-6">
      <div className="w-full max-w-[1200px] border rounded-2xl shadow-md bg-white overflow-hidden">
        {/* Scrollable Table Container */}
        <div className="max-h-[400px] overflow-y-auto overflow-x-auto">
          <Table className="w-full text-[1.1rem] table-auto border-collapse">
            {/* Sticky Header */}
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              <TableRow>
                <TableHead className="w-1/3 text-gray-700 text-lg font-semibold">
                  Information in English
                </TableHead>
                <TableHead className="w-1/3 text-gray-700 text-lg font-semibold">
                  Information in Arabic
                </TableHead>
                <TableHead className="w-[10rem] text-center text-gray-700 text-lg font-semibold">
                  Modify Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* Address Row */}
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 max-w-[25rem] whitespace-normal break-words text-gray-800">
                  3919 Makkah Al Mukarramah Rd. - Ar Rabwah Dist. Unit No 8535 -
                  12813 ,06, Riyadh - Saudi Arabia
                </TableCell>

                <TableCell className="p-4 max-w-[25rem] whitespace-normal break-words text-right text-gray-800">
                  ٣٩١٩ طريق مكة المكرمة - حي الربوة - الوحدة رقم ٨٥٣٥ -
                  ١٢٨١٣،٠٦، الرياض - المملكة العربية السعودية
                </TableCell>

                <TableCell className="text-center">
                  <ModifyDialog
                    title="Edit Address"
                    description="You can modify the address information here."
                    defaultValue="3919 Makkah Al Mukarramah Rd. - Ar Rabwah Dist. Unit No 8535 - 12813 ,06, Riyadh - Saudi Arabia"
                  />
                </TableCell>
              </TableRow>

              {/* Number Row */}
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 text-gray-800">
                  +966 50 123 4567
                </TableCell>
                <TableCell className="p-4 text-right text-gray-800">
                  +٩٦٦ ٥٠ ١٢٣ ٤٥٦٧
                </TableCell>
                <TableCell className="text-center">
                  <ModifyDialog
                    title="Edit Phone Number"
                    description="You can modify the phone number here."
                    defaultValue="+966 50 123 4567"
                  />
                </TableCell>
              </TableRow>

              {/* Email Row */}
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-4 text-gray-800">
                  info@ebmprojects.sa
                </TableCell>
                <TableCell className="p-4 text-right text-gray-800">
                  info@ebmprojects.sa
                </TableCell>
                <TableCell className="text-center">
                  <ModifyDialog
                    title="Edit Email Address"
                    description="You can modify the email address here."
                    defaultValue="info@ebmprojects.sa"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

/* ✅ Reusable Dialog Component */
function ModifyDialog({
  title,
  description,
  defaultValue,
}: {
  title: string;
  description: string;
  defaultValue: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
          Modify
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <textarea
            className="w-full border rounded-md p-2 text-sm resize-none h-24"
            defaultValue={defaultValue}
          />
        </div>

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
