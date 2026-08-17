"use client";
// Works as app/not-found.tsx (App Router) or pages/404.tsx (Pages Router).
// It's a Client Component (needed for the Framer Motion mascot), so Next.js
// won't let you export `metadata` from this file — set the <title> in a
// parent layout if you want the tab text to change, or wrap this in a
// server component that exports metadata and renders <NotFound /> inside.

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const Color = {
  ink: "#16233A",
  inkMuted: "#6B7A90",
  primary: "#1871C1",
  primaryDark: "#125A99",
  primaryTint: "#E8F1FB",
  fog: "#F6F9FB",
  paper: "#FFFFFF",
  border: "#E8EAF0",
  manila: "#F5C88A",
  manilaDeep: "#E8B36B",
  blush: "#FF9E8A",
};

function CaseFileMascot() {
  const reduceMotion = useReducedMotion();

  const bob = reduceMotion ? undefined : { y: [0, -10, 0] };
  const bobTransition = {
    duration: 3.2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  const blink = reduceMotion ? undefined : { ry: [11, 1, 11] };
  const blinkTransition = {
    duration: 0.25,
    repeat: Infinity,
    repeatDelay: 3.4,
    ease: "easeInOut" as const,
  };

  const wobble = reduceMotion ? undefined : { rotate: [-6, 6, -6] };
  const wobbleTransition = {
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <svg
      viewBox="0 0 260 260"
      width="220"
      height="220"
      role="img"
      aria-label="A little case-file folder character, looking around confused with a magnifying glass"
    >
      {/* ground shadow, stays put while the mascot bobs */}
      <ellipse
        cx="130"
        cy="228"
        rx="58"
        ry="10"
        fill="#0B1220"
        opacity="0.08"
      />

      <motion.g animate={bob} transition={bob ? bobTransition : undefined}>
        {/* paper peeking out the top */}
        <g transform="rotate(-3 130 60)">
          <rect
            x="96"
            y="34"
            width="68"
            height="52"
            rx="8"
            fill={Color.paper}
            stroke={Color.border}
            strokeWidth="2"
          />
          <line
            x1="108"
            y1="46"
            x2="150"
            y2="46"
            stroke={Color.border}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="108"
            y1="56"
            x2="150"
            y2="56"
            stroke={Color.border}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="108"
            y1="66"
            x2="140"
            y2="66"
            stroke={Color.border}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* folder tab + body */}
        <rect
          x="78"
          y="58"
          width="70"
          height="18"
          rx="7"
          fill={Color.manilaDeep}
        />
        <rect
          x="52"
          y="72"
          width="156"
          height="118"
          rx="22"
          fill={Color.manila}
          stroke={Color.manilaDeep}
          strokeWidth="2"
        />

        {/* resting left arm + legs */}
        <path
          d="M62,150 Q42,168 48,186"
          stroke={Color.manila}
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100,188 L94,220"
          stroke={Color.manilaDeep}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <ellipse cx="92" cy="224" rx="12" ry="7" fill={Color.ink} />
        <path
          d="M160,188 L166,220"
          stroke={Color.manilaDeep}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <ellipse cx="168" cy="224" rx="12" ry="7" fill={Color.ink} />

        {/* face: confused eyebrows, blinking eyes, blush, surprised mouth */}
        <path
          d="M92,118 q10,-10 20,-4"
          stroke={Color.ink}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M148,112 q10,-6 20,2"
          stroke={Color.ink}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        <motion.ellipse
          cx="102"
          cy="132"
          rx="9"
          ry="11"
          fill={Color.ink}
          animate={blink}
          transition={blink ? blinkTransition : undefined}
        />
        <motion.ellipse
          cx="158"
          cy="132"
          rx="9"
          ry="11"
          fill={Color.ink}
          animate={blink}
          transition={blink ? blinkTransition : undefined}
        />
        <circle cx="105" cy="127" r="2.5" fill={Color.paper} />
        <circle cx="161" cy="127" r="2.5" fill={Color.paper} />

        <ellipse
          cx="86"
          cy="150"
          rx="11"
          ry="6"
          fill={Color.blush}
          opacity="0.55"
        />
        <ellipse
          cx="174"
          cy="150"
          rx="11"
          ry="6"
          fill={Color.blush}
          opacity="0.55"
        />

        <ellipse
          cx="130"
          cy="162"
          rx="8"
          ry="10"
          fill={Color.paper}
          stroke={Color.ink}
          strokeWidth="3"
        />

        {/* right arm holding a magnifying glass, wobbling as it searches */}
        <motion.g
          style={{ transformOrigin: "196px 150px" }}
          animate={wobble}
          transition={wobble ? wobbleTransition : undefined}
        >
          <path
            d="M196,150 Q222,130 218,104"
            stroke={Color.manila}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="218"
            cy="92"
            r="16"
            fill={Color.primaryTint}
            stroke={Color.ink}
            strokeWidth="4"
          />
          <line
            x1="229"
            y1="103"
            x2="240"
            y2="114"
            stroke={Color.ink}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.g>

      {/* footprints trailing off, as if the page wandered away */}
      <motion.ellipse
        cx="222"
        cy="222"
        rx="7"
        ry="4"
        fill={Color.inkMuted}
        transform="rotate(-20 222 222)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <motion.ellipse
        cx="240"
        cy="206"
        rx="7"
        ry="4"
        fill={Color.inkMuted}
        transform="rotate(-20 240 206)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.ellipse
        cx="256"
        cy="188"
        rx="7"
        ry="4"
        fill={Color.inkMuted}
        transform="rotate(-20 256 188)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="lz404-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Space+Mono:wght@400;700&display=swap');

        .lz404-page {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${Color.fog};
          padding: 32px 24px;
          overflow: hidden;
          text-align: center;
        }
        .lz404-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: ${Color.primaryTint};
          filter: blur(60px);
          opacity: 0.7;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -58%);
          pointer-events: none;
        }
        .lz404-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${Color.primary};
          background: ${Color.paper};
          border: 1px solid ${Color.border};
          border-radius: 999px;
          padding: 6px 14px;
          margin-bottom: 8px;
        }
        .lz404-mascot {
          position: relative;
          margin: 4px 0 8px;
        }
        .lz404-heading {
          position: relative;
          font-family: 'Baloo 2', sans-serif;
          font-weight: 700;
          font-size: clamp(26px, 4.5vw, 38px);
          color: ${Color.ink};
          margin: 4px 0 10px;
        }
        .lz404-subtext {
          position: relative;
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: ${Color.inkMuted};
          max-width: 420px;
          margin: 0 0 28px;
        }
        .lz404-actions {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .lz404-btn {
          font-family: Inter, system-ui, sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          background: ${Color.primary};
          border-radius: 14px;
          padding: 12px 24px;
          text-decoration: none;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .lz404-btn:hover { background: ${Color.primaryDark}; transform: translateY(-1px); }
        .lz404-btn:focus-visible {
          outline: 2px solid ${Color.primaryDark};
          outline-offset: 3px;
        }
        .lz404-link {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: ${Color.inkMuted};
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }
        .lz404-link:hover { color: ${Color.primary}; }
        .lz404-link:focus-visible {
          outline: 2px solid ${Color.primary};
          outline-offset: 3px;
          border-radius: 4px;
        }
        @media (max-width: 380px) {
          .lz404-actions { flex-direction: column; gap: 12px; }
        }
      `}</style>

      <div className="lz404-glow" />

      <span className="lz404-eyebrow">Error 404 · Not on file</span>

      <div className="lz404-mascot">
        <CaseFileMascot />
      </div>

      <h1 className="lz404-heading">This page isn&apos;t on file.</h1>
      <p className="lz404-subtext">
        We checked the docket twice — there&apos;s no record of this page. It
        may have been moved, renamed, or never existed.
      </p>

      <div className="lz404-actions">
        <Link href="/" className="lz404-btn">
          Back to home
        </Link>
        <Link href="/contact" className="lz404-link">
          Contact support
        </Link>
      </div>
    </main>
  );
}
