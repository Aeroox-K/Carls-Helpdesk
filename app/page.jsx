import Link from "next/link";
import { ArrowRight, Bell, Book } from 'lucide-react'

export default function Home() {
  return (
    <main className="mt-20">
    <h2 className="text-3xl" >Welcome to Carls Helpdesk Dashboard</h2>
    <p className="leading-8 text-base">This is your central hub for managing all support-related activities. Here, you can easily track the status of your support tickets, access a wealth of resources, and stay informed about the latest updates from our team. Our dedicated support staff is committed to providing you with timely and effective assistance, ensuring that any issues you encounter are resolved swiftly and satisfactorily. We encourage you to utilize the tools available to you and reach out if you need help navigating through any challenges.</p>

    <div className="flex justify-center my-8 ">
      <Link href="/tickets">
        <button className="btn-primary">View Tickets <ArrowRight className="ml-2 h-4 w-4" /></button>
      </Link>
    </div>

    <h2 className="mt-24 text-2xl">Company Updates</h2>

    <div className="card">
      <h3>Welcome Emily Smith to the Support Team!</h3>
      <p>We are thrilled to announce that Emily Smith has joined our support team as a Customer Support Specialist. Emily comes to us with over 5 years of experience in customer service and technical support, having worked with various organizations to enhance their customer engagement strategies. In her role, she will be responsible for assisting our clients with their inquiries, troubleshooting issues, and providing expert guidance on our products and services. Emily is passionate about helping customers and believes in fostering positive relationships through effective communication and problem-solving. We are excited to have her on board, and we know she will be a valuable asset to our team and our clients.</p>
    </div>
    <div className="card">
      <h3>New Helpdesk Software Implementation</h3>
      <p>We are pleased to inform you that we have successfully implemented a new helpdesk software designed to enhance our support services significantly. This cutting-edge platform will allow us to streamline ticket management, improve response times, and provide a more organized workflow for our support team. With features such as automated ticket routing, a comprehensive knowledge base, and real-time reporting, we are confident that this upgrade will lead to a more efficient support experience for you. To ensure everyone is well-acquainted with the new system, we will be hosting training sessions over the next few weeks. These sessions will cover the new features, tips on how to submit tickets effectively, and best practices for using the knowledge base. We encourage all users to participate and make the most of the tools available to you!</p>
    </div>
  </main>
  )
}