import { Companies } from "@/components/companies"
import { MyInfo } from "@/components/my-info"
import { Skills } from "@/components/skills"
// import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="relative">
        <MyInfo />
        <Skills />
        <Companies />
        {/* <Projects /> */}
      </div>
    </div>
  )
}
