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
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch projects
  const fetchProjects = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch("https://api.ebmksa.com/projects", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setProjects(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.error("Request timeout");
        } else {
          console.error("Error fetching projects:", error);
        }
      } else {
        console.error("Unknown error fetching projects:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Add or Edit project with enhanced error handling
  const handleAddOrEdit = async (formData: FormData): Promise<void> => {
    setIsSubmitting(true);

    try {
      const url = editingProject
        ? `https://api.ebmksa.com/projects/${editingProject._id}`
        : "https://api.ebmksa.com/projects";

      const method = editingProject ? "PUT" : "POST";

      console.log(`Submitting ${method} request to:`, url);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      let response: Response | undefined;
      let responseReceived = false;

      try {
        response = await fetch(url, {
          method,
          body: formData,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        responseReceived = true;
      } catch (fetchError) {
        clearTimeout(timeoutId);

        if (fetchError instanceof Error && fetchError.name === "AbortError") {
          console.log(
            "Request timed out, but checking if project was saved..."
          );
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await fetchProjects();

          alert(
            "Request timed out, but the project may have been saved. Please check the table below."
          );
          setEditingProject(null);
          setOpen(false);
          return;
        }
        throw fetchError;
      }

      if (!responseReceived || !response) {
        throw new Error("No response received from server");
      }

      let result: { message?: string; project?: Project };
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);

        if (response.ok || response.status === 201) {
          console.log("Status was OK, refreshing projects list...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await fetchProjects();

          alert(
            editingProject
              ? "Project updated successfully!"
              : "Project added successfully!"
          );

          setEditingProject(null);
          setOpen(false);
          return;
        }

        throw new Error("Failed to parse server response");
      }

      if (!response.ok) {
        throw new Error(
          result.message || `HTTP error! status: ${response.status}`
        );
      }

      console.log("Success:", result);

      alert(
        editingProject
          ? "Project updated successfully!"
          : "Project added successfully!"
      );

      setEditingProject(null);
      setOpen(false);

      await fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);

      console.log("Refreshing projects list to verify...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await fetchProjects();

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      alert(
        `There was an issue with the request, but the project may have been saved. Error: ${errorMessage}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete project
  const onDelete = async (id: string): Promise<void> => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(`https://api.ebmksa.com/projects/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Project deleted successfully!");
      await fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);

      if (error instanceof Error && error.name === "AbortError") {
        alert(
          "Request timed out. Please refresh and check if deletion occurred."
        );
      } else {
        alert("Failed to delete project. Please try again.");
      }

      await fetchProjects();
    }
  };

  // Handle dialog close
  const handleDialogChange = (isOpen: boolean): void => {
    setOpen(isOpen);
    if (!isOpen) {
      setEditingProject(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      {/* Header + Add Project */}
      <div className="flex items-center gap-6 w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          Projects Management
        </h1>

        <Dialog open={open} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <button
              onClick={() => {
                setEditingProject(null);
                setOpen(true);
              }}
              className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl shadow-sm hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              + Add Project
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingProject ? "Edit Project" : "Add a New Project"}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <ProjectForm
                defaultValues={
                  editingProject
                    ? {
                        nameEN: editingProject.title.en,
                        nameAR: editingProject.title.ar,
                        desEN: editingProject.description.en,
                        desAR: editingProject.description.ar,
                        projectImage: undefined,
                      }
                    : undefined
                }
                onSubmit={handleAddOrEdit}
                isSubmitting={isSubmitting}
                isEditing={!!editingProject}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading projects...
        </div>
      )}

      {/* Table */}
      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="max-h-[calc(100vh-12rem)] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
            <Table className="text-[1rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gradient-to-r from-gray-50 to-gray-100 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[150px]">
                    Image
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[250px]">
                    Name (EN)
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[250px]">
                    Name (AR)
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[400px]">
                    Description (EN)
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[400px]">
                    Description (AR)
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[100px] text-center">
                    Edit
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-6 py-4 font-semibold text-gray-700 min-w-[100px] text-center">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {projects.length > 0 ? (
                  projects.map((project, index) => (
                    <TableRow
                      key={project._id}
                      className={`
                        border-b border-gray-100 
                        hover:bg-blue-50 
                        transition-colors duration-150
                        ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      `}
                    >
                      <TableCell className="whitespace-nowrap px-6 py-4">
                        <Link
                          href={`https://api.ebmksa.com/uploads/${project.image}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 hover:underline transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          View Image
                        </Link>
                      </TableCell>

                      <TableCell className="px-6 py-4">
                        <div
                          className="max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap"
                          title={project.title.en}
                        >
                          {project.title.en}
                        </div>
                      </TableCell>

                      <TableCell dir="rtl" className="px-6 py-4">
                        <div
                          className="max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap"
                          title={project.title.ar}
                        >
                          {project.title.ar}
                        </div>
                      </TableCell>

                      <TableCell className="px-6 py-4">
                        <div
                          className="max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-600"
                          title={project.description.en}
                        >
                          {project.description.en}
                        </div>
                      </TableCell>

                      <TableCell dir="rtl" className="px-6 py-4">
                        <div
                          className="max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-600"
                          title={project.description.ar}
                        >
                          {project.description.ar}
                        </div>
                      </TableCell>

                      <TableCell className="whitespace-nowrap px-6 py-4 text-center">
                        <button
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                          onClick={() => {
                            setEditingProject(project);
                            setOpen(true);
                          }}
                          disabled={isSubmitting}
                        >
                          Edit
                        </button>
                      </TableCell>

                      <TableCell className="whitespace-nowrap px-6 py-4 text-center">
                        <button
                          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 hover:shadow-md active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                          onClick={() => onDelete(project._id)}
                          disabled={isSubmitting}
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-16 text-gray-500"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <svg
                          className="w-16 h-16 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p className="text-lg font-medium">No projects yet</p>
                        <p className="text-sm text-gray-400">
                          Click Add Project to get started!
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
