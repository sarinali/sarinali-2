import PageIntro from "../components/PageIntro";
import Firebase from '../assets/projects_assets/technologies/firebase.png'
import Flutter from '../assets/projects_assets/technologies/flutter.png';
import GMap from '../assets/projects_assets/technologies/gmap.png';
import Java from '../assets/projects_assets/technologies/java.png';
import ReactJS from '../assets/projects_assets/technologies/reactjs.png';
import Unity from '../assets/projects_assets/technologies/unity.png';
import Trails from '../assets/projects_assets/trails.png'
import UFound from '../assets/projects_assets/ufound.png'
import KiwiiMenu from '../assets/projects_assets/kiwiimenu.png'
import WolfPackApp from '../assets/projects_assets/wolfpackapp.png'
import Boink from '../assets/projects_assets/boink.png'
import BattleShip from '../assets/projects_assets/battleship.png'
import ProjectContainerDesktop from "../components/ProjectContainerDesktop";
import ProjectBundle from '../components/ProjectBundle'
import ProjectButton from "../components/ProjectButton";
import TechBundle from '../components/TechBundle'
import React from 'react'

import ProjectContainerMobile from '../components/ProjectContainerMobile'


function Projects() {
    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 760;
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", window.handleWindowResize);
  }, []);
//   width > breakpoint ? console.log('greater than 760') : console.log('less than 760')
    const projects = [
        new ProjectBundle(
            Trails, 
            'Markham Trails', 
            '2022-2023', 
            '0',
            [new ProjectButton(
                'https://play.google.com/store/apps/details?id=com.doriansarina.markhamtrails', 
                'Android'),
            new ProjectButton(
                'https://apps.apple.com/ca/app/markham-trails/id1640993603',
                'iOS'),
            ],
            [
            new TechBundle(
                Flutter,
                'Flutter in Dart'
            ),
            new TechBundle(
                GMap,
                'Google Maps API'
            )
            ],
            'Markham Trails is a Flutter application developed for informational and entertaining hiking trails in Markham. Equipped with Google Maps API and location tracking, the user can enjoy audio recordings and interesting facts about different landmarks they are close to. This is a project in direct collaboration with the City of Markham and Markham Public Library.',
            false,
            'linear-gradient(354deg, #DAEDF0 10.68%, #EFEECF 96.49%);',
            350
        ),
        new ProjectBundle(
            UFound, 
            'UFound', 
            '2022', 
            '1',
            [new ProjectButton(
                'https://github.com/sarinali/uoft-lost-and-found', 
                'GitHub'),
            new ProjectButton(
                'https://devpost.com/software/ufound',
                'Devpost'),
            ],
            [
            new TechBundle(
                ReactJS,
            'ReactJS in JavaScript'
            ),
            new TechBundle(
                Firebase,
                'Firebase'
            )
            ],
            "Ever notice Robarts commons filled with lost goods left neglected? Ever leave your items somewhere on campus and can't seem to find a central place to look for where they might have been left by others? With the busy lives of students around campus, we made a web app for the students of UofT to post listings of found lost goods. Students can securely log in using their UTORID and interact with listings to claim their lost goods.",
            true,
            'linear-gradient(354deg, #383B4C 10.68%, #26335C 96.49%);',
            350
        ),
        new ProjectBundle(
            KiwiiMenu, 
            'Kiwii Menu', 
            '2022', 
            '2',
            [new ProjectButton(
                'https://daonsushi.ca/#/', 
                'Web'),
            ],
            [
            new TechBundle(
                ReactJS,
            'ReactJS in JavaScript'
            ),
            new TechBundle(
                Flutter,
                'Flutter in Dart'
            ),
            new TechBundle(
                Firebase,
                'Firebase Hosting'
            )
            ],
            "Kiwii Menu is a small startup aiming to create virtual menus for restuarants in Markham.",
            false,
            'linear-gradient(354deg, #EEDFC4 10.68%, #F2C09F 96.49%);',
            200
        ),
        new ProjectBundle(
            WolfPackApp, 
            'wolfpackapp', 
            '2021', 
            '3',
            [new ProjectButton(
                'https://apps.apple.com/ca/app/wolfpackapp/id1602012389', 
                'iOS'),
            new ProjectButton(
                'https://play.google.com/store/apps/details?id=com.doriansarina.wolfpackapp',
                'Android'
            )
            ],
            [
            new TechBundle(
                Flutter,
                'Flutter in Dart'
            ),
            new TechBundle(
                Firebase,
                'Firebase'
            )
            ],
            "wolfpackapp is designed to be a one-stop-shop for all student to get their daily info at a glance. With quick access to links, built in calendars, and live announcements, wolfpackapp will help students stay up to date on all important info. wolfpackapp was YRDSB approved and made the official mobile app of Unionville High School.",
            false,
            '#FAF7EB'
        ),
        new ProjectBundle(
            Boink, 
            'Bo!nk', 
            '2021', 
            '4',
            [new ProjectButton(
                'https://apps.apple.com/gb/app/bo-nk/id1570376501', 
                'iOS'),
            new ProjectButton(
                'https://markville.dev/boinksite/index.html',
                'Web'
            )
            ],
            [
            new TechBundle(
                Unity,
                'Unity in C#'
            ),
            ],
            "Bo!nk, is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics. It was made in Unity and released on App Store for download.            ",
            false,
            'linear-gradient(354deg, #E9F2F4 10.68%, #BCC8DF 96.49%);'
        ),
        new ProjectBundle(
            BattleShip, 
            'Battleship', 
            '2021', 
            '5',
            [new ProjectButton(
                'https://github.com/Jiaan124/Battleship', 
                'GitHub'),
            ],
            [
            new TechBundle(
                Java,
                'Native Java'
            ),
            ],
            "Coded using native Java, it includes fully functional Ai opponent, player vs Ai Mode (Hard and Easy!), graphical user interface, terminal based game, music and SFX and file saving, reload past saved games. Made for my ICS4U class, I created it with my partners, Vivien Cai and Jiaan Li.",
            false,
            'linear-gradient(89.63deg, #B484A6 9.72%, #FDF7D8 79.88%);'
        ),
    ]


    return (
        <div className="project-body">
            <PageIntro
                    pageName={'Projects'}
                    displayIndex={'| 02'}
                    displayText={['Past or ongoing programming related projects. ', 'Lots to come!']}
                ></PageIntro>
            <div className="projects">
                {projects.map((project) => {
                        return <ProjectContainerDesktop 
                        sourceImage={project.image} 
                        projectName={project.title} 
                        projectIndex={project.index} 
                        projectDate={project.date} 
                        buttonList={project.buttonList} 
                        techList={project.techList} 
                        background={project.background}
                        description={project.description}
                        isDark = {project.dark}
                        textWidth = {project.textWidth}
                        ></ProjectContainerDesktop>
                    
                })}
            </div>
        </div>
    )
}

export default Projects;