import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
  } from '@/components/morphingdialog';
  import { PlusIcon } from 'lucide-react';
  
  type DialogData = {
    title: string;
    imageSrc: string;
    imageAlt: string;
    subtitle: string;
    description: string;
  };
  
  export function MorphingDialogBasicOne({ dialogData }: { dialogData: DialogData }) {
    const { title, imageSrc, imageAlt, subtitle, description } = dialogData;
  
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger
          style={{
            borderRadius: '12px',
          }}
          className="flex w-full flex-col sm:flex-none md:flex-1 overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <MorphingDialogImage
            src={imageSrc}
            alt={imageAlt}
            className="h-64 w-full object-top object-cover"
          />
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                {subtitle}
              </MorphingDialogSubtitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
              aria-label="Open dialog"
            >
              <PlusIcon size={12} />
            </button>
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: '24px',
            }}
            className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
          >
            <MorphingDialogImage
              src={imageSrc}
              alt={imageAlt}
              className="h-[540px] w-full object-cover object-top"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                {subtitle}
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                  {description}
                </p>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-black" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    );
  }
  