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