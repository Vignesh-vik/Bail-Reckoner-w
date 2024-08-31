import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="../aid">
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lawyer Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                numberOfMonths={1}
                mode="single"
                className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Case</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Step</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-sm text-muted-foreground">jane@example.com</div>
                    </TableCell>
                    <TableCell>Personal Injury</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ongoing</Badge>
                    </TableCell>
                    <TableCell>Deposition</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">John Smith</div>
                      <div className="text-sm text-muted-foreground">john@example.com</div>
                    </TableCell>
                    <TableCell>Divorce</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ongoing</Badge>
                    </TableCell>
                    <TableCell>Mediation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">sarah@example.com</div>
                    </TableCell>
                    <TableCell>Estate Planning</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ongoing</Badge>
                    </TableCell>
                    <TableCell>Document Preparation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Case Request</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="client-name">Client Name</Label>
                  <Input id="client-name" placeholder="Enter client name" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="case-type">Case Type</Label>
                  <Select id="case-type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="divorce">Divorce</SelectItem>
                      <SelectItem value="estate-planning">Estate Planning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="case-description">Case Description</Label>
                  <Textarea id="case-description" placeholder="Describe the case" />
                </div>
                <Button>Submit Case Request</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Billing & Invoicing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="invoice-number">Invoice Number</Label>
                  <Input id="invoice-number" placeholder="Enter invoice number" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="invoice-amount">Invoice Amount</Label>
                  <Input id="invoice-amount" placeholder="Enter invoice amount" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="invoice-due-date">Due Date</Label>
                  <Input id="invoice-due-date" type="date" />
                </div>
                <Button>Generate Invoice</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Client Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="client-email">Client Email</Label>
                  <Input id="client-email" placeholder="Enter client email" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter message" />
                </div>
                <Button>Send Message</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Case Status Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="case-id">Case ID</Label>
                  <Input id="case-id" placeholder="Enter case ID" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="status-update">Status Update</Label>
                  <Textarea id="status-update" placeholder="Enter status update" />
                </div>
                <Button>Update Case Status</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}