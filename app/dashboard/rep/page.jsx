/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GxvUlXqpZmE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 ">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Bail Reckoner</h1>
          <p className="text-muted-foreground">Determine your eligibility for bail based on your case details.</p>
        </div>
        <Card>
          <CardContent className="grid gap-6 py-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time-served">Time Served</Label>
                <Input id="time-served" type="number" placeholder="Enter days" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sentence-duration">Total Sentence Duration</Label>
                <Input id="sentence-duration" type="number" placeholder="Enter days" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="risk-of-flight">Risk of Flight</Label>
                <Select id="risk-of-flight">
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="witness-influence">Influence of Witness</Label>
                <Select id="witness-influence">
                  <SelectTrigger>
                    <SelectValue placeholder="Select influence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="crime-history">Crime History</Label>
              <Select id="crime-history">
                <SelectTrigger>
                  <SelectValue placeholder="Select crime history" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-prior-convictions">No Prior Convictions</SelectItem>
                  <SelectItem value="minor-offences">Minor Offences</SelectItem>
                  <SelectItem value="major-offences">Major Offences</SelectItem>
                  <SelectItem value="serious-offences">Serious Offences</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="procedural-requirements" />
              <Label htmlFor="procedural-requirements">Complied with all procedural requirements</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hire-specialist">Hire a Specialist</Label>
              <Select id="hire-specialist">
                <SelectTrigger>
                  <SelectValue placeholder="Select specialist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Check Eligibility</Button>
            <Button>Hire Now</Button>
          </CardFooter>
        </Card>
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold">Bail Eligibility</h2>
            <p className="text-muted-foreground">Based on the information provided, your bail eligibility is:</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-2xl font-bold">Eligible</div>
              <Button>Proceed with Bail</Button>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold">Reason for Decision</h2>
            <p className="text-muted-foreground">
              The court has determined that you are eligible for bail based on the following factors:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>You have served a significant portion of your sentence.</li>
              <li>You pose a low risk of flight.</li>
              <li>You have complied with all procedural requirements.</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold">Next Steps</h2>
            <p className="text-muted-foreground">To proceed with your bail, you should:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Gather all necessary documentation and evidence.</li>
              <li>Consult with a legal professional to ensure you meet all requirements.</li>
              <li>Attend your scheduled bail hearing and be prepared to present your case.</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold">Specialist Profile</h2>
            <div className="flex items-center gap-4 mt-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Specialist" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">
                  <Link href="#" prefetch={false}>
                    John Smith
                  </Link>
                </div>
                <div className="text-muted-foreground">Criminal Defense Lawyer</div>
                <div className="text-muted-foreground">john@lawfirm.com | 555-555-5555</div>
                <div className="text-muted-foreground">
                  John has over 15 years of experience in criminal law and has successfully handled numerous bail cases.
                  He will work closely with you to build a strong case and ensure the best possible outcome.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Please note that the results shown may or may not be declared by the court depending on other factors
          involved.
        </div>
      </div>
    </div>
  )
}