import { InstagramIcon } from '@/components/icons/instagram-icon'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const instagramHref =
  'https://www.instagram.com/bhargavaventures.raipur?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
const whatsappHref = 'https://wa.me/918305010777'

export default function SocialSidebar() {
  return (
    <div className="fixed top-24 right-4 z-40 flex flex-col gap-3 sm:top-28 sm:right-6 lg:top-44">
      <a
        href={instagramHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow us on Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg shadow-black/30 ring-2 ring-white/10 transition-transform hover:scale-105"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-2 ring-white/10 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  )
}
