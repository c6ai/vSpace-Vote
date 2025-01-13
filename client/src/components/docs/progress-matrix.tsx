import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, Clock, AlertTriangle, BarChart } from "lucide-react";

interface RequirementProgress {
  id: string;
  category: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
}

const requirements: RequirementProgress[] = [
  {
    id: "9.1.1.1",
    category: "UI/Accessibility",
    title: "Standard Client-Side Technologies",
    status: "completed",
    progress: 100
  },
  {
    id: "9.1.1.2",
    category: "UI/Accessibility",
    title: "User-Centered Design",
    status: "in-progress",
    progress: 60
  },
  {
    id: "9.1.1.3",
    category: "UI/Accessibility",
    title: "WCAG Conformance",
    status: "in-progress",
    progress: 45
  },
  {
    id: "9.1.1.4",
    category: "UI/Accessibility",
    title: "Responsive Design",
    status: "completed",
    progress: 100
  },
  {
    id: "10.1.1",
    category: "System Management",
    title: "Operational Availability",
    status: "pending",
    progress: 0
  }
];

function getStatusIcon(status: RequirementProgress['status']) {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case 'in-progress':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'pending':
      return <AlertTriangle className="h-4 w-4 text-gray-400" />;
  }
}

function getStatusBadge(status: RequirementProgress['status']) {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-500">Completed</Badge>;
    case 'in-progress':
      return <Badge variant="secondary" className="bg-yellow-500">In Progress</Badge>;
    case 'pending':
      return <Badge variant="outline">Pending</Badge>;
  }
}

export function ProgressMatrix() {
  const overallProgress = Math.round(
    requirements.reduce((acc, req) => acc + req.progress, 0) / requirements.length
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5" />
            <CardTitle>Implementation Progress</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Overall Progress:</span>
            <Progress value={overallProgress} className="w-[100px]" />
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="w-[150px]">Category</TableHead>
                <TableHead>Requirement</TableHead>
                <TableHead className="w-[150px]">Status</TableHead>
                <TableHead className="w-[150px]">Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requirements.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.category}</TableCell>
                  <TableCell>{req.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(req.status)}
                      {getStatusBadge(req.status)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={req.progress} className="w-[60px]" />
                      <span className="text-sm">{req.progress}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
