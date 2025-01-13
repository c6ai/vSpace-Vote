import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Book, FileText } from "lucide-react";

interface DocSection {
  title: string;
  content: string;
  reqId?: string;
}

const sections: DocSection[] = [
  {
    title: "User Interface and Accessibility",
    reqId: "9.x.x",
    content: `
    This section outlines key requirements for the user interface and accessibility:

    - Standard client-side technologies without specialty plugins
    - User-centered design for diverse user types
    - WCAG conformance and accessibility legislation compliance
    - Proper rendering across screen sizes
    - Consistent interface and interactions
    - Support for multiple input methods
    - Clear notifications and confirmations
    - Unicode character support
    - Audio-tactile interface capabilities
    `
  },
  {
    title: "System Management",
    reqId: "10.x.x",
    content: `
    Key system management requirements include:

    - Operational availability throughout voting period
    - Sufficient IT resources and bandwidth
    - Stress testing and load simulation
    - Performance monitoring and reporting
    `
  },
  {
    title: "Administration",
    reqId: "11.x.x",
    content: `
    Administrative requirements cover:

    - Qualified personnel availability
    - Security screening for contractors
    - Vote reconciliation across channels
    - Risk assessment and compliance
    - Physical security measures
    - Access control and monitoring
    `
  }
];

export function DocViewer() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5" />
          <CardTitle>System Documentation</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{section.title}</h3>
                      {section.reqId && (
                        <Badge variant="secondary">{section.reqId}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {section.content}
                    </p>
                    {index < sections.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="requirements">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <p className="text-sm text-muted-foreground">
                    This section contains detailed requirements and their implementation status.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <CardTitle className="text-base">Implementation Requirements</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Standard client-side technologies [9.1.1.1]</li>
                        <li>User-centered design approach [9.1.1.2]</li>
                        <li>WCAG conformance [9.1.1.3]</li>
                        <li>Responsive design [9.1.1.4]</li>
                        <li>Consistent interface [9.1.1.6]</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
