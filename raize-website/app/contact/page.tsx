import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_LOCATION } from "@/lib/tokens";

import { Text_03 } from "@/components/ui/wave-text";

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface py-20 px-4 min-h-[80vh]">
        <div className="container-site">
          <SectionHeader
            heading="Let's talk about your business."
            subtext="Whether you have a specific project in mind or you're just starting to explore your options, we'd love to hear from you. Book a free 30-minute discovery call — no obligation, no pitch, just an honest conversation."
            align="center"
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            
            {/* Left Col: Contact Form */}
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-heading mb-8">
                  <Text_03 text="Send a Message" />
                </h3>
                
                <form className="flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-primary">Name *</label>
                            <input type="text" id="name" required className="h-12 w-full rounded-md border border-border px-4 py-2 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium text-text-primary">Phone *</label>
                            <input type="tel" id="phone" required className="h-12 w-full rounded-md border border-border px-4 py-2 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        </div>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-primary">Email *</label>
                            <input type="email" id="email" required className="h-12 w-full rounded-md border border-border px-4 py-2 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="text-sm font-medium text-text-primary">Company name</label>
                            <input type="text" id="company" className="h-12 w-full rounded-md border border-border px-4 py-2 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-sm font-medium text-text-primary">Service interested in</label>
                        <select id="service" className="h-12 w-full rounded-md border border-border px-4 py-2 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer">
                            <option value="">Select a service...</option>
                            <option value="ai-tools">AI Tool Integration & Automation</option>
                            <option value="custom-software">Custom Internal Software & Dashboards</option>
                            <option value="website">Website Design & Development</option>
                            <option value="social-media">Social Media & Content Management</option>
                            <option value="ai-calling">AI Calling Agents</option>
                            <option value="whatsapp">WhatsApp Chatbots</option>
                            <option value="saas">SaaS Platform</option>
                            <option value="other">Other / Not sure</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                        <textarea id="message" rows={4} className="w-full rounded-md border border-border px-4 py-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y"></textarea>
                    </div>

                    <Button type="submit" className="w-full md:w-auto self-start">
                        Send Message
                    </Button>
                </form>
            </div>

            {/* Right Col: Contact Details */}
            <div className="flex flex-col gap-8 justify-center lg:px-12">
               <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">WhatsApp</h4>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-primary transition-colors">
                      +91 8107766700
                  </a>
               </div>
               <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Email</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-medium hover:text-primary transition-colors">
                      {CONTACT_EMAIL}
                  </a>
               </div>
               <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Location</h4>
                  <p className="text-xl font-medium">
                      {CONTACT_LOCATION}
                  </p>
               </div>
               <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">LinkedIn</h4>
                  <a href="#" className="text-xl font-medium text-text-muted hover:text-primary transition-colors">
                      [PLACEHOLDER: LinkedIn URL]
                  </a>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
