import { Companies } from "@/components/companies"
import { MyInfo } from "@/components/my-info"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <>
      <MyInfo />
      <Companies />
      <Projects />
    </>
  )
}
