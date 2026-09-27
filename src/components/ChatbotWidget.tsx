import { Bot, MessageCircle, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'
import { cn } from '@/lib/utils'

const whatsappNumber = '918305010777'

const franchiseBrands = [
  { name: 'Samosa King', slug: 'samosa-king' },
  { name: 'Andey Ki Duniya', slug: 'andey-ki-duniya' },
  { name: 'Cafe Cochin', slug: 'cafe-cochin' },
  { name: 'Doodhwala', slug: 'doodhwala' },
  { name: 'Paneerwala', slug: 'paneerwala' },
]

type Message = {
  id: string
  from: 'bot' | 'user'
  text: string
}

type Stage = 'thinking' | 'intro' | 'brand-picker' | 'browsing' | 'brand-selected'

function whatsappLinkFor(brandName: string) {
  const text = `Hi, I'm interested in the franchise of ${brandName}.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}

function OptionButton({
  index,
  onClick,
  children,
}: {
  index: number
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ animationDelay: `${index * 90}ms` }}
      className="animate-slide-in-left rounded-full border border-brand-gold/40 bg-transparent px-3.5 py-2 text-left text-xs font-medium text-brand-forest transition-colors hover:bg-brand-gold/10"
    >
      {children}
    </button>
  )
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [stage, setStage] = useState<Stage>('thinking')
  const [typing, setTyping] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const messageIdRef = useRef(1)
  const hasGreetedRef = useRef(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen || hasGreetedRef.current) return
    hasGreetedRef.current = true
    sendBotMessage(
      "Hi, I'm Bhargava's Assistant! \u{1F44B} Ever thought about running your own food business? We're looking for passionate franchise partners across India.",
      'intro',
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, stage, typing, isOpen])

  function pushMessage(from: Message['from'], text: string) {
    const id = `${from}-${messageIdRef.current++}`
    setMessages((prev) => [...prev, { id, from, text }])
  }

  function sendBotMessage(text: string, nextStage: Stage, delayMs = 900) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushMessage('bot', text)
      setStage(nextStage)
    }, delayMs)
  }

  function handleWantsFranchise() {
    pushMessage('user', 'Tell me about franchise opportunities')
    setStage('thinking')
    sendBotMessage(
      'Awesome! We have 5 brands actively looking for franchise partners right now. Which one catches your eye?',
      'brand-picker',
    )
  }

  function handleJustBrowsing() {
    pushMessage('user', 'Just browsing for now')
    setStage('thinking')
    sendBotMessage(
      "No worries at all! Whenever you're ready to explore a franchise, just tap below. \u{1F60A}",
      'browsing',
    )
  }

  function handleBrandPick(brandName: string) {
    pushMessage('user', brandName)
    setSelectedBrand(brandName)
    setStage('thinking')
    sendBotMessage(
      `Great choice! ${brandName} is one of our most loved brands. Let's connect you with our franchise team on WhatsApp — they'll walk you through investment and next steps.`,
      'brand-selected',
    )
  }

  function handleChooseDifferentBrand() {
    pushMessage('user', 'Choose a different brand')
    setStage('thinking')
    sendBotMessage('Sure! Which one would you like instead?', 'brand-picker')
  }

  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {isOpen && (
        <div className="flex h-[480px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-ivory-soft shadow-2xl shadow-black/30">
          <div className="flex items-center gap-3 bg-brand-charcoal px-4 py-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 ring-1 ring-brand-gold/40">
              <Bot className="h-5 w-5 text-brand-gold" />
            </span>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="font-heading text-sm text-brand-ivory">Bhargava&apos;s Assistant</span>
              <span className="flex items-center gap-1.5 text-xs text-brand-ivory-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Franchise support
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-brand-ivory-muted transition-colors hover:bg-brand-ivory/10 hover:text-brand-gold"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm',
                  message.from === 'bot'
                    ? 'self-start rounded-bl-sm bg-white text-brand-forest ring-1 ring-black/5'
                    : 'self-end rounded-br-sm bg-brand-gold text-brand-charcoal',
                )}
              >
                {message.text}
              </div>
            ))}

            {typing && (
              <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-forest/40"
                  style={{ animationDelay: '0ms' }}
                />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-forest/40"
                  style={{ animationDelay: '150ms' }}
                />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-forest/40"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            )}

            {stage === 'intro' && (
              <div className="flex flex-col gap-2 pt-1">
                <OptionButton index={0} onClick={handleWantsFranchise}>
                  Tell me about franchise opportunities
                </OptionButton>
                <OptionButton index={1} onClick={handleJustBrowsing}>
                  Just browsing
                </OptionButton>
              </div>
            )}

            {stage === 'brand-picker' && (
              <div className="flex flex-wrap gap-2 pt-1">
                {franchiseBrands.map((brand, index) => (
                  <OptionButton key={brand.slug} index={index} onClick={() => handleBrandPick(brand.name)}>
                    {brand.name}
                  </OptionButton>
                ))}
              </div>
            )}

            {stage === 'browsing' && (
              <div className="flex flex-col gap-2 pt-1">
                <OptionButton index={0} onClick={handleWantsFranchise}>
                  Show me the brands
                </OptionButton>
              </div>
            )}

            {stage === 'brand-selected' && selectedBrand && (
              <div className="flex flex-col items-start gap-2 pt-1">
                <a
                  href={whatsappLinkFor(selectedBrand)}
                  target="_blank"
                  rel="noreferrer"
                  style={{ animationDelay: '0ms' }}
                  className="animate-slide-in-left inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <OptionButton index={1} onClick={handleChooseDifferentBrand}>
                  Choose a different brand
                </OptionButton>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat with Bhargava’s Assistant' : 'Chat with Bhargava’s Assistant'}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-charcoal shadow-lg shadow-black/30 ring-4 ring-brand-gold/20 transition-transform hover:scale-105 hover:bg-brand-gold/90"
      >
        {!isOpen && <span className="absolute inset-0 rounded-full bg-brand-gold/50 animate-ping" />}
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
