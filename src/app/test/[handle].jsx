'use client'
import Featured from "@/app/(components)/(Featured)/Featured";
import ProjectItem from "@/app/(components)/(ProjectItem)/ProjectItem";
import Feedback from "@/app/(components)/Feedback/Feedback";
import { createClient } from "@prismicio/client";



const client = createClient("hulo2");
export default async function ProjectItems({ params = null}) {
  try {
    const project_handle = params.handle;
    const projects = await client.getByType("project");
  
    const project_item = await client.getByUID('project_item', project_handle);
    const featured = projects.results.filter((e) =>
      e.tags.some((tag) => tag == "featured")
    );
  
   
    return (
      <div>
        <ProjectItem data={project_item.data} /> 
        <Feedback />
        <Featured data={featured} /> 
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>
          Is not page
        </h1>
      </div>
    )
  }
 
}

