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
import { ProjectForm } from "./ProjectForm";
import Link from "next/link";

type Project = {
  _id: string;
  image: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    const res = await fetch("http://72.61.187.71:3001/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddOrEdit = async (formData: FormData) => {
    if (editingProject) {
      // Editing existing project
      const res = await fetch(
        `http://72.61.187.71:3001/projects/${editingProject._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      await res.json();
      setEditingProject(null);
    } else {
      // Adding new project
      const res = await fetch("http://72.61.187.71:3001/projects", {
        method: "POST",
        body: formData,
      });
      await res.json();
    }
    fetchProjects();
  };
  const onDelete = async (id: string) => {
    const res = await fetch(`http://72.61.187.71:3001/projects/${id}`, {
      method: "DELETE",
    });
    await res.json();
    fetchProjects();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      {/* Header + Add Project */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          Projects Management
        </h1>

        <Dialog
          open={!!editingProject}
          onOpenChange={() => setEditingProject(null)}
        >
          <DialogTrigger asChild>
            <button className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl shadow-sm hover:bg-green-700 transition">
              + Add Project
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingProject ? "Edit Project" : "Add a New Project"}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              {/* Use your existing ProjectForm */}
              <ProjectForm
                // prefill only if editing
                defaultValues={
                  editingProject
                    ? {
                        nameEN: editingProject.title.en,
                        nameAR: editingProject.title.ar,
                        desEN: editingProject.description.en,
                        desAR: editingProject.description.ar,
                        // projectImage cannot prefill a File input, leave blank
                        projectImage: undefined,
                      }
                    : undefined
                }
                onSubmit={handleAddOrEdit}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="w-full border rounded-2xl shadow-sm bg-white overflow-hidden">
        <div className="max-h-[60vh] overflow-y-auto">
          <Table className="w-full text-[1rem] border-collapse">
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name (EN)</TableHead>
                <TableHead>Name (AR)</TableHead>
                <TableHead>Description (EN)</TableHead>
                <TableHead>Description (AR)</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <TableRow key={project._id}>
                    <TableCell>
                      <Link
                        href={`http://72.61.187.71:3001/uploads/${project.image}`}
                        target="_blank"
                        className="underline text-green-600 font-semibold"
                      >
                        Browse Image
                      </Link>
                    </TableCell>
                    <TableCell>{project.title.en}</TableCell>
                    <TableCell dir="rtl">{project.title.ar}</TableCell>
                    <TableCell>{project.description.en}</TableCell>
                    <TableCell dir="rtl">{project.description.ar}</TableCell>
                    <TableCell>
                      <button
                        className="cursor-pointer px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[1rem] hover:bg-blue-700 transition"
                        onClick={() => setEditingProject(project)}
                      >
                        Edit
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        className="  cursor-pointer px-3 py-1.5 bg-red-600 text-white rounded-lg text-[1rem] hover:bg-red-700 transition"
                        onClick={() => onDelete(project._id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-gray-500"
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
