import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

type RequirementStatus = 'completed' | 'in-progress' | 'pending';

interface Requirement {
  id: string;
  title: string;
  description: string;
  status: RequirementStatus;
}

const requirements: Requirement[] = [
  {
    id: '9.1.1.1',
    title: 'Standard Client-Side Technologies',
    description: 'vSpaceVote\'s user interface shall use standard client-side technologies without voter installation of specialty plug-ins.',
    status: 'completed'
  },
  {
    id: '9.1.1.2',
    title: 'User-Centered Design',
    description: 'vSpaceVote shall be designed with a user-centered approach for diverse user types, including those with disabilities.',
    status: 'in-progress'
  },
  // Add more requirements here
];

export default function Documentation() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Requirements Documentation</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[600px] w-full pr-4">
              <div className="space-y-6">
                {requirements.map((req) => (
                  <Alert key={req.id} variant={req.status === 'completed' ? 'default' : 'warning'}>
                    <div className="flex items-center gap-2">
                      {req.status === 'completed' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                      <AlertTitle>{req.id}: {req.title}</AlertTitle>
                    </div>
                    <AlertDescription className="mt-2">
                      {req.description}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
