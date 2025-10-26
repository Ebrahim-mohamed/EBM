"use client";

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

import { ProjectForm } from "./ProjectForm";

// ✅ Define a type for your projects
type Project = {
  id: string;
  imageUrl: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
};

export default function Projects() {
  // ✅ Type-safe empty array
  const projects: Project[] = [];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      {/* --- Header Section --- */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          Projects Management
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <button className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl shadow-sm hover:bg-green-700 transition">
              + Add Project
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Add a New Project
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <ProjectForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* --- Table Section --- */}
      <div className="w-full border rounded-2xl shadow-sm bg-white overflow-hidden">
        <div className="max-h-[60vh] overflow-y-auto">
          <Table className="w-full text-[1rem] border-collapse">
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              <TableRow>
                <TableHead className="text-gray-700 text-sm font-semibold w-[12rem]">
                  Project Image
                </TableHead>
                <TableHead className="text-gray-700 text-sm font-semibold">
                  Project Name (EN)
                </TableHead>
                <TableHead className="text-gray-700 text-sm font-semibold">
                  Project Name (AR)
                </TableHead>
                <TableHead className="text-gray-700 text-sm font-semibold">
                  Description (EN)
                </TableHead>
                <TableHead className="text-gray-700 text-sm font-semibold">
                  Description (AR)
                </TableHead>
                <TableHead className="text-center text-gray-700 text-sm font-semibold w-[10rem]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <TableRow
                    key={project.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>
                      <img
                        src={project.imageUrl || "/placeholder.jpg"}
                        alt={project.nameEn}
                        className="w-24 h-16 object-cover rounded-lg border"
                      />
                    </TableCell>
                    <TableCell>{project.nameEn}</TableCell>
                    <TableCell className="text-right">
                      {project.nameAr}
                    </TableCell>
                    <TableCell className="max-w-[20rem] whitespace-normal break-words">
                      {project.descriptionEn}
                    </TableCell>
                    <TableCell className="max-w-[20rem] whitespace-normal break-words text-right">
                      {project.descriptionAr}
                    </TableCell>
                    <TableCell className="text-center">
                      <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-gray-500 text-lg font-medium"
                  >
                    No projects yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
