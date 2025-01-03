import { Button } from '@/components/ui/button'

export default function HowItWorks() {
  const steps = [
    { number: '1', title: 'Sign Up', description: 'Create your account as a property owner or maintenance professional.' },
    { number: '2', title: 'Connect', description: 'Find and connect with trusted professionals or clients in your area.' },
    { number: '3', title: 'Communicate', description: 'Use our platform to discuss projects, schedule appointments, and more.' },
    { number: '4', title: 'Collaborate', description: 'Work together seamlessly to complete maintenance tasks efficiently.' },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-green-400 to-blue-400 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How MaintenanceLink Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-3">Start Now</Button>
        </div>
      </div>
    </section>
  )
}

