"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Get in Touch",
  description = "Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.",
  phone = "+91 93218676046",
  email = "kondkarifareen9@gmail.com",
  web = { label: "github.com/SulemanKondkari", url: "https://github.com/SulemanKondkari" },
}: Contact2Props) => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-16 lg:flex-row lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-12 lg:w-1/3"
          >
            <div>
              <h2 className="mb-4 text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                {title.split(' ')[0]} <br />
                <span className="text-red-600 italic">{title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-neutral-400 text-lg uppercase tracking-widest font-medium leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white/90">
                Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-full border border-red-600/20 group-hover:bg-red-600/20 transition-colors">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Phone</p>
                    <p className="text-lg font-bold">{phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-full border border-red-600/20 group-hover:bg-red-600/20 transition-colors">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Email</p>
                    <a href={`mailto:${email}`} className="text-lg font-bold hover:text-red-600 transition-colors underline decoration-red-600/30">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-full border border-red-600/20 group-hover:bg-red-600/20 transition-colors">
                    <Globe className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Web</p>
                    <a href={web.url} target="_blank" className="text-lg font-bold hover:text-red-600 transition-colors underline decoration-red-600/30">
                      {web.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl"
          >
            <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-8">
                {/* 
                   Cherry on Top setup: 
                   I've pre-configured this to use Web3Forms. 
                   You just need to replace YOUR_ACCESS_KEY_HERE with a key from web3forms.com
                */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "3990c9b8-c17f-43a3-8a09-1338518f7cb5"} 
                />
                <input type="hidden" name="subject" value="New Portfolio Message from Suleman's Site" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstname" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold ml-1">First Name</Label>
                    <Input 
                      type="text" 
                      id="firstname" 
                      name="first_name" 
                      placeholder="John" 
                      required 
                      className="bg-black/40 border-white/10 focus:border-red-600/50 h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold ml-1">Last Name</Label>
                    <Input 
                      type="text" 
                      id="lastname" 
                      name="last_name" 
                      placeholder="Doe" 
                      required 
                      className="bg-black/40 border-white/10 focus:border-red-600/50 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold ml-1">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-black/40 border-white/10 focus:border-red-600/50 h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold ml-1">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    required 
                    className="bg-black/40 border-white/10 focus:border-red-600/50 min-h-[150px] rounded-xl pt-4"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] py-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
