/*
 * STAGING BANNER - Site-wide banner indicating this is a preview/staging site
 *
 * Displays a persistent yellow banner at the top of every page.
 * REMOVE THIS COMPONENT from layout.tsx before final production launch.
 */
export default function StagingBanner() {
  return (
    <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-4 text-sm font-bold sticky top-0 z-[60]">
      STAGING / PREVIEW - This site is under development. Content marked with badges is placeholder and will be updated before launch.
    </div>
  )
}
