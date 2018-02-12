"use strict"
var bodyDiv = document.querySelector("div");
let jsweb;

jsweb = {
  navbar: {
    id: 'nav',
    style: {
      height: '120px',
      background: '#87509c',
    },
    logo: {
      text: "Cuda",
      style: {
        fontFamily: "Lobster",
        float: 'left',
        fontSize: '60px',
        color: '#fff',
        paddingTop:'50px',
        paddingLeft: '120px'
      }
    },
    menu: {
      pages: {
        contact: "CONTACT",
        blog: "BLOG",
        work: "WORK",
        about: "ABOUT",
        home: "HOME",
      },
      href: {
        contact: "#cont",
        blog: "#feed",
        work: "#port",
        about: "#team",
        home: "#land",
      },
      style: {
        fontFamily: "Roboto",
        float: 'right',
        paddingRight: '20px',
        color: '#fff',
        paddingTop:'70px',
        fontSize: '24px',
        textDecoration: 'none'
      },
    },
    innerDiv: function(){
      var logoDiv = document.createElement('div')
      mainDiv.appendChild(logoDiv);
      logoDiv.innerHTML += this.logo.text;
      for(let logoKey in this.logo.style) {
        logoDiv.style[logoKey] = this.logo.style[logoKey];
      }
      for(let menuKey in this.menu.pages){
        var menuDiv = document.createElement('div');
        var menuLink = document.createElement('a');
        mainDiv.appendChild(menuDiv);
        menuDiv.appendChild(menuLink);
        menuDiv.style.paddingRight = '120px';
        menuLink.innerHTML += this.menu.pages[menuKey];
        menuLink.href += this.menu.href[menuKey];
        for(let menuStyle in this.menu.style) {
          menuLink.style[menuStyle] = this.menu.style[menuStyle];
        }
      }
    }
  },
  landing: {
    id: 'land',
    style: {
      height: '600px',
      background: '#87509c'
    },
    title: {
      text: 'Hi there! We are the new kids on the block <br> and we build awesome websites and mobile apps.',
      style: {
        fontFamily: "Roboto",
        fontWeight: '500',
        margin: 'auto',
        textAlign: 'center',
        fontSize: '48px',
        color: '#fff',
        paddingTop: '200px',
        width: '1100px'
      }
    },
    button: {
      text: 'WORK WITH US!',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        background: '#eb7d4b',
        width: '300px',
        height: '80px',
        textAligh: 'center',
        borderRadius: '5px',
        border: '1px solid #eb7d4b',
        borderBottom: '3px solid #c86a43',
        display: 'block',
        margin: 'auto',
        marginTop: '50px'
      }
    },
    innerDiv: function() {
      var landText = document.createElement('div');
      mainDiv.appendChild(landText);
      landText.innerHTML = this.title.text;
      for(let landKey in this.title.style) {
        landText.style[landKey] = this.title.style[landKey];
      }
      bigButton(jsweb.landing);
    },

  },
  services: {
    id: 'serv',
    style: {
      minHeight: '700px',
      background: '#17c2a4',
    },
    title: {
      text: 'SERVICES WE PROVIDE',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #14a58c',
        width: '50px',
      }
    },
    paragraph: {
      text: 'We are working with both individual and businesses form all over the globe to create awesome websites and aplications',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '700px',
        paddingTop: '10px',
        margin: 'auto',
        paddingBottom: '50px',
      }
    },
    content: {
      icon: {
        img: {
          rocket: 'img/rocket.png',
          development: 'img/work.png',
          design: 'img/pencil.png',
          branding: 'img/flag.png',
        },
        style: {
          display: 'block',
          margin: 'auto'
        }
      },
      title: {
        text: {
          rocket: 'ROCKET SCIENCE',
          development: 'DEVELOPMENT',
          design: 'DESIGN',
          branding: 'BRANDING',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '26px',
          fontWeight: '500',
          textAlign: 'center'
        }
      },
      text: {
        meaning: {
          rocket: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          development: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          design: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          branding: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: '400',
          textAlign: 'center',
          width: '250px',
          margin: 'auto'
        }
      },
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '18px',
        display: 'inline-block',
        marginTop: '100px',
        margin: '0 5px',
        width: '300px'
      }
    },
    innerDiv: function() {
      titleHrSub(jsweb.services);
      var servContentDiv = document.createElement('div');
      mainDiv.appendChild(servContentDiv);
      servContentDiv.style.textAlign = 'center';

      var servContDiv;
      for(let servDivKey in this.content.icon.img){
        let servImg = document.createElement('img');
        let servHeading = document.createElement('h4');
        let servP = document.createElement('p');
        servContDiv = document.createElement('div');
        servContentDiv.appendChild(servContDiv);
        servContDiv.appendChild(servImg);
        servContDiv.appendChild(servHeading);
        servContDiv.appendChild(servP);
        servImg.src += this.content.icon.img[servDivKey];
        servHeading.innerHTML += this.content.title.text[servDivKey];
        servP.innerHTML += this.content.text.meaning[servDivKey];
        for(let servImgStyleKey in this.content.icon.style){
          servImg.style[servImgStyleKey] = this.content.icon.style[servImgStyleKey];
        }
        for(let servTitleStyleKey in this.content.title.style){
          servHeading.style[servTitleStyleKey] = this.content.title.style[servTitleStyleKey];
        }
        for(let servTextStyleKey in this.content.text.style){
          servP.style[servTextStyleKey] = this.content.text.style[servTextStyleKey];
        }
        for(let servDivStyleKey in this.content.style){
          servContDiv.style[servDivStyleKey] = this.content.style[servDivStyleKey];
        }
      }
    }
  },
  team: {
    id: 'team',
    style: {
      minHeight: '800px',
      background: '#e1f7fF'
    },
    title: {
      text: 'MEET OUR BEAUTIFUL TEAM',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #c7d9e5',
        width: '50px',
      }
    },
    paragraph: {
      text: 'We are a small team of designers and developers, who help brands with big ideas',
      style: {
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '700px',
        paddingTop: '10px',
        paddingBottom: '50px',
        margin: 'auto'
      }
    },
    content: {
      icon: {
        img: {
          anne: 'img/profile.png',
          kate: 'img/profile.png',
          olivia: 'img/profile.png',
          ashley: 'img/profile.png',
        },
        style: {
          display: 'block',
          margin: 'auto',
          borderRadius: '50%',
          width: '200px',
          height: '200px'
        }
      },
      title: {
        text: {
          anne: 'ANNE HATHAWAY',
          kate: 'KATE UPTON',
          olivia: 'OLIVIA WILDE',
          ashley: 'ASHLEY GREENE',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '26px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#3d3d3d',
        }
      },
      subTitle: {
        text: {
          anne: 'CEO / Marketing Guru',
          kate: 'Creative Director',
          olivia: 'Lead Designer',
          ashley: 'SEO / Developer',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#5ba2ff',
          marginTop: '-20px',
          fontWeigth: '400'
        }
      },
      text: {
        meaning: {
          anne: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          kate: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          olivia: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
          ashley: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: '400',
          textAlign: 'center',
          width: '250px',
          margin: 'auto',
          color: '#3d3d3d',
          paddingBottom: '30px'
        }
      },
      contactLogo: {
        logo: {
          fb: 'img/fb.png',
          twitter: 'img/twitter.png',
          linkedin: 'img/linkedin.png',
          email: 'img/email.png',
        },
        style: {
          width: '30px',
          height: '30px',
          display: 'inline-block',
          margin: '0 5px',
          paddingRight: '5px',
          paddingLeft: '5px'
        }
      },
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '18px',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 5px',
        width: '300px'
      }
    },
    innerDiv: function() {
      titleHrSub(jsweb.team);
      var teamContentDiv = document.createElement('div');
      mainDiv.appendChild(teamContentDiv);
      teamContentDiv.style.textAlign = 'center';

      var teamContDiv;
      for(let teamDivKey in this.content.icon.img){
        let teamImg = document.createElement('img');
        let teamHeading = document.createElement('h4');
        let teamSubHead = document.createElement('p');
        let teamP = document.createElement('p');

        teamContDiv = document.createElement('div');
        teamContentDiv.appendChild(teamContDiv);
        teamContDiv.appendChild(teamImg);
        teamContDiv.appendChild(teamHeading);
        teamContDiv.appendChild(teamSubHead);
        teamContDiv.appendChild(teamP);

        teamImg.src += this.content.icon.img[teamDivKey];
        teamHeading.innerHTML += this.content.title.text[teamDivKey];
        teamSubHead.innerHTML += this.content.subTitle.text[teamDivKey];
        teamP.innerHTML += this.content.text.meaning[teamDivKey];


        for(let teamImgStyleKey in this.content.icon.style){
          teamImg.style[teamImgStyleKey] = this.content.icon.style[teamImgStyleKey];
        }
        for(let teamTitleStyleKey in this.content.title.style){
          teamHeading.style[teamTitleStyleKey] = this.content.title.style[teamTitleStyleKey];
        }
        for(let teamSubTitleStyleKey in this.content.subTitle.style){
          teamSubHead.style[teamSubTitleStyleKey] = this.content.subTitle.style[teamSubTitleStyleKey];
        }
        for(let teamTextStyleKey in this.content.text.style){
          teamP.style[teamTextStyleKey] = this.content.text.style[teamTextStyleKey];
        }
        for(let teamDivStyleKey in this.content.style){
          teamContDiv.style[teamDivStyleKey] = this.content.style[teamDivStyleKey];
        }
        for(let teamLogoKey in this.content.contactLogo.logo){
          let contactTeamIcon = document.createElement('img');
          teamContDiv.appendChild(contactTeamIcon);
          contactTeamIcon.src = this.content.contactLogo.logo[teamLogoKey];
          for(let logoStyleKey in this.content.contactLogo.style) {
            contactTeamIcon.style[logoStyleKey] = this.content.contactLogo.style[logoStyleKey];
          }
        }
      }
    }
  },
  skills: {
    id: 'skill',
    style: {
      minHeight: '600px',
    },
    title: {
      text: 'WE GOT SKILLS!',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #dfe8ed',
        width: '50px',
      }
    },
    paragraph: {
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
      style: {
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '700px',
        paddingTop: '10px',
        paddingBottom: '50px',
        margin: 'auto'
      }
    },
    content: {
      icon: {
        img: {
          skill1: 'img/skill1.png',
          skill2: 'img/skill2.png',
          skill3: 'img/skill3.png',
          skill4: 'img/skill4.png',
        },
        style: {
          display: 'block',
          margin: 'auto',
          borderRadius: '50%',
          width: '200px',
          height: '200px'
        }
      },
      title: {
        text: {
          skill1: 'WEB DESIGN',
          skill2: 'HTML / CSS',
          skill3: 'GRAPHIC DESIGN',
          skill4: 'UI / UX',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '26px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#3d3d3d',
        }
      },
      style: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 5px',
        width: '300px'
      }
    },
    innerDiv: function() {
      titleHrSub(jsweb.skills);
      var skillContentDiv = document.createElement('div');
      mainDiv.appendChild(skillContentDiv);
      skillContentDiv.style.textAlign = 'center';

      var skillContDiv;
      for(let skillDivKey in this.content.icon.img){
        let skillImg = document.createElement('img');
        let skillHeading = document.createElement('h4');
        skillContDiv = document.createElement('div');
        skillContentDiv.appendChild(skillContDiv);
        skillContDiv.appendChild(skillImg);
        skillContDiv.appendChild(skillHeading);
        skillImg.src += this.content.icon.img[skillDivKey];
        skillHeading.innerHTML += this.content.title.text[skillDivKey];
        for(let skillDivStyleKey in this.content.style){
          skillContDiv.style[skillDivStyleKey] = this.content.style[skillDivStyleKey];
        }
        for(let skillImgStyleKey in this.content.icon.style){
          skillImg.style[skillImgStyleKey] = this.content.icon.style[skillImgStyleKey];
        }
        for(let skillTitleStyleKey in this.content.title.style){
          skillHeading.style[skillTitleStyleKey] = this.content.title.style[skillTitleStyleKey];
        }
      }
    }
  },
  portfolio: {
    id: 'port',
    style: {
      minHeight: '1300px',
      background: '#ffdd99'
    },
    title: {
        text: 'OUR PORTFOLIO',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #e5c37f',
        width: '50px',
      }
    },
    paragraph: {
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
      style: {
        color: '#3d3d3d',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '700px',
        paddingTop: '10px',
        paddingBottom: '50px',
        margin: 'auto'
      }
    },
    buttons: {
      text: {
        button1: 'ALL',
        button2: 'WEB',
        button3: 'APPS',
        button4: 'ICONS'
      },
      style: {
        width: '80px',
        height: '40px',
        background: '#d1b84b',
        borderRadius: '5px',
        marginRight: '5px',
        marginLeft: '5px',
        border: '1px solid #d1b84b',
        display: 'inline-block',
        margin: '0 5px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '400',
        marginBottom: '50px'
      }
    },
    content: {
      icon: {
        img: {
          port1: 'img/port1.png',
          port2: 'img/port2.png',
          port3: 'img/port3.png',
          port4: 'img/port4.png',
        },
        style: {
          display: 'block',
          margin: 'auto',
          width: '500px',
          height: '300px'
        }
      },
      title: {
        text: {
          port1: 'ISOMETRIC PERSPECTIVE MOCK-UP',
          port2: 'TIME ZONE APP UI',
          port3: 'VIRO MEDIA PLAYERS UI',
          port4: 'BLOG / MAGAZINE FLAT UI KIT',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#3d3d3d',
          paddingBottom: '50px'
        }
      },
      style: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 5px',
        width: '600px'
      }
    },
    button: {
      text: 'LOAD MORE PROJECTS',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        background: '#21b27b',
        width: '300px',
        height: '80px',
        textAligh: 'center',
        borderRadius: '5px',
        border: '1px solid #21b27b',
        borderBottom: '3px solid #1f8961',
        display: 'block',
        margin: 'auto',
      }
    },
    innerDiv: function() {
      mainDiv.style.textAlign = 'center';
      titleHrSub(jsweb.portfolio);
      for(let buttons in this.buttons.text){
        var portButtons = document.createElement('button');
        mainDiv.appendChild(portButtons);
        portButtons.innerHTML += this.buttons.text[buttons];
        for(let buttonsStylesKey in this.buttons.style){
          portButtons.style[buttonsStylesKey] = this.buttons.style[buttonsStylesKey];
        }
      }

      var portContentDiv = document.createElement('div');
      mainDiv.appendChild(portContentDiv);
      portContentDiv.style.textAlign = 'center';
      var portContDiv;
      for(let portDivKey in this.content.icon.img){
        let portImg = document.createElement('img');
        let portHeading = document.createElement('p');
        portContDiv = document.createElement('div');
        portContentDiv.appendChild(portContDiv);
        portContDiv.appendChild(portImg);
        portContDiv.appendChild(portHeading);
        portImg.src += this.content.icon.img[portDivKey];
        portHeading.innerHTML += this.content.title.text[portDivKey];
        for(let portDivStyleKey in this.content.style){
          portContDiv.style[portDivStyleKey] = this.content.style[portDivStyleKey];
        }
        for(let portImgStyleKey in this.content.icon.style){
          portImg.style[portImgStyleKey] = this.content.icon.style[portImgStyleKey];
        }
        for(let portTitleStyleKey in this.content.title.style){
          portHeading.style[portTitleStyleKey] = this.content.title.style[portTitleStyleKey];
        }
      }
      bigButton(jsweb.portfolio);
    }
  },
  feedback: {
    id: 'feed',
    style: {
      minHeight: '700px',
      background: '#d74680'
    },
    title: {
        text: 'WHAT PEOPLE SAY ABOUT US',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #b93c6e',
        width: '50px',
      }
    },
    paragraph: {
      text: 'Our clients love us!',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '700px',
        paddingTop: '10px',
        paddingBottom: '50px',
        margin: 'auto'
      }
    },
    content: {
      icon: {
        img: {
          prof1: 'img/profile.png',
          prof2: 'img/profile.png',
          prof3: 'img/profile.png',
          prof4: 'img/profile.png',
        },
        style: {
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          textAlign: 'left',
          float: 'left',
          marginTop: '20px',
          marginBottom: '50px',
          marginRight: '30px'
        }
      },
      quote: {
        text: {
          prof1: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
          prof2: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
          prof3: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
          prof4: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#fff',
          textAlign: 'left',
          paddingRight: '90px'
        }
      },
      name: {
        text: {
          prof1: 'CHANEL IMAN',
          prof2: 'ADRIANA LIMA',
          prof3: 'ANEE HATHAWAY',
          prof4: 'EMMA STONE',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '26px',
          fontWeight: '500',
          color: '#fff',
          textAlign: 'left'
        }
      },
      work: {
        text: {
          prof1: 'CEO of Pinterest',
          prof2: 'Founder of Instagram',
          prof3: 'Lead Designer at Behance',
          prof4: 'Co-Founder of Shazam',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          color: '#ffe793',
          textAlign: 'left',
          marginTop: '-25px',
          marginBottom: '30px'
        }
      },
      style: {
        fontFamily: 'Roboto',
        display: 'inline-block',
        margin: '0 5px',
        width: '600px',
        paddingRight: '50px',
        paddingLeft: '50px',
      }
    },
    innerDiv: function() {
      mainDiv.style.textAlign = 'center';
      titleHrSub(jsweb.feedback);
      var feedContentDiv = document.createElement('div');
      mainDiv.appendChild(feedContentDiv);
      feedContentDiv.style.textAlign = 'center';
      var feedContDiv;
      for(let feedDivKey in this.content.icon.img){
        let feedImg = document.createElement('img');
        let feedQuote = document.createElement('p');
        let feedName = document.createElement('h3');
        let feedWork = document.createElement('p');
        feedContDiv = document.createElement('div');

        feedContentDiv.appendChild(feedContDiv);
        feedContDiv.appendChild(feedImg);
        feedContDiv.appendChild(feedQuote);
        feedContDiv.appendChild(feedName);
        feedContDiv.appendChild(feedWork);

        feedImg.src += this.content.icon.img[feedDivKey];
        feedQuote.innerHTML += this.content.quote.text[feedDivKey];
        feedName.innerHTML += this.content.name.text[feedDivKey];
        feedWork.innerHTML += this.content.work.text[feedDivKey];

        for(let feedDivStyleKey in this.content.style){
          feedContDiv.style[feedDivStyleKey] = this.content.style[feedDivStyleKey];
        }
        for(let feedImgStyleKey in this.content.icon.style){
          feedImg.style[feedImgStyleKey] = this.content.icon.style[feedImgStyleKey];
        }
        for(let feedTitleStyleKey in this.content.quote.style){
          feedQuote.style[feedTitleStyleKey] = this.content.quote.style[feedTitleStyleKey];
        }
        for(let feedNameStyleKey in this.content.name.style){
          feedName.style[feedNameStyleKey] = this.content.name.style[feedNameStyleKey];
        }
        for(let feedWorkStyleKey in this.content.work.style){
          feedWork.style[feedWorkStyleKey] = this.content.work.style[feedWorkStyleKey];
        }
      }
    }
  },
  contact: {
    id: 'cont',
    style: {
      minHeight: '800px',
      background: '#3c5499',
      textAlign: 'center'
    },
    title: {
        text: 'GET IN TOUCH',
      style: {
        textAlign: 'center',
        letterSpacing: '3px',
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '45px',
        paddingTop: '80px',
        paddingBottom: '0px'
      },
      hrStyle: {
        border: '2px solid #273a71',
        width: '50px',
      }
    },
    paragraph: {
      text: '1600 Pensylvannia Ave. NW, Washington, DC 20500, United States of America Tel: (202)-456 1111',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        width: '900px',
        paddingTop: '10px',
        paddingBottom: '50px',
        margin: 'auto'
      }
    },
    content: {
      input: {
        text: {
          input1: 'Your Name *',
          input2: 'Your Email *',
        },
        style: {
          width: '450px',
          height: '50px',
          border: 'none',
          margin: '10px 10px 50px 10px',
          borderRadius: '5px',
          fontSize: '18px',
          background: '#2e1a84'
        }
      },
      textarea: {
        text: {
          textarea1: 'Your Message *',
        },
        style: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          width: '920px',
          height: '200px',
          border: 'none',
          borderRadius: '5px',
          background: '#2e1a84'
        }
      },
      style: {
        fontFamily: 'Roboto',
        display: 'inline-block',
        margin: '0 5px',
        width: '600px',
        paddingRight: '50px',
        paddingLeft: '50px',
        textAlign: 'center'
      }
    },
    button: {
      text: 'SEND MESSAGE',
      style: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        background: '#3f92ff',
        width: '300px',
        height: '80px',
        textAligh: 'center',
        borderRadius: '5px',
        border: '1px solid #21b27b',
        borderBottom: '3px solid #3c6fb2',
        display: 'block',
        margin: 'auto',
        marginTop: '50px'
      }
    },
    innerDiv: function() {
      titleHrSub(jsweb.contact)
      var contContentDiv = document.createElement('div');
      mainDiv.appendChild(contContentDiv);
      for (let contactKey in this.content.input.text) {
        var contInput = document.createElement('input');
        contContentDiv.appendChild(contInput);
        contInput.placeholder += this.content.input.text[contactKey];
        for (let contactStyle in this.content.input.style){
          contInput.style[contactStyle] += this.content.input.style[contactStyle];
        }
      }
      var contactContentDiv = document.createElement('div');
      mainDiv.appendChild(contactContentDiv);
      var contTextarea = document.createElement('textarea');
      contactContentDiv.appendChild(contTextarea);
      contTextarea.placeholder += this.content.textarea.text.textarea1;
      for (let contactStyle in this.content.textarea.style){
        contTextarea.style[contactStyle] += this.content.textarea.style[contactStyle];
      }
      bigButton(jsweb.contact);
    }
  },
  links: {
    id: 'link',
    style: {
      background: '#344b8e',
      minHeight: '100px',
      textAlign: 'center'
    },
    content: {
      text: {
        fb: 'Facebook',
        tw: 'Twitter',
        goo: 'Google+',
        lnkd: 'LinkedIn',
        be: 'Behance',
        db: 'Dribble',
        git: 'GitHub'
      },
      style: {
        textAlign: 'center',
        color: '#fff',
        display: 'inline-block',
        margin: '0 5px',
        lineHeight: '100px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '24px',
        padding: '0px 30px 0px 30px',
        lineSpacing: '2px'
      }
    },
    iconUp: {
      icon: 'img/up.png',
      style: {
        width: '50px',
        height: '50px',
        position: 'relative',
        top: '20px',
        left: '200px'
      }
    },
    innerDiv: function() {
      for(let linkKey in this.content.text) {
        let linkTextDiv = document.createElement('div');
        mainDiv.appendChild(linkTextDiv);
        linkTextDiv.innerHTML += this.content.text[linkKey];
        for(let linkStyleKey in this.content.style) {
          linkTextDiv.style[linkStyleKey] = this.content.style[linkStyleKey];
        }
      }
      let scrollUp = document.createElement('a');
      let scrollIcon = document.createElement('img');
      mainDiv.appendChild(scrollUp);
      scrollUp.appendChild(scrollIcon);
      scrollIcon.src = this.iconUp.icon;
      for(let key in this.iconUp.style) {
        scrollIcon.style[key] = this.iconUp.style[key];
      }
      scrollUp.addEventListener('click', function(){
        let toNav = document.getElementById(jsweb.navbar.id);
        toNav.scrollIntoView({ behavior: 'smooth' });
      })
    }
  },
}

let mainDiv;
for(let mainKey in jsweb) {
  mainDiv = document.createElement('div');
  bodyDiv.appendChild(mainDiv);
  mainDiv.id = jsweb[mainKey].id;
  jsweb[mainKey].innerDiv();
  for(let styleKey in jsweb[mainKey].style){
    mainDiv.style[styleKey] = jsweb[mainKey].style[styleKey];
  }
}

function bigButton(myObj){
    var mainButton = document.createElement('button');
    var textButton = document.createTextNode(myObj.button.text);
    mainDiv.appendChild(mainButton);
    mainButton.appendChild(textButton);
    for(let mainButtonKey in myObj.button.style) {
      mainButton.style[mainButtonKey] = myObj.button.style[mainButtonKey];
    }
}

function titleHrSub(myObj) {
  var mainTitle = document.createElement('div');
  var mainHr = document.createElement('hr');
  mainDiv.appendChild(mainTitle);
  mainTitle.innerHTML = myObj.title.text;
  for(let Key in myObj.title.style){
    mainTitle.style[Key] = myObj.title.style[Key];
  }
  mainDiv.appendChild(mainHr);
  for(let hrKey in myObj.title.hrStyle){
    mainHr.style[hrKey] = myObj.title.hrStyle[hrKey];
  }
  var mainParagraph = document.createElement('div');
  mainDiv.appendChild(mainParagraph);
  mainParagraph.innerHTML = myObj.paragraph.text;
  for(let contParaKey in myObj.paragraph.style){
    mainParagraph.style[contParaKey] = myObj.paragraph.style[contParaKey];
  }
}
