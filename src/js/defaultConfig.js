import { configMigrations } from './migrations';

export default {
  settings: {
    style: 'dark',
    styleSheet: '',
    colorAdjustment: 'hsl',
    monoColor: 'rgb(245,245,245)',
    modButtons: [
      {
        action: {
          type: 'command',
          command: '/timeout {{user.name}} 1'
        },
        tooltip: 'Purge',
        icon: {
          type: 'icon',
          code: 'remove_circle_outline'
        },
        hotkey: ''
      },
      {
        action: {
          type: 'command',
          command: '/timeout {{user.name}} 600'
        },
        tooltip: 'Timeout',
        icon: {
          type: 'icon',
          code: 'hourglass_empty'
        },
        hotkey: ''
      },
      {
        action: {
          type: 'command',
          command: '/ban {{user.name}}'
        },
        tooltip: 'Ban',
        icon: {
          type: 'icon',
          code: 'block'
        },
        hotkey: ''
      }
    ],
    modCardButtons: [
      {
        action: {
          type: 'whisper'
        },
        tooltip: 'Whisper',
        icon: {
          type: 'text',
          text: 'Whisper'
        },
        hotkey: 'KeyW'
      },
      {
        action: {
          type: 'command',
          command: '/timeout {{user.name}} 1'
        },
        tooltip: 'Purge',
        icon: {
          type: 'icon',
          code: 'remove_circle_outline'
        },
        hotkey: 'KeyP'
      },
      {
        action: {
          type: 'command',
          command: '/timeout {{user.name}} 600'
        },
        tooltip: 'Timeout',
        icon: {
          type: 'icon',
          code: 'hourglass_empty'
        },
        hotkey: 'KeyT'
      },
      {
        action: {
          type: 'command',
          command: '/ban {{user.name}}'
        },
        tooltip: 'Ban',
        icon: {
          type: 'icon',
          code: 'block'
        },
        hotkey: 'KeyB'
      },
      {
        action: {
          type: 'url',
          url: 'https://cbenni.com/{{channel.name}}/?user={{user.name}}'
        },
        tooltip: 'Logviewer',
        icon: {
          type: 'image',
          image: 'https://cbenni.com/html/img/favicon-32x32.png'
        },
        hotkey: ''
      }
    ],
    chatHeaderButtons: [
      {
        action: {
          type: 'url',
          url: 'https://cbenni.com/{{channel.name}}/'
        },
        tooltip: 'Logviewer',
        icon: {
          type: 'image',
          image: 'https://cbenni.com/html/img/favicon-32x32.png'
        },
        hotkey: ''
      },
      {
        action: {
          type: 'url',
          url: 'https://twitch.moobot.tv/{{channel.name}}'
        },
        tooltip: 'Moobot',
        icon: {
          type: 'image',
          image: 'https://cbenni.com/static/moobot.png'
        },
        hotkey: ''
      }
    ],
    chatSettings: {
      extraMentions: [],
      knownBots: [
        'drangrybot',
        'gather_bot',
        'hnlbot',
        'mikuia',
        'monstercat',
        'moobot',
        'nightbot',
        'ohbot',
        'poketrivia',
        'snusbot',
        'streamelements',
        'vivbot',
        'wizebot',
        'xanbot'
      ],
      pauseOn: [
        'hover',
        'hotkey'
      ]
    },
    chatPresets: [
      {
        id: 'default-chat',
        name: 'Chat',
        icon: {
          type: 'icon',
          code: 'chat'
        },
        settings: {
          incognito: false,
          hideChatInput: false,
          messageFilters: [
            'modlogs',
            'subs',
            'chat',
            'bots',
            'mentions',
            'bits',
            'automod'
          ]
        }
      },
      {
        id: 'default-modlogs',
        name: 'Modlogs',
        icon: {
          type: 'icon',
          code: 'gavel'
        },
        settings: {
          incognito: false,
          hideChatInput: true,
          messageFilters: [
            'modlogs',
            'automod'
          ]
        }
      }
    ],
    timeFormat: 'HH:mm',
    scrollbackLength: 5000
  },
  version: configMigrations.length
};
