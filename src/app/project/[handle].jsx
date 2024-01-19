
import { createClient } from "@prismicio/client";
import Featured from "../(components)/(Featured)/Featured";
import Feedback from "../(components)/Feedback/Feedback";
import ProjectItem from "../(components)/(ProjectItem)/ProjectItem";
import { useRouter } from "next/router";


const client = createClient("hulo2");
export default async function ProjectItems() {
  const router = useRouter();
  const project_handle = router.query.handle;
  console.log(project_handle);
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
}
