import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Duke MEM ’27 | Aspiring Product Manager & Project Leader
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        3x AWS Certified | Driving Cloud Transformation & AI Innovation | Published Researcher passionate about bridging technology, strategy, and product impact.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <Button asChild size="lg" className="rounded-2xl px-6 shadow-md">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </Button>

        <Button asChild variant="outline" size="lg" className="rounded-2xl px-6">
          <a
            href="https://www.linkedin.com/in/abinavnarayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
