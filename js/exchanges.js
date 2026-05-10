/**
 * Exchange Data Configuration
 * Each exchange includes: name, country, MIC code, timezone, trading hours, official URL, and holidays
 */

const EXCHANGES = [
    // North America
    {
        name: 'NYSE',
        country: 'United States',
        mic: 'XNYS',
        timezone: 'America/New_York',
        openTime: '09:30',
        closeTime: '16:00',
        url: 'https://www.nyse.com/',
        region: 'North America',
        preMarketOpen: '04:00',
        afterHoursClose: '20:00'
    },
    {
        name: 'NASDAQ',
        country: 'United States',
        mic: 'XNAS',
        timezone: 'America/New_York',
        openTime: '09:30',
        closeTime: '16:00',
        url: 'https://www.nasdaq.com/',
        region: 'North America',
        preMarketOpen: '04:00',
        afterHoursClose: '20:00'
    },
    {
        name: 'TSX',
        country: 'Canada',
        mic: 'XTSE',
        timezone: 'America/Toronto',
        openTime: '09:30',
        closeTime: '16:00',
        url: 'https://www.tsx.com/',
        region: 'North America'
    },

    // Europe
    {
        name: 'LSE',
        country: 'United Kingdom',
        mic: 'XLON',
        timezone: 'Europe/London',
        openTime: '08:00',
        closeTime: '16:30',
        url: 'https://www.lseg.com/',
        region: 'Europe'
    },
    {
        name: 'Euronext Paris',
        country: 'France',
        mic: 'XPAR',
        timezone: 'Europe/Paris',
        openTime: '09:00',
        closeTime: '17:30',
        url: 'https://www.euronext.com/',
        region: 'Europe'
    },
    {
        name: 'Euronext Amsterdam',
        country: 'Netherlands',
        mic: 'XAMS',
        timezone: 'Europe/Amsterdam',
        openTime: '09:00',
        closeTime: '17:30',
        url: 'https://www.euronext.com/',
        region: 'Europe'
    },
    {
        name: 'Börse Frankfurt',
        country: 'Germany',
        mic: 'XETR',
        timezone: 'Europe/Berlin',
        openTime: '08:00',
        closeTime: '22:00',
        url: 'https://www.boerse-frankfurt.de/',
        region: 'Europe'
    },
    {
        name: 'SIX Swiss',
        country: 'Switzerland',
        mic: 'XSWX',
        timezone: 'Europe/Zurich',
        openTime: '09:00',
        closeTime: '17:30',
        url: 'https://www.six-group.com/',
        region: 'Europe'
    },
    {
        name: 'Borsa Italiana',
        country: 'Italy',
        mic: 'XMIL',
        timezone: 'Europe/Rome',
        openTime: '09:00',
        closeTime: '17:30',
        url: 'https://www.borsaitaliana.it/',
        region: 'Europe'
    },
    {
        name: 'Bolsa de Madrid',
        country: 'Spain',
        mic: 'XMAD',
        timezone: 'Europe/Madrid',
        openTime: '09:00',
        closeTime: '17:30',
        url: 'https://www.bolsasymercados.es/',
        region: 'Europe'
    },
    {
        name: 'Oslo Børs',
        country: 'Norway',
        mic: 'XOSL',
        timezone: 'Europe/Oslo',
        openTime: '09:00',
        closeTime: '16:25',
        url: 'https://www.oslobors.no/',
        region: 'Europe'
    },
    {
        name: 'Copenhagen Stock Exchange',
        country: 'Denmark',
        mic: 'XCSE',
        timezone: 'Europe/Copenhagen',
        openTime: '09:00',
        closeTime: '17:00',
        url: 'https://www.nasdaq.com/market-activity/stocks/cse',
        region: 'Europe'
    },
    {
        name: 'Helsingin Pörssi',
        country: 'Finland',
        mic: 'XHEL',
        timezone: 'Europe/Helsinki',
        openTime: '10:00',
        closeTime: '18:00',
        url: 'https://www.nasdaq.com/market-activity/stocks/he',
        region: 'Europe'
    },

    // Asia-Pacific
    {
        name: 'TSE',
        country: 'Japan',
        mic: 'XJPX',
        timezone: 'Asia/Tokyo',
        openTime: '09:00',
        closeTime: '15:00',
        url: 'https://www.jpx.co.jp/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Shanghai Stock Exchange',
        country: 'China',
        mic: 'XSHG',
        timezone: 'Asia/Shanghai',
        openTime: '09:30',
        closeTime: '15:00',
        url: 'http://www.sse.com.cn/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Shenzhen Stock Exchange',
        country: 'China',
        mic: 'XSHE',
        timezone: 'Asia/Shanghai',
        openTime: '09:30',
        closeTime: '15:00',
        url: 'http://www.szse.cn/',
        region: 'Asia-Pacific'
    },
    {
        name: 'HKEX',
        country: 'Hong Kong',
        mic: 'XHKG',
        timezone: 'Asia/Hong_Kong',
        openTime: '09:30',
        closeTime: '16:00',
        url: 'https://www.hkex.com.hk/',
        region: 'Asia-Pacific'
    },
    {
        name: 'BSE',
        country: 'India',
        mic: 'XBOM',
        timezone: 'Asia/Kolkata',
        openTime: '09:15',
        closeTime: '15:30',
        url: 'https://www.bseindia.com/',
        region: 'Asia-Pacific'
    },
    {
        name: 'NSE',
        country: 'India',
        mic: 'XNSE',
        timezone: 'Asia/Kolkata',
        openTime: '09:15',
        closeTime: '15:30',
        url: 'https://www.nseindia.com/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Korea Stock Exchange',
        country: 'South Korea',
        mic: 'XKRX',
        timezone: 'Asia/Seoul',
        openTime: '09:00',
        closeTime: '15:30',
        url: 'https://www.krx.co.kr/',
        region: 'Asia-Pacific'
    },
    {
        name: 'ASX',
        country: 'Australia',
        mic: 'XASX',
        timezone: 'Australia/Sydney',
        openTime: '10:00',
        closeTime: '16:00',
        url: 'https://www.asx.com.au/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Singapore Exchange',
        country: 'Singapore',
        mic: 'XSES',
        timezone: 'Asia/Singapore',
        openTime: '09:00',
        closeTime: '17:00',
        url: 'https://www.sgx.com/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Taiwan Stock Exchange',
        country: 'Taiwan',
        mic: 'XTAI',
        timezone: 'Asia/Taipei',
        openTime: '09:00',
        closeTime: '13:30',
        url: 'https://www.twse.com.tw/',
        region: 'Asia-Pacific'
    },
    {
        name: 'Bursa Malaysia',
        country: 'Malaysia',
        mic: 'XKLS',
        timezone: 'Asia/Kuala_Lumpur',
        openTime: '09:00',
        closeTime: '17:00',
        url: 'https://www.bursamalaysia.com/',
        region: 'Asia-Pacific'
    },

    // Other Major Markets
    {
        name: 'B3',
        country: 'Brazil',
        mic: 'XBSP',
        timezone: 'America/Sao_Paulo',
        openTime: '10:00',
        closeTime: '17:55',
        url: 'https://www.b3.com.br/',
        region: 'Americas'
    },
    {
        name: 'JSE',
        country: 'South Africa',
        mic: 'XJSE',
        timezone: 'Africa/Johannesburg',
        openTime: '09:00',
        closeTime: '17:00',
        url: 'https://www.jse.co.za/',
        region: 'Africa'
    },
    {
        name: 'Warsaw Stock Exchange',
        country: 'Poland',
        mic: 'XWSE',
        timezone: 'Europe/Warsaw',
        openTime: '09:00',
        closeTime: '16:40',
        url: 'https://www.gpw.pl/',
        region: 'Europe'
    },
    {
        name: 'Tadawul',
        country: 'Saudi Arabia',
        mic: 'XTAD',
        timezone: 'Asia/Riyadh',
        openTime: '10:00',
        closeTime: '15:30',
        url: 'https://www.tadawul.com.sa/',
        region: 'Middle East'
    },
    {
        name: 'TASE',
        country: 'Israel',
        mic: 'XTAE',
        timezone: 'Asia/Jerusalem',
        openTime: '09:30',
        closeTime: '17:00',
        url: 'https://www.tase.co.il/',
        region: 'Middle East'
    },
    {
        name: 'Bolsa Mexicana de Valores',
        country: 'Mexico',
        mic: 'XMEX',
        timezone: 'America/Mexico_City',
        openTime: '08:30',
        closeTime: '15:00',
        url: 'https://www.bmv.com.mx/',
        region: 'Americas'
    }
];

/**
 * Major holidays and observances by market
 * Date format: YYYY-MM-DD
 */
const MARKET_HOLIDAYS = {
    'America/New_York': [
        '2026-01-01', // New Year's Day
        '2026-01-19', // MLK Jr. Day
        '2026-02-16', // Presidents' Day
        '2026-03-27', // Good Friday
        '2026-05-25', // Memorial Day
        '2026-07-03', // Independence Day observed
        '2026-09-07', // Labor Day
        '2026-11-26', // Thanksgiving
        '2026-11-27', // Day after Thanksgiving
        '2026-12-25', // Christmas
    ],
    'America/Toronto': [
        '2026-01-01', // New Year's Day
        '2026-02-16', // Family Day
        '2026-03-27', // Good Friday
        '2026-05-18', // Victoria Day
        '2026-07-01', // Canada Day
        '2026-08-03', // Civic Holiday
        '2026-09-07', // Labour Day
        '2026-09-28', // National Day for Truth and Reconciliation
        '2026-10-12', // Thanksgiving
        '2026-12-25', // Christmas
        '2026-12-26', // Boxing Day
    ],
    'Europe/London': [
        '2026-01-01', // New Year's Day
        '2026-03-27', // Good Friday
        '2026-03-30', // Easter Monday
        '2026-05-04', // Early May Bank Holiday
        '2026-05-25', // Spring Bank Holiday
        '2026-08-31', // Summer Bank Holiday
        '2026-12-25', // Christmas
        '2026-12-26', // Boxing Day
    ],
    'Europe/Paris': [
        '2026-01-01', // New Year's Day
        '2026-03-30', // Easter Monday
        '2026-05-01', // Labor Day
        '2026-05-08', // Victory in Europe Day
        '2026-05-28', // Ascension Day
        '2026-06-08', // Whit Monday
        '2026-07-14', // Bastille Day
        '2026-08-15', // Assumption of Mary
        '2026-11-01', // All Saints' Day
        '2026-11-11', // Armistice Day
        '2026-12-25', // Christmas
    ],
    'Asia/Tokyo': [
        '2026-01-01', // New Year's Day
        '2026-01-12', // Coming of Age Day
        '2026-02-11', // National Foundation Day
        '2026-03-20', // Vernal Equinox Day
        '2026-04-29', // Showa Day
        '2026-05-03', // Constitution Day
        '2026-05-04', // Greenery Day
        '2026-05-05', // Children's Day
        '2026-07-20', // Marine Day
        '2026-08-10', // Mountain Day
        '2026-09-21', // Autumnal Equinox Day
        '2026-10-12', // Sports Day
        '2026-11-03', // Culture Day
        '2026-11-23', // Labor Thanksgiving Day
    ],
    'Asia/Shanghai': [
        '2026-01-01', // New Year's Day
        '2026-01-29', // Spring Festival
        '2026-01-30', // Spring Festival
        '2026-02-02', // Spring Festival
        '2026-04-04', // Qingming Festival
        '2026-06-09', // Dragon Boat Festival
        '2026-09-15', // Mid-Autumn Festival
        '2026-10-01', // National Day
        '2026-10-02', // National Day
        '2026-10-03', // National Day
        '2026-10-04', // National Day
        '2026-10-05', // National Day
    ],
};

/**
 * Format time difference in Dd HH:MM:SS format
 * Removes day prefix when under 24 hours
 */
function formatCountdown(ms) {
    if (ms <= 0) return 'Opening now';

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');

    if (days > 0) {
        return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } else {
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
}

/**
 * Check if a given date is a market holiday
 */
function isMarketHoliday(date, timezone) {
    const dateStr = date.toISOString().split('T')[0];
    const holidays = MARKET_HOLIDAYS[timezone] || [];
    return holidays.includes(dateStr);
}

/**
 * Get next valid trading day (skips weekends and holidays)
 */
function getNextTradingDay(date, timezone) {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    while (true) {
        const dayOfWeek = nextDate.getDay();
        // Skip weekends (0 = Sunday, 6 = Saturday)
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            nextDate.setDate(nextDate.getDate() + 1);
            continue;
        }
        // Skip holidays
        if (isMarketHoliday(nextDate, timezone)) {
            nextDate.setDate(nextDate.getDate() + 1);
            continue;
        }
        break;
    }

    return nextDate;
}

/**
 * Calculate next market open time
 */
function getNextOpenTime(currentLocalDate, openTimeStr, timezone) {
    const [openHour, openMinute] = openTimeStr.split(':').map(Number);

    // Try today at open time
    const todayOpen = new Date(currentLocalDate);
    todayOpen.setHours(openHour, openMinute, 0, 0);

    // If open time hasn't passed and today is not a holiday/weekend, return today
    if (currentLocalDate < todayOpen) {
        const dayOfWeek = currentLocalDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isMarketHoliday(currentLocalDate, timezone)) {
            return todayOpen;
        }
    }

    // Otherwise, find next trading day
    let nextDay = getNextTradingDay(currentLocalDate, timezone);
    const nextOpen = new Date(nextDay);
    nextOpen.setHours(openHour, openMinute, 0, 0);
    return nextOpen;
}

/**
 * Format time for display in local timezone
 */
function formatLocalTime(date, timezone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return formatter.format(date);
}

/**
 * Format date for display
 */
function formatDateForDisplay(date, timezone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
    return formatter.format(date);
}

/**
 * Check if market is currently open
 */
function isMarketOpen(exchange, now) {
    const localTime = formatLocalTime(now, exchange.timezone);
    const [hour, minute] = localTime.split(':').map(Number);
    const [openHour, openMinute] = exchange.openTime.split(':').map(Number);
    const [closeHour, closeMinute] = exchange.closeTime.split(':').map(Number);

    // Convert to minutes since midnight for easier comparison
    const currentMinutes = hour * 60 + minute;
    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;

    // Check if today is a holiday or weekend
    const dayOfWeek = new Date(now).toLocaleString('en-US', {
        timeZone: exchange.timezone,
        weekday: 'numeric'
    });

    if (dayOfWeek === '0' || dayOfWeek === '6') return false; // Weekend
    if (isMarketHoliday(new Date(now), exchange.timezone)) return false; // Holiday

    // Check if within trading hours
    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

/**
 * Determine market status (open, closed, or premarket)
 */
function getMarketStatus(exchange, now) {
    const localTime = formatLocalTime(now, exchange.timezone);
    const [hour, minute] = localTime.split(':').map(Number);
    const [openHour, openMinute] = exchange.openTime.split(':').map(Number);
    const [closeHour, closeMinute] = exchange.closeTime.split(':').map(Number);
    const [preMarketHour, preMarketMinute] = (exchange.preMarketOpen || '00:00').split(':').map(Number);
    const [afterHoursHour, afterHoursMinute] = (exchange.afterHoursClose || '23:59').split(':').map(Number);

    const currentMinutes = hour * 60 + minute;
    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;
    const preMarketMinutes = preMarketHour * 60 + preMarketMinute;
    const afterHoursMinutes = afterHoursHour * 60 + afterHoursMinute;

    // Check if today is a holiday or weekend
    const dayOfWeek = new Date(now).toLocaleString('en-US', {
        timeZone: exchange.timezone,
        weekday: 'numeric'
    });

    if (dayOfWeek === '0' || dayOfWeek === '6') {
        return 'closed'; // Weekend
    }

    if (isMarketHoliday(new Date(now), exchange.timezone)) {
        return 'closed'; // Holiday
    }

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        return 'open';
    }

    if (currentMinutes >= preMarketMinutes && currentMinutes < openMinutes) {
        return 'premarket';
    }

    if (currentMinutes >= closeMinutes && currentMinutes < afterHoursMinutes) {
        return 'premarket'; // Treat after-hours as premarket for styling
    }

    return 'closed';
}

/**
 * Calculate distance between two coordinates (simple Haversine)
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

/**
 * Get user's geolocation
 */
async function getUserLocation() {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                () => {
                    // Default to UTC if geolocation fails
                    resolve({ lat: 0, lon: 0 });
                }
            );
        } else {
            resolve({ lat: 0, lon: 0 });
        }
    });
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EXCHANGES,
        MARKET_HOLIDAYS,
        formatCountdown,
        isMarketHoliday,
        getNextTradingDay,
        getNextOpenTime,
        formatLocalTime,
        formatDateForDisplay,
        isMarketOpen,
        getMarketStatus,
        calculateDistance,
        getUserLocation
    };
}
