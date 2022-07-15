import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
    // this.http.get(`http://localhost:8080/users`).subscribe(res => {
    //   console.log(res)
    //   //  this.isLoading= false;
    //    // this.originalServiceProvider = res;
    //  },
    //    error => {
    //      console.log(error)
    //     //  this.isLoading= false;
    //    })
   }
  
 getNews(){
   return this.newsArray.slice();
 }

 getSearchedNews = new Subject<{}>();
 selectedNews:any;

 hoverSelectedNews(selected: any) {
  const selectedNews = selected.title.toLowerCase().split(' ').join('-');
  return selectedNews;
 }

  newsArray: any = [
    {
      id: 'news1',
      category: ['Bollywood', 'Hindi', 'Industry', 'Hindi Industry'],
      categoryId: '',
      title: `Nikitin Dheer and Kratika Sengar blessed with a baby girl`,
      imgSrc: "assets/newsImages/may2022/nikit-dheer-kratika.jfif",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdfOkKoLCoa/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: "Actors Nikitin Dheer and Kratika Sengar receive good wishes from their loved ones as they welcome their baby girl.",
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdfOkKoLCoa/embed/'
        },
        {
          fact: `It's good news for actors Nikitin Dheer and Kratika Sengar as they enter the phase of parenthood for the first time. The couple has been married for about seven years, and now they finally were blessed with a baby girl on 12th May 2022. As soon as the couple posted on Instagram about the good news, their comment section got flooded with good wishes and blessings from their dear ones.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: 'The parents are over the moon after the arrival of their daughter because their excitement was evident enough by the adorable pictures of their maternity photoshoot. They named her "Devika" which means Goddess. They expressed their joy and revealed the name of babygirl through a post on Instagram by writing: ',
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CddfhqesJWi/embed/'
        },
        {
          fact: `"We feel blessed to share with you the arrival of our darling daughter!
          -Dheers`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: ''
        },
      ],
      description: ``
    },
    {
      id: 'news2',
      category: ['Tollywood', 'Telugu', 'Industry', 'Telugu Industry'],
      categoryId: '',
      title: `Mahesh Babu seems to have landed in trouble after his comment on Bollywood`,
      imgSrc: "assets/newsImages/may2022/mahesh-babu-comment-on-bollywood.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdfP64GLANt/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Telugu actor Mahesh Babu seems to have landed in trouble after his comment on Bollywood.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Recently, Mahesh Babu who was busy with the promotional events of his movie 'Sarkaru Vaari Paata' in one of his interactions with the media said that 'Bollywood can't afford him.'`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `During the event, when Mahesh Babu was asked about his comments on making a Bollywood debut, he replied saying, “I did get a lot of offers in Hindi, but I don’t think they can afford me. I don’t want to waste my time working in an industry which can’t afford me". Within a short time after the comment was made, it went viral and became the news of controversy. Many celebrities reacted to his comment, including Boney Kapoor, Mukesh Bhatt, and now even Kangana Ranaut.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Kangana Ranaut believes that Mahesh Babu is just stating facts. When asked to comment on the same, she replied saying "He's right, Bollywood cannot afford Mahesh Babu because I know for a fact that many filmmakers offer him many movies, and he and his generation singlehandedly have made the Telugu film industry the number 1 film industry in India".`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdfP64GLANt/embed/'
        },
        {
          fact: `She also feels that controversy should not be created on such petty things. She defended the actor by stating that she respects him a lot, and the level on which he is now is undeniably appreciable.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: ''
        },
      ],
      description: ``
    },
    {
      id: 'news3',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: '',
      title: `Kangana says hindi films are not working as people don't relate to star kids.`,
      imgSrc: "assets/newsImages/may2022/kangana-ranaut-comment-bollywood.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/Cdm8r0AvVwD/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Kangana says films are not working as people don't relate to star kids.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Kangna Ranaut has been in the news for her comments and open criticism of the nepotism in Bollywood. She is quite vocal about the opportunities that newcomers lose, and the privileges entailed by the star kids of Bollywood. She feels that casting star kids as the lead actors in movies have caused an adverse effect on the Bollywood movies.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `In a recent interview, when Kangana was asked the reason for more popularity of the South Indian cinema over Bollywood, she replied "The way they have a connection with their audience, it is very strong. I wouldn’t say fans, it’s much more than that. With us what happens is that the star kids go abroad to complete their studies. They talk in English and watch only Hollywood films. They eat only with a knife and fork and talk differently. So, how will they connect? Dekhne me bhi ajeeb se aise lagte hai jaise uble hue ande. Their entire look has changed so, people cannot relate. I don’t mean to troll anyone.’`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdm8r0AvVwD/embed/'
        },
        {
          fact: `In her comments about the star kids, she strongly opines that  people are able to relate to South films because “they are deeply rooted in their culture.” Again Kangana has targeted the star kids, this time she has compared them to boiled eggs and held them responsible for a lack of connection with the audience which has resulted in the downfall of the Bollywood industry.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news4',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'cannes 2022',
      title: `Deepika Padukone in Louis Vuitton attends Cannes Film Festival opening Jury dinne`,
      imgSrc: "assets/newsImages/may2022/deepika-padukone-cannes.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdpbL38P2sL/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Deepika Padukone in Louis Vuitton attends Cannes Film Festival opening Jury dinner at hotel Martinez.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `There's the hype all over the internet about the 75th edition of the Canne's film festival which is set to start today till 28th May. Many Bollywood stars are all set to attend it in France.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdpbL38P2sL/embed/'
        },
        {
          fact: `Recently, a few pictures of Deepika Padukone arriving to dine with her fellow jurors on Monday evening are driving fans crazy. She looked stunning in a sequinned dress from Louis Vuitton as she attended jury dinner at hotel Martinez. Deepika is the only Indian on the jury panel this year. Although Deepika has been attending Cannes since 2017, this is the first time she will be making her presence felt as a jury member.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `In a recent interview when asked to comment on becoming a jury member Deepika said, “After being an actor for 15 years, for your work to finally be recognized on a global platform such as this, and to be able to represent the country, obviously there is a sense of gratitude and being extremely overwhelmed.”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Aishwarya and Abhishek along with their daughter jet off to Cannes:`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdpdt14PVGf/embed/'
        },
        {
          fact: `This family trio was spotted at the airport ready to attend the Cannes festival. Aishwarya Bachan opted for a completely black look paired with a black leather bag and black boots making a style statement while junior Bachan opted for a casual look in a baggy sweatshirt and denim. Their daughter wore a pink sweatshirt and denim along with a backpack. The star kids looked adorable and greeted the media with a smile.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news5',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'cannes 2022',
      title: `Bollywood Actresses Take Over Cannes 2022`,
      imgSrc: "assets/newsImages/may2022/cannes-2022-day-1.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdsAs2EvC-1/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Glamour, gorgeous gowns, bold colors, talented artists, and lots of bling! This pretty much sums up the Cannes festival. A lot of Indians are making heads turn with their looks at the Cannes festival. We are here to give you a glimpse of a few of them.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Some glimpses of Jury member Deepika Padukone on the Cannes carpet:
          Deepika Padukone, the only Indian to be a jury member at the Cannes festival, made her first red carpet appearance in which she is rocking the retro look with a black and golden sequinned saree designed by Sabyasachi. You just can't miss her bold black makeup with shoulder-grazing earrings and a statement Matha Patti.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdr90GHvtLF/embed/'
        },
        {
          fact: `Tamanna is quite the stunner:
          Tamanna Bhatia poses in a black fishtail gown with a dramatic white trail. Her retro hairdo and glittery earrings just added to her gorgeous look. Styled by celebrity stylist Shaleena Nathani, the actress kicked off in grand style.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdr_kxyvakR/embed/'
        },
        {
          fact: `Urvashi Rautela makes her Cannes Carpet debut wearing a Tony Couture ensemble:
          The gorgeous diva Urvashi Rautela makes her dream debut at the Cannes festival. She glided in a cloud of white tiers, neat hair bun, and statement-making crimson lipstick with bracelets and a diamond ring to complete her look. The actress was styled by celebrity stylist Shaleena Nathani.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdr-4YTvALV/embed/'
        },
        {
          fact: `Fans are waiting for Aishwarya's look for the Cannes:
          Ruling the Cannes festival for years with her gorgeous looks, fans are eagerly waiting for Aishwarya's appearance at the festival. Recently, her pictures from an old photoshoot went viral, and people mistook them for her look at the Cannes. But she is yet to make her appearance at the festival, and as per reports, she will be seen donning the collection designed by Falguni Shane peacock.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdsAs2EvC-1/embed/'
        },
      ],
      description: ``
    },
    {
      id: 'news6',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'cannes 2022',
      title: `Beautiful Divas gracing the red carpet at the Cannes festival`,
      imgSrc: "assets/newsImages/may2022/cannes-ash-pooja-helly.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/Cdurz1grCMN/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Indian celebrities are leaving a significant impression with their stunning looks on the red carpet at the Cannes festival. Here's a glimpse of a few of them.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Pooja Hegde looked absolutely stunning as she made her dream debut at the ongoing Cannes Film Festival on May 18. The actress made heads turn in a strapless feather gown, and we are absolutely in love with her look. Pooja Hegde wore a white Maison Geyanna Youness ball gown, accentuated with feathers. She had her hair pinned up in a sleek ponytail and accessorized her look with drop earrings.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdurQaDrM9m/embed/'
        },
        {
          fact: `Fans are drooling over Helly Shah's glammed-up look at the Cannes festival. Styled by Natasha Bothra, the actress wore a green-hued ensemble from Ziad Nakad's special collection with a thigh-high slit and styled it with utmost perfection. A sheer cape, heavily adorned with shimmering accents elevated her look. She kept her hair in a sleek bun with her makeup on point and completely stole the show with her confidence. .
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cdurz1grCMN/embed/'
        },
        {
          fact: `Aishwarya Rai Bachchan's look for the Cannes festival will make your heart skip a beat. The gorgeous Indian diva dolled up in a black gown adorned with floral accents and an extension of 3D flowers on one sleeve. Her ensemble was from Dolce and Gabbana with her hair on point. Her kohl-rimmed eyes and pink lips complemented her mesmerizing look.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CduqBiyL6pd/embed/'
        },
        {
          fact: `We will keep you updated on the latest news from the Cannes festival. To get the latest information about the trending topics, follow news farmers.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news7',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'cannes 2022',
      title: `Stunning Indians On The 3rd Day Of The Exotic Cannes Festival`,
      imgSrc: "assets/newsImages/may2022/Cannes-2022-Day-4-Aishwarya-Rai-Deepika-Padukone-Hina.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdxPXaJPgLX/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `The Cannes festival is in vogue these days, and everyone is witnessing gorgeous Indian actresses gracing it. Here are some pictures of a few of them.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Aishwarya Rai slayed the red carpet in her second-day appearance at the Cannes festival by showing up as the personification of Venus - the Roman goddess of love and beauty designed by Gaurav Gupta. Explaining the inspiration behind the look, the designer wrote on his social media, "Rising from the scalloped shell; she transitions from the infinite, pure as a pearl." The actress looked absolutely gorgeous in the pink pastel gown and proved that she's the evergreen beauty for Cannes. She paired her extravagant attire with matching accessories and styled her hair in loose waves.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdxNhWiPARs/embed/'
        },
        {
          fact: `Hina Khan made her much-awaited appearance at the Cannes festival in a lilac stellar feather gown and made heads turn with her mesmerizing look. The beautiful outfit was from the clothing brand Sophie’s Couture. Keeping her look minimal yet sophisticated, she paired the exquisite gown with luxury stone earrings and a bracelet.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdxOngZviqA/embed/'
        },
        {
          fact: `Deepika Padukone never fails to impress fans with her gorgeous looks at the Cannes. On the third day, she raised the bar by her stying quotient as she turned up in a  jaw-dropping custom Louis Vuitton ensemble — a strappy bright red gown that featured a plunging neckline with a peplum top and a voluminous flared skirt. Her unique ponytail also looked great and complimented her look. The Indian diva opted for a shimmery eyeshadow, sleek eyeliner, mascara-laden eyes, and blushed cheeks, with a bright red lip color.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdxPXaJPgLX/embed/'
        },
        {
          fact: `We bring you the latest news on trending topics. Follow us on Instagram for more, so that you don't miss out on the latest updates!`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news8',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'kanika kapoor wedding',
      title: `It's A Time To Celebrate For Singer Kanika Kapoor`,
      imgSrc: "assets/newsImages/may2022/kanika-kapoor-mehendi.jpg",
      awards: [],
      dob: {
        date: '',
        month: '',
        year: ''
      },
      birthPlace: '',
      nationality: '',
      hometown: '',
      school: '',
      collegeUniversity: '',
      qualification: '',
      religion: '',
      zodiacSign: '',
      foodHabit: '',
      address: '',
      hobbies: '',
      controversies: [ ],
      maritalStatus: '',
      children: '',
      affairs: '',
      wifeOrHusband: '',
      parents: {
        father: '',
        mother: ''
      },

      siblings: {
        brother: '',
        sister: ''
      },

      favourites: {
        food: '',
        actor: '',
        destination: '',
        actress: '',
        singer: '',
        fashionBrand: '',
      },

      styleQoutient: {
        carsCollection: "",
        imgSrc: '',
      },
      tattoos: [],
      moneyFactor: {
        earning: '',
        netWorth: '',
        imgSrc: ''
      },

      facts: {
        smoke: '',
        alcoholic: ''
      },
      instaSimpleLink:'https://www.instagram.com/p/CdxQXfpvlv-/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Famous singer Kanika Kapoor is all set to marry her beau Gautam, who is an NRI. The couple will tie the knot in London. She shared some of her pictures from the Mehendi ceremony dressed in a beautiful green lehenga choli, in which she looks adorable as ever. Meanwhile, Gautam complemented her in a cream jacket and lemon yellow kurta with pants set. Fans are completely amazed by their dreamy photographs of the pre-wedding ceremony and are eagerly waiting for their wedding which is likely to take place today`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CdxQXfpvlv-/embed/'
        },
        {
          fact: `Kanika first got married at 18 to Raj Chandok but got divorced in 2021. Since then, she has been a single mother to three kids: Aayana, Samara, and Yuvraj, and went up to bring up her three kids all by herself. Now, she has decided to give a second chance to love and her photographs are proof that she's quite excited. Heartiest congratulations to the singer on new beginnings, we wish her a happy married life.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news9',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Tejasswi Prakash and Karan Kundra',
      title: `Monday morning just got better for Tejran fans`,
      imgSrc: "assets/newsImages/may2022/karan-tejasvi.jfif",
      instaSimpleLink:'https://www.instagram.com/p/Cd47D1xv4b-/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Actors Tejasswi Prakash and Karan Kundra have been in the news since they expressed their love for each other on "Bigg Boss 15 ". They both had amazing chemistry in the show, and even after coming out of the Bigg Boss house, they continue to be madly in love with each other. The duo is receiving lots of love from fans who adoringly call them #Tejran. Recently a few pictures of these lovebirds got viral when Tejasswi went to pick Karan up from the airport at 3 a.m. They both look adorable as usual, and fans can't get over their cute pictures. Monday morning just got better seeing their lovely pictures. The couple is definitely raising the bar high in terms of love. Aren't they the cutest?`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cd47D1xv4b-/embed/'
        },
      ],
      description: ``
    },
    {
      id: 'news10',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'The first picture of baby girl Tvisha revealed',
      title: `The first picture of baby girl Tvisha revealed`,
      imgSrc: "assets/newsImages/may2022/new-baby-aditya-narayan.jpg",
      instaSimpleLink:'https://www.instagram.com/p/Cd48Qm6PmuY/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Singer Aditya Narayan and his wife Shweta Agarwal entered the phase of parenthood after the birth of their little daughter on 24th February 2022. Since then, both parents are embracing this phase of their life as they shared a family photograph two months after their daughter's arrival. Recently, the couple shared their daughter's photograph revealing her face in which baby girl Tvisha is wearing a completely white outfit in a basket with a cute headband. She looks super adorable, and the parents wrote "3 months old tomorrow! Here she is, our beautiful angel @tvishanarayanjha 👼🏻❤️". As soon as Aditya dropped this photo, fans started showering lovely comments and blessings in the comment section.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cd48Qm6PmuY/embed/'
        },
      ],
      description: ``
    },
    {
      id: 'news11',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Akshay Kumar on North-South Cinema',
      title: `Akshay Kumar on North-South Cinema`,
      imgSrc: "assets/newsImages/may2022/akshay-latest-comment.jpg",
      instaSimpleLink:'https://www.instagram.com/p/Cd5MvPHPSkx/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Akshay Kumar's latest film Prithviraj is all set to hit theatres on June 3. The actor is busy promoting it at various events. Recently in an event when he was questioned about the language debate he responded saying "I don’t believe in this divide. I hate it when somebody says south industry or north industry, we are all a common industry. I think we should stop asking this question. We must understand that this is how the Britishers came and divided us, they invaded us and ruled us. We don’t seem to have learnt our lesson, we are still not understanding this. The day we understand that we are all one industry, I think things will start working much better.”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cd5MvPHPSkx/embed/'
        },
        {
          fact: `It seems that Akshay is uninterested in this North-South debate and he believes that it is unfortunate of people to discuss such things even after being victims of colonial rule for so many years. The actor refuses to take sides saying that he doesn't believe in this divide and that there is only one industry.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news12',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Half-Century for KJo, Karan Johar 50th birthday, karan johar 50 birthday',
      title: `Half-Century for KJo`,
      imgSrc: "assets/newsImages/may2022/karan_johar_birthday_bash_photos_live_updates.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CeAmLD4IHlb/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Indian filmmaker Karan Johar turns 50 on 25th May. The director hosted a massive birthday bash in Mumbai at Yash Raj Studios, and many Bollywood celebrities graced the event. Karan shined in a green shimmery blazer and had a blast on the eve.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeAmLD4IHlb/embed/'
        },
        {
          fact: `Many Bollywood couples like Abhishek Bachchan and Aishwarya Rai Bachchan, Shahid Kapoor and Mira Kapoor, Angad Negi and Neha Dhupia, Ayushman Khurana and Tahira Kashyap, Kareena Kapoor and Saif Ali Khan, Amir Khan and made a grand entry. Newly-wed couple Vicky and Katrina served couple goals looking adorable as usual. Meanwhile, Hritik Roshan made a formal appearance with Saba Azad, and Sussanne Khan arrived with Arshan Gon. Ex couple Aamir Khan and Kiran Rao were also spotted.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeApq05vk-j/embed/'
        },
        {
          fact: `Neetu Kapoor accompanied Ranbir Kapoor. Parineeti Chopra, Kiara Advani, Siddharth Malhotra, Salman Khan, Tiger Shroff, Varun Dhawan, Kriti Sanon, Anushka Sharma, Ranveer Singh, and Malaika Arora also attended the grand party.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeAq1qzohHR/embed/'
        },
        {
          fact: `Next-generation Bollywood divas- Ananya Pandey, Janhvi Kapoor, and Sara Ali Khan also turned up the glam quotient with their outfits.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeArI88Isz5/embed/'
        },
        {
          fact: `The evergreen beauties- Rani Mukherjee, Madhuri Dixit, Juhi Chawla, and Kajol looked mesmerizing as ever.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeAr1JFv4SF/embed/'
        },
        {
          fact: `The birthday vibes were strong, and it seems it was a star-studded red carpet.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeAsJBsv7P2/embed/'
        },
      ],
      description: ``
    },
    {
      id: 'news13',
      category: ['Pollywood', 'Industry', 'Pollywood Industry'],
      categoryId: 'Sidhu moosewala shot dead, Rip sidhu moosewala',
      title: `Gone too soon: Rest in power Sidhu Moosewala`,
      imgSrc: "assets/newsImages/may2022/sidhu-moosewala-death-case.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CeJLeF2L-zL/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `29 year old Punjabi singer and rapper Shubhdeep Singh popularly known as Sidhu Moose Wala was shot dead on 29th May in the evening. His death came as shock to his family, fans, and celebrities.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeJLeF2L-zL/embed/'
        },
        {
          fact: `The incident happened within 24 hours after his security was withdrawn by the Punjab government, more than 30 rounds were fired on the vehicle he was traveling in. Police said Sidhu appeared to have sustained more than eight bullet injuries. He was brought dead to the Civil Hospital in Mansa. The 29 years old was on the radar of gangsters for a long time. Satinder Singh aka Goldy Brar, a Canadian criminal of Punjabi ancestry, claimed responsibility for the murder. According to Brar, who is a close acquaintance of criminal Lawrence Bishnoi, his group was responsible for the shooting. Both Brar and Bishnoi are facing criminal charges in India.`,
          imgSrc: 'assets/newsImages/may2022/death-sidhumoosewala.jpeg',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `The singer's death has sparked anger in everyone because people are questioning the State Government for its negligence that has resulted in this blunder. If a public figure like Sidhu isn't safe in his hometown how can the state ensure the safety of civilians?
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Moose Wala was among the 424 people whose police security was reduced or entirely removed the day before, in preparation for the anniversary of Operation Blue Star, leaving him with two commandos only, as compared to four earlier. At the time of the incident, he was traveling in his private car accompanied by his private security guards instead of the state government-provided bullet-proof vehicle and the police commandos.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Moose Wala, known for his temperamental and edgy lyrics, was one of Punjab's biggest pop stars. He was also a controversial figure who had several brushes with the law.
          `,
          imgSrc: 'assets/newsImages/may2022/sidhu-moosewala-song.jpg',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Critics often called him out for promoting gun culture - a major concern in Punjab - through his songs and social media activity.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `In May 2020, the singer was booked for firing an AK-47 rifle at a shooting range during the Covid lockdown. He also had a police case against him for allegedly promoting violence and gun culture through his song Sanju.
          He contested the state assembly election earlier this year as a Congress candidate but lost.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `His death shocked fans across the country and abroad, especially in Canada, which has a sizeable Punjabi diaspora population. Social media was flooded with tributes, with much-demanding justice for Moose Wala.
          `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Before becoming a politician, Moose Wala was a music star. Born in Mansa's Moosa village – hence the moniker Moose Wala – he moved to Canada in 2016 and became famous for his songs, many of which contained controversial themes. In 2018, he was included on the Billboard Canadian Albums chart as well as the UK Singles Chart.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `He released his first track, “So High” in 2017, on his YouTube channel, which has since then grown in popularity with 10.8 million subscribers; another eight million follow him on Instagram. He became a music sensation, and the stardom he enjoyed, only a few people could think about.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Many celebrities from the entertainment industry mourned the death of Sidhu Moosewala. His music was loved by the young generation. Though he isn't here, his music remains forever!<br /> 
          Rest in power Sidhu.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CeK-0mUounE/embed/'
        },
      ],
      description: ``
    },
    {
      id: 'news14',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Shakti Kapoor son, Siddanth, Sidhanth',
      title: `Siddhanth Kapoor Detained For Drug Consumption`,
      imgSrc: "assets/newsImages/may2022/siddanth-malhotra.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CevEKQ_rWnA/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Bollywood actor Shakti Kapoor's son Siddhanth Kapoor has been detained for consuming drugs at a rave party in Bengaluru. It was on 12th June, that the police raided a five-star hotel in Bengaluru for suspicion that drugs were being consumed at the party. According to the reports, the Bengaluru police detained 35 people allegedly having a drug party, one of them being Siddhanth Kapoor, who was also present at the party. The detainees were subjected to a medical examination, and five of them were confirmed to have consumed drugs including Shakti Kapoor's son.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CevEKQ_rWnA/embed/'
        },
        {
          fact: `Siddhanth Kapoor has been taken to the police station for further examination, meanwhile, Shakti Kapoor has also reacted to his son's arrest by commenting "I can say only one thing - it's not possible." Earlier, Siddhanth's sister Shraddha Kapoor was also questioned by the Narcotics Control Bureau (NCB) in the case of actor Sushant Singh Rajput's death over alleged possession of drugs. However, nothing substantial was proved.`,
          imgSrc: 'assets/newsImages/may2022/siddanth-malhotra-2.jpg',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news15',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: '',
      title: `T-series and Karan Johar in trouble`,
      imgSrc: "assets/newsImages/may2022/karan-johar-in-trouble.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CevE5qjL8M5/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `It seems that T-series and Karan Johar have landed into trouble as Pakistani singer Abrar-ul-Haq, who had earlier revealed his disappointment over stealing his song Nach Punjaban in the forthcoming movie JugJugg Jeeyo has now stated that he is going to take legal action.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CevE5qjL8M5/embed/'
        },
        {
          fact: `Abrar Ul Haq tweeted," I have not sold my song Nach Punjaban to any Indian movie and reserve the right to go to court to claim damages. Producers like Karan Johar should not use copy songs. This is my 6th song being copied which will not be allowed at all." He also tagged Karan Johar and Dharma productions in his tweet with the hashtag "Stop Stealing Our Songs".`,
          imgSrc: 'assets/newsImages/may2022/Karan-Johar-In-Trouble-Pakistani-Singer-Of-Nach-Punjabaan.jpg',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `On Saturday, the singer took to Twitter and shared a clip of himself saying, "A lot of fans have been asking me 'Why haven't you gone to court against Karan Johar and T-Series for stealing your song Nach Punjaban?’ The answer is, yes, I'm going to the court, don't worry. Merely saying that the credit has been given because the song is well written and would make their movie a hit. I never gave you the song, I never gave anybody the rights to my song. It belongs to me so I'll get it back and I'm coming to the court, see you there!”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `While Karan Johar is yet to react to the accusation made by Abrar Ul Haq, music label and production company T-Series has responded. Their official statement on Twitter read, “We have legally acquired the rights to adapt the song #NachPunjaban released on iTunes on 1st January 2002 & available on Lollywood Classics’ YouTube channel, owned by 1Moviebox, for JugJuggJeeyo produced by DharmaMovies.”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `“All due credits shall be included across all platforms when song releases. As represented by Moviebox Records Label the said song copyrights exclusively vest with movie box only with all valid documents,” the statement continued.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Directed by Raj Mehta and produced by Hiroo Yash Johar, Karan Johar, and Apoorva Mehta, comedy-drama stars Neetu Kapoor, Anil Kapoor, Kiara Advani, and Varun Dhawan alongside Prajakta Koli and Manish Paul is all set to release on June 24th.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news16',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Alia pregrancy, Alia ranbir, ranbir alia pregrancy',
      title: `Alia Bhatt and Ranbir Kapoor announce pregnancy`,
      imgSrc: "assets/newsImages/june2022/ranbir-alia-announces-pregrancy.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CfTGbNrrT-L/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Fans are extremely overjoyed with the good news shared by Alia and Ranbir. Alia Bhatt and Ranbir Kapoor- one of the most adorable Bollywood couples have been in the news for quite a long time. The duo got hitched in April 2022, and now their film "Brahmastra" directed by Karan Johar is all set to hit the theatres in September. On June 27, the couple made a surprising announcement as they are expecting their first child.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfTGbNrrT-L/embed/'
        },
        {
          fact: `Alia Bhatt took to her Instagram and shared a picture from the hospital with the caption "Our baby ….. coming soon ♾❤️✨".
          She also added a photo showcasing a lion and lioness with their cub to her baby announcement post. Friendly, family and fans flooded her comments section pouring the congratulatory messages.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfTHXR2Mfwo/embed/'
        },
        {
          fact: `We wish heartiest congratulations to the love birds as they embark upon their new journey of would be parents!`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        }
      ],
      description: ``
    },
    {
      id: 'news17',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Bharatnatyam Performance Urvashi Rautela, Urvashi Rautela',
      title: `Stunning Bharatnatyam Performance By Urvashi Rautela`,
      imgSrc: "assets/newsImages/june2022/bharatanatyam-urvashi.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CfYP62_rKjz/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Urvashi Rautela- A renowned actress, a holder of maximum beauty titles, producer, and singer is a great dancer too.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Recently she came into the limelight because of her stunning Bharatnatyam dance performance on Bhool Bhulaiya 2 song, "Mere Dholna" which left the audience mesmerized at the Umang awards 2022. `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfYP62_rKjz/embed/'
        },
        {
          fact: `Umang is all about honoring the selfless service of the Mumbai police for the people. A trained Kathak and Bharatnatyam dancer, Urvashi evoked the goddesses, Ma Durga and Laxmi.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `She was compared to Rekha in this performance. On this Urvashi said, ‘I am really feeling very lucky because people have compared me with my favorite actress Rekha Ji. I am extremely happy after this.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `She took to her Instagram handle to share a BTS video from the Umang Awards 2022 backstage. The diva looked stunning in her vibrant traditional Bharatnatyam dance attire representing the tradition and culture of the dance form with classical make-up to complete her look.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news18',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Alia pregrancy, Alia ranbir, ranbir alia pregrancy',
      title: `Dad To Be Ranbir Kapoor Might Get His First Child's Name Tattoo`,
      imgSrc: "assets/newsImages/june2022/ranbir-alia-child-tatto.jfif",
      instaSimpleLink:'https://www.instagram.com/p/CfYSfVkrHjh/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `One of the most lovely couples in Bollywood Ranbir and Alia, on 27th June, announced the news of pregnancy. It seems like days before announcements, Ranbir had expressed his desire to ink the name of his children in one of the old interviews.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `In an interview, Ranbir was asked if he had any tattoos. He said, "None yet. Hopefully soon. The 8 or something I don't know. Maybe my tattoo is going to be children’s names or I don't know."`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfYSfVkrHjh/embed/'
        },
        {
          fact: `Now when Alia is pregnant with her first child, there are chances that Ranbir might ink the name of his kid.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news19',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'ESha gupta, esha gupta wishes',
      title: `Esha Gupta Wishes She Were A Star Kid`,
      imgSrc: "assets/newsImages/june2022/esha-gupta-wish.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CfYWmO5LSnG/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `The Bollywood debate about nepotism is a never-ending one!
          Once again it has gained momentum after some revelations by Esha Gupta. She talked about how difficult it is for outsiders to sustain in Bollywood.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `In a recent interview, the actress opens up about nepotism and stated  “As someone who's not from the industry, what I can speak for outsiders is that you don't get a shoulder to cry on. And you do not have anyone guiding you the right way. Because of most people that I met, very few were real and genuine. My current agent is one of my best friends. But that's because I can trust them. There are very few who would want to see you progress and guide you the same way.”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfYWmO5LSnG/embed/'
        },
        {
          fact: `She continued further saying “At times, I really wish I was from the industry, I know I wouldn't have faced that. When you're from the industry, you could be nasty, you could have given a flop, but it would be no big deal because you would still have another film. I remember when my first film flopped, I was really scared. I started beating myself for my choices. I felt it was the end of it and I won’t have work anymore. But then, after quite some time, I picked myself up. I was working, earning money, doing so much work, and then you realize, that's life."`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news20',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Urfi Javed Death Threats',
      title: `Urfi Javed Receives Death Threats After The Statement On Kanhaiya Lal's Murder`,
      imgSrc: "assets/newsImages/june2022/urfi-javed-threats.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CfbU8Qysgaa/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Urfi Javed, the internet sensation who has been in the limelight for being the most searched Asian in the world recently reacted to the Kanhaiya Lal's murder case.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Urfi took to her Instagram handle and condemned the act by writing,' Where are we heading to? Allah didn't ask you to hate and kill in his name.' She posted another story and added, 'In today's time, your religion is taking away your morality and ethics! Extremism in any man-made belief such as religion will only cause destruction! Never too late. Open up your eyes people! ' Many other celebs have also shared posts condemning the heinous killing of the tailor. The killers, who posted the video of the murder on social media claiming that the killing was 'to avenge the insult of Islam', have been arrested by the police.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfbU8Qysgaa/embed/'
        },
        {
          fact: `Since her comments on the incident, Urfi has been receiving death threats, sharing a screenshot where she was referred to as a chudail (witch) by a man. The man says that she is a disgrace to the community and they would not spare her. It sounds very threatening. Urfi Javed did not waste any time and reported him to Mumbai Police.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news21',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Debina Bonnerjee And Gurmeet Choudhary, Debina Bonnerjee And Gurmeet Choudhary daughter, Debina Bonnerjee daughter, Gurmeet Choudhary daughter',
      title: `Debina Bonnerjee And Gurmeet Choudhary Share The First Photo With Daughter Lianna`,
      imgSrc: "assets/newsImages/june2022/gurmeet-son-first-pic.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CflS8uhLcIk/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Actors Debina and Gurmeet have given fans the first glimpse of their daughter Lianna Choudhary. The couple shared an adorable photo holding their bundle of joy and wrote, <br />
          "Our hearts are so full - knowing that we are part of a beautiful community of such genuine people.. who prayed for her and waited and longed to see her face."`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CflS8uhLcIk/embed/'
        },
        {
          fact: `Soon various celebrities showered love in their comments section reacting to the cute family photograph!`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news22',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: '20 Years Went By In A Flash - Neha Dhupia, neha dhupia flashback',
      title: `20 Years Went By In A Flash - Neha Dhupia`,
      imgSrc: "assets/newsImages/july2022/neha-dhupia-flashback.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CfqWD6Psr1P/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Neha Dhupia- A versatile actor famous for her incredible fashion sense and judging reality shows was crowned Miss India in 2002.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CfqWD6Psr1P/embed/'
        },
        {
          fact: `Neha, who was among the jury members at Miss India 2022 grand finale on Sunday, was felicitated on stage by her parents as she completed 20 years of winning the crown.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `She was also accompanied by her husband Angad Bedi and kids, Mehr and Guriq on stage. She shared a collage of then and now pictures that showed her wearing her crown after winning the pageant in 2002.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `The actress took to Instagram penning down a heartfelt note on completing 20 years as Miss India, "20 years that went by in a flash … but if I shut my eyes and think, all I have is gratitude in my heart. I didn't think that it would be possible to wear this crown on stage again and relive one of the most precious moments of my life with my most precious people. 20 years later I stood taller, stronger, more experienced, and a few dresses size bigger :) … but most importantly I stood for every little girl who dares to dream and work hard towards it, for every daughter who wants nothing more than to make her parents proud, for every partner who basis their relationship on love and equality and for every mother who wants to live her dream and wants nothing more than to have her children by her side as she does that … sometimes in life even if we don’t have a crown … we all have our sparkle ✨ … #shineon … Love Miss India 2002 -2022," she wrote.`,
          imgSrc: 'assets/newsImages/july2022/neha-dhupia-flashback-2.jpg',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Soon after posting this, many of her well-wishers and loved ones flooded her comments section with lovely comments.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news23',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Bhagwant Mann marriage, Punjab Cm marriage, Bhagwant Maan marriage',
      title: `Punjab's CM Bhagwant Mann Ties The Knot With Dr. Gurpreet Kaur`,
      imgSrc: "assets/newsImages/july2022/bhagwant-maan-marriage.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CftRYMuLX29/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Bhagwant Mann ties the knot for the second time with Dr. Gurpreet Kaur in a private ceremony at his house in Chandigarh. The wedding was solemnized according to the Sikh rituals. Delhi CM and AAP chief Arvind Kejriwal and AAP leader, Raghav Chadha also attended the wedding.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Speaking to reporters in Mohali before traveling to Chandigarh, Arvind Kejriwal stated, "He is embarking on a new journey today, I wish him a happy married life". Raghav Chadha was among the first ones to arrive for CM's wedding.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CftRYMuLX29/embed/'
        },
        {
          fact: `AAP leader Bhagwant Mann was sworn in as Punjab Chief Minister on March 16, 2022. Mann divorced his first wife-Inderpreet Kaur in 2015. He has two children from that marriage — daughter Seerat Kaur Mann(21) and son Dilshan Singh Mann(17).`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news24',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Pankaj Tripathi To Play Atal Bihari Vajpayee In The Biopic Of The Former Prime Minister',
      title: `Pankaj Tripathi To Play Atal Bihari Vajpayee In The Biopic Of The Former Prime Minister`,
      imgSrc: "assets/newsImages/july2022/Vajpayee2.png",
      instaSimpleLink:'https://www.instagram.com/p/Cf3nROJsZay/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `A biopic titled Main Rahoon Ya Na Rahoon, Yeh Desh Rehna Chahiye - Atal, on former Prime Minister, Atal Bihari Vajpayee has been announced. The film is reportedly based on the book of a renowned author, 'Ullekh NP' titled "The Untold Vajpayee: Politician And Paradox". According to sources, Pankaj Tripathi is all set to portray the role of the protagonist, the former Prime Minister Atal Bihari Vajpayee in it.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `"The film on Atal Bihari Vajpayee will be produced by Vinod Bhanushali, Sandeep Singh, Sam Khan, Kamlesh Bhanushali, and Vishal Gurnani. It is scheduled to hit screens in 2023. According to reports, the biopic will be released on Christmas 2023, which marks the 99th birth anniversary of the late PM".`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cf3nROJsZay/embed/'
        },
        {
          fact: `Talking about the film, Bhanushali said, "I have been a great fan of Atalji all my life. A born leader, a statesman par excellence, a visionary. Shri Atal Bihari Vajpayee Ji was all the above. His contribution to our nation-building is unparalleled, and it is our great honour that Bhanushali Studios Ltd is bringing his legacy to the silver screen."`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Additionally, he also quoted, "Being a filmmaker, I feel that cinema is the best medium to communicate such untold stories, that will unveil not only his political ideologies but his humane and poetic aspects, that made him the most loved leader of the opposition as well as India's most progressive Prime Minister."`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news25',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Jennifer Winget karan singh grover separation',
      title: `Jennifer Winget Opened Up On Her Separation From Karan Singh Grover`,
      imgSrc: "assets/newsImages/july2022/jennifer-winget-and-karan-singh-grover.jpg",
      instaSimpleLink:'https://www.instagram.com/p/Cf8YR3ar8WM/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Jennifer Winget and Karan Singh Grover were one of the most lovely couples in the television industry. They dated a few years before tying the knot in 2012. However, after two years of marital bliss, they filed for a divorce in 2014. Now, after 8 years of divorce, Jennifer finally opened up about her separation from Karan in a recent interview.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `She told in the interview that “I think both of us were not ready. It’s not just him (Karan Singh Grover) or it's not just me, both of us weren’t ready to take that step. We had been friends for so long. We were like a house on fire every time we met. But I think it was an unfortunate timing I guess.”`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/Cf8YR3ar8WM/embed/'
        },
        {
          fact: `She had a tough time dealing with this situation of divorce.
          Jennifer revealed that she was so lost and confused that she didn't know what to tell people or how to process that. She added that her friends used to force her to go out and I’m like I don’t want to go. But whenever I used to go out, I used to see people looking at me with those sad, sympathetic eyes like ‘are bechari yaar’ and it used to piss me off even more. That’s why I would not go out. I understand you’re feeling for me, it’s great but I don’t need that right now. Right now I’m not ready to deal with you because I’m dealing with me. So that’s why I cut off from people and once I was done with it, then I am so done with it,” Jennifer told Bollywood Bubble.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
    {
      id: 'news26',
      category: ['Bollywood', 'Industry', 'Bollywood Industry'],
      categoryId: 'Lalit Modi Sushmita Sen, Sushmita Sen Lalit Modi, Lalit Sushmita, Sushmita Lalit',
      title: `Lalit Modi Makes His Relationship With Sushmita Sen Official`,
      imgSrc: "assets/newsImages/july2022/lalit-sushmita.jpg",
      instaSimpleLink:'https://www.instagram.com/p/CgBlL63Mi2P/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `Actress and former beauty queen Sushmita who made her outstanding come back in the web series "Arya" has now been in limelight after the official announcement of Lalit Modi about his relationship with her.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Lalit Modi on Thursday announced that he is dating Bollywood actress Sushmita Sen and intends to tie the knot with her soon. Modi had shared a series of pictures of the two on Instagram, calling the actress his better half' and describing it as a new beginning'.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: 'https://www.instagram.com/p/CgBlL63Mi2P/embed/'
        },
        {
          fact: `Lalit wrote, "Just back in London after a whirling global tour #maldives # sardinia with the families - not to mention my # better-looking partner @sushmitasen47 - a new beginning a new life finally. Over the moon. 🥰😘😍😍🥰💕💞💖💘💓. Love does not mean marriage YET. BUT ONE THAT BY GOD'S GRACE WILL HAPPEN. I JUST ANNOUNCED THAT WE ARE TOGETHER 🥰😘"`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Sushmita, 46, has not yet confirmed her relationship with Lalit Modi. She had announced her split from model-actor Rohman Shawl in December last year with an Instagram post.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Talking about her career, she won the Miss Universe 1994 pageant and made her debut with Mahesh Bhatt's Dastak in 1996. Since then, she has worked in films like Biwi No 1, Fiza, Aankhen, Main Hoon Na, and Maine Pyaar Kyun Kiya? She adopted two daughters, Renee and Alisah. The Arya star adopted Renee at the age of 24.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Lalit Modi relocated to London in 2010, after the IPL controversy broke. In March, the High Court of London cleared him of 'actionable misrepresentation' as alleged by former Indian model-turned-investor Gurpreet Gill Maag in a legal challenge.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      description: ``
    },
  ]
}
