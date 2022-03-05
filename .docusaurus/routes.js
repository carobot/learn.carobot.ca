
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','919'),
    routes: [
      {
        path: '/intro',
        component: ComponentCreator('/intro','283'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/kicad/kicad-basic',
        component: ComponentCreator('/kicad/kicad-basic','f53'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/glowing-heart',
        component: ComponentCreator('/product_guide/glowing-heart','b2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/infrared-sensor-module',
        component: ComponentCreator('/product_guide/infrared-sensor-module','b03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/motor-shield-v3',
        component: ComponentCreator('/product_guide/motor-shield-v3','43e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/tip-cleaning-paste',
        component: ComponentCreator('/product_guide/tip-cleaning-paste','d8e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/ultrasonic-ranging-sensor',
        component: ComponentCreator('/product_guide/ultrasonic-ranging-sensor','477'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide','2d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd','e3a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial','fe9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino','bc1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires','498'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires','9c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorials',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorials','398'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
