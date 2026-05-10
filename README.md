# Stock Market Hours - Live Global Countdown & Trading Clock

A real-time, responsive web application tracking trading hours for 30 major world stock exchanges with live countdown timers, local time displays, and geolocation-based sorting.

## Features

### Core Functionality
- **Live Trading Status** - Real-time market status (Open, Closed, Pre-market) with visual indicators
- **30 Major Exchanges** - Complete coverage across:
  - North America: NYSE, NASDAQ, TSX
  - Europe: LSE, Euronext, Frankfurt, SIX Swiss, Borsa Italiana, Madrid, Oslo, Copenhagen, Helsinki
  - Asia-Pacific: TSE, Shanghai, Shenzhen, HKEX, BSE, NSE, Korea, ASX, Singapore, Taiwan, Malaysia
  - Other Markets: B3, JSE, Warsaw, Tadawul, TASE, BMV

### User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Geolocation-Based Sorting** - Exchanges displayed closest to farthest from user location
- **Live Clock** - Local time updates every second for each exchange
- **Countdown Timers** - Shows time until next market opening in `Dd HH:MM:SS` format
- **Color-Coded Status**:
  - 🟢 Green: Market Open
  - 🔴 Red: Market Closed
  - 🟠 Amber: Pre-market / After-hours
- **Holiday Support** - Automatically accounts for market holidays and bank holidays
- **Accessible Links** - Each card links to official exchange website with proper ARIA labels

### Technical Features
- **Keyboard Navigation** - Full keyboard accessibility with visible focus rings
- **Screen Reader Support** - Proper ARIA labels and live regions
- **SEO Optimization** - JSON-LD schema markup for rich snippets
- **Ad Integration Points** - Ready for Google AdSense or other ad networks:
  - Mid-size ad above the fold
  - Large display ad at bottom
  - Two half-size ads below large ad
- **Performance** - Optimized rendering with second-by-second updates

## File Structure

```
.
├── index.html              # Main HTML file with SEO metadata
├── css/
│   └── styles.css         # Complete styling with responsive design
├── js/
│   ├── exchanges.js       # Exchange data and utility functions
│   └── app.js             # Main application logic
├── README.md              # This file
├── robots.txt             # SEO crawling config
├── sitemap.xml            # XML sitemap
└── favicon.ico            # (Optional) Favicon
```

## Technical Details

### Exchange Data
Each exchange includes:
- **Name & Location** - Display name and country
- **MIC Code** - Market Identifier Code for trading
- **Timezone** - IANA timezone identifier for accurate local time
- **Trading Hours** - 24-hour format (local time)
- **Official Website** - Link to official exchange site
- **Holidays** - Market-specific holiday calendar

### Local Time Calculation
Uses `Intl.DateTimeFormat` with timezone support for accurate, browser-native timezone handling without third-party libraries.

### Next Opening Calculation
- Computes next valid trading day in exchange's local timezone
- Automatically skips weekends and market holidays
- Accounts for closing hours and next business day openings
- Displays countdown in `Dd HH:MM:SS` or `HH:MM:SS` format

### Geolocation
- Requests user permission for geolocation
- Calculates distance using Haversine formula
- Sorts exchanges from closest to farthest
- Gracefully defaults to original order if geolocation denied/unavailable

## Customization

### Adding New Exchanges
Edit `js/exchanges.js` and add to `EXCHANGES` array:
```javascript
{
    name: 'Exchange Name',
    country: 'Country',
    mic: 'XMIC',
    timezone: 'Continent/City',
    openTime: 'HH:MM',
    closeTime: 'HH:MM',
    url: 'https://official-website.com/',
    region: 'Region'
}
```

### Adding Holidays
Edit `MARKET_HOLIDAYS` in `js/exchanges.js`:
```javascript
'Continent/City': [
    '2026-01-01', // Holiday Name
    '2026-12-25'  // Another Holiday
]
```

### Ad Network Integration
Placeholder divs are ready for integration:
- `#ad-mid` - Mid-size ad (mid-page)
- `#ad-large` - Large display ad (bottom)
- `.ad-half` - Half-size ads (bottom)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Initial Load**: ~50KB total (with optimization)
- **Update Interval**: 1 second per exchange
- **No External Dependencies**: Pure JavaScript
- **Lighthouse Score Target**: 90+

## SEO

Includes comprehensive SEO features:
- **JSON-LD Schema** - `WebPage` and `SoftwareApplication` types
- **Meta Tags** - OpenGraph, Twitter Card, canonical URL
- **Rich Snippets** - Enables Google to display market status directly in search results
- **Structured Data** - Helps search engines understand content

## Accessibility

- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader optimized
- ✅ Focus indicators visible
- ✅ ARIA labels on interactive elements
- ✅ Color not sole differentiator (status badges include text)
- ✅ Reduced motion support

## Deployment

### GitHub Pages
1. Push to `markethours` repository
2. Ensure GitHub Pages is enabled in repository settings
3. Site publishes automatically on push to main branch

### Custom Domain
1. Add `CNAME` file with your domain
2. Configure DNS records to point to GitHub Pages
3. Enable HTTPS in repository settings

## Future Enhancements

- [ ] Trading alerts and notifications
- [ ] Economic calendar integration
- [ ] Market news feed
- [ ] User preferences/watchlist
- [ ] Dark mode toggle
- [ ] Multiple language support
- [ ] Historical charts
- [ ] Mobile app (React Native)

## License

Created for educational and informational purposes. Market data is provided as-is without warranty.

## Support

For issues or suggestions, please file an issue in the GitHub repository.

---

**Last Updated**: 2026-05-10
**Version**: 1.0.0
