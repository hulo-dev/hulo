"use client";
import Featured from "@/app/(components)/(Featured)/Featured";
import ProjectItem from "@/app/(components)/(ProjectItem)/ProjectItem";
import Feedback from "@/app/(components)/Feedback/Feedback";
import { createClient } from "@prismicio/client";
import { notFound } from "next/navigation";


export default async function ProjectItems({ params }) {
  const client = createClient("hulo2");
  const project_handle = params.handle;
  const projects = await client.getByType("project");

  const project_item = await client
    .getByUID("project_item", project_handle)
    .catch(() => notFound);
  const featured = projects.results.filter((e) =>
    e.tags.some((tag) => tag == "featured")
  );

  return (
    <div>
      <ProjectItem data={project_item?.data} />
      <Feedback />
      <Featured data={featured} />
    </div>
  );
}



export async function getStaticPaths() {
  const client = createClient("hulo2")

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  }
}