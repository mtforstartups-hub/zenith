import type { Metadata } from "next";
import Link from "next/link";
import { mockStartups } from "@/data/startups";
import { StartupCard } from "@/components/StartUpCard";
import { Search, SlidersHorizontal, X, ArrowUpRight, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover Startups — Project Zenith",
  description: "Explore the next generation of high-growth startups.",
};

const stages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series B+"];
const industries = ["Fintech", "HealthTech", "CleanTech", "SaaS", "AI", "Web3", "AgriTech", "Logistics", "LegalTech", "MarTech", "InsurTech", "HRTech", "PropTech"];

interface PageProps {
  searchParams: Promise<{
    search?: string;
    stage?: string;
    industry?: string;
    showFilters?: string;
  }>;
}

export default async function DiscoverPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  const search = params.search?.toLowerCase() || "";
  const selectedStages = params.stage ? params.stage.split(",") : [];
  const selectedIndustries = params.industry ? params.industry.split(",") : [];
  const showFilters = params.showFilters === "true";

  // SSR FILTERING LOGIC
  const filteredStartups = mockStartups.filter((s) => {
    const matchSearch = !search || s.name.toLowerCase().includes(search) || s.pitch.toLowerCase().includes(search) || s.industry.toLowerCase().includes(search);
    const matchStage = selectedStages.length === 0 || selectedStages.includes(s.stage);
    const matchIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(s.industry);
    return matchSearch && matchStage && matchIndustry;
  });

  const getFilterUrl = (key: string, val: string, current: string[]) => {
    const next = current.includes(val) ? current.filter(x => x !== val) : [...current, val];
    const newParams = new URLSearchParams({ 
      ...(search && { search }),
      ...(next.length > 0 && { [key]: next.join(",") }),
      ...(params.industry && key !== "industry" && { industry: params.industry }),
      ...(params.stage && key !== "stage" && { stage: params.stage }),
      showFilters: "true"
    });
    return `?${newParams.toString()}`;
  };

  const clearFiltersUrl = "/discover";

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505]">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 border-b border-border/40 bg-white dark:bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Live Ecosystem
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                Discover the Future.
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Connect with {mockStartups.length}+ verified startups actively raising capital and building the next generation of global infrastructure.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-muted/30 p-1.5 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="px-4 py-2 text-center">
                <p className="text-2xl font-bold text-foreground">{mockStartups.length}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Total Startups</p>
              </div>
              <div className="w-[1px] h-8 bg-border/60" />
              <div className="px-4 py-2 text-center">
                <p className="text-2xl font-bold text-primary">$42M+</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Target Raise</p>
              </div>
            </div>
          </div>

          {/* Search & Action Bar */}
          <form action="/discover" method="GET" className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                name="search"
                defaultValue={search}
                placeholder="Search by name, industry, or vision..."
                className="w-full h-12 pl-11 pr-4 bg-background border border-border/60 rounded-xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-sm font-medium shadow-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <Link 
                href={`?showFilters=${!showFilters}${search ? `&search=${search}` : ""}${params.stage ? `&stage=${params.stage}` : ""}${params.industry ? `&industry=${params.industry}` : ""}`}
                className={`h-12 px-6 inline-flex items-center gap-2 font-semibold text-sm rounded-xl border transition-all ${
                  showFilters 
                    ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/10" 
                    : "bg-background hover:bg-muted/50 border-border/60 shadow-sm"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {(selectedStages.length > 0 || selectedIndustries.length > 0) && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center ml-1">
                    {selectedStages.length + selectedIndustries.length}
                  </span>
                )}
              </Link>
              
              <button 
                type="submit"
                className="h-12 px-6 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modern Filter Panel */}
      {showFilters && (
        <section className="bg-white dark:bg-[#0a0a0a] border-b border-border/40 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto max-w-6xl px-6 py-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Funding Stage
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stages.map(s => (
                    <Link
                      key={s}
                      href={getFilterUrl("stage", s, selectedStages)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        selectedStages.includes(s) 
                          ? "bg-primary/5 text-primary border-primary shadow-sm" 
                          : "bg-background text-muted-foreground border-border/60 hover:border-muted-foreground/30"
                      }`}
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Industry Sector
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map(ind => (
                    <Link
                      key={ind}
                      href={getFilterUrl("industry", ind, selectedIndustries)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        selectedIndustries.includes(ind) 
                          ? "bg-blue-500/5 text-blue-600 border-blue-500 shadow-sm" 
                          : "bg-background text-muted-foreground border-border/60 hover:border-muted-foreground/30"
                      }`}
                    >
                      {ind}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {(selectedStages.length > 0 || selectedIndustries.length > 0 || search) && (
              <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Active:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedStages.map(s => (
                      <Link key={s} href={getFilterUrl("stage", s, selectedStages)} className="px-2 py-1 bg-muted rounded-md text-[10px] font-bold flex items-center gap-1 hover:bg-muted/80">
                        {s} <X className="w-3 h-3" />
                      </Link>
                    ))}
                    {selectedIndustries.map(i => (
                      <Link key={i} href={getFilterUrl("industry", i, selectedIndustries)} className="px-2 py-1 bg-muted rounded-md text-[10px] font-bold flex items-center gap-1 hover:bg-muted/80">
                        {i} <X className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href={clearFiltersUrl} className="text-[10px] font-bold text-destructive uppercase hover:underline">
                  Reset All Filters
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main Results Grid */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              All Results
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {filteredStartups.length}
              </span>
            </h2>
            <p className="text-xs text-muted-foreground mt-1">Showing verified startups matching your criteria.</p>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            Sort By: 
            <select className="bg-transparent border-none outline-none text-foreground cursor-pointer">
              <option>Trending</option>
              <option>Newest</option>
              <option>Most Upvoted</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredStartups.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-muted/20 rounded-3xl border border-dashed border-border/60">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-muted-foreground opacity-40" />
              </div>
              <h3 className="text-lg font-bold">No startups found</h3>
              <p className="text-muted-foreground text-sm max-w-[240px] text-center mt-1">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Link href={clearFiltersUrl} className="mt-6 px-6 py-2 bg-foreground text-background text-xs font-bold rounded-xl">
                Browse All Startups
              </Link>
            </div>
          ) : (
            filteredStartups.map(startup => (
              <StartupCard key={startup.id} startup={startup} />
            ))
          )}
        </div>

        {/* Featured CTA */}
        <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2">Build your own startup?</h3>
              <p className="text-primary-foreground/80 max-w-md">
                Join the Project Zenith ecosystem today and get discovered by 500+ verified global investors.
              </p>
            </div>
            <Link href="/signup" className="px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-2">
              Apply to Raise Capital <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal Footer for Discover */}
      <footer className="container mx-auto max-w-6xl px-6 py-12 border-t border-border/40 text-center">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Project Zenith — Empowering the Global Ecosystem
        </p>
      </footer>
    </div>
  );
}
