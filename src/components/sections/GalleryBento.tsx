"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Project Site Inspection",
    description: "On-ground progress documentation across active development sites.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Coastal Survey",
    description: "Coastal and environmental site context for regulatory assessment.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Urban Infrastructure",
    description: "Infrastructure corridors, access roads and city development zones.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Site Coordination",
    description: "Team visits for project planning, review and client coordination.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Completed Structure",
    description: "Completed project milestones and built environment outcomes.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-2 lg:col-span-2",
  },
  {
    title: "Compliance Review",
    description: "Documentation, drawings and technical review references.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Redevelopment Zone",
    description: "Urban redevelopment locations prepared for future transformation.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-2 lg:col-span-2",
  },
  {
    title: "Environmental Context",
    description: "Green buffers, natural surroundings and ecological site references.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Construction Progress",
    description: "Structural work, equipment movement and active site execution.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Project Planning",
    description: "Technical discussions, layouts and project strategy sessions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Site Access Roads",
    description: "Approach roads and infrastructure connectivity documentation.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
    className: "row-span-2",
  },
  {
    title: "Urban Skyline",
    description: "City-scale development, planning and infrastructure context.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Marine Edge",
    description: "Waterfront and coastal edge references for CRZ-related projects.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Field Documentation",
    description: "Visual records captured during site surveys and inspections.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "High-Rise Development",
    description: "Premium urban project and real estate development references.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-2 lg:col-span-2",
  },
  {
    title: "Infrastructure Bridge",
    description: "Connectivity and civic infrastructure assets across project regions.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Green Development",
    description: "Environment-sensitive planning with sustainability-led project vision.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Technical Mapping",
    description: "Planning references, survey notes and technical project mapping.",
    image:
      "https://images.unsplash.com/photo-1581091870622-1e7e9e95fca4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Corporate Consultation",
    description: "Client meetings, project reviews and consultancy discussions.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Project Handover",
    description: "Final review moments and completed project documentation.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-2 lg:col-span-2",
  },
];

export default function GalleryBento() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    if (activeImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  return (
    <>
      <div className="mt-12 grid grid-flow-dense auto-rows-[155px] grid-cols-2 gap-4 sm:auto-rows-[180px] lg:auto-rows-[220px] lg:grid-cols-4 lg:gap-5">
        {galleryItems.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveImage(item)}
            className={`group relative overflow-hidden rounded-[1.5rem] bg-[#071b3a] text-left shadow-sm outline-none ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-[#c99a2e] sm:rounded-[2rem] ${
              item.className ?? ""
            }`}
            aria-label={`Open ${item.title} image`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031126]/95 via-[#031126]/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <p className="text-sm font-black leading-tight text-white sm:text-lg">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-white/80 sm:mt-2 sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#031126]/85 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-black text-[#071b3a] shadow-lg transition hover:scale-105"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[78vh] w-full rounded-[1.5rem] object-contain"
              />

              <div className="px-4 py-4 sm:px-6">
                <p className="text-xl font-black text-[#071b3a]">
                  {activeImage.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#071b3a]/70">
                  {activeImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}