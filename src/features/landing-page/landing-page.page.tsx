import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  MessageCircle, 
  BarChart2, 
  Bot, 
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center mr-2">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <span className="text-xl font-semibold">ChatApp</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm text-gray-700 font-medium hover:text-blue-600">Log in</Link>
            <Link href="/register" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Sign up</Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Ultimate Customer Chat & Support Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with your website visitors and customers across all channels in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="font-semibold">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                </div>
                <div className="ml-3 text-sm text-gray-600">
                  <strong>1,000+</strong> businesses trust ChatApp
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">C</span>
                    </div>
                    <div>
                      <div className="font-medium">ChatApp Support</div>
                      <div className="text-xs opacity-80 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                        Online
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 h-80 flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4">
                    <div className="flex">
                      <div className="bg-blue-100 text-gray-800 rounded-l-lg rounded-br-lg p-3 max-w-xs">
                        <p>Hi there! 👋 How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-r-lg rounded-bl-lg p-3 max-w-xs">
                        <p> I am interested in your chatbot features. How do they work?</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-blue-100 text-gray-800 rounded-l-lg rounded-br-lg p-3 max-w-xs">
                        <p>Our AI chatbots can automate responses to common questions, provide personalized help, and even analyze customer sentiment!</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex">
                      <input type="text" placeholder="Type your message..." className="flex-1 border rounded-l-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <button className="bg-blue-600 text-white rounded-r-full px-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide exceptional customer service across all channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Website Chat</h3>
              <p className="text-gray-600 mb-4">
                Engage with your visitors in real-time with a customizable chat widget that works on desktop and mobile.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Customizable appearance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Real-time notifications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  File sharing capabilities
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Omnichannel Messaging</h3>
              <p className="text-gray-600 mb-4">
                Manage all your customer conversations from Shopee, Tokopedia, Lazada, and more in one unified inbox.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  E-commerce integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Unified conversation history
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Quick response templates
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Chatbots</h3>
              <p className="text-gray-600 mb-4">
                Automate customer support with intelligent chatbots that can answer questions and provide website analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Natural language processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Order status tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Website analytics integration
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Analytics</h3>
              <p className="text-gray-600 mb-4">
                Gain valuable insights into customer interactions, response times, and satisfaction levels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Conversation metrics
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Team performance reports
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Customer satisfaction tracking
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Work together efficiently with advanced team management and assignment features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Conversation assignments
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Internal notes
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Team activity monitoring
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-gray-600 mb-4">
                Make the platform your own with extensive customization options for a branded experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Branded chat widget
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Custom welcome messages
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Workflow automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that s right for you and start improving your customer communication today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">Starter</h3>
                <p className="text-gray-600 text-sm mb-4">For small businesses</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>
              <div className="border-t border-gray-200 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 chat widget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Up to 500 conversations/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic chatbot features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 team member</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-600 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3 rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">Professional</h3>
                <p className="text-gray-600 text-sm mb-4">For growing businesses</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
              <div className="border-t border-gray-200 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3 chat widgets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced chatbot features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">5 team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">Enterprise</h3>
                <p className="text-gray-600 text-sm mb-4">For large organizations</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </div>
              <div className="border-t border-gray-200 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited chat widgets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom AI training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SLA guarantees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and features.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How does the chat widget work?</h3>
              <p className="text-gray-600">
                Our chat widget is a small piece of JavaScript code that you add to your website. It appears as a chat button in the corner of your site, and visitors can click it to start a conversation with your team.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I customize the appearance of the chat widget?</h3>
              <p className="text-gray-600">
                Yes! You can customize the colors, position, greeting messages, and more to match your brand look and feel. All of these settings are available in your dashboard.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How do the integrations with e-commerce platforms work?</h3>
              <p className="text-gray-600">
                We provide native integrations with Shopee, Tokopedia, and Lazada. Once connected, all customer messages from these platforms will appear in your unified inbox alongside your website chats.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What can your AI chatbots do?</h3>
              <p className="text-gray-600">
                Our AI chatbots can answer common customer questions, provide information about your products and services, assist with order status inquiries, and escalate to human agents when needed. They can also be trained with your specific knowledge base.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a limit to the number of conversations?</h3>
              <p className="text-gray-600">
                Our Starter plan includes up to 500 conversations per month. Professional and Enterprise plans include unlimited conversations. A conversation is defined as an interaction with a single visitor, regardless of the number of messages exchanged.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your customer communication?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using ChatApp to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="font-semibold">
                Start your free trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-blue-700">
              Schedule a demo
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center mr-2">
                  <span className="text-white text-lg font-bold">C</span>
                </div>
                <span className="text-lg text-white font-semibold">ChatApp</span>
              </div>
              <p className="text-sm mb-4">
                The all-in-one customer communication platform for modern businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm hover:text-white">Features</a></li>
                <li><a href="#" className="text-sm hover:text-white">Integrations</a></li>
                <li><a href="#" className="text-sm hover:text-white">Enterprise</a></li>
                <li><a href="#" className="text-sm hover:text-white">Solutions</a></li>
                <li><a href="#pricing" className="text-sm hover:text-white">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-white">Guides</a></li>
                <li><a href="#" className="text-sm hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm hover:text-white">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-white">Partners</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
                <li><a href="#" className="text-sm hover:text-white">Legal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 ChatApp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}