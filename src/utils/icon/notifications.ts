import notification from 'vue3-useanimations/dist/lib/notification'
import notification2 from 'vue3-useanimations/dist/lib/notification2'
import notification3 from 'vue3-useanimations/dist/lib/notification3'
import notification4 from 'vue3-useanimations/dist/lib/notification4'


export const notifications = [
  {
    name: 'Notification',
    effectType: 'CLICK ME',
    animation: notification,
    link: 'https://www.dropbox.com/sh/epi2bu4qzpvlwea/AAB4pWQBNAtlIF7KaYLZfCaAa?dl=1',
    size: 42
  },
  {
    name: 'Notification2',
    effectType: 'CLICK ME',
    animation: notification2,
    link: 'https://www.dropbox.com/sh/3gpi6z36s5vb7i7/AADBj98AbDQG4JXmyX7Uz7nYa?dl=1',
    size: 42
  },
  {
    name: 'Notification3',
    effectType: 'loop',
    animation: notification3,
    link: 'https://www.dropbox.com/sh/9hrzqnlu3cjrvvh/AACDvSZ9FiOiSpIhdZ-sIwlOa?dl=1',
    size: 42
  },
  {
    name: 'Notification4',
    effectType: 'loop',
    animation: notification4,
    link: 'https://www.dropbox.com/sh/e5wgh5sfhi47y5f/AADmsmGPPG_5ueK7obmkrxSza?dl=1',
    size: 42
  }
]