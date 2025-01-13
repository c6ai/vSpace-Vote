import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { Link } from 'wouter';

export function NavBar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">vSpaceVote Docs</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/documentation">
              <span className="text-sm font-medium transition-colors hover:text-primary">
                Documentation
              </span>
            </Link>
            <Link href="/progress">
              <span className="text-sm font-medium transition-colors hover:text-primary">
                Progress
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
