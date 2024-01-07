import COMPANIES from '@/data/companies.json'
import Image from 'next/image';

interface ICompany {
  id: string;
  name: string;
  description: string;
  logo: string
}

export function Companies() {
  return (
    <section className="py-2 bg-white sm:py-4 lg:py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 space-y-8 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold p-2 text-center">
          Companies I&apos;ve worked with
        </h2>

        <div className="flex flex-wrap items-center justify-evenly gap-x-3 gap-y-6 mt-6">
          {
            COMPANIES.map(company => {
              return <Company key={company.id} company={company} />
            })
          }
        </div>
      </div>
    </section>
  )
}


function Company({company}: {
  company: ICompany
}) {
  const {
    logo,
    name, description
  } = company
  return (
    <div className="overflow-hidden p-4 flex items-center space-x-4 w-[340px]">
      <Image width={64} height={64} className="w-16 h-16 object-cover rounded-lg" src={logo} alt="Company Logo" />
      <div>
        <h4 className='font-bold mb-1'>
          {name}
        </h4>
        <span>{description}</span>
      </div>
    </div>
  )
}
