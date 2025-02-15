import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    capatalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general',
        apiKey: process.env.REACT_APP_API_KEY
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles:[
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "forbes.com",
                "title": "Shock Leak Reveals Elon Musk’s ‘Mind-Blowing’ X Plan To Replace Banks And PayPal",
                "description": "Elon Musk, the Tesla billionaire who took the social media company Twitter private last year and rebranded it X, has outlined his grand plan for the platform at an \"all-hands\" virtual meeting. Subscribe now to Forbes' CryptoAsset & Blockchain Advisor and succ…",
                "url": "https://biztoc.com/x/05065c9b3bd90f5b",
                "urlToImage": "https://c.biztoc.com/p/05065c9b3bd90f5b/og.webp",
                "publishedAt": "2023-10-28T15:22:19Z",
                "content": "Elon Musk, the Tesla billionaire who took the social media company Twitter private last year and rebranded it X, has outlined his grand plan for the platform at an \"all-hands\" virtual meeting.Subscri… [+283 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "OilPrice.com"
                },
                "author": "OilPrice.com",
                "title": "Chinese EV Startup Secures Billion-Dollar Backing From U.S. Auto Giant",
                "description": "While almost all other auto manufacturers, especially those from Japan, are mulling exits from China (where domestic brands are starting to dominate the EV market), Stellantis is doing the opposite and investing in an EV startup.  The U.S. based auto manufact…",
                "url": "https://oilprice.com/Energy/Energy-General/Chinese-EV-Startup-Secures-Billion-Dollar-Backing-From-US-Auto-Giant.html",
                "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-10-27_wqcxspliuy.jpg",
                "publishedAt": "2023-10-28T15:00:00Z",
                "content": "The IEA has reiterated its…\r\nThe recent megamergers from ExxonMobil…\r\nResearch by Bloomberg shows that…\r\nBy ZeroHedge - Oct 28, 2023, 10:00 AM CDTWhile almost all other auto manufacturers, especially… [+2715 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Forbes"
                },
                "author": "Soulaima Gourani, Contributor, \n Soulaima Gourani, Contributor\n https://www.forbes.com/sites/soulaimagourani/",
                "title": "Inspiring Stories Of Those Who Shaped America",
                "description": "These stories serve as a reminder of the incredible value immigrants bring to this country.",
                "url": "https://www.forbes.com/sites/soulaimagourani/2023/10/28/inspiring-stories-of-those-who-shaped-america/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/653d1a67769fd3a10b02ac7e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-28T14:36:03Z",
                "content": "Concept of difficulties that immigrants suffer trying to enter in Usa.\r\ngetty\r\nToday we celebrate the immigrants who have not only shaped this nation but who continue to inspire us all.\r\nThe United S… [+3583 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "How Would Tesla Analysts Respond To SpaceX Going Public? Elon Musk And X Users React With Laughter To Speculations",
                "description": "Tesla Inc. TSLA is a publicly traded stock under the ownership of billionaire Elon Musk, but his rocket manufacturing company, SpaceX, is not. If SpaceX were to go public, how might this development be received by Tesla analysts and President Joe Biden? What …",
                "url": "https://biztoc.com/x/8a6f7e7dc09f650f",
                "urlToImage": "https://c.biztoc.com/p/8a6f7e7dc09f650f/s.webp",
                "publishedAt": "2023-10-28T14:34:08Z",
                "content": "Tesla Inc. TSLA is a publicly traded stock under the ownership of billionaire Elon Musk, but his rocket manufacturing company, SpaceX, is not. If SpaceX were to go public, how might this development … [+295 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Tesla Signals Strategy Reversal, Ford To Go Slow On Electrification, Nikola's $165M Legal Windfall And More: Biggest EV Stories Of The Week",
                "description": "Most major electric vehicle stocks declined in the week that ended on Oct. 27 amid the broader market weakness, with EV leader Tesla, Inc. TSLA extending its lean patch. The space could see some volatility in the near term, as EV companies are set to begin ro…",
                "url": "https://biztoc.com/x/59916c427cc7848d",
                "urlToImage": "https://c.biztoc.com/p/59916c427cc7848d/s.webp",
                "publishedAt": "2023-10-28T14:34:08Z",
                "content": "Most major electric vehicle stocks declined in the week that ended on Oct. 27 amid the broader market weakness, with EV leader Tesla, Inc. TSLA extending its lean patch. The space could see some vola… [+313 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Tesla CEO Elon Musk Offers To Solve $8.2B SF Downtown Rail Extension Problem For Just 1% Of Cost",
                "description": "The Boring Company founder Elon Musk, on Saturday, touted his company as the future of underground tunnel transport in response to reports of rising costs of the San Francisco Downtown Rail extension. What Happened: The San Francisco Standard reported on Frid…",
                "url": "https://biztoc.com/x/8d2124e05ff03470",
                "urlToImage": "https://c.biztoc.com/p/8d2124e05ff03470/s.webp",
                "publishedAt": "2023-10-28T14:34:08Z",
                "content": "The Boring Company founder Elon Musk, on Saturday, touted his company as the future of underground tunnel transport in response to reports of rising costs of the San Francisco Downtown Rail extension… [+283 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Bulls And Bears: Tesla, Chevron, Eli Lilly And Dogecoin Co-founder's 3 Favorite Cryptos",
                "description": "Benzinga examined the prospects for many investors' favorite stocks over the last week — here's a look at some of our top stories. This week saw significant declines in major averages, with the Dow, S&P 500, and Nasdaq dropping by 2.1%, 2.5%, and 2.6%, respec…",
                "url": "https://biztoc.com/x/3482f7e878101eaa",
                "urlToImage": "https://c.biztoc.com/p/3482f7e878101eaa/s.webp",
                "publishedAt": "2023-10-28T14:34:07Z",
                "content": "Benzinga examined the prospects for many investors' favorite stocks over the last week here's a look at some of our top stories.This week saw significant declines in major averages, with the Dow, S&a… [+309 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Aquire Wealth Advisors LLC Purchases 76 Shares of Tesla, Inc. (NASDAQ:TSLA)",
                "description": "Aquire Wealth Advisors LLC increased its holdings in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 2.5% during the 2nd quarter, according to its most recent Form 13F filing with the SEC. The fund owned 3,117 shares of the electric vehicle producer’s stock after …",
                "url": "https://www.etfdailynews.com/2023/10/28/aquire-wealth-advisors-llc-purchases-76-shares-of-tesla-inc-nasdaqtsla/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2023-10-28T14:10:41Z",
                "content": "Aquire Wealth Advisors LLC increased its holdings in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 2.5% during the 2nd quarter, according to its most recent Form 13F filing with the SEC. The fund owned … [+6592 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Brandingmag.com"
                },
                "author": "John James",
                "title": "Brand Campaigns, Part 4: Why and When Should You Use Them?",
                "description": "Every marketer is inspired by famous video commercials, especially early in their career. You know, those emotional, cinematic ads from brands we all know and love. Ads that tug at our heart strings, entertain us, make us laugh, cry, and empathize. Transit sh…",
                "url": "https://www.brandingmag.com/john-james/brand-campaigns-part-4-why-and-when-should-you-use-them/",
                "urlToImage": "https://www.brandingmag.com/wp-content/uploads/2023/10/Cover_WhenWhyUseBrandCampaigns_JohnJames_Brandingmag-1200x628.jpg",
                "publishedAt": "2023-10-28T14:04:23Z",
                "content": "Every marketer is inspired by famous video commercials, especially early in their career. You know, those emotional, cinematic ads from brands we all know and love. Ads that tug at our heart strings,… [+41441 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Hertz's embrace of Teslas isn't going so well - Business Insider",
                "description": "Hertz's embrace of Teslas isn't going so wellBusiness Insider Hertz is scaling back its EV ambitions because its Teslas keep getting damagedThe Verge Hertz helped turn Tesla into a $1 trillion megacap stock. Now it’s become collateral damage in Elon Musk’s pr…",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172125257",
                "urlToImage": null,
                "publishedAt": "2023-10-28T13:32:34Z",
                "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Hertz's embrace of Teslas isn't going so well",
                "description": "Hertz is slowing down plans to include more electric cars in its fleet. • The firm said EVs have higher repair costs and have depreciated significantly. • Hertz said it would buy 100,000 Teslas in 2021. Embracing electric cars is proving much more complicated…",
                "url": "https://biztoc.com/x/522ed0b490a371ac",
                "urlToImage": "https://c.biztoc.com/p/522ed0b490a371ac/og.webp",
                "publishedAt": "2023-10-28T13:30:10Z",
                "content": "Hertz is slowing down plans to include more electric cars in its fleet.The firm said EVs have higher repair costs and have depreciated significantly.Hertz said it would buy 100,000 Teslas in 2021.Emb… [+287 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Wimp.com"
                },
                "author": "Ashley Dreiling",
                "title": "Tesla bot update.",
                "description": "Its coordination progress is insane.",
                "url": "https://www.wimp.com/tesla-bot-update/",
                "urlToImage": "https://www.wimp.com/wp-content/uploads/2023/10/tesla-bot-update-D2vj0WcvH5c.jpg",
                "publishedAt": "2023-10-28T13:20:42Z",
                "content": "Its coordination progress is insane."
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "nypost.com",
                "title": "Elon Musk gives X employees a year to turn app into finance platform: ‘You won’t need a bank account’",
                "description": "Elon Musk has given his employees at social media platform X a year to roll out a payments processing mechanism that will enable people to do away with their bank accounts. “When I say payments, I actually mean someone’s entire financial life,” Musk told his …",
                "url": "https://biztoc.com/x/79c344e6cd508873",
                "urlToImage": "https://c.biztoc.com/p/79c344e6cd508873/og.webp",
                "publishedAt": "2023-10-28T13:16:05Z",
                "content": "Elon Musk has given his employees at social media platform X a year to roll out a payments processing mechanism that will enable people to do away with their bank accounts.When I say payments, I actu… [+284 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Wattsupwiththat.com"
                },
                "author": "Guest Blogger",
                "title": "Virginia – Don’t Follow Net-Zero Lemmings Over the Energy Cliff",
                "description": "States that link climate and energy policies to California and ‘climate crisis’ will pay high price\nThe post Virginia – Don’t Follow Net-Zero Lemmings Over the Energy Cliff first appeared on Watts Up With That?.",
                "url": "https://wattsupwiththat.com/2023/10/28/virginia-dont-follow-net-zero-lemmings-over-the-energy-cliff/",
                "urlToImage": "https://wattsupwiththat.com/wp-content/uploads/2020/12/wuwt-logo.jpg",
                "publishedAt": "2023-10-28T13:00:00Z",
                "content": "States that link climate and energy policies to California and climate crisis will pay high price\r\nPaul Driessen\r\nSeventeen states including Virginia tie their vehicle emission standards and electric… [+7766 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Investopedia"
                },
                "author": "Staff Author",
                "title": "ETFs Highly Exposed to the 'Magnificent 7' Have Been Pummeled Amid a Tech Selloff",
                "description": "Lackluster earnings and soaring Treasury yields have dragged down big tech stocks and the ETFs exposed to them.",
                "url": "https://www.investopedia.com/etfs-highly-exposed-to-the-magnificent-7-have-been-pummeled-amid-a-tech-selloff-8383792",
                "urlToImage": "https://www.investopedia.com/thmb/Ge0hRRVaB_o28cd7c_CTHefVP9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-457534494-4f7df7de2e5449f1accc433e1bb24272.jpg",
                "publishedAt": "2023-10-28T12:55:45Z",
                "content": "<ul><li>Some of the biggest tech-centric ETFs have fallen more than 6% since last Tuesday as shares of the Magificent 7 tech firms tumbled.</li><li>The Vanguard Mega Cap Growth ETF (MGK) and two ETFs… [+3882 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Notebookcheck.net"
                },
                "author": "Daniel Zlatev",
                "title": "Tesla opens Cybertruck delivery event raffle for release date",
                "description": "The Cybertruck release date is scheduled for November 30, and Tesla opened a delivery event lottery for those who would like to take part in the festivities at Giga Texas. The attendance roster will be rather limited to the shareholders who would want to go a…",
                "url": "https://www.notebookcheck.net/Tesla-opens-Cybertruck-delivery-event-raffle-for-release-date.763178.0.html",
                "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Tesla_Lithium_Groundbreaking_0061.jpg",
                "publishedAt": "2023-10-28T12:33:00Z",
                "content": "Tesla will be delivering its inaugural electric Cybertruck pickup at a grand launch event that it pegged for November 30, about two months after the deadline that Elon Musk scheduled in the spring. T… [+1739 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Van ECK Associates Corp Sells 21,224 Shares of Tesla, Inc. (NASDAQ:TSLA)",
                "description": "Van ECK Associates Corp reduced its position in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 19.0% in the 2nd quarter, according to its most recent Form 13F filing with the Securities and Exchange Commission (SEC). The institutional investor owned 90,248 shares…",
                "url": "https://www.etfdailynews.com/2023/10/28/van-eck-associates-corp-sells-21224-shares-of-tesla-inc-nasdaqtsla/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2023-10-28T12:24:43Z",
                "content": "Van ECK Associates Corp reduced its position in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 19.0% in the 2nd quarter, according to its most recent Form 13F filing with the Securities and Exchange Comm… [+6329 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CleanTechnica"
                },
                "author": "Jennifer Sensiba",
                "title": "Phoenix Uber Riders Can Now Order A Waymo Robotaxi",
                "description": "A few years ago, I drove for Uber and Lyft in the Phoenix metro. People at the airport parking lots and Uber driver Facebook groups kept saying that robotaxis weren’t coming for our jobs, but I figured differently. We were already sharing the road with test v…",
                "url": "https://cleantechnica.com/2023/10/28/phoenix-uber-riders-can-now-order-a-waymo-robotaxi/",
                "urlToImage": "https://cleantechnica.com/files/2023/10/Uber-Waymo-Match-2000x1000-1.png",
                "publishedAt": "2023-10-28T12:02:20Z",
                "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA few years ago, I drove for Uber and Lyft in the Phoenix metro. People at the airport parking lots and Uber … [+6817 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Motor Authority"
                },
                "author": "news@motorauthority.com (Viknesh Vijayenthiran), Viknesh Vijayenthiran",
                "title": "2025 Porsche Taycan, 2024 Subaru BRZ tS: This Week's Top Photos",
                "description": "Porsche is working on a mid-cycle update for its Taycan electric sedan and wagon, and a prototype spotted this week was wearing almost zero camouflage gear. While the styling updates look to be mild, there are rumors of a new performance flagship coming to ta…",
                "url": "https://www.motorauthority.com/news/1138538_2025-porsche-taycan-2024-subaru-brz-ts-this-week-s-top-photos",
                "urlToImage": "https://images.hgmsites.net/hug/2025-porsche-taycan-facelift-spy-shots--photo-credit-baldauf_100903750_h.webp",
                "publishedAt": "2023-10-28T12:00:00Z",
                "content": "Porsche is working on a mid-cycle update for its Taycan electric sedan and wagon, and a prototype spotted this week was wearing almost zero camouflage gear. While the styling updates look to be mild,… [+1831 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Forbes"
                },
                "author": "Alex Knapp, Forbes Staff, \n Alex Knapp, Forbes Staff\n https://www.forbes.com/sites/alexknapp/",
                "title": "Current Climate: Humanity Is Close To Multiple Environmental Tipping Points",
                "description": "This week’s Current Climate, which every Saturday brings you the latest news about the business of sustainability.",
                "url": "https://www.forbes.com/sites/alanohnsman/2023/10/28/current-climate-humanity-is-close-to-multiple-environmental-tipping-points/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/653c37759c09d200d79e0a76/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-28T12:00:00Z",
                "content": "This weeks Current Climate, which every Saturday brings you the latest news about the business of sustainability. Sign up to get it in your inbox every week.\r\nGetty Images\r\nOn Wednesday, United Natio… [+3982 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "NDTV News"
                },
                "author": null,
                "title": "After US Leader's Swipe, Elon Musk Promises Starlink Internet To Gaza",
                "description": "Starlink will support connectivity to internationally recognised aid organisations in Gaza, Tesla chief Elon Musk said today.",
                "url": "https://www.ndtv.com/world-news/elon-musk-says-starlink-will-support-connectivity-to-internationally-recognised-aid-groups-in-gaza-4522999",
                "urlToImage": "https://c.ndtvimg.com/2023-10/2sr6mqqo_gaza-violence-afp_625x300_09_October_23.jpg",
                "publishedAt": "2023-10-28T11:30:27Z",
                "content": "Internet access and the phone network were completely cut across the Gaza Strip on Friday\r\nNew Delhi: Starlink will support connectivity to internationally recognised aid organisations in Gaza, Tesla… [+2449 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Kitploit.com"
                },
                "author": "noreply@blogger.com (Unknown)",
                "title": "CloudPulse - AWS Cloud Landscape Search Engine",
                "description": "During the reconnaissance phase, an attacker searches for any information about his target to create a profile that will later help him to identify possible ways to get in an organization. CloudPulse is a powerful tool that simplifies and enhances the analysi…",
                "url": "https://www.kitploit.com/2023/10/cloudpulse-aws-cloud-landscape-search.html",
                "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEgOLqa0ZHHC6WrbZ5y5smIbWedC2P0LfRWC6M2QrEjvgqWPRgCByI9RU4VZCwgwc7AcbNX7gbn1Qs34bOMV-fXPgEuqCDo9aK0GCm2JCM1vWSaZVkchgAnsnwwrC7fCshq0XXqcyE7KxkvQhldrVtppR8z-Ut0eF7QGEPED1gOVxrRbwPyhgBecfpf2vvAO=w640-h242",
                "publishedAt": "2023-10-28T11:30:00Z",
                "content": "During the reconnaissance phase, an attacker searches for any information about his target to create a profile that will later help him to identify possible ways to get in an organization. CloudPulse… [+2450 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "finbold.com",
                "title": "This is when Bitcoin might hit the ‘highly anticipated’ $100k mark",
                "description": "resurgence is driving increased interest in the possibility of the crypto hitting a new all-time high, with the $100,000 mark considered the next ideal level. Speculation about when it will reach the coveted $100,000 mark has been a constant topic of discussi…",
                "url": "https://biztoc.com/x/d0704e52ab2cd0a9",
                "urlToImage": "https://c.biztoc.com/p/d0704e52ab2cd0a9/s.webp",
                "publishedAt": "2023-10-28T11:26:09Z",
                "content": "resurgence is driving increased interest in the possibility of the crypto hitting a new all-time high, with the $100,000 mark considered the next ideal level. Speculation about when it will reach the… [+271 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "fortune.com",
                "title": "Hertz helped turn Tesla into a trillion-dollar megacap stock. Now it’s become collateral damage in Elon Musk’s price wars",
                "description": "Rental agency Hertz is learning the hard way that Tesla cars didn’t quite turn out to be the appreciating assets Elon Musk famously predicted they would be. And it can blame his strategy of driving volume through price cuts for that—as indeed it did on Thursd…",
                "url": "https://biztoc.com/x/e5625e04dafa633e",
                "urlToImage": "https://c.biztoc.com/p/e5625e04dafa633e/og.webp",
                "publishedAt": "2023-10-28T11:22:06Z",
                "content": "Rental agency Hertz is learning the hard way that Tesla cars didnt quite turn out to be the appreciating assets Elon Musk famously predicted they would be.And it can blame his strategy of driving vol… [+271 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Finbold.com"
                },
                "author": "Justinas Baltrusaitis",
                "title": "This is when Bitcoin might hit the ‘highly anticipated’ $100k mark",
                "description": "The recent Bitcoin (BTC) resurgence is driving increased interest in the possibility of the crypto hitting a new all-time high, … Continued\nThe post This is when Bitcoin might hit the ‘highly anticipated’ $100k mark appeared first on Finbold.",
                "url": "https://finbold.com/this-is-when-bitcoin-might-hit-the-highly-anticipated-100k-mark/",
                "urlToImage": "https://finbold.com/app/uploads/2023/10/This-is-Bitcoins-next-price-target-as-correction-is-ruled-out-1.jpg",
                "publishedAt": "2023-10-28T11:13:36Z",
                "content": "The recent Bitcoin (BTC) resurgence is driving increased interest in the possibility of the crypto hitting a new all-time high, with the $100,000 mark considered the next ideal level. Speculation abo… [+3408 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Hertz CEO Says Tesla EVs Cost The Company Owing To Price Cuts",
                "description": "Car Rental Service Hertz Global Holdings Inc HTZ reflected on Tesla’s impact on its business during the company’s third quarter earnings call this week. What Happened: Electric vehicles bear a higher cost of collision and damage repair as compared to combusti…",
                "url": "https://biztoc.com/x/d44c75e54c6bae18",
                "urlToImage": "https://c.biztoc.com/p/d44c75e54c6bae18/s.webp",
                "publishedAt": "2023-10-28T11:04:10Z",
                "content": "Car Rental Service Hertz Global Holdings Inc HTZ reflected on Teslas impact on its business during the companys third quarter earnings call this week.What Happened: Electric vehicles bear a higher co… [+256 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Geely, Baidu’s JV Unveils Jiyue 01 EV: Priced Below Tesla Model Y",
                "description": "The Jiyue 01, an electric vehicle resulting from the collaboration between Zhejiang Geely Holding Group Co. and Baidu Inc BIDU, was launched on Friday, underscoring the expansion and intensifying competition within the world’s largest automobile market for EV…",
                "url": "https://biztoc.com/x/3675940f04f7329a",
                "urlToImage": "https://c.biztoc.com/p/3675940f04f7329a/s.webp",
                "publishedAt": "2023-10-28T11:04:09Z",
                "content": "The Jiyue 01, an electric vehicle resulting from the collaboration between Zhejiang Geely Holding Group Co. and Baidu Inc BIDU, was launched on Friday, underscoring the expansion and intensifying com… [+278 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "aol.com",
                "title": "Hertz's embrace of Teslas isn't going so well",
                "description": "None Hertz is slowing down plans to include more electric cars in its fleet. • None The firm said EVs have higher repair costs and have depreciated significantly. • None Hertz said it would buy 100,000 Teslas in 2021. Embracing electric cars is proving much m…",
                "url": "https://biztoc.com/x/cefe3fa7834a5870",
                "urlToImage": "https://c.biztoc.com/p/cefe3fa7834a5870/s.webp",
                "publishedAt": "2023-10-28T10:36:08Z",
                "content": "None Hertz is slowing down plans to include more electric cars in its fleet.None The firm said EVs have higher repair costs and have depreciated significantly.None Hertz said it would buy 100,000 Tes… [+279 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Forbes"
                },
                "author": "Rina Torchinsky, Forbes Staff, \n Rina Torchinsky, Forbes Staff\n https://www.forbes.com/sites/rinatorchinsky/",
                "title": "Best And Worst States To Buy An Electric Vehicle",
                "description": "The Biden administration is shooting for 50% of all car sales to be electric vehicles by 2030. Thanks to generous state and federal on-the-spot rebates local dealers are gearing up for a sales boom.",
                "url": "https://www.forbes.com/sites/rinatorchinsky/2023/10/28/best-and-worst-states-to-buy-an-electric-vehicle/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/653c3c6c7a3a23abab886ba2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-28T10:30:00Z",
                "content": "The Biden administration is shooting for 50% of all new car sales to be electric vehicles by 2030. Thanks to generous state and federal on-the-spot rebates, local dealers are gearing up for a sales b… [+11143 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "aol.com",
                "title": "Elon Musk appears to have given up on trying to camouflage his private-jet travels with an FAA program used by Jeff Bezos and Taylor Swift",
                "description": "None Last year, Elon Musk stopped using an FAA program allowing jet owners to fly incognito, JetSpy said. • None Musk tried to thwart jet-tracking in the past, offering to pay a student to stop posting his flights online. • None There is no \"silver bullet\" to…",
                "url": "https://biztoc.com/x/4f38b415b5341dd5",
                "urlToImage": "https://c.biztoc.com/p/4f38b415b5341dd5/s.webp",
                "publishedAt": "2023-10-28T10:08:07Z",
                "content": "None Last year, Elon Musk stopped using an FAA program allowing jet owners to fly incognito, JetSpy said.None Musk tried to thwart jet-tracking in the past, offering to pay a student to stop posting … [+263 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Hertz's embrace of Teslas isn't going so well",
                "description": "Hertz is running into unexpected challenges as it looks to electrify more of its rental fleet. Brandon Bell/Getty Images Hertz is slowing down plans to include more electric cars in its fleet. The firm said EVs have higher repair costs and have depreciated si…",
                "url": "https://biztoc.com/x/12a5c53d0ad56697",
                "urlToImage": "https://c.biztoc.com/p/12a5c53d0ad56697/s.webp",
                "publishedAt": "2023-10-28T10:06:11Z",
                "content": "Hertz is running into unexpected challenges as it looks to electrify more of its rental fleet. Brandon Bell/Getty ImagesHertz is slowing down plans to include more electric cars in its fleet. The fir… [+282 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Tech Xplore"
                },
                "author": "Barbara Ortutay",
                "title": "Twitter takeover: 1 year later, X struggles with misinformation, advertising and usage decline",
                "description": "One year ago, billionaire and new owner Elon Musk walked into Twitter's San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming the social media platform into what is now known as X.",
                "url": "https://techxplore.com/news/2023-10-twitter-takeover-year-struggles-misinformation.html",
                "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/twitter-takeover-1-yea.jpg",
                "publishedAt": "2023-10-28T09:52:45Z",
                "content": "One year ago, billionaire and new owner Elon Musk walked into Twitter's San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming… [+6032 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Investing.com"
                },
                "author": "U.Today",
                "title": "Elon Musk’s Celebratory Tweet Sparks Grateful Reaction of Crypto Community",
                "description": "Elon Musk’s Celebratory Tweet Sparks Grateful Reaction of Crypto Community",
                "url": "https://www.investing.com/news/cryptocurrency-news/elon-musks-celebratory-tweet-sparks-grateful-reaction-of-crypto-community-3212617",
                "urlToImage": "https://i-invdn-com.investing.com/news/Cryptocurrencies_800x533_L_1556528163.jpg",
                "publishedAt": "2023-10-28T09:30:28Z",
                "content": "U.Today - It has been a year, since bought Twitter in October 2022. He has posted a tweet to highlight a year anniversary since he closed the deal on purchasing the social media microblogging platfor… [+2963 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "u.today",
                "title": "Elon Musk’s Celebratory Tweet Sparks Grateful Reaction of Crypto Community",
                "description": "It has been a year, since Elon Musk bought Twitter in October 2022. He has posted a tweet to highlight a year anniversary since he closed the deal on purchasing the social media microblogging platform for $44 billion. «Freedom», the tech tycoon wrote, citing …",
                "url": "https://biztoc.com/x/d285ebae87ca90e2",
                "urlToImage": "https://c.biztoc.com/p/d285ebae87ca90e2/s.webp",
                "publishedAt": "2023-10-28T09:20:05Z",
                "content": "It has been a year, since Elon Musk bought Twitter in October 2022. He has posted a tweet to highlight a year anniversary since he closed the deal on purchasing the social media microblogging platfor… [+285 chars]"
                },
                {
                "source": {
                "id": "business-insider",
                "name": "Business Insider"
                },
                "author": "Tim Levin",
                "title": "Hertz's embrace of Teslas isn't going so well",
                "description": "Hertz is slowing down its rollout of electric vehicles, citing higher repair costs and depreciation due to Tesla's aggressive price cuts.",
                "url": "https://www.businessinsider.com/hertz-slows-down-electric-plans-tesla-2023-10",
                "urlToImage": "https://i.insider.com/652ea6fd6561dd877e7c5f96?width=1200&format=jpeg",
                "publishedAt": "2023-10-28T09:17:01Z",
                "content": "Hertz is running into unexpected challenges as it looks to electrify more of its rental fleet. Brandon Bell/Getty Images\r\n<ul><li>Hertz is slowing down plans to include more electric cars in its flee… [+3336 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Tesla To Expand Supercharger Stops Into Merchandise Hubs",
                "description": "Tesla Inc. TSLA is working on enhancing merchandise accessibility at additional Supercharger stations worldwide, turning charging into shopping time for customers. What Happened: “We are working to improve access to merch and amenities at more Superchargers w…",
                "url": "https://biztoc.com/x/ba6a93dc1b81321a",
                "urlToImage": "https://c.biztoc.com/p/ba6a93dc1b81321a/s.webp",
                "publishedAt": "2023-10-28T09:12:09Z",
                "content": "Tesla Inc. TSLA is working on enhancing merchandise accessibility at additional Supercharger stations worldwide, turning charging into shopping time for customers.What Happened: We are working to imp… [+275 chars]"
                },
                {
                "source": {
                "id": "business-insider",
                "name": "Business Insider"
                },
                "author": "Grace Kay,Taylor Rains",
                "title": "Elon Musk appears to have given up on trying to camouflage his private-jet travels with an FAA program used by Jeff Bezos and Taylor Swift",
                "description": "Elon Musk had signed up for the FAA's PIA program that allows private jet owners to fly incognito, but he appears to have stopped using it for now.",
                "url": "https://www.businessinsider.com/elon-musk-appears-no-longer-masking-private-jet-tracking-pia-2023-10",
                "urlToImage": "https://i.insider.com/653a86af96f7540cd0668803?width=1200&format=jpeg",
                "publishedAt": "2023-10-28T09:07:01Z",
                "content": "Elon Musk appears to have stopped using a program that attempts to shield his jet travels, according to JetSpy.STEFANI REYNOLDS/AFP via Getty Images\r\n<ul>\n<li>Last year, Elon Musk stopped using an FA… [+4864 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "U.Today"
                },
                "author": "U.Today",
                "title": "Elon Musk’s Celebratory Tweet Sparks Grateful Reaction of Crypto Community",
                "description": "Tech billionaire Elon Musk has again unintentionally collected feedback to his tweet from crypto lovers",
                "url": "https://u.today/elon-musks-celebratory-tweet-sparks-grateful-reaction-of-crypto-community",
                "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2023-10/41521.jpg",
                "publishedAt": "2023-10-28T09:06:00Z",
                "content": "It has been a year since Elon Musk bought Twitter in October 2022. He has posted a tweet to highlight a year anniversary since he closed the deal on purchasing the social media microblogging platform… [+3412 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Forbes"
                },
                "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
                "title": "BMW 5-Series Goes Electric And It’s Brilliant: New I5 Test Driven",
                "description": "BMW's signature 5-Series is now available in EV form, with superb performance, precise handling and decent range. What's not to like? Maybe the price...",
                "url": "https://www.forbes.com/sites/jamesmorris/2023/10/28/bmw-5-series-goes-electric-and-its-brilliant-new-i5-test-driven/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/653aa6403ce4f614a6e0086a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-28T09:00:00Z",
                "content": "The BMW 5-Series is arguably the core of the brands DNA. Fast, luxurious, and still a drivers car despite its size, the 5 combines everything a BMW is meant to be in one vehicle. So its a surprise th… [+8950 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "InvestorsObserver"
                },
                "author": "InvestorsObserver",
                "title": "XPEL Shareholder Action Reminder",
                "description": "Securities Litigation Partner James (Josh) Wilson Encourages Investors Who Suffered Losses In XPEL To Contact Him Directly To Discuss Their Options   If you purchased or acquired securities in XPEL  and would like to discuss your legal rights, call Far...",
                "url": "https://www.investorsobserver.com/news/qm-pr/5213455133699582",
                "urlToImage": "https://s3.amazonaws.com/images.investorsobserver.com/io-logo-800x450.jpg",
                "publishedAt": "2023-10-28T08:46:00Z",
                "content": "News HomeMentioned in this article\r\nSecurities Litigation Partner James (Josh) Wilson Encourages Investors Who Suffered Losses In XPEL To Contact Him Directly To Discuss Their Options\r\nIf you purchas… [+2480 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Elon Musk's Cowboy Hat Stint At US-Mexico Border Surprised Officials, Reveals Freedom Of Information Act Request",
                "description": "Emails obtained through a Freedom of Information Act request have uncovered that Elon Musk’s unanticipated visit to the U.S.-Mexico border surprised U.S. Border Patrol officials, offering a more comprehensive account of the events that transpired on Sept. 28.…",
                "url": "https://biztoc.com/x/0ad0d9884ea92f0d",
                "urlToImage": "https://c.biztoc.com/p/0ad0d9884ea92f0d/s.webp",
                "publishedAt": "2023-10-28T08:30:08Z",
                "content": "Emails obtained through a Freedom of Information Act request have uncovered that Elon Musks unanticipated visit to the U.S.-Mexico border surprised U.S. Border Patrol officials, offering a more compr… [+297 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Tesla, Inc. (NASDAQ:TSLA) Given Consensus Recommendation of “Hold” by Analysts",
                "description": "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) has been given an average recommendation of “Hold” by the thirty-five research firms that are currently covering the stock, Marketbeat Ratings reports. Six research analysts have rated the stock with a sell recommen…",
                "url": "https://www.etfdailynews.com/2023/10/28/tesla-inc-nasdaqtsla-given-consensus-recommendation-of-hold-by-analysts/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2023-10-28T08:26:46Z",
                "content": "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) has been given an average recommendation of “Hold” by the thirty-five research firms that are currently covering the stock, Marketbeat Ratings reports. Six… [+5596 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "SoyaCincau.com"
                },
                "author": "Alexander Wong",
                "title": "Why is the BYD Dolphin and Atto 3 taking so long to charge? Here’s why | EV Guide",
                "description": "Similar to smartphones, different electric vehicles (EV) have their own supported AC and DC fast charging speed. Most EVs from China such as the BYD Dolphin, BYD Atto 3, GWM Ora Good Cat and the Neta V come with a single-phase onboard charger and as a result,…",
                "url": "https://soyacincau.com/2023/10/28/why-byd-dolphin-atto-3-taking-so-long-to-charge-ac-dc-ev-charging-guide/",
                "urlToImage": "https://soyacincau.com/wp-content/uploads/2023/10/231026-byd-dolphin-AC-ev-charging.jpg",
                "publishedAt": "2023-10-28T08:23:44Z",
                "content": "Similar to smartphones, different electric vehicles (EV) have their own supported AC and DC fast charging speed. Most EVs from China such as the BYD Dolphin, BYD Atto 3, GWM Ora Good Cat and the Neta… [+4357 chars]"
                },
                {
                "source": {
                "id": "fox-news",
                "name": "Fox News"
                },
                "author": "Joe Schoffstall, Thomas Catenacci",
                "title": "Biden climate czar quietly met with flailing EV company dependent on taxpayer handouts",
                "description": "President Biden's clean energy czar, John Podesta, who oversees billions worth of green energy loans and grants, quietly met with the head of Rivian, a struggling electric vehicle maker.",
                "url": "https://www.foxnews.com/politics/biden-climate-czar-quietly-met-flailing-ev-company-dependent-taxpayer-handouts",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/Joes-split.jpg",
                "publishedAt": "2023-10-28T08:00:11Z",
                "content": "John Podesta, President Biden's clean energy czar, quietly assembled with the head of an electric vehicle (EV) company that relies heavily on taxpayer handouts and has floundered financially since it… [+6247 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
                },
                {
                "source": {
                "id": null,
                "name": "Geeky Gadgets"
                },
                "author": "Julian Horsey",
                "title": "What is Multimodal Artificial Intelligence (AI)?",
                "description": "If you have engaged with the latest ChatGPT-4 AI model or perhaps the latest Google search engine, you will of already used multimodal artificial intelligence.  However just a few years ago such easy access to multimodal AI was only a dream. In this guide wil…",
                "url": "https://www.geeky-gadgets.com/what-is-multimodal-ai/",
                "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2023/10/What-is-Multimodal-AI.jpg",
                "publishedAt": "2023-10-28T07:29:02Z",
                "content": "If you have engaged with the latest ChatGPT-4 AI model or perhaps the latest Google search engine, you will of already used multimodal artificial intelligence.  However just a few years ago such easy… [+9055 chars]"
                },
                {
                "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
                },
                "author": "AP",
                "title": "Twitter takeover: 1 year later, X struggles with misinformation, advertising and usage decline",
                "description": "Musk has dismantled core features of what made Twitter, Twitter - its name and blue bird logo, its verification system, its Trust and Safety advisory group. Not to mention content moderation and hate speech enforcement.",
                "url": "https://economictimes.indiatimes.com/tech/technology/twitter-takeover-1-year-later-x-struggles-with-misinformation-advertising-and-usage-decline/articleshow/104774884.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104774910,width-1200,height-630,imgsize-187054,overlay-ettech/photo.jpg",
                "publishedAt": "2023-10-28T07:17:14Z",
                "content": "One year ago, billionaire and new owner Elon Musk walked into Twitter's San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming… [+5865 chars]"
                },
                {
                "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
                },
                "author": "New York Times",
                "title": "The consequences of Elon Musk's ownership of X",
                "description": "The war between Israel and Hamas -- the sort of major news event that once made Twitter an essential source of information and debate -- has drowned all social media platforms in false and misleading information, but for Musk's platform in particular the war …",
                "url": "https://economictimes.indiatimes.com/tech/technology/the-consequences-of-elon-musks-ownership-of-x/articleshow/104773632.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104773645,width-1200,height-630,imgsize-104138,overlay-ettech/photo.jpg",
                "publishedAt": "2023-10-28T06:28:36Z",
                "content": "Now rebranded as X, the site formerly known as Twitter has experienced a surge in racist, antisemitic and other hateful speech. Under Elon Musk's watch, millions of people have been exposed to misinf… [+10382 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "InfoQ.com"
                },
                "author": "Renato Losio",
                "title": "Tesla Introduces Official Developer APIs for Third-Party Integration",
                "description": "Tesla has recently unveiled its first API documentation to support the integration of third-party applications. While primarily designed for fleet management, these APIs have captured the interest of developers, who see it as a potential starting point for th…",
                "url": "https://www.infoq.com/news/2023/10/tesla-developer-apis/",
                "urlToImage": "https://res.infoq.com/news/2023/10/tesla-developer-apis/en/headerimage/generatedHeaderImage-1698263762109.jpg",
                "publishedAt": "2023-10-28T05:34:00Z",
                "content": "Tesla has recently unveiled its first API documentation to support the integration of third-party applications. While primarily designed for fleet management, these APIs have captured the interest of… [+3337 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Former Lawyer Says He 'Felt Absolutely Nothing' During Face-Off With Trump At New York Fraud Trial",
                "description": "Former attorney Michael Cohen expressed complete emotional detachment when he faced former President Donald Trump in a New York civil fraud trial. What Happened: Cohen, in a CNN interview, revealed that he “felt absolutely nothing” during his face-to-face enc…",
                "url": "https://biztoc.com/x/937f3eab38baea11",
                "urlToImage": "https://c.biztoc.com/p/937f3eab38baea11/s.webp",
                "publishedAt": "2023-10-28T04:30:08Z",
                "content": "Former attorney Michael Cohen expressed complete emotional detachment when he faced former President Donald Trump in a New York civil fraud trial.What Happened: Cohen, in a CNN interview, revealed th… [+302 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Investment Chief Proposes Adding Warren Buffett's Berkshire Hathaway To 'Magnificent Seven'",
                "description": "The ‘Magnificent Seven,’ a group comprising seven mega-cap growth stocks, should be expanded to include Warren Buffett’s Berkshire Hathaway Inc. BRK BRK, according to the investment chief of a wealth consulting group. What Happened: The current ‘Magnificent S…",
                "url": "https://biztoc.com/x/03f244550b408570",
                "urlToImage": "https://c.biztoc.com/p/03f244550b408570/s.webp",
                "publishedAt": "2023-10-28T04:30:08Z",
                "content": "The Magnificent Seven, a group comprising seven mega-cap growth stocks, should be expanded to include Warren Buffetts Berkshire Hathaway Inc. BRK BRK, according to the investment chief of a wealth co… [+325 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Electrek"
                },
                "author": "Jameson Dow",
                "title": "Tesla opens shareholder lottery for Cybertruck delivery event tickets",
                "description": "Tesla is holding a lottery for tickets to its upcoming Cybertruck delivery event on November 30th at its Texas Gigafactory in Austin.\n more…\nThe post Tesla opens shareholder lottery for Cybertruck delivery event tickets appeared first on Electrek.",
                "url": "https://electrek.co/2023/10/27/tesla-opens-shareholder-lottery-for-cybertruck-delivery-event-tickets/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/10/Cybertruck_Hero__Desktop_RSVP.jpg.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-10-28T04:30:00Z",
                "content": "Tesla is holding a lottery for tickets to its upcoming Cybertruck delivery event on November 30th at its Texas Gigafactory in Austin.\r\nThe Cybertruck is nearing release, and we’ve been seeing more an… [+2034 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Daily wire",
                "title": "Cost Of Driving Electric Vehicle Equal To Paying $17.33 Per Gallon Of Gasoline, Study Finds",
                "description": "A comprehensive new study of electric vehicles shows that the cost of running them is far more expensive than has been commonly thought. Brent Bennett and Jason Isaac issued their report for the Texas Public Policy Foundation, pointing out that advocates for …",
                "url": "https://freerepublic.com/focus/f-news/4192827/posts",
                "urlToImage": null,
                "publishedAt": "2023-10-28T04:18:54Z",
                "content": "Skip to comments.\r\nCost Of Driving Electric Vehicle Equal To Paying $17.33 Per Gallon Of Gasoline, Study FindsDaily wire ^\r\n | By Hank Berrien\r\nPosted on 10/27/2023 9:18:54 PM PDT by NoLibZone\r\nA com… [+3583 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "The Boston Globe"
                },
                "author": "The Associated Press",
                "title": "Today in History: October 28, Benito Mussolini takes power in Italy",
                "description": "Today is Saturday, Oct. 28, the 301st day of 2023. There are 64 days left in the year.",
                "url": "https://www.bostonglobe.com/2023/10/28/metro/today-history-october-28-benito-mussolini-takes-power-italy/",
                "urlToImage": "https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=437",
                "publishedAt": "2023-10-28T04:10:00Z",
                "content": "In 1636, the General Court of Massachusetts passed a legislative act establishing Harvard College.\r\nIn 1726, the original edition of Gullivers Travels, a satirical novel by Jonathan Swift, was first … [+2352 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "morningbrew.com",
                "title": "Automakers are walking back their EV growth plans",
                "description": "Some of the biggest car companies in the world are hitting Ctrl-Z on their electric vehicle ambitions as consumer demand lags behind what the industry expected. Ford announced yesterday that it’s postponing $12 billion in spending on EV manufacturing expansio…",
                "url": "https://biztoc.com/x/147f8fafc6f2e86e",
                "urlToImage": "https://c.biztoc.com/p/147f8fafc6f2e86e/s.webp",
                "publishedAt": "2023-10-28T04:06:12Z",
                "content": "Some of the biggest car companies in the world are hitting Ctrl-Z on their electric vehicle ambitions as consumer demand lags behind what the industry expected.Ford announced yesterday that its postp… [+271 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "blogTO"
                },
                "author": "Misha Gajewski",
                "title": "There's a funky attic space hidden inside this $4 million Toronto home",
                "description": "Square rooms are so passé — triangle-shaped rooms are where it's at. \r\nOr, at least, they are in 72 Ellis Park Rd. \r\nThis impressive home overlooking High Park offers style, luxury, and the coolest attic ever.\r\nThe front entrance and living room. \r\nListed for…",
                "url": "https://www.blogto.com/real-estate-toronto/2023/10/72-ellis-park-road-toronto/",
                "urlToImage": "https://media.blogto.com/articles/20231026-72ellispark.jpeg?w=1200&cmd=resize_then_crop&height=630&quality=70",
                "publishedAt": "2023-10-28T04:01:00Z",
                "content": "Square rooms are so passé triangle-shaped rooms are where it's at. \r\nOr, at least, they are in 72 Ellis Park Rd. \r\nThis impressive home overlooking High Park offers style, luxury, and the coolest att… [+2484 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CleanTechnica"
                },
                "author": "Guest Contributor",
                "title": "Tesla’s Giga Berlin Expansion Set To Kick Off In Early 2024 Amid Controversy",
                "description": "Tesla has revealed its aspirations to commence its Giga Berlin expansion project in the first half of 2024. This announcement comes against the backdrop of ongoing public debates surrounding the project’s scope and impact. The expansion initiative aims to mod…",
                "url": "https://cleantechnica.com/2023/10/27/teslas-giga-berlin-expansion-set-to-kick-off-in-early-2024-amid-controversy/",
                "urlToImage": "http://cleantechnica.com/files/2021/08/GigaBerlin-Desktop-V4_e60c8302-c331-40ff-b5cd-3e518b9e5251-1.jpg",
                "publishedAt": "2023-10-28T03:57:11Z",
                "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nTesla has revealed its aspirations to commence its Giga Berlin expansion project in the first half of 2024. T… [+2643 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Tesla To Pick Select Shareholders For Cybertruck Delivery Event Via Lottery: Details Inside",
                "description": "Electric vehicle giant Tesla Inc TSLA has launched a Cybertruck Delivery Event shareholder lottery to determine which shareholders will be attending the much-awaited event to be held at Gigafactory Texas on Nov. 30. What Happened: Only a limited number of sha…",
                "url": "https://biztoc.com/x/8bc175a75f3500d8",
                "urlToImage": "https://c.biztoc.com/p/8bc175a75f3500d8/s.webp",
                "publishedAt": "2023-10-28T03:20:06Z",
                "content": "Electric vehicle giant Tesla Inc TSLA has launched a Cybertruck Delivery Event shareholder lottery to determine which shareholders will be attending the much-awaited event to be held at Gigafactory T… [+284 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "The Street",
                "title": "Former Ford CEO has a blunt warning for the electric vehicle industry (The US auto industry, is in total denial)",
                "description": "Ford's EV business posted a big loss for the third quarter.. The strike against Ford may be over, but the company's electric vehicle woes are far from solved. The entire auto industry, grappling with steadily softening EV demand over cost and existential infr…",
                "url": "https://freerepublic.com/focus/f-news/4192814/posts",
                "urlToImage": null,
                "publishedAt": "2023-10-28T02:40:18Z",
                "content": "Skip to comments.\r\nFormer Ford CEO has a blunt warning for the electric vehicle industry (The US auto industry, is in total denial)The Street ^\r\n | 9 hours ago\r\n | Ian Krietzberg\r\nPosted on 10/27/202… [+2386 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Threat For Tinder, Bumble? Tesla CEO Elon Musk Reportedly Reveals Plan To Turn X Into Dating App, Digital Bank By 2024",
                "description": "Tesla CEO Elon Musk reportedly unveiled surprising plans for his platform X during a company-wide meeting. What Happened: Challenging the realms of Tinder and Bumble BMBL, Musk said he intends to transform X into a full fledged dating site and a digital bank …",
                "url": "https://biztoc.com/x/8f2a39a0219ef25d",
                "urlToImage": "https://c.biztoc.com/p/8f2a39a0219ef25d/s.webp",
                "publishedAt": "2023-10-28T02:38:08Z",
                "content": "Tesla CEO Elon Musk reportedly unveiled surprising plans for his platform X during a company-wide meeting.What Happened: Challenging the realms of Tinder and Bumble BMBL, Musk said he intends to tran… [+294 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "The Punch"
                },
                "author": "Branded Content",
                "title": "Dogecoin (DOGE) Sets Sights on Double-Digit Growth; InQubeta (QUBE) Sets Market Ablaze",
                "description": "The cryptocurrency market has had a stellar few months where both old and new altcoins trumped analysts’ expectations with their prices. Among the top winners, InQubeta (QUBE)and Dogecoin were the ones that grabbed the most attention. While InQubeta set the c…",
                "url": "https://punchng.com/dogecoin-doge-sets-sights-on-double-digit-growth-inqubeta-qube-sets-market-ablaze/",
                "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2023/10/28072223/cat.jpg",
                "publishedAt": "2023-10-28T02:19:31Z",
                "content": "The cryptocurrency market has had a stellar few months where both old and new altcoins trumped analysts’ expectations with their prices. Among the top winners, InQubeta (QUBE)and Dogecoin were the on… [+4525 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "zerohedge.com",
                "title": "The Graphite Grip: How China's Crackdown On Exports Threatens Global EV Battery Supply Chain",
                "description": "The Graphite Grip: How China's Crackdown On Exports Threatens Global EV Battery Supply Chain China's retaliatory restriction on graphite exports will have a disproportionate impact on foreign makers of electric vehicle battery components which haven't shifted…",
                "url": "https://biztoc.com/x/3873eb48b797a9d2",
                "urlToImage": "https://c.biztoc.com/p/3873eb48b797a9d2/s.webp",
                "publishedAt": "2023-10-28T01:56:06Z",
                "content": "The Graphite Grip: How China's Crackdown On Exports Threatens Global EV Battery Supply Chain\r\nChina's retaliatory restriction on graphite exports will have a disproportionate impact on foreign makers… [+315 chars]"
                },
                {
                "source": {
                "id": "fox-news",
                "name": "Fox News"
                },
                "author": "Alexander Hall",
                "title": "South Park lauded for mocking Disney's 'woke gender and race-swapping' reboots: 'A national treasure'",
                "description": "Clips from \"South Park: Joining the Panderverse\" went viral across social media Friday for mocking Disney for changing their characters and making them woke.",
                "url": "https://www.foxnews.com/media/south-park-lauded-mocking-disneys-woke-gender-race-swapping-reboots-national-treasure",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/South-Park.png",
                "publishedAt": "2023-10-28T01:47:50Z",
                "content": "Clips from a TV special of the show \"South Park\" went viral online Friday for mocking Disney CEO Bob Iger, Lucasfilm president Kathleen Kennedy and the Disney Company's widely criticized pandering to… [+3273 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Variety"
                },
                "author": "Adam B. Vary",
                "title": "‘Loki’ Head Writer Eric Martin on That Cliffhanger and His Secret Rule for Season 2",
                "description": "SPOILER ALERT: This story involves discussion of major plot developments in Season 2, Episode 4 of “Loki,” currently streaming on Disney+. When Eric Martin started writing the Season 1 finale of “Loki” (along with then-head writer Michael Waldron), he already…",
                "url": "https://variety.com/2023/tv/news/loki-cliffhanger-ending-eric-martin-1235771252/",
                "urlToImage": "https://variety.com/wp-content/uploads/2023/10/Screen-Shot-2023-10-27-at-5.16.36-PM.png?w=1000&h=563&crop=1",
                "publishedAt": "2023-10-28T01:32:05Z",
                "content": "SPOILER ALERT: This story involves discussion of major plot developments in Season 2, Episode 4 of “Loki,” currently streaming on Disney+.\r\nWhen Eric Martin started writing the Season 1 finale of “Lo… [+9192 chars]"
                },
                {
                "source": {
                "id": "cbc-news",
                "name": "CBC News"
                },
                "author": null,
                "title": "1 person hospitalized after vehicle crashes into hotdog store in Richmond",
                "description": "A vehicle crashed into a hotdog store at a busy intersection in the Metro Vancouver municipality of Richmond Friday morning. One person was sent to hospital in critical condition.",
                "url": "https://www.cbc.ca/news/canada/british-columbia/hot-dog-store-car-crash-richmond-1.7011457",
                "urlToImage": "https://i.cbc.ca/1.7011468.1698453896!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/hot-dog-store-crash.jpg",
                "publishedAt": "2023-10-28T01:03:36Z",
                "content": "A car crashed into a hotdog store Friday morning at a busy intersection in Richmond, B.C., sending one person to hospital in critical condition.\r\nPhotos and videos on social media show a grey Tesla e… [+601 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Chicago Tribune"
                },
                "author": "Robert Channick",
                "title": "EVBox launches fast-charger production in Libertyville, as part of national push for widespread EV adoption",
                "description": "Netherlands-based EVBox, which opened its North American headquarters and plant in Libertyville, is rolling out a new public fast-charger it hopes will help get the U.S. on the road to widespread EV adoption.",
                "url": "https://www.chicagotribune.com/business/ct-biz-ev-fast-charger-production-evbox-20231028-h2kn2djz4rfnlmxk4sp4q2nxja-story.html",
                "urlToImage": "https://www.chicagotribune.com/resizer/wxshg1RoSj_aUREWhbk5adU5J4M=/1200x630/filters:format(jpg):quality(70):focal(3553x1486:3563x1496)/cloudfront-us-east-1.images.arcpublishing.com/tronc/7EBXVQULNFCF5EYPPQGC3XWS6I.JPG",
                "publishedAt": "2023-10-28T00:58:36Z",
                "content": "Netherlands-based EVBox, which opened its North American headquarters and plant in Libertyville, is rolling out a new public fast-charger it hopes will help get the U.S. on the road to widespread ado… [+7769 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Bangkok Post"
                },
                "author": "Ambiyah Abdullah & Auliya Febriyanti",
                "title": "New plan could benefit Asean's EVs",
                "description": "The need for clean energy technology deployment towards global net-zero emissions is becoming more critical. To meet the net-zero emission target in 2030 and reduce global energy consumption to 7% less than the level in 2020, a massive deployment of clean ene…",
                "url": "https://www.bangkokpost.com/opinion/opinion/2673343/new-plan-could-benefit-aseans-evs",
                "urlToImage": "https://static.bangkokpost.com/media/content/dcx/2023/10/28/4939658_700.jpg",
                "publishedAt": "2023-10-28T00:49:00Z",
                "content": "The need for clean energy technology deployment towards global net-zero emissions is becoming more critical. To meet the net-zero emission target in 2030 and reduce global energy consumption to 7% le… [+6171 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "investing.com",
                "title": "Ford shares fall after pulling full-year forecast, wider losses in EV unit",
                "description": "Shares of Ford Motor (NYSE: ) Co closed down 12.3% on Friday, after the automaker reported a wider loss from its electric-vehicle (EV) business due to pressures from a price war, sparked by industry leader Tesla (NASDAQ: ). The Detroit automaker also pulled i…",
                "url": "https://biztoc.com/x/23a3e6f1113c4a5f",
                "urlToImage": "https://c.biztoc.com/p/23a3e6f1113c4a5f/s.webp",
                "publishedAt": "2023-10-28T00:28:05Z",
                "content": "Shares of Ford Motor (NYSE: ) Co closed down 12.3% on Friday, after the automaker reported a wider loss from its electric-vehicle (EV) business due to pressures from a price war, sparked by industry … [+291 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CNA"
                },
                "author": null,
                "title": "Ford shares fall after pulling full-year forecast, wider losses in EV unit",
                "description": ":Shares of Ford Motor Co closed down 12.3 per cent on Friday, after the automaker reported a wider loss from its electric-vehicle (EV) business due to pressures from a price war, sparked by industry leader Tesla.The Detroit automaker also pulled its 2023 fore…",
                "url": "https://www.channelnewsasia.com/business/ford-shares-fall-after-pulling-full-year-forecast-wider-losses-ev-unit-3879211",
                "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--IlSmpLWC--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-10-27t235901z_2_lynxmpej9q0ja_rtroptp_3_ford-motor-results.jpg?itok=5KcCnPN0",
                "publishedAt": "2023-10-27T23:59:01Z",
                "content": ":Shares of Ford Motor Co closed down 12.3 per cent on Friday, after the automaker reported a wider loss from its electric-vehicle (EV) business due to pressures from a price war, sparked by industry … [+1758 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Global News"
                },
                "author": "Sean Previl",
                "title": "X struggles with usage decline and misinformation 1 year after Musk takeover - National | Globalnews.ca",
                "description": "X looks and feels something like Twitter, but the more time you spend on it the clearer it becomes that it's merely an approximation.",
                "url": "https://globalnews.ca/news/10055217/twitter-takeover-one-year-later/",
                "urlToImage": "https://globalnews.ca/wp-content/uploads/2023/10/twitter-x-one-year-later.jpg?quality=85&strip=all&w=720&h=379&crop=1",
                "publishedAt": "2023-10-27T23:41:26Z",
                "content": "One year ago, billionaire and new owner Elon Musk walked into Twitter’s San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming… [+5564 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Power Line"
                },
                "author": "John Hinderaker",
                "title": "Green Dreams Going Up In Smoke",
                "description": "Wind and solar are both terrible methods of generating electricity, both expensive and unreliable. The one thing that can make the situation worse is the drive to electrify everything, including motor vehicles. The impracticality of this “green” vision has be…",
                "url": "http://www.powerlineblog.com/archives/2023/10/green-dreams-going-up-in-smoke.php",
                "urlToImage": "",
                "publishedAt": "2023-10-27T23:18:58Z",
                "content": "Wind and solar are both terrible methods of generating electricity, both expensive and unreliable. The one thing that can make the situation worse is the drive to electrify everything, including moto… [+4150 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "New Zealand Herald"
                },
                "author": "Anne Gibson",
                "title": "Dark, moody, indigenous: What it’s like inside Fisher & Paykel Appliances’ luxury Auckland Experience Centre",
                "description": "'This is a physical manifestation of our brand.' - Mark Elmore",
                "url": "https://www.nzherald.co.nz/business/dark-moody-indigenous-what-its-like-inside-fisher-paykel-appliances-luxury-auckland-experience-centre/E4U3J7BO7FF3TDDCHK3EFPBB6E/",
                "urlToImage": "https://www.nzherald.co.nz/resizer/y4lSAm17pJSH6rhsP1IdJeETfu4=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/2RLXA4KVPRDFNH4SPH27U2O7C4.jpg",
                "publishedAt": "2023-10-27T23:00:00Z",
                "content": "Fisher &amp; Paykel Appliances' Michael Elmore inside the new Auckland Experience Centre. Photo / Michael CraigA muehlenbeckia chandelier hangs above one kitchen showroom, a harakeke installation is … [+8127 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "finance.yahoo.com",
                "title": "Tesla, EV Investors Face a Reckoning",
                "description": "The electric-vehicle boom that spawned multibillion dollar startups overnight and pushed Tesla Inc.’s value into the stratosphere is starting to flounder just a few years after it began. • None Israel Latest: Iranian Minister Warns US Over Support of Israel •…",
                "url": "https://biztoc.com/x/f85d3264555e21d3",
                "urlToImage": "https://c.biztoc.com/p/f85d3264555e21d3/og.webp",
                "publishedAt": "2023-10-27T22:30:10Z",
                "content": "The electric-vehicle boom that spawned multibillion dollar startups overnight and pushed Tesla Inc.s value into the stratosphere is starting to flounder just a few years after it began.None Israel La… [+306 chars]"
                },
                {
                "source": {
                "id": "espn",
                "name": "ESPN"
                },
                "author": null,
                "title": "Trial date for Memphis' Williams set for Dec. 14",
                "description": "A request to raise star Memphis basketball recruit Mikey Williams' bail was denied Friday by a judge who set a trial start date of Dec. 14 for Williams, who faces 9 total charges stemming from a March 27 shooting incident.",
                "url": "https://www.espn.com/mens-college-basketball/story/_/id/38758259/request-raise-mikey-williams-bail-denied-trial-set-dec-14",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1107%2Fr1087850_1296x729_16%2D9.jpg",
                "publishedAt": "2023-10-27T22:22:01Z",
                "content": "Oct 27, 2023, 06:09 PM ET\r\nEL CAJON, Calif. -- A San Diego County Superior Court judge on Friday rejected a request to raise star Memphis basketball recruit Mikey Williams' bail for what the prosecut… [+3668 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "KPBS"
                },
                "author": "Wyatte Grantham-Philips",
                "title": "Cruise, GM's robo-taxi service, suspends all driverless operations nationwide",
                "description": "U.S. regulators have been investigating Cruise’s operations after receiving incident reports that suggested risks to pedestrian and passenger safety.",
                "url": "https://www.kpbs.org/news/public-safety/2023/10/27/cruise-gms-robo-taxi-service-suspends-all-driverless-operations-nationwide",
                "urlToImage": "https://cdn.kpbs.org/dims4/default/9018452/2147483647/strip/true/crop/3556x1867+0+252/resize/1200x630!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.us-west-2.amazonaws.com%2F88%2F1e%2Fb66648ca483f92d6105726ebd390%2Fgmcruise.jpeg",
                "publishedAt": "2023-10-27T22:06:36Z",
                "content": "Cruise, the autonomous vehicle unit owned by General Motors, is suspending driverless operations nationwide days after regulators in California found that its driverless cars posed a danger to public… [+5397 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Investing.com"
                },
                "author": "Reuters",
                "title": "Frazzled U.S. stock investors eye frothy Treasury market as Fed looms",
                "description": "Frazzled U.S. stock investors eye frothy Treasury market as Fed looms",
                "url": "https://www.investing.com/news/economy/frazzled-us-stock-investors-eye-frothy-treasury-market-as-fed-looms-3212543",
                "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_5_800x533_L_1412601619.jpg",
                "publishedAt": "2023-10-27T22:00:43Z",
                "content": "By David Randall\r\nNEW YORK (Reuters) - Financial markets are bracing for what could be a momentous week, with a Federal Reserve meeting, U.S. employment data and earnings from technology heavyweight … [+3877 chars]"
                },
                {
                "source": {
                "id": "abc-news",
                "name": "ABC News"
                },
                "author": "BARBARA ORTUTAY AP technology writer",
                "title": "Twitter takeover: 1 year later, X struggles with misinformation, advertising and usage decline",
                "description": "One year ago, billionaire Elon Musk walked into Twitter’s San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming the social media platform into what is now known as X",
                "url": "https://abcnews.go.com/US/wireStory/twitter-takeover-1-year-struggles-misinformation-advertising-usage-104415702",
                "urlToImage": "https://i.abcnewsfe.com/a/abc52358-6a40-4abe-8592-6b9d2a5b9c49/wirestory_ac2cb6419d93d64086cc9ad980c5a57a_16x9.jpg?w=992",
                "publishedAt": "2023-10-27T21:58:29Z",
                "content": "SAN FRANCISCO -- One year ago, billionaire and new owner Elon Musk walked into Twitter's San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and b… [+5412 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "MarketWatch"
                },
                "author": "MarketWatch Automation",
                "title": "Company Close Updates: Workhorse Group Inc. stock falls Friday, underperforms market",
                "description": "Shares of Workhorse Group Inc. slid 2.91% to $0.39 Friday, on what proved to be an all-around mixed trading session for the stock market, with the NASDAQ...",
                "url": "https://www.marketwatch.com/data-news/workhorse-group-inc-stock-falls-friday-underperforms-market-076fbc60-19c53723bbb1",
                "urlToImage": "https://images.mktw.net/im-220105/social",
                "publishedAt": "2023-10-27T21:40:51Z",
                "content": "Shares of Workhorse Group Inc. \r\n WKHS,\r\n -2.91%\r\nslid 2.91% to $0.39 Friday, on what proved to be an all-around mixed trading session for the stock market, with the NASDAQ Composite Index \r\n COMP,\r\n… [+765 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Ford, GM, and even Tesla are warning about the EV market - Yahoo Finance",
                "description": "Ford, GM, and even Tesla are warning about the EV marketYahoo Finance How the UAW and Ford struck a historic dealCNN I give Ford a B- overall on their strike deal with UAW, says MAEVA Group's Harry WilsonCNBC Television Editorial: Costly contract a risk for F…",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172121319",
                "urlToImage": null,
                "publishedAt": "2023-10-27T21:36:05Z",
                "content": "\"Don't try to outweird me, three-eyes. I get stranger things than you free\r\nwith my breakfast cereal.\"\r\n- Zaphod Beeblebrox in \"Hithiker's Guide to the Galaxy\""
                },
                {
                "source": {
                "id": "abc-news",
                "name": "ABC News"
                },
                "author": "BARBARA ORTUTAY AP technology writer",
                "title": "Twitter takeover: 1 year later, X struggles with misinformation, advertising and usage decline",
                "description": "One year ago, billionaire Elon Musk walked into Twitter’s San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming the social media platform into what is now known as X",
                "url": "https://abcnews.go.com/Technology/wireStory/twitter-takeover-1-year-struggles-misinformation-advertising-usage-104438313",
                "urlToImage": "https://i.abcnewsfe.com/a/abc52358-6a40-4abe-8592-6b9d2a5b9c49/wirestory_ac2cb6419d93d64086cc9ad980c5a57a_16x9.jpg?w=992",
                "publishedAt": "2023-10-27T21:34:46Z",
                "content": "SAN FRANCISCO -- One year ago, billionaire and new owner Elon Musk walked into Twitter's San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and b… [+5412 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Marketscreener.com"
                },
                "author": null,
                "title": "Business Lookahead: Central bank trick or treat",
                "description": "(marketscreener.com) STORY: From a slew of central bank meetings to Apple's earnings, these are the stories to watch in business and finance. https://www.marketscreener.com/quote/stock/APPLE-INC-4849/news/Business-Lookahead-Central-bank-trick-or-treat-4517763…",
                "url": "https://www.marketscreener.com/quote/stock/APPLE-INC-4849/news/Business-Lookahead-Central-bank-trick-or-treat-45177638/",
                "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
                "publishedAt": "2023-10-27T21:18:04Z",
                "content": "STORY: From a slew of central bank meetings to Apple's earnings, these are the stories to watch in business and finance. \r\n The Bank of Japan makes a policy announcement on Tuesday.\r\nThe benchmark 10… [+1356 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Electrek"
                },
                "author": "Jameson Dow",
                "title": "Tesla Service goes on strike in Sweden; dockworkers refuse to unload cars",
                "description": "Tesla Service workers have gone on strike across Sweden due to Tesla’s refusal to sign a collective bargaining agreement. In response, Swedish dockworkers have stated that they will refuse to unload Tesla vehicles in Swedish ports unless the conflict is resol…",
                "url": "https://electrek.co/2023/10/27/tesla-service-goes-on-strike-in-sweden-dockworkers-refuse-to-unload-cars/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2019/06/Tesla-Service-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-10-27T21:16:45Z",
                "content": "Tesla Service workers have gone on strike across Sweden due to Teslas refusal to sign a collective bargaining agreement. In response, Swedish dockworkers have stated that they will refuse to unload T… [+5209 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Ford, GM, and even Tesla are warning about EV market - Yahoo Finance",
                "description": "Ford, GM, and even Tesla are warning about EV marketYahoo Finance How the UAW and Ford struck a historic dealCNN Ford, GM, Mercedes come clean on EV demand weaknessFox Business Editorial: Costly contract a risk for Ford, othersDetroit News There's a lot of he…",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172121197",
                "urlToImage": null,
                "publishedAt": "2023-10-27T21:13:53Z",
                "content": "\"Don't try to outweird me, three-eyes. I get stranger things than you free\r\nwith my breakfast cereal.\"\r\n- Zaphod Beeblebrox in \"Hithiker's Guide to the Galaxy\""
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "finance.yahoo.com",
                "title": "Ford, GM, and even Tesla are warning about the EV market",
                "description": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a year ago, with EV market share hitting 7.9% — its highest-ever …",
                "url": "https://biztoc.com/x/ee10fef56d2a60d5",
                "urlToImage": "https://c.biztoc.com/p/ee10fef56d2a60d5/og.webp",
                "publishedAt": "2023-10-27T21:06:10Z",
                "content": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a yea… [+290 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "finance.yahoo.com",
                "title": "Ford, GM, and even Tesla are warning about the EV market",
                "description": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a year ago, with EV market share hitting 7.9% — its highest-ever …",
                "url": "https://biztoc.com/x/ee10fef56d2a60d5",
                "urlToImage": "https://c.biztoc.com/p/ee10fef56d2a60d5/og.webp",
                "publishedAt": "2023-10-27T21:06:10Z",
                "content": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a yea… [+290 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Gizmodo.com"
                },
                "author": "Nikki Main",
                "title": "Tesla's String of Mass Recalls Over the Last 12 Months",
                "description": "Tesla and recalls are no strangers as it seems to have one every few weeks or months due to various system glitches and malfunctions. From loose seat belts to power steering, to traction battery recalls, Tesla is no novice when it comes to fixing errors stemm…",
                "url": "https://gizmodo.com/tesla-elon-musk-string-mass-recalls-over-last-12-months-1850957985",
                "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6827a0d1a763831eb6c592246ce2780d.jpg",
                "publishedAt": "2023-10-27T21:00:00Z",
                "content": "Tesla and recalls are no strangers as it seems to have one every few weeks or months due to various system glitches and malfunctions. From loose seat belts to power steering, to traction battery reca… [+1053 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Newser"
                },
                "author": "Bob Cronin",
                "title": "Stocks Fall, Pushing S&P Into Correction",
                "description": "Stocks closed lower Friday on Wall Street, pulling the S&P 500 down 10% from the peak it reached in July. That puts the benchmark index into what's called a \"correction,\" the AP reports: The S&P fell 19.86 points, or 0.5%, to 4,117.37. The Dow fell 366....",
                "url": "https://www.newser.com/story/341969/stocks-fall-pushing-sp-into-correction.html",
                "urlToImage": "https://img1-azrcdn.newser.com/image/1499454-12-20231027160000.jpeg",
                "publishedAt": "2023-10-27T21:00:00Z",
                "content": "Stocks closed lower Friday on Wall Street, pulling the S&amp;P 500 down 10% from the peak it reached in July. That puts the benchmark index into what's called a \"correction,\" the AP reports:\r\n<ul><li… [+901 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CleanTechnica"
                },
                "author": "Steve Hanley",
                "title": "BP Places $100 Million Order For Tesla’s Ultra-Fast EV Chargers",
                "description": "bp pulse has ordered $100 million worth of Tesla Superchargers to expand its US EV charging network starting in 2024.",
                "url": "https://cleantechnica.com/2023/10/27/bp-places-100-million-order-for-teslas-ultra-fast-ev-chargers/",
                "urlToImage": "http://cleantechnica.com/files/2023/10/Tesla-BP-Pulse-Charger.jpg",
                "publishedAt": "2023-10-27T20:57:07Z",
                "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nEveryone is bitching about the horrible state of EV charging. Either the damn things are broken or they requi… [+7180 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Marketscreener.com"
                },
                "author": null,
                "title": "Wall St Week Ahead-Frazzled U.S. stock investors eye frothy Treasury market as Fed looms",
                "description": "(marketscreener.com) \n \n NEW YORK, Oct 27 -\n Financial markets are bracing for what could be a momentous\nweek, with a Federal Reserve meeting, U.S. employment data and\nearnings from technology heavyweight Apple Inc possibly\nsetting the course for stocks and b…",
                "url": "https://www.marketscreener.com/quote/currency/AUSTRALIAN-DOLLAR-US-DOLL-2373531/news/Wall-St-Week-Ahead-Frazzled-U-S-stock-investors-eye-frothy-Treasury-market-as-Fed-looms-45177072/",
                "urlToImage": "https://img.zonebourse.com/reuters/2017-02/2017-02-23T005601Z_1006950001_LYNXMPED1M02Y_RTROPTP_2_CBUSINESS-US-GLOBAL-FOREX.JPG",
                "publishedAt": "2023-10-27T20:55:30Z",
                "content": "NEW YORK, Oct 27 (Reuters) -\r\nFinancial markets are bracing for what could be a momentous\r\nweek, with a Federal Reserve meeting, U.S. employment data and\r\nearnings from technology heavyweight Apple I… [+3942 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
                },
                "author": "STAN CHOE and DAMIAN J. TROISE",
                "title": "Stock market today: Wall Street falls, bringing the S&P 500 index 10% below its July peak",
                "description": "Stocks stumbled on Wall Street Friday, bringing the S&P 500 10% below the peak it reached in July and putting the benchmark index into what's called a ''correction.''",
                "url": "https://www.startribune.com/stock-market-today-wall-street-falls-bringing-the-s-p-500-index-10-below-its-july-peak/600315178/",
                "urlToImage": "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1696606793",
                "publishedAt": "2023-10-27T20:55:07Z",
                "content": "NEW YORK Stocks stumbled on Wall Street Friday, bringing the S&amp;P 500 10% below the peak it reached in July and putting the benchmark index into what's called a ''correction.''\r\nThe S&amp;P 500 fe… [+5421 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "MarketWatch"
                },
                "author": "MarketWatch Automation",
                "title": "Company Close Updates: Ford Motor Co. stock falls Friday, underperforms market",
                "description": "Shares of Ford Motor Co. plunged 12.25% to $9.96 Friday, on what proved to be an all-around grim trading session for the stock market, with the S&P 500 Index...",
                "url": "https://www.marketwatch.com/data-news/ford-motor-co-stock-falls-friday-underperforms-market-fd8774de-459f155243bf",
                "urlToImage": "https://images.mktw.net/im-220105/social",
                "publishedAt": "2023-10-27T20:51:28Z",
                "content": "Shares of Ford Motor Co. \r\n F,\r\n -12.25%\r\nplunged 12.25% to $9.96 Friday, on what proved to be an all-around grim trading session for the stock market, with the S&amp;P 500 Index \r\n SPX,\r\n -0.48%\r\nfa… [+642 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "entrepreneur.com",
                "title": "Ford Is Putting Off Its $12 Billion Electric Vehicle Investment",
                "description": "Ford announced on Thursday that it delaying a $12 billion investment in electric vehicle (EV) manufacturing facilities, including halting the construction of a second battery plant in Kentucky, per CNBC. Ford said in a media briefing on Thursday that growth i…",
                "url": "https://biztoc.com/x/6695cd1e8aabc310",
                "urlToImage": "https://c.biztoc.com/p/6695cd1e8aabc310/s.webp",
                "publishedAt": "2023-10-27T20:36:08Z",
                "content": "Ford announced on Thursday that it delaying a $12 billion investment in electric vehicle (EV) manufacturing facilities, including halting the construction of a second battery plant in Kentucky, per C… [+286 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "New York Post"
                },
                "author": "Ariel Zilber",
                "title": "Elon Musk gives X employees a year to turn app into finance platform: ‘You won’t need a bank account’",
                "description": "“When I say payments, I actually mean someone’s entire financial life,” Musk told his charges at an all-hands meeting on Thursday.",
                "url": "https://nypost.com/2023/10/27/business/elon-musk-gives-x-employees-a-year-to-turn-app-into-finance-platform/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/10/newspress-collage-970ve4fgn-1698434995412.jpg?quality=75&strip=all&1698420655&w=1024",
                "publishedAt": "2023-10-27T20:35:39Z",
                "content": "Elon Musk has given his employees at social media platform X a year to roll out a payments processing mechanism that will enable people to do away with their bank accounts.\r\nWhen I say payments, I ac… [+3788 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Chicago Tribune"
                },
                "author": "Barbara Ortutay",
                "title": "Musk’s Twitter takeover: 1 year later, X struggles with misinformation, advertising and usage decline",
                "description": "One year ago, billionaire Elon Musk walked into Twitter’s San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began transforming the social media platform into what is now known as X.",
                "url": "https://www.chicagotribune.com/business/ct-aud-biz-twitter-musk-year-later-20231027-jn777ueiznbm5aug3j237mqiim-story.html",
                "urlToImage": "https://www.chicagotribune.com/resizer/VSOZs9tMI9t1UF1MNzw_CbDkgYc=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/FQ247Y3WI2LRTA64OKGW5HQ6S4.jpg",
                "publishedAt": "2023-10-27T20:30:10Z",
                "content": "SAN FRANCISCO One year ago, billionaire and new owner Elon Musk walked into Twitters San Francisco headquarters with a white bathroom sink and a grin, fired its CEO and other top executives and began… [+5343 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
                },
                "author": "STAN CHOE and DAMIAN J. TROISE",
                "title": "Stock market today: Wall Street falls, pulling S&P 500 down 10% from its July peak",
                "description": "Stocks closed lower on Wall Street, pulling the S&P 500 down 10% from the peak it reached in July. That puts the benchmark index into what's called a 'correction.' The declines came amid the latest batch of earnings from big technology and energy companies an…",
                "url": "https://www.startribune.com/stock-market-today-wall-street-falls-pulling-s-p-500-down-10-from-its-july-peak/600315178/",
                "urlToImage": "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1696606793",
                "publishedAt": "2023-10-27T20:20:01Z",
                "content": "NEW YORK Stocks closed lower on Wall Street, pulling the S&amp;P 500 down 10% from the peak it reached in July. That puts the benchmark index into what's called a 'correction.' The declines came amid… [+5879 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "finance.yahoo.com",
                "title": "Ford, GM, and even Tesla are warning about the EV market",
                "description": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a year ago, with EV market share hitting 7.9% — its highest ever …",
                "url": "https://biztoc.com/x/cc3e57d879d3aa9f",
                "urlToImage": "https://c.biztoc.com/p/cc3e57d879d3aa9f/s.webp",
                "publishedAt": "2023-10-27T20:12:06Z",
                "content": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a yea… [+290 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Thefly.com"
                },
                "author": null,
                "title": "What You Missed On Wall Street On Friday",
                "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
                "url": "https://thefly.com/permalinks/entry.php/id3802452/AMZN;F;INTC;CVX;XOM;TSLA;GOOG;GOOGL;GM;BZFD;DIS;NRDS;EGO;DXCM;JNPR;PTCT;GTLS;SWK;ENPH;CMG;COF;ABBV-What-You-Missed-On-Wall-Street-On-Friday",
                "urlToImage": "https://image.thefly.com/catalog/201810/img_66.png",
                "publishedAt": "2023-10-27T20:09:21Z",
                "content": "Get caught up quickly on the top news and calls moving stocks with these five Top Five lists. \r\n1. STOCK NEWS: \r\n<ul><li>Amazon (AMZN) reported upbeat Q3 results and continued stabilization of Web Se… [+3079 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Quaker Wealth Management LLC Invests $201,000 in Tesla, Inc. (NASDAQ:TSLA)",
                "description": "Quaker Wealth Management LLC purchased a new position in Tesla, Inc. (NASDAQ:TSLA – Free Report) in the second quarter, according to its most recent Form 13F filing with the Securities & Exchange Commission. The fund purchased 768 shares of the electric vehic…",
                "url": "https://www.etfdailynews.com/2023/10/27/quaker-wealth-management-llc-invests-201000-in-tesla-inc-nasdaqtsla/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2023-10-27T20:06:43Z",
                "content": "Quaker Wealth Management LLC purchased a new position in Tesla, Inc. (NASDAQ:TSLA – Free Report) in the second quarter, according to its most recent Form 13F filing with the Securities &amp; Exchange… [+6307 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "aol.com",
                "title": "Ford, GM, and even Tesla are warning about the EV market",
                "description": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a year ago, with EV market share hitting 7.9% — its highest ever …",
                "url": "https://biztoc.com/x/9e860ddfdd03523f",
                "urlToImage": "https://c.biztoc.com/p/9e860ddfdd03523f/s.webp",
                "publishedAt": "2023-10-27T20:06:08Z",
                "content": "At least in the US, electric vehicle sales have hit a tipping point. Research firm Kelley Blue Book (KBB) finds that US EV sales in the third quarter crossed 313,000, nearly a 50% increase from a yea… [+278 chars]"
                }
                ],
            loading: true,
            page: 1,
            totalResults: 5
        }
        document.title = `${this.capatalizeFirstLetter(this.props.category)} - AtoZ News`
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        if(parsedData.articles === undefined || parsedData.articles === null){
            this.setState({
                loading: false
            })
        }
        else{
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            })
        }
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    // handleNextClick = async () => {
    //     await this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }

    // handlePreviousClick = async () => {
    //     await this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        if(!data.ok){
            this.setState({
                loading: false,
                totalResults: this.state.articles.length
            })
            this.props.setProgress(100);
        }
        else{
            this.props.setProgress(30);
            let parsedData = await data.json();
            this.props.setProgress(70);
            if(parsedData.articles !== undefined || parsedData.articles !== null){
                this.setState({
                    articles: this.state.articles.concat(parsedData.articles),
                    totalResults: parsedData.totalResults,
                    page:this.state.page+1,
                    // loading:true
                })
            }
            else{
                this.setState({
                    loading: false
                })
            }
            this.props.setProgress(100);
        }
    }

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '92px 35px 35px' }}>Top {this.capatalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className='row'>
                            {this.state.articles.map((element,index) => {
                                return <div className="col-md-4" key={index}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publish={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News