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
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

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

      // Create abort controller with longer timeout for file uploads
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds for file upload

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
          // Wait a moment then refresh to see if it was actually saved
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await fetchProjects();

          // Check if the operation succeeded by looking at the projects list
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

        // If we get here, the request completed but response parsing failed
        // Let's check if the operation actually succeeded
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

      // Show success message
      alert(
        editingProject
          ? "Project updated successfully!"
          : "Project added successfully!"
      );

      // Close dialog and reset state
      setEditingProject(null);
      setOpen(false);

      // Refresh the projects list
      await fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);

      // Even on error, try to refresh the list in case it actually saved
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

      // Refresh anyway to verify
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
      <div className="flex items-center justify-between w-full">
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
              className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl shadow-sm hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
        <div className="w-full border rounded-2xl shadow-sm bg-white overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto">
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
                          href={`https://api.ebmksa.com/uploads/${project.image}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-green-600 font-semibold hover:text-green-700"
                        >
                          Browse Image
                        </Link>
                      </TableCell>

                      <TableCell className="max-w-xs truncate">
                        {project.title.en}
                      </TableCell>
                      <TableCell dir="rtl" className="max-w-xs truncate">
                        {project.title.ar}
                      </TableCell>

                      <TableCell className="max-w-xs truncate">
                        {project.description.en}
                      </TableCell>
                      <TableCell dir="rtl" className="max-w-xs truncate">
                        {project.description.ar}
                      </TableCell>

                      <TableCell>
                        <button
                          className="cursor-pointer px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => {
                            setEditingProject(project);
                            setOpen(true);
                          }}
                          disabled={isSubmitting}
                        >
                          Edit
                        </button>
                      </TableCell>

                      <TableCell>
                        <button
                          className="cursor-pointer px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="text-center py-10 text-gray-500"
                    >
                      No projects yet. Click Add Project to get started!
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
