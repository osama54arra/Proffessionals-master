import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Maintenance Communication?</h2>
        <p className="text-xl mb-8">Join MaintenanceLink today and experience the difference!</p>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-3">Sign Up Now</Button>
      </div>
    </section>
  )
}

