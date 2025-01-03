import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MessageSquare, Calendar, Bell, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: MessageSquare, title: 'Instant Messaging', description: 'Real-time communication with maintenance professionals.' },
    { icon: Calendar, title: 'Scheduling', description: 'Easy appointment booking and management.' },
    { icon: Bell, title: 'Notifications', description: 'Stay updated with push notifications and alerts.' },
    { icon: Shield, title: 'Secure', description: 'Your data is protected with enterprise-grade security.' },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Features That Make a Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-100 to-blue-100 border-none shadow-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

