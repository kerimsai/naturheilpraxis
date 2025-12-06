import React from 'react';

const whatsappHref = `https://wa.me/4915150798638?text=${encodeURIComponent(
  'Hallo Frau Jordan, ich habe eine Frage zu Ihren naturheilkundlichen Angeboten.'
)}`;

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.04 4C9.405 4 4 9.373 4 15.98c0 2.366.682 4.571 1.86 6.44L4 28l5.744-1.83a12.033 12.033 0 0 0 6.296 1.75C22.676 27.92 28 22.547 28 15.94 28 9.332 22.676 4 16.04 4Zm5.875 17.373c-.249.698-1.47 1.333-2.023 1.42-.517.078-1.157.111-1.868-.117-.43-.137-.984-.32-1.698-.624-2.987-1.29-4.93-4.293-5.082-4.495-.15-.2-1.214-1.616-1.214-3.08 0-1.463.768-2.18 1.04-2.477.273-.298.595-.372.794-.372.2 0 .398.002.573.011.186.009.44-.071.69.525.249.596.845 2.063.92 2.212.073.148.12.321.023.52-.099.2-.149.322-.298.495-.149.172-.314.384-.449.515-.15.148-.306.31-.132.607.173.298.769 1.266 1.653 2.048 1.14 1.016 2.098 1.335 2.397 1.483.298.148.472.132.646-.079.175-.213.745-.868.944-1.166.2-.298.398-.25.67-.15.273.099 1.728.814 2.024.962.298.148.497.222.57.347.074.125.074.723-.175 1.42Z"
      />
    </svg>
  );
}

export function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Kontakt aufnehmen (+49 151 50798638)"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-300/40 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fad52] active:scale-95"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Nachricht senden</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
