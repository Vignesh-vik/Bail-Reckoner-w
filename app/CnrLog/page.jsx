/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WSg19wNveDO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto mt-12 p-12">
      <CardHeader>
        <CardTitle>Report an Incident</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cnr">Crime Number Reference (CNR)</Label>
          <Input id="cnr" placeholder="Enter your CNR number" />
        </div>
        <p className="text-muted-foreground">
          Please provide the Crime Number Reference (CNR) associated with your incident. This helps us match your
          feedback or complaint to the corresponding crime record in our system.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/dashboard/rep" className="bg-black text-white px-4 py-1 rounded">Submit</Link>
      </CardFooter>
    </Card>
  )
}