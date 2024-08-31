
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background">
      <div className="container px-4 py-12 md:px-6 lg:py-24">
        <h1 className="text-3xl font-bold text-center mb-8 sm:text-4xl md:text-5xl">Choose your profile</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary rounded-full p-3 mb-4">
              <UsersIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Representative</h3>
            <p className="text-muted-foreground">Represent your organization and assist those in need.
            They can include legal representatives like attorneys or advocates who provide legal counsel and represent clients in legal matters. In other contexts, representatives might be family members, legal guardians, or authorized agents who handle legal issues or make decisions for someone who is unable to do so themselves. Their role is to ensure that the person they represent receives appropriate legal support and their interests are effectively communicated and protected.
            </p>
            <Link
              href="dashboard/rep"
              className="inline-flex mt-4 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-black"
           
            >
              Select
            </Link>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="bg-secondary rounded-full p-3 mb-4">
              <HeartIcon className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aid Provider</h3>
            <p className="text-muted-foreground">Provide aid and support to those in need.
            Individuals or organizations that provide legal aid are typically referred to as "legal aid providers" or "legal aid organizations." These entities offer free or low-cost legal assistance to individuals who cannot afford traditional legal services. Legal aid providers include nonprofit organizations, legal clinics, and sometimes government agencies that focus on helping people navigate legal issues related to family law, housing, immigration, and more. Their goal is to ensure that even those with limited financial resources have access to legal support and representation.
            </p>
            <Link
              href="/aid"
              className="inline-flex mt-4 h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:bg-black hover:text-white hover:opacity-70"
              prefetch={false}
            >
              Select
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}