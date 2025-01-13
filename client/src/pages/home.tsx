import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, ShieldCheck, Users, ClipboardList, BookOpen, LayoutDashboard, FileCheck } from 'lucide-react';

// Navigation component (disabled for now)
function NavigationBar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">🗳️ vSpaceVote</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {[
              { name: '📚 Documentation', href: '/documentation', icon: BookOpen },
              { name: '📊 Progress', href: '/progress', icon: FileCheck },
              { name: '🎯 Demo', href: '/demo', icon: LayoutDashboard },
            ].map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="opacity-50 cursor-not-allowed"
                disabled
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="container py-10">
        <div className="flex flex-col items-center text-center space-y-4 pb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            🏛️ Welcome to vSpaceVote
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            A secure and accessible online voting platform designed to enhance constituency-related e-governance participation while maintaining the highest standards of security and privacy.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-8 w-8 text-primary mb-2" />
              <CardTitle>🔐 Secure & Private</CardTitle>
              <CardDescription>
                Your vote is protected with end-to-end encryption and advanced security measures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>🔒 End-to-end encryption</li>
                <li>🎭 Anonymous vote storage</li>
                <li>🛡️ Regular security audits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>👥 Accessible to All</CardTitle>
              <CardDescription>
                Designed to be easy to use for everyone, regardless of ability or device.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>📱 Works on all devices</li>
                <li>🔊 Screen reader compatible</li>
                <li>🌍 Multiple language support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ClipboardList className="h-8 w-8 text-primary mb-2" />
              <CardTitle>📋 Transparent & Auditable</CardTitle>
              <CardDescription>
                Every vote is verifiable while maintaining voter privacy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>✅ Verifiable results</li>
                <li>📝 Complete audit trails</li>
                <li>🔍 Independent verification</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Section */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle>📚 Documentation</CardTitle>
              <CardDescription>
                Browse complete system documentation and requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Learn about our security measures, accessibility features, and how the system works.
              </p>
              <Link href="/documentation">
                <Button className="w-full">
                  View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Progress Matrix</CardTitle>
              <CardDescription>
                Track implementation progress and compliance status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Monitor our progress in meeting security, accessibility, and functionality requirements.
              </p>
              <Link href="/progress">
                <Button className="w-full" variant="outline">
                  View Progress <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="prose prose-gray max-w-none mt-12">
          <h2 className="text-2xl font-semibold mb-4">⚙️ How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">👤 For Constituency Members</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>🔑 Simple and secure authentication process</li>
                <li>📝 Easy-to-use voting interface</li>
                <li>✉️ Instant confirmation of your vote</li>
                <li>🔒 Privacy guaranteed throughout the process</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">👥 For Constituency Officials</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>⚡ Comprehensive administration tools</li>
                <li>📊 Real-time monitoring capabilities</li>
                <li>📋 Detailed audit trails and reporting</li>
                <li>💬 Technical support throughout the process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Structure Section */}
        <div className="prose prose-gray max-w-none mt-12 pb-12">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Project Organization</h2>
          <p className="text-muted-foreground mb-6">
            vSpaceVote follows a clean, modular structure designed for scalability and maintainability:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">🎨 Frontend (Web Interface)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>⚛️ Modern React components for the user interface</li>
                <li>🔐 Secure authentication and session management</li>
                <li>📱 Responsive design that works on all devices</li>
                <li>♿ Accessibility-first development approach</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">⚡ Backend (Server)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>🚀 Robust Express.js API server</li>
                <li>🔒 Secure data handling and storage</li>
                <li>🛡️ Comprehensive error handling</li>
                <li>📝 Detailed audit logging system</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-2">🛠️ Infrastructure & Testing</h3>
            <ul className="list-disc pl-5 space-y-2 md:columns-2">
              <li>☁️ Infrastructure as Code with Terraform</li>
              <li>⚙️ Automated CI/CD pipelines</li>
              <li>🎭 End-to-end testing with Playwright</li>
              <li>🧪 Comprehensive integration tests</li>
              <li>🗄️ Database management scripts</li>
              <li>🔧 Development utilities and tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}