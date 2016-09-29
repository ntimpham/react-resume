import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'University of Waterloo',
      duration: 'September 2013 \u2014 Present',
      degree: 'Bachelor of Computer Science'
    },
    languages: [{
      name: 'JavaScript'
    },  {
      name: 'Java'
    }, {
      name: 'Scala'
    },{
      name: 'C++'
    }, {
      name: 'C'
    }, {
      name: 'HTML/CSS'
    }, {
      name: 'BASH'
    }],
    databases: [
      'MongoDB',
      'PostgreSQL',
      'Oracle',
      'DB2'
    ],
    libraries: [
      'Node.js',
      'React',
      'React Native',
      'Redux',
      'Angular',
      'Play',
      'jQuery',
      'Grails',
      'Spring MVC',
      'Protractor',
      'Jasmine',
      'ScalaTest',
      'Hibernate',
      'JavaScriptMVC',
      'Sass',
    ],
    tools: [
      'Unix',
      'Git',
      'Webpack',
      'Gulp',
      'Grunt',
      'SonarQube',
    ],
    interests: [
      'I <b>live</b> to create, collaborate, and innovate.',
      'I <b>explore</b> the beauty of architectures, designs, and business models.',
      'I <b>synergize</b> with others in order to bring out the best in everyone.',
      'I <b>strive</b> to learn and grow from failure and success.'
    ],
    links: [{
      name: 'Phone',
      faClass: 'fa fa-phone',
      display: '613 808 7667',
      link: 'tel:+16138087667',
    }, {
      name: 'Email',
      faClass: 'fa fa-envelope',
      display: 'tim.pham@uwaterloo.ca',
      link: 'mailto:tim.pham@uwaterloo.ca',
    }, {
      name: 'GitHub',
      faClass: 'fa fa-github',
      display: 'github.com/ntimpham',
      link: 'https://github.com/ntimpham',
    }, {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/ntimpham',
      link: 'https://www.linkedin.com/in/ntimpham',
    }],
  },
  main: {
    firstName: 'Tim',
    lastName: 'Pham',
    program: {
      term: '3B',
      nickname: 'Computer Science',
      name: 'Computer Science',
    },
    companies: [{
      name: 'Radialpoint by AppDirect',
      title: 'Web Application Developer',
      color: 'rgb(32, 66, 135)',
      date: 'Spring 2016',
      location: 'Montreal',
      achievements: [
        'Developed Angular pages and widgets for customers of large ISP companies',
        'Owned and supported legacy JavaScript and JavaScriptMVC applications',
        'Designed and implemented end-to-end testing with Jasmine and Protractor'
      ],
    }, {
      name: 'Mitel Networks',
      color: 'rgb(32, 66, 135)',
      title: 'R&D Software Feature Developer',
      date: 'Fall 2015',
      location: 'Ottawa',
      achievements: [
        'Delivered features and fixes for Java-based enterprise software',
        'Independently researched and documented information for business decisions',
        'Coordinated with multiple groups worldwide to produce excellent code/products'
      ],
    }, {
      name: 'Canadian Blood Services',
      title: 'Enterprise Software Developer',
      color: 'rgb(32, 66, 135)',
      date: 'Winter 2015',
      location: 'Ottawa',
      achievements: [
        'Developed Grails and Spring MVC web applications for business systems',
        'Optimized data querying to reduce web page load times from minutes to seconds',
        'Prepared and executed DB2-Oracle database migrations for major applications'
      ]
    }, {
      name: 'Agriculture and Agri-Food Canada',
      title: 'Verification Specialist',
      color: 'rgb(32, 66, 135)',
      date: 'Spring 2014',
      location: 'Ottawa',
      achievements: [
        'Knowledgeable of several recognized web standards such as WCAG 2.0',
        'Devised and performed thorough application assessments for quality assurance',
        'Designed load tests in JMeter to analyze network stability and performance'
      ]
    }, {
      name: 'CIRA.ca',
      title: 'Software Developer',
      color: 'rgb(32, 66, 135)',
      date: 'Summer 2013',
      location: 'Ottawa',
      achievements: [
        'Efficiently applied popular technologies to produce robust web applications',
        'Collaborated with team to plan, execute, and review customer\'s specifications',
        'Organized development environments for version control and peer evaluation'
      ]
    }],
    projects: [{
      name: 'Zoo House \u2014 Co-Founder',
      tools: [''],
      link: 'http://www.ZooHouse.io/',
      achievements: [
        'Help others build websites, mobile apps, and everything in between.',
        'Grow novel ideas into tangible, functional realities.'
      ]
    },
    {
      name: 'Squad',
      tools: ['React Native', 'Redux', 'Immutable'],
      link: '',
      achievements: [
        'Android and iOS app built with React Native',
        'Allows close friends and roommates to stay connected',
        'Enables group activities by simplifying scheduling, polling, and event planning'
      ]
    }, {
      name: 'Hatch',
      tools: ['Express', 'Jade', 'MongoDB', 'Node.js', 'GoJS'],
      link: 'https://github.com/ntimpham/rp-agent-learning',
      achievements: [
        'Agent training web tool developed at Radialpoint Hackathon',
        'Drag-and-drop interface to create learning modules for agents',
        'Agent performance tracking and statistics for trainers'
      ]
    }],
  },
  footerLinks: []
};

export default Resume;
