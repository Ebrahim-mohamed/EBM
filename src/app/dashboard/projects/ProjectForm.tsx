import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProjectInput } from "./ProjectsInput";
import {
  projectFormType,
  projectSchema,
  projectEditFormType,
  projectEditSchema,
} from "@/schema/projectSchema";

const inputs = [
  { name: "Project name in english", nameInSchema: "nameEN" },
  { name: "Project name in arabic", nameInSchema: "nameAR" },
  { name: "Project description in english", nameInSchema: "desEN" },
  { name: "Project description in arabic", nameInSchema: "desAR" },
  { name: "Project image", nameInSchema: "projectImage" },
] as const;

type ProjectFormProps = {
  defaultValues?: Partial<projectFormType | projectEditFormType>;
  onSubmit?: (formData: FormData) => void | Promise<void>;
  isSubmitting?: boolean;
  isEditing?: boolean; // Add this prop
};

export function ProjectForm({
  defaultValues,
  onSubmit,
  isSubmitting = false,
  isEditing = false, // Add this prop
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<projectFormType | projectEditFormType>({
    resolver: zodResolver(isEditing ? projectEditSchema : projectSchema),
    defaultValues,
  });

  const watchImage = watch("projectImage");

  async function internalSubmit(data: projectFormType | projectEditFormType) {
    const formData = new FormData();
    formData.append("nameEN", data.nameEN);
    formData.append("nameAR", data.nameAR);
    formData.append("desEN", data.desEN);
    formData.append("desAR", data.desAR);

    // Handle FileList properly - only append if file is selected
    if (
      data.projectImage &&
      data.projectImage instanceof FileList &&
      data.projectImage.length > 0
    ) {
      formData.append("projectImage", data.projectImage[0]);
    }

    if (onSubmit) {
      await onSubmit(formData);
      reset();
    } else {
      // default behavior: add project
      try {
        const response = await fetch("https://api.ebmksa.com/projects", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Response:", result);
        alert("Project added successfully!");
        reset();
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to add project");
      }
    }
  }

  return (
    <form
      className="flex flex-col gap-[1.5rem] justify-center w-full"
      onSubmit={handleSubmit(internalSubmit)}
    >
      {inputs.map((input) => (
        <ProjectInput
          key={input.name}
          label={
            input.name +
            (input.name === "Project image" && isEditing ? " (optional)" : "")
          }
          place={input.name}
          type={input.name === "Project image" ? "file" : "text"}
          errorMessage={errors[input.nameInSchema]?.message}
          disabled={isSubmitting}
          {...register(input.nameInSchema)}
          {...(input.name === "Project image" ? { accept: "image/*" } : {})}
        />
      ))}
      {watchImage &&
        watchImage instanceof FileList &&
        watchImage.length > 0 && (
          <img
            src={URL.createObjectURL(watchImage[0])}
            className="w-32 h-32 object-cover rounded-md"
            alt="preview"
          />
        )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer px-[1rem] py-[0.5rem] bg-[#4082BF] text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3171ae] transition"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
