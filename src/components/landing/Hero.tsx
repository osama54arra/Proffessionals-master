import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Maintenance Pros Instantly
          </h1>
          <p className="text-xl mb-8">
            Streamline your property maintenance with our easy-to-use
            communication platform.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-3">
            Get Started
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src=""
            width={400}
            height={400}
            alt="MaintenanceLink App"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
