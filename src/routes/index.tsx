import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: StockExchanges,
})

interface Exchange {
  name: string
  country: string
  timezone: string
  openHour: number
  openMinute: number
  closeHour: number
  closeMinute: number
  flag: string
  mic: string
  website: string
}

const exchanges: Exchange[] = [
  {
    name: 'New York Stock Exchange',
    country: 'USA',
    timezone: 'America/New_York',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
    flag: '🇺🇸',
    mic: 'NYSE',
    website: 'https://www.nyse.com',
  },
  {
    name: 'NASDAQ',
    country: 'USA',
    timezone: 'America/New_York',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
    flag: '🇺🇸',
    mic: 'NASDAQ',
    website: 'https://www.nasdaq.com',
  },
  {
    name: 'London Stock Exchange',
    country: 'United Kingdom',
    timezone: 'Europe/London',
    openHour: 8,
    openMinute: 0,
    closeHour: 16,
    closeMinute: 30,
    flag: '🇬🇧',
    mic: 'LSE',
    website: 'https://www.londonstockexchange.com',
  },
  {
    name: 'Euronext Paris',
    country: 'France',
    timezone: 'Europe/Paris',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇫🇷',
    mic: 'ENX',
    website: 'https://www.euronext.com/en/markets/paris',
  },
  {
    name: 'Frankfurt Stock Exchange',
    country: 'Germany',
    timezone: 'Europe/Berlin',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇩🇪',
    mic: 'XFRA',
    website: 'https://www.deutsche-boerse.com',
  },
  {
    name: 'Tokyo Stock Exchange',
    country: 'Japan',
    timezone: 'Asia/Tokyo',
    openHour: 9,
    openMinute: 0,
    closeHour: 15,
    closeMinute: 30,
    flag: '🇯🇵',
    mic: 'TSE',
    website: 'https://www.jpx.co.jp/english/',
  },
  {
    name: 'Shanghai Stock Exchange',
    country: 'China',
    timezone: 'Asia/Shanghai',
    openHour: 9,
    openMinute: 30,
    closeHour: 15,
    closeMinute: 0,
    flag: '🇨🇳',
    mic: 'SSE',
    website: 'https://english.sse.com.cn',
  },
  {
    name: 'Shenzhen Stock Exchange',
    country: 'China',
    timezone: 'Asia/Shanghai',
    openHour: 9,
    openMinute: 30,
    closeHour: 15,
    closeMinute: 0,
    flag: '🇨🇳',
    mic: 'SZSE',
    website: 'https://www.szse.cn/English/',
  },
  {
    name: 'Hong Kong Stock Exchange',
    country: 'Hong Kong',
    timezone: 'Asia/Hong_Kong',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
    flag: '🇭🇰',
    mic: 'HKEX',
    website: 'https://www.hkex.com.hk',
  },
  {
    name: 'Bombay Stock Exchange',
    country: 'India',
    timezone: 'Asia/Kolkata',
    openHour: 9,
    openMinute: 15,
    closeHour: 15,
    closeMinute: 30,
    flag: '🇮🇳',
    mic: 'BSE',
    website: 'https://www.bseindia.com',
  },
  {
    name: 'National Stock Exchange of India',
    country: 'India',
    timezone: 'Asia/Kolkata',
    openHour: 9,
    openMinute: 15,
    closeHour: 15,
    closeMinute: 30,
    flag: '🇮🇳',
    mic: 'NSE',
    website: 'https://www.nseindia.com',
  },
  {
    name: 'Toronto Stock Exchange',
    country: 'Canada',
    timezone: 'America/Toronto',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
    flag: '🇨🇦',
    mic: 'TSX',
    website: 'https://www.tsx.com',
  },
  {
    name: 'Australian Securities Exchange',
    country: 'Australia',
    timezone: 'Australia/Sydney',
    openHour: 10,
    openMinute: 0,
    closeHour: 16,
    closeMinute: 0,
    flag: '🇦🇺',
    mic: 'ASX',
    website: 'https://www.asx.com.au',
  },
  {
    name: 'Korea Exchange',
    country: 'South Korea',
    timezone: 'Asia/Seoul',
    openHour: 9,
    openMinute: 0,
    closeHour: 15,
    closeMinute: 30,
    flag: '🇰🇷',
    mic: 'KRX',
    website: 'https://global.krx.co.kr',
  },
  {
    name: 'SIX Swiss Exchange',
    country: 'Switzerland',
    timezone: 'Europe/Zurich',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇨🇭',
    mic: 'SIX',
    website: 'https://www.six-group.com',
  },
  {
    name: 'Euronext Amsterdam',
    country: 'Netherlands',
    timezone: 'Europe/Amsterdam',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇳🇱',
    mic: 'AEX',
    website: 'https://www.euronext.com/en/markets/amsterdam',
  },
  {
    name: 'Borsa Italiana',
    country: 'Italy',
    timezone: 'Europe/Rome',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇮🇹',
    mic: 'MTA',
    website: 'https://www.borsaitaliana.it',
  },
  {
    name: 'Bolsa de Madrid',
    country: 'Spain',
    timezone: 'Europe/Madrid',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇪🇸',
    mic: 'BME',
    website: 'https://www.bolsamadrid.es',
  },
  {
    name: 'B3 – Brasil Bolsa Balcão',
    country: 'Brazil',
    timezone: 'America/Sao_Paulo',
    openHour: 10,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇧🇷',
    mic: 'B3',
    website: 'https://www.b3.com.br',
  },
  {
    name: 'Johannesburg Stock Exchange',
    country: 'South Africa',
    timezone: 'Africa/Johannesburg',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇿🇦',
    mic: 'JSE',
    website: 'https://www.jse.co.za',
  },
  {
    name: 'Warsaw Stock Exchange',
    country: 'Poland',
    timezone: 'Europe/Warsaw',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇵🇱',
    mic: 'GPW',
    website: 'https://www.gpw.pl/en-home',
  },
  {
    name: 'Saudi Exchange (Tadawul)',
    country: 'Saudi Arabia',
    timezone: 'Asia/Riyadh',
    openHour: 10,
    openMinute: 0,
    closeHour: 15,
    closeMinute: 0,
    flag: '🇸🇦',
    mic: 'TADAWUL',
    website: 'https://www.saudiexchange.sa',
  },
  {
    name: 'Singapore Exchange',
    country: 'Singapore',
    timezone: 'Asia/Singapore',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇸🇬',
    mic: 'SGX',
    website: 'https://www.sgx.com',
  },
  {
    name: 'Bursa Malaysia',
    country: 'Malaysia',
    timezone: 'Asia/Kuala_Lumpur',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇲🇾',
    mic: 'BURSA',
    website: 'https://www.bursamalaysia.com',
  },
  {
    name: 'Taiwan Stock Exchange',
    country: 'Taiwan',
    timezone: 'Asia/Taipei',
    openHour: 9,
    openMinute: 0,
    closeHour: 13,
    closeMinute: 30,
    flag: '🇹🇼',
    mic: 'TWSE',
    website: 'https://www.twse.com.tw/en/',
  },
  {
    name: 'Tel Aviv Stock Exchange',
    country: 'Israel',
    timezone: 'Asia/Jerusalem',
    openHour: 9,
    openMinute: 59,
    closeHour: 17,
    closeMinute: 25,
    flag: '🇮🇱',
    mic: 'TASE',
    website: 'https://www.tase.co.il/en',
  },
  {
    name: 'Mexico Stock Exchange',
    country: 'Mexico',
    timezone: 'America/Mexico_City',
    openHour: 8,
    openMinute: 30,
    closeHour: 15,
    closeMinute: 0,
    flag: '🇲🇽',
    mic: 'BMV',
    website: 'https://www.bmv.com.mx',
  },
  {
    name: 'Oslo Stock Exchange',
    country: 'Norway',
    timezone: 'Europe/Oslo',
    openHour: 9,
    openMinute: 0,
    closeHour: 16,
    closeMinute: 30,
    flag: '🇳🇴',
    mic: 'OSE',
    website: 'https://www.euronext.com/en/markets/oslo',
  },
  {
    name: 'Copenhagen Stock Exchange',
    country: 'Denmark',
    timezone: 'Europe/Copenhagen',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
    flag: '🇩🇰',
    mic: 'CSE',
    website: 'https://www.nasdaqomxnordic.com',
  },
  {
    name: 'Helsinki Stock Exchange',
    country: 'Finland',
    timezone: 'Europe/Helsinki',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
    flag: '🇫🇮',
    mic: 'HSE',
    website: 'https://www.nasdaqomxnordic.com',
  },
]

function getLocalTime(timezone: string): Date {
  const now = new Date()
  return new Date(now.toLocaleString('en-US', { timeZone: timezone }))
}

function isWeekday(date: Date): boolean {
  const day = date.getDay()
  return day !== 0 && day !== 6
}

function isOpen(exchange: Exchange): boolean {
  const local = getLocalTime(exchange.timezone)
  if (!isWeekday(local)) return false
  const totalMins = local.getHours() * 60 + local.getMinutes()
  const openMins = exchange.openHour * 60 + exchange.openMinute
  const closeMins = exchange.closeHour * 60 + exchange.closeMinute
  return totalMins >= openMins && totalMins < closeMins
}

function formatLocalTime(timezone: string): string {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

function formatLocalDate(timezone: string): string {
  return new Date().toLocaleDateString('en-US', {
    timeZone: timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatHours(h: number, m: number): string {
  return `${pad(h)}:${pad(m)}`
}

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getNextOpen(exchange: Exchange): { secondsUntil: number; label: string } {
  const local = getLocalTime(exchange.timezone)
  const candidate = new Date(local)
  candidate.setHours(exchange.openHour, exchange.openMinute, 0, 0)

  let dayOffset = 0
  while (
    candidate.getTime() <= local.getTime() ||
    candidate.getDay() === 0 ||
    candidate.getDay() === 6
  ) {
    candidate.setDate(candidate.getDate() + 1)
    candidate.setHours(exchange.openHour, exchange.openMinute, 0, 0)
    dayOffset += 1
  }

  const secondsUntil = Math.max(0, Math.floor((candidate.getTime() - local.getTime()) / 1000))
  const timeStr = formatHours(exchange.openHour, exchange.openMinute)
  let label: string
  if (dayOffset === 0) label = `today at ${timeStr}`
  else if (dayOffset === 1) label = `tomorrow at ${timeStr}`
  else label = `${DAY_LABELS[candidate.getDay()]} at ${timeStr}`

  return { secondsUntil, label }
}

function formatCountdown(totalSeconds: number): string {
  const days = Math.floor(totalSeconds / 86400)
  const h = Math.floor((totalSeconds % 86400) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  if (days > 0) return `${days}d ${pad(h)}:${pad(m)}:${pad(s)}`
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

function AdSlot({ label }: { label: string }) {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg py-8 text-gray-400 text-sm font-medium tracking-wide select-none">
      {label}
    </div>
  )
}

function ExchangeCard({ exchange, now }: { exchange: Exchange; now: number }) {
  void now
  const open = isOpen(exchange)
  const localTime = formatLocalTime(exchange.timezone)
  const localDate = formatLocalDate(exchange.timezone)
  const nextOpen = open ? null : getNextOpen(exchange)

  return (
    <a
      href={exchange.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${exchange.name} official website (opens in new tab)`}
      className={`block rounded-xl border-2 p-5 flex flex-col gap-2 transition-colors hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        open
          ? 'bg-green-50 border-green-400 hover:bg-green-100'
          : 'bg-gray-900 border-gray-700 text-gray-100 hover:bg-gray-800'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-2xl leading-none">{exchange.flag}</span>
          <div className="min-w-0">
            <p
              className={`font-bold text-sm leading-tight truncate ${open ? 'text-gray-900' : 'text-gray-100'}`}
            >
              {exchange.name}
            </p>
            <p
              className={`text-xs ${open ? 'text-gray-500' : 'text-gray-400'}`}
            >
              {exchange.country} · {exchange.mic}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full ${
            open
              ? 'bg-green-500 text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          {open ? 'OPEN' : 'CLOSED'}
        </span>
      </div>

      <div className="flex items-end justify-between mt-1">
        <div>
          <p
            className={`text-xl font-mono font-semibold tabular-nums ${open ? 'text-green-700' : 'text-gray-200'}`}
          >
            {localTime}
          </p>
          <p
            className={`text-xs ${open ? 'text-gray-500' : 'text-gray-500'}`}
          >
            {localDate}
          </p>
        </div>
        <p
          className={`text-xs text-right ${open ? 'text-gray-500' : 'text-gray-500'}`}
        >
          {formatHours(exchange.openHour, exchange.openMinute)} –{' '}
          {formatHours(exchange.closeHour, exchange.closeMinute)}
        </p>
      </div>

      {nextOpen && (
        <div className="mt-1 pt-2 border-t border-gray-800 flex items-center justify-between gap-2 text-xs">
          <span className="text-gray-400">Opens {nextOpen.label}</span>
          <span className="font-mono tabular-nums text-gray-200">
            in {formatCountdown(nextOpen.secondsUntil)}
          </span>
        </div>
      )}
    </a>
  )
}

function StockExchanges() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const openCount = exchanges.filter(isOpen).length

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top ad slot */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <AdSlot label="Advertisement · 728 × 90" />
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            World Stock Exchanges
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Live trading hours — local time updates every second
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700">{openCount} open</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">{exchanges.length - openCount} closed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exchanges.map((exchange) => (
            <ExchangeCard key={exchange.mic + exchange.name} exchange={exchange} now={tick} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Hours shown are standard trading hours and do not account for public holidays.
          All times are local to each exchange.
        </p>
      </main>

      {/* Bottom ad slot */}
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-8">
        <AdSlot label="Advertisement · 728 × 90" />
      </div>
    </div>
  )
}
