/*
AUTOGENERATED - DON'T EDIT
Your edits in this file will be overwritten in the next build!
Modify the docusaurus.config.js file at your site's root instead.
*/
export default {
  "title": "Learn at CAROBOT",
  "tagline": "Learning robotics is cool! We love robotics!",
  "url": "https://learn.carobot.ca/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/canada-robotix-robot.ico",
  "organizationName": "carobot",
  "projectName": "carobot.github.io",
  "deploymentBranch": "gh-pages",
  "trailingSlash": false,
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "docs",
          "path": "docs",
          "sidebarPath": "/home/jacky/projects/carobot.github.io/sidebars.js",
          "lastVersion": "current",
          "onlyIncludeVersions": [
            "current"
          ],
          "editUrl": "https://github.com/carobot/carobot.github.io/tree/main/"
        },
        "theme": {
          "customCss": "/home/jacky/projects/carobot.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "guide",
        "path": "guide",
        "routeBasePath": "guide",
        "sidebarPath": "/home/jacky/projects/carobot.github.io/sidebars.js",
        "editUrl": "https://github.com/carobot/carobot.github.io/tree/main/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "resources",
        "path": "resources",
        "routeBasePath": "resources",
        "sidebarPath": "/home/jacky/projects/carobot.github.io/sidebars.js",
        "editUrl": "https://github.com/carobot/carobot.github.io/tree/main/"
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Learn at CAROBOT",
      "logo": {
        "alt": "Learn at CAROBOT",
        "src": "img/Canada-Robotix-Robot-PNG.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/guide/guide",
          "label": "Guide",
          "position": "left",
          "activeBaseRegex": "/guide/"
        },
        {
          "href": "https://www.canadarobotix.com",
          "label": "Canada Robotix",
          "position": "right"
        },
        {
          "href": "https://github.com/carobot/",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "docs/intro"
            },
            {
              "label": "Guide",
              "to": "guide/guide"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 CAROBOTIX INC. In collaboration with CAROBOT Learning and Research Organization. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};