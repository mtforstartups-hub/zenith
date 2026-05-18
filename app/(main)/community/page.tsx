import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Calendar, Globe, Heart, Star, Users, Compass, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Community — Project Zenith",
  description: "Follow top startups, attend pitch events, discover the next generation of founders — without the noise of a generic social network.",
};

const upcomingEvents = [
  { id: 1, name: "Mumbai Startup Pitch Night", date: "Mar 20", location: "Mumbai, India (Hybrid)", type: "Demo Day", typeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/10 dark:text-blue-300 dark:border-blue-800/30" },
  { id: 2, name: "Y Combinator Office Hours — India & SEA", date: "Mar 25", location: "Virtual", type: "Office Hours", typeColor: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/10 dark:text-violet-300 dark:border-violet-800/30" },
  { id: 3, name: "Singapore Fintech Festival — Investor Summit", date: "Apr 2", location: "Singapore", type: "Summit", typeColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/10 dark:text-amber-300 dark:border-amber-800/30" },
  { id: 4, name: "Project Zenith Demo Day — Q2 2026", date: "Apr 15", location: "Virtual", type: "Demo Day", typeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/10 dark:text-blue-300 dark:border-blue-800/30" },
  { id: 5, name: "HealthTech Pitch Competition", date: "Apr 22", location: "Bengaluru, India (Hybrid)", type: "Competition", typeColor: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-900/10 dark:text-rose-300 dark:border-rose-800/30" },
  { id: 6, name: "CleanTech Investor Roundtable", date: "May 5", location: "Virtual", type: "Roundtable", typeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/10 dark:text-emerald-300 dark:border-emerald-800/30" },
];

const featuredStartups = [
  { name: "NovaPay", industry: "Fintech", stage: "Seed", pitch: "The Stripe for emerging markets", color: "bg-blue-600", upvotes: 247 },
  { name: "HelixAI", industry: "HealthTech", stage: "Series A", pitch: "AI copilot for clinical trials", color: "bg-emerald-600", upvotes: 312 },
  { name: "DataVault", industry: "Web3", stage: "Series A", pitch: "Self-sovereign data marketplace", color: "bg-purple-600", upvotes: 445 },
  { name: "QuantumRisk", industry: "InsurTech", stage: "Series B", pitch: "Quantum-computing risk modeling for insurers", color: "bg-violet-800", upvotes: 521 },
  { name: "SolarStack", industry: "CleanTech", stage: "Series A", pitch: "Community solar subscription management", color: "bg-amber-500", upvotes: 287 },
  { name: "MindBridge", industry: "HealthTech", stage: "Seed", pitch: "Mental health platform for enterprise teams", color: "bg-indigo-500", upvotes: 203 },
];

const perks = [
  { icon: <Heart className="w-5 h-5" />, title: "Follow Top Startups", body: "Get notified when your favorite startups hit milestones, close rounds, or announce partnerships." },
  { icon: <Calendar className="w-5 h-5" />, title: "Pitch Events & Demo Days", body: "Discover and RSVP to curated pitch events, investor summits, and demo days worldwide." },
  { icon: <Compass className="w-5 h-5" />, title: "Explore the Ecosystem", body: "Browse recommended startups across sectors you care about — Fintech, AI, CleanTech, and more." },
  { icon: <Star className="w-5 h-5" />, title: "Upvote Your Favourites", body: "Surface the startups you believe in. Your upvotes influence their visibility to investors." },
];

interface PageProps {
  searchParams: Promise<{
    rsvpd?: string;
  }>;
}

export default async function CommunityPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentRsvpd = params.rsvpd ? params.rsvpd.split(",") : [];

  const getRsvpdUrl = (id: number) => {
    const idStr = id.toString();
    const next = currentRsvpd.includes(idStr)
      ? currentRsvpd.filter(x => x !== idStr)
      : [...currentRsvpd, idStr];
    
    const newParams = new URLSearchParams();
    if (next.length > 0) {
      newParams.set("rsvpd", next.join(","));
    }
    return `?${newParams.toString()}`;
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-20 pb-20 px-4 border-b bg-gradient-to-b from-orange-50/60 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
            <Globe className="w-3.5 h-3.5" /> Community
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
            The startup ecosystem,<br />
            <span className="text-orange-500">in one place.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow top startups, attend pitch events, discover the next generation of founders — without the noise of a generic social network.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center rounded-full px-10 py-3 gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm transition-colors text-base"
            >
              Join the community <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/discover" 
              className="inline-flex items-center justify-center rounded-full px-10 py-3 bg-background border border-border text-foreground hover:bg-muted/50 transition-colors font-medium text-base"
            >
              Explore startups
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground flex-wrap">
            {["Free forever", "No deal tools", "Pure exploration"].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-4 border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">What you get</p>
            <h2 className="text-3xl font-extrabold tracking-tight">Built for curious minds</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">No investing tools. No capital features. Just the ecosystem, open to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {perks.map(p => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 px-4 border-b bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Events</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Upcoming pitch events</h2>
            </div>
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors gap-1.5"
            >
              View calendar <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map(ev => {
              const isRsvpd = currentRsvpd.includes(ev.id.toString());
              return (
                <div key={ev.id} className="bg-background border border-border rounded-xl p-5 flex items-center gap-5">
                  <div className="shrink-0 text-center w-12">
                    <p className="text-[10px] font-semibold text-muted-foreground">{ev.date.split(" ")[0].toUpperCase()}</p>
                    <p className="text-2xl font-extrabold leading-none">{ev.date.split(" ")[1]}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-semibold">{ev.name}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ev.typeColor}`}>{ev.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{ev.location}</p>
                  </div>
                  <Link
                    href={getRsvpdUrl(ev.id)}
                    scroll={false}
                    className={`shrink-0 inline-flex items-center justify-center rounded-lg h-9 px-4 text-xs font-medium transition-all gap-1.5 border border-transparent ${
                      isRsvpd 
                        ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" 
                        : "border-border hover:bg-muted text-foreground"
                    }`}
                  >
                    {isRsvpd ? <><Check className="w-3.5 h-3.5" />RSVP&apos;d</> : "RSVP"}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured startups */}
      <section className="py-20 px-4 border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Trending</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Startups to watch</h2>
            </div>
            <Link 
              href="/discover" 
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors gap-1.5"
            >
              Browse all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredStartups.map(s => (
              <Link key={s.name} href={`/startups/${s.name.toLowerCase()}`}>
                <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer group space-y-3 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${s.color}`}>
                        {s.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm group-hover:text-orange-500 transition-colors">{s.name}</p>
                        <div className="flex gap-1.5 mt-0.5">
                          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground border border-transparent">{s.industry}</span>
                          <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-foreground">{s.stage}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-3">{s.pitch}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border mt-3">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {s.upvotes} upvotes</span>
                    <span className="group-hover:text-orange-500 transition-colors">View profile →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Be part of the ecosystem</h2>
          <p className="text-muted-foreground">Join thousands of startup enthusiasts following the next wave of founders.</p>
          <Link 
            href="/signup" 
            className="inline-flex items-center justify-center rounded-full px-12 py-3.5 gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors text-base"
          >
            Join for free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
