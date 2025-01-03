import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-purple-600">
          Proffessianls
        </a>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-purple-600">
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-purple-600"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-purple-600"
          >
            Testimonials
          </a>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <a href="Register">Sign Up</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
