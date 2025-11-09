import { Companies } from "@/components/companies"
import { MyInfo } from "@/components/my-info"
// import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative">
        <MyInfo />
        <Companies />
        {/* <Projects /> */}
      </div>
    </div>
  )
}
