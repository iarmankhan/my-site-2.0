import COMPANIES from '@/data/companies.json'
import Image from 'next/image';
import { Building2 } from 'lucide-react';

interface ICompany {
  id: string;
  name: string;
  description: string;
  logo: string
}

export function Companies() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Companies I&apos;ve worked with
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANIES.map(company => (
            <Company key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Company({company}: {
  company: ICompany
}) {
  const { logo, name, description } = company
  
  return (
    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl -z-10" />
      
      <div className="p-6 flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm -z-10" />
          <div className="w-full h-full bg-white/10 backdrop-blur-2xl rounded-lg p-2 border border-white/10">
            <Image 
              width={64} 
              height={64} 
              className="w-full h-full object-contain" 
              src={logo} 
              alt={`${name} Logo`} 
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-white mb-1">
            {name}
          </h4>
          <p className="text-blue-200 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
