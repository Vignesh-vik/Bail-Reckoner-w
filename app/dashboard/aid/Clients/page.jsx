import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="w-full">
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Requests from Clients
              </h2>
              <p className="mt-4 text-muted-foreground">
                Review and respond to new client inquiries.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">
                        [johndoe@example.com](mailto:johndoe@example.com)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Requested on: 2023-04-15
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Accept
                      </Button>
                      <Button variant="destructive" size="sm">
                        Decline
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      John is seeking legal advice regarding a personal injury
                      case. He was involved in a car accident and needs
                      assistance with filing a claim.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">
                        [janesmith@example.com](mailto:janesmith@example.com)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Requested on: 2023-04-12
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Accept
                      </Button>
                      <Button variant="destructive" size="sm">
                        Decline
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Jane is seeking legal advice regarding a divorce
                      proceeding. She needs assistance with the division of
                      assets and child custody.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Current Clients
              </h2>
              <p className="mt-4 text-muted-foreground">
                View and manage your ongoing client cases.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        [mjohnson@example.com](mailto:mjohnson@example.com)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Case Type: Estate Planning
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status: Ongoing
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Important Dates:
                        <br />
                        Consultation: 2023-03-01
                        <br />
                        Deadline: 2023-06-30
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Files
                      </Button>
                      <Button variant="outline" size="sm">
                        Communication
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Sarah Lee</p>
                      <p className="text-sm text-muted-foreground">
                        [slee@example.com](mailto:slee@example.com)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Case Type: Business Incorporation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status: Ongoing
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Important Dates:
                        <br />
                        Consultation: 2023-02-15
                        <br />
                        Deadline: 2023-05-31
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Files
                      </Button>
                      <Button variant="outline" size="sm">
                        Communication
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
