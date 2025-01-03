import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Property Owner",
      content:
        "MaintenanceLink has made managing my properties so much easier. I can quickly connect with professionals and get things done.",
      avatar: "JD",
    },
    {
      name: "Jane Smith",
      role: "Maintenance Professional",
      content:
        "This platform has helped me grow my business. The communication tools are top-notch, and I love how easy it is to schedule appointments.",
      avatar: "JS",
    },
    {
      name: "Mike Johnson",
      role: "Property Manager",
      content:
        "I manage multiple properties, and MaintenanceLink has streamlined our maintenance processes significantly. Highly recommended!",
      avatar: "MJ",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
