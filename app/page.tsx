"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import {
  FiArrowUpRight,
  FiStar,
  FiZap,
  FiPlus,
  FiTrendingUp,
} from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Main Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column - About Section */}
        <div className="lg:col-span-3 bg-gray pt-20 bg-red-100">
          <section className="min-h-[60vh] flex flex-col justify-between p-8 lg:p-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Emote is a startup that specializes in mental health for
                employees. We treat people with burnout with the help of a
                therapist and a psychiatrist.
              </p>
            </div>

            <Link
              href="#learn-more"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity mt-auto"
            >
              LEARN MORE
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </section>
        </div>

        {/* Center Column - Hero and Review */}
        <div className="lg:col-span-6 bg-pink">
          {/* Hero Section */}
          <section className="min-h-[60vh] flex items-center justify-center px-8 pt-32 pb-16">
            <div className="text-center max-w-3xl !font-heading">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
                HELPING
                <br />
                YOUR
                <br />
                <span className="text-accent">EMOTIONS</span>
              </h1>
            </div>
          </section>

          {/* Review Section */}
          <div className="relative px-4 pb-8">
            <div className="p-8 shadow-lg max-w-md mx-auto bg-stone-200">
              <div className="flex items-center gap-4 mb-6 ">
                <div className="relative rounded-full overflow-hidden bg-muted">
                  <Image
                    src="/assets/professional-therapist-woman-with-glasses.jpg"
                    alt="Reviewer"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  # REVIEW
                </span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4">
                I forgot about burnout!
              </h3>

              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold text-foreground mr-2">
                  5.0
                </span>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact and Stats */}
        <div className="lg:col-span-3 bg-gray bg-stone-300 pt-30">
          <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 lg:p-12 relative">
            <div className="relative w-full">
              <div className="relative w-full rounded-3xl overflow-hidden mb-8 z-1">
                <Image
                  src="/assets/professional-therapist-woman-with-glasses-removebg-preview.png"
                  width={700}
                  height={400}
                  alt="Specialist"
                  className="object-cover"
                />
              </div>
              <div className="w-82 h-1 bg-black absolute bottom-8 -right-10" />
              {/* Floating Chat Button */}
              <div className="z-2 absolute -bottom-4 left-1/2 -translate-x-1/2 bg-pink-500 rounded-full p-6 shadow-xl">
                <AiFillMessage className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="relative w-full bg-neutral-300 py-16">
              {/* Main content container */}
              <p className="text-lg text-center text-neutral-900 absolute top-10 right-1/2 translate-x-1/2">
                Contact our
                <br />
                Specialists
              </p>
              {/* Large curved arc at bottom */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-180 w-full h-44 border border-neutral-400 rounded-t-full"></div>
            </div>
          </section>
        </div>

        {/* Bottom Left - Pricing */}
        <div className="lg:col-span-3 bg-red-100 border border-neutral-400">
          <section className="min-h-[40vh] flex flex-col justify-center p-8 lg:p-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Group employees
              <br />
              sessions
            </h2>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center max-w-xs -rotate-10 rounded-full bg-black text-white hover:bg-black/90 p-2 gap-3 mb-6">
                <div className="p-2 rounded-full bg-purple-500">
                  <FiZap />
                </div>
                <span className="flex-1 text-left">ANNUALY</span>
                <span className="font-semibold mr-2">$560</span>
              </button>

              <button className="w-full flex items-center justify-center max-w-xs rounded-full border-2 border-foreground bg-transparent text-foreground p-2 gap-3">
                <div className="p-2 rounded-full bg-black flex items-center justify-center">
                  <FiPlus className="text-white" />
                </div>
                <span className="flex-1 text-left">OTHER SESSIONS</span>
              </button>
            </div>
          </section>
        </div>

        {/* Bottom Center - 3D Graphic */}
        <div className="lg:col-span-6 bg-stone-300">
          <ThreeDGraphic />
        </div>

        {/* Bottom Right - Stats */}
        <div className="lg:col-span-3 bg-stone-300 border border-neutral-400">
          <section className="min-h-[40vh] flex flex-col items-center justify-center p-8 lg:p-12">
            <div className="text-center space-y-4">
              <h2 className="text-7xl md:text-8xl font-bold text-foreground">
                10K
              </h2>
              <p className="text-sm font-medium text-foreground">
                # TRUSTED BY USERS
              </p>

              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <FiTrendingUp className="w-5 h-5 text-foreground" />
                <span className="text-lg font-semibold text-foreground">
                  +90%
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// 3D Graphic Component
function ThreeDGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw 3D-like circular graphic
    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw main circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#2a2a2a";
      ctx.fill();

      // Draw highlight arc (3D effect)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI * 0.7, Math.PI * 1.3);
      ctx.strokeStyle = "#4a4a4a";
      ctx.lineWidth = radius * 0.3;
      ctx.stroke();

      // Draw arrow
      const arrowStartX = centerX - radius * 0.6;
      const arrowStartY = centerY + radius * 0.3;
      const arrowEndX = centerX + radius * 0.6;
      const arrowEndY = centerY - radius * 0.3;

      ctx.beginPath();
      ctx.moveTo(arrowStartX, arrowStartY);
      ctx.lineTo(arrowEndX, arrowEndY);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.stroke();

      // Draw arrowhead
      const arrowHeadSize = 20;
      const angle = Math.atan2(
        arrowEndY - arrowStartY,
        arrowEndX - arrowStartX
      );

      ctx.beginPath();
      ctx.moveTo(arrowEndX, arrowEndY);
      ctx.lineTo(
        arrowEndX - arrowHeadSize * Math.cos(angle - Math.PI / 6),
        arrowEndY - arrowHeadSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        arrowEndX - arrowHeadSize * Math.cos(angle + Math.PI / 6),
        arrowEndY - arrowHeadSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-[40vh] flex items-center justify-center p-8">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-md max-h-96"
        style={{ width: "100%", height: "400px" }}
      />
    </section>
  );
}
