import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 pb-8">
        <h1 className="text-4xl font-bold">vSpaceVote Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Secure, accessible, and compliant online voting system documentation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>
              Browse complete system documentation and requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/documentation">
              <Button className="w-full">View Documentation</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Matrix</CardTitle>
            <CardDescription>
              Track implementation progress and compliance status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/progress">
              <Button className="w-full" variant="outline">View Progress</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
