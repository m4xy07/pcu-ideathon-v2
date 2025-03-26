import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '@/components/AccordionCore';
  import { ChevronUp } from 'lucide-react';
  
  export function AccordionIcons() {
    return (
      <Accordion
        className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <AccordionItem value="getting-started" className="py-6">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50 group">
            <div className="flex items-center text-[16px] md:text-[18px] justify-between">
              <div>Phase 1: Suggestion & Feedback</div>
              <ChevronUp className="chevron h-4 w-4 text-zinc-950 transition-transform duration-200 group-[data-expanded]:rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400 py-2">
              Teams will submit an initial project proposal, which includes:
            </p>
            <ul className="text-zinc-500 dark:text-zinc-400 list-disc list-inside pl-4">
              <li>Brief problem statement</li>
              <li>Proposed solution</li>
              <li>Technology stack</li>
              <li>Future plans for the solution</li>
            </ul>
            <p className="text-zinc-500 dark:text-zinc-400 py-2">
              Teams will receive guidance from mentors and refine their solutions accordingly.
            </p>
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="animation-properties" className="py-6">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50 group">
            <div className="flex items-center text-[16px] md:text-[18px] justify-between">
              <div>Phase 2: Midway Evaluation </div>
              <ChevronUp className="chevron h-4 w-4 text-zinc-950 transition-transform duration-200 group-[data-expanded]:rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400 py-2">
              Teams will submit an initial project proposal, which includes:
            </p>
            <ul className="text-zinc-500 dark:text-zinc-400 list-disc list-inside pl-4 pb-2">
              <li>Judges will review the progress of each team.</li>
              <li>Mentors will provide feedback to help improve the solutions.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="advanced-usage" className="py-6">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50 group">
            <div className="flex items-center text-[16px] md:text-[18px] justify-between">
              <div>Phase 3: Final Judging & Pitch </div>
              <ChevronUp className="chevron h-4 w-4 text-zinc-950 transition-transform duration-200 group-[data-expanded]:rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-zinc-500 dark:text-zinc-400 list-disc list-inside py-2 pl-4">
              <li>Each team will have 5 minutes to present their solution, followed by 5 minutes of Q&A.</li>
              <li>Focus on sustainability and real-world impact will be key evaluation criteria.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  