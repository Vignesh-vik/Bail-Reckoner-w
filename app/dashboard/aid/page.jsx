import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Component() {
return (
<div className="flex flex-col min-h-screen bg-background">
<main className="flex-1 grid grid-cols-[250px_1fr] gap-6 p-6">
<div className="bg-card text-card-foreground rounded-lg shadow-sm">
<nav className="flex flex-col gap-2 p-4">
<Link href="aid" className="flex items-center gap-2 hover:bg-muted/50 px-3 py-2 rounded-md" prefetch={false}>
<LayoutDashboardIcon className="h-4 w-4" />
Dashboard
</Link>
<Link href="aid/Cases" className="flex items-center gap-2 hover:bg-muted/50 px-3 py-2 rounded-md" >
<BriefcaseIcon className="h-4 w-4" />
Cases
</Link>
<Link href="aid/Clients" className="flex items-center gap-2 hover:bg-muted/50 px-3 py-2 rounded-md" prefetch={false}>
<UserIcon className="h-4 w-4" />
Clients
</Link>
<Link href="#" className="flex items-center gap-2 hover:bg-muted/50 px-3 py-2 rounded-md" prefetch={false}>
<FileIcon className="h-4 w-4" />
Documents
</Link>
<Link href="/Profile" className="flex items-center gap-2 hover:bg-muted/50 px-3 py-2 rounded-md" prefetch={false}>
<SettingsIcon className="h-4 w-4" />
Settings
</Link>
</nav>
</div>
<div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold">Dashboard</h2>
<Button>
<PlusIcon className="h-4 w-4 mr-2" />
New Case
</Button>
</div>
<div className="grid grid-cols-2 gap-6">
<Card>
<CardHeader>
<CardTitle>Pending Cases</CardTitle>
<CardDescription>Cases awaiting action</CardDescription>
</CardHeader>
<CardContent>
<div className="text-4xl font-bold">24</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle>Upcoming Hearings</CardTitle>
<CardDescription>Scheduled court dates</CardDescription>
</CardHeader>
<CardContent>
<div className="text-4xl font-bold">12</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle>Bail Applications</CardTitle>
<CardDescription>Bail requests submitted</CardDescription>
</CardHeader>
<CardContent>
<div className="text-4xl font-bold">18</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle>Overdue Tasks</CardTitle>
<CardDescription>Missed deadlines</CardDescription>
</CardHeader>
<CardContent>
<div className="text-4xl font-bold">6</div>
</CardContent>
</Card>
</div>
<Separator className="my-6" />
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold">Recent Cases</h2>
<Link href="#" className="text-primary hover:underline" prefetch={false}>
View All
</Link>
</div>
<Table>
<TableHeader>
<TableRow>
<TableHead>Client</TableHead>
<TableHead>Case Type</TableHead>
<TableHead>Status</TableHead>
<TableHead>Next Hearing</TableHead>
<TableHead className="text-right">Actions</TableHead>
</TableRow>
</TableHeader>
<TableBody>
<TableRow>
<TableCell>
<div className="flex items-center gap-2">
<Avatar>
<AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
<AvatarFallback>JD</AvatarFallback>
</Avatar>
<div>
<p className="font-medium">John Doe</p>
<p className="text-muted-foreground text-sm">ID: 12345</p>
</div>
</div>
</TableCell>
<TableCell>Bail Application</TableCell>
<TableCell>
<Badge variant="secondary">Pending</Badge>
</TableCell>
<TableCell>2023-06-15</TableCell>
<TableCell className="text-right">
<Button variant="ghost" size="icon">
<FilePenIcon className="h-4 w-4" />
</Button>
<Button variant="ghost" size="icon">
<EyeIcon className="h-4 w-4" />
</Button>
</TableCell>
</TableRow>
<TableRow>
<TableCell>
<div className="flex items-center gap-2">
<Avatar>
<AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
<AvatarFallback>JS</AvatarFallback>
</Avatar>
<div>
<p className="font-medium">Jane Smith</p>
<p className="text-muted-foreground text-sm">ID: 54321</p>
</div>
</div>
</TableCell>
<TableCell>Bail Hearing</TableCell>
<TableCell>
<Badge variant="secondary">Pending</Badge>
</TableCell>
<TableCell>2023-06-20</TableCell>
<TableCell className="text-right">
<Button variant="ghost" size="icon">
<FilePenIcon className="h-4 w-4" />
</Button>
<Button variant="ghost" size="icon">
<EyeIcon className="h-4 w-4" />
</Button>
</TableCell>
</TableRow>
<TableRow>
<TableCell>
<div className="flex items-center gap-2">
<Avatar>
<AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
<AvatarFallback>MS</AvatarFallback>
</Avatar>
<div>
<p className="font-medium">Michael Smith</p>
<p className="text-muted-foreground text-sm">ID: 98765</p>
</div>
</div>
</TableCell>
<TableCell>Bail Hearing</TableCell>
<TableCell>
<Badge variant="success">Approved</Badge>
</TableCell>
<TableCell>2023-06-25</TableCell>
<TableCell className="text-right">
<Button variant="ghost" size="icon">
<FilePenIcon className="h-4 w-4" />
</Button>
<Button variant="ghost" size="icon">
<EyeIcon className="h-4 w-4" />
</Button>
</TableCell>
</TableRow>
<TableRow>
<TableCell>
<div className="flex items-center gap-2">
<Avatar>
<AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
<AvatarFallback>JD</AvatarFallback>
</Avatar>
<div>
<p className="font-medium">John Doe</p>
<p className="text-muted-foreground text-sm">ID: 12345</p>
</div>
</div>
<Button variant="ghost" size="icon">
<UserIcon className="h-4 w-4" />
View Client Profile
</Button>
</TableCell>
<TableCell>Bail Application</TableCell>
<TableCell>
<Badge variant="secondary">Pending</Badge>
</TableCell>
<TableCell>2023-06-15</TableCell>
<TableCell className="text-right">
<Button variant="ghost" size="icon">
<FilePenIcon className="h-4 w-4" />
</Button>
<Button variant="ghost" size="icon">
<EyeIcon className="h-4 w-4" />
</Button>
</TableCell>
</TableRow>
</TableBody>
</Table>
</div>
</main>
</div>
)
}

function BriefcaseIcon(props) {
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
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
<rect width="20" height="14" x="2" y="6" rx="2" />
</svg>
)
}

function EyeIcon(props) {
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
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
<circle cx="12" cy="12" r="3" />
</svg>
)
}

function FileIcon(props) {
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
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
<path d="M14 2v4a2 2 0 0 0 2 2h4" />
</svg>
)
}

function FilePenIcon(props) {
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
<path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
<path d="M14 2v4a2 2 0 0 0 2 2h4" />
<path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
</svg>
)
}

function LayoutDashboardIcon(props) {
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
<rect width="7" height="9" x="3" y="3" rx="1" />
<rect width="7" height="5" x="14" y="3" rx="1" />
<rect width="7" height="9" x="14" y="12" rx="1" />
<rect width="7" height="5" x="3" y="16" rx="1" />
</svg>
)
}

function PlusIcon(props) {
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
<path d="M5 12h14" />
<path d="M12 5v14" />
</svg>
)
}

function SettingsIcon(props) {
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
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
<circle cx="12" cy="12" r="3" />
</svg>
)
}

function UserIcon(props) {
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
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
<circle cx="12" cy="7" r="4" />
</svg>
)
}