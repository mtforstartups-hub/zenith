import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    Rocket,
    BarChart3,
    Users,
    TrendingUp,
    Lock,
    Globe,
    ArrowUpRight,
    Zap,
    ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "For Startups — Project Zenith",
    description:
        "Build a verified startup profile, manage your fundraise, and get discovered by 1,800+ qualified investors on Project Zenith.",
};

const features = [
    {
        icon: Rocket,
        color: "bg-blue-500/10 text-blue-500",
        title: "Your Startup Profile",
        body: "A single, structured link that replaces your pitch deck. Investors see your full story — traction, team, round details — in one place.",
    },
    {
        icon: BarChart3,
        color: "bg-emerald-500/10 text-emerald-500",
        title: "Verified Traction Dashboard",
        body: "Display MRR, ARR, growth, CAC, users, and runway in a clean grid. Numbers do the convincing — not slides.",
    },
    {
        icon: Lock,
        color: "bg-violet-500/10 text-violet-500",
        title: "Gated Data Room",
        body: "Control who sees your financial model and cap table. Approve data room access only to investors you've vetted.",
    },
    {
        icon: TrendingUp,
        color: "bg-amber-500/10 text-amber-500",
        title: "Real-time Round Tracker",
        body: "See committed capital, % funded, and investor pipeline at a glance. Close your round with confidence.",
    },
    {
        icon: Users,
        color: "bg-pink-500/10 text-pink-500",
        title: "Investor Pipeline CRM",
        body: "Track every investor who's bookmarked, expressed interest, or requested access. Approve and deny in one click.",
    },
    {
        icon: Globe,
        color: "bg-sky-500/10 text-sky-500",
        title: "Public Discovery",
        body: "Get discovered by 1,800+ qualified investors actively browsing Project Zenith for their next deal.",
    },
];

const steps = [
    {
        num: "01",
        title: "Create your profile",
        body: "Add your company details, pitch, team bios, and funding terms in minutes.",
    },
    {
        num: "02",
        title: "Upload your materials",
        body: "Link your pitch deck, pitch video, and add gated documents to your data room.",
    },
    {
        num: "03",
        title: "Publish & go live",
        body: "Share your profile link with investors. Let the platform surface you to new ones.",
    },
    {
        num: "04",
        title: "Manage your round",
        body: "Approve data room requests, track interest, and close your round from your dashboard.",
    },
];

const checklist = [
    "Custom profile URL (projectzenith.io/yourcompany)",
    "Traction metrics grid",
    "Gated data room with access control",
    "Investor pipeline CRM",
    "Real-time funding progress tracker",
    "Pitch deck & video links",
    "Team profiles with LinkedIn",
    "Pitch event scheduling",
];

const metrics = [
    { value: "1,800+", label: "Verified Investors" },
    { value: "$240M+", label: "Capital Deployed" },
    { value: "400+", label: "Startups Listed" },
    { value: "92%", label: "Profile Completion Rate" },
];

export default function ForStartupsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505]">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden pt-20 pb-24 border-b border-border/40 bg-white dark:bg-[#0a0a0a]">
                {/* Ambient gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07)_0%,transparent_65%)] pointer-events-none" />

                <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
                    {/* Pill badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        For Founders
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
                        Stop sending pitch decks.{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Send your Profile.
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        Build a verified, structured startup profile that investors trust. Manage your entire fundraise from a single dashboard.
                    </p>

                    <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2 h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-500/30 transition-all active:scale-95"
                        >
                            Create your Profile <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/startups/novapay"
                            className="inline-flex items-center gap-2 h-12 px-8 bg-background border border-border/60 text-foreground hover:bg-muted/50 font-semibold text-sm rounded-full transition-all"
                        >
                            See a live example
                        </Link>
                    </div>

                    {/* Trust row */}
                    <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-muted-foreground">
                        {["Free to create", "No credit card", "Live in 10 minutes"].map((t) => (
                            <span key={t} className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── METRICS BAR ──────────────────────────────────────── */}
            <section className="bg-white dark:bg-[#0a0a0a] border-b border-border/40">
                <div className="container mx-auto max-w-5xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((m) => (
                        <div key={m.label} className="text-center">
                            <p className="text-2xl md:text-3xl font-extrabold text-foreground">{m.value}</p>
                            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{m.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FEATURES GRID ────────────────────────────────────── */}
            <section className="py-24 px-6 border-b border-border/40">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Everything You Need
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Your fundraise, on autopilot
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={f.title}
                                    className="bg-white dark:bg-[#0f0f0f] border border-border/50 rounded-2xl p-6 space-y-4 hover:shadow-md hover:border-border transition-all group"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${f.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-base group-hover:text-blue-600 transition-colors">{f.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ─────────────────────────────────────── */}
            <section className="py-24 px-6 border-b border-border/40 bg-[#f5f5f5] dark:bg-[#070707]">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            How It Works
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            From signup to closed round
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {steps.map((s) => (
                            <div
                                key={s.num}
                                className="bg-white dark:bg-[#0f0f0f] border border-border/50 rounded-2xl p-7 flex gap-5 hover:shadow-sm transition-all"
                            >
                                <span className="text-4xl font-extrabold text-muted-foreground/20 font-mono shrink-0 leading-none">
                                    {s.num}
                                </span>
                                <div>
                                    <h3 className="font-bold text-base mb-2">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CHECKLIST + PREVIEW ──────────────────────────────── */}
            <section className="py-24 px-6 border-b border-border/40">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Checklist */}
                        <div>
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                What's Included
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight mb-8">
                                Everything in one profile
                            </h2>
                            <ul className="space-y-3.5">
                                {checklist.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Live profile preview card */}
                        <div className="bg-white dark:bg-[#0f0f0f] border border-border/50 rounded-[1.5rem] p-8 shadow-xl space-y-6">
                            {/* Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl">
                                    NP
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-lg">NovaPay</p>
                                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">The Stripe for emerging markets</p>
                                </div>
                            </div>

                            {/* Metrics mini-grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    ["Seed", "Stage"],
                                    ["$3M", "Target Raise"],
                                    ["62%", "Funded"],
                                    ["18 mo", "Runway"],
                                ].map(([v, l]) => (
                                    <div key={l} className="bg-muted/40 border border-border/40 rounded-xl px-4 py-3">
                                        <p className="font-bold text-sm">{v}</p>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">{l}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Progress bar */}
                            <div>
                                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                                    <span>Round progress</span>
                                    <span className="font-bold text-foreground">$1.85M / $3M</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[62%] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                                </div>
                            </div>

                            <Link
                                href="/startups/novapay"
                                className="w-full inline-flex items-center justify-center gap-2 h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all active:scale-95"
                            >
                                View live profile <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST / SECURITY BAR ─────────────────────────────── */}
            <section className="py-12 px-6 border-b border-border/40 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                        {[
                            { icon: ShieldCheck, text: "Bank-grade data encryption" },
                            { icon: Lock, text: "Granular access control" },
                            { icon: Zap, text: "Real-time sync across devices" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2.5">
                                <Icon className="w-4 h-4 text-blue-500" />
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-500 text-white p-12 text-center shadow-2xl shadow-blue-500/20">
                        {/* BG orb */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider">
                                <Rocket className="w-3.5 h-3.5" /> Start for free
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                Ready to replace your pitch deck?
                            </h2>
                            <p className="text-blue-100 text-base max-w-md mx-auto">
                                It takes 10 minutes to set up. Your profile works 24/7, reaching investors even while you sleep.
                            </p>
                            <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
                                <Link
                                    href="/signup"
                                    className="inline-flex items-center gap-2 h-12 px-10 bg-white text-blue-600 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
                                >
                                    Create your Profile for free <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/discover"
                                    className="inline-flex items-center gap-2 h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-full transition-all"
                                >
                                    Browse Startups
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
