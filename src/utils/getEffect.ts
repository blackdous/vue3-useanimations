import type { AnimationKey, AnimationEffect } from '.';

type Animations = {
  [Key in AnimationKey]: AnimationEffect;
};

const animations: Animations = {
  activity: 'LOOP_PLAY',
  airplay: 'LOOP_PLAY',
  alertCircle: 'LOOP_PLAY',
  alertOctagon: 'LOOP_PLAY',
  alertTriangle: 'LOOP_PLAY',
  archive: 'HOVER_PLAY_AND_BACKWARDS',
  arrowDown: 'LOOP_PLAY',
  arrowDownCircle: 'CLICK_PLAY_AND_BACKWARDS',
  arrowLeftCircle: 'CLICK_PLAY_AND_BACKWARDS',
  arrowRightCircle: 'CLICK_PLAY_AND_BACKWARDS',
  arrowUp: 'LOOP_PLAY',
  arrowUpCircle: 'CLICK_PLAY_AND_BACKWARDS',
  bookmark: 'CLICK_PLAY_AND_BACKWARDS',
  behance: 'HOVER_PLAY_AND_STOP',
  calendar: 'HOVER_PLAY_AND_STOP',
  checkBox: 'CLICK_PLAY_AND_BACKWARDS',
  checkmark: 'LOOP_PLAY',
  codepen: 'HOVER_PLAY_AND_STOP',
  copy: 'HOVER_PLAY_AND_BACKWARDS',
  download: 'CLICK_PLAY',
  dribbble: 'HOVER_PLAY_AND_BACKWARDS',
  edit: 'CLICK_PLAY',
  error: 'LOOP_PLAY',
  explore: 'HOVER_PLAY_AND_BACKWARDS',
  facebook: 'HOVER_PLAY_AND_STOP',
  folder: 'HOVER_PLAY_AND_STOP',
  github: 'HOVER_PLAY_AND_STOP',
  help: 'LOOP_PLAY',
  heart: 'CLICK_PLAY_AND_BACKWARDS',
  home: 'HOVER_PLAY_AND_STOP',
  infinity: 'LOOP_PLAY',
  info: 'HOVER_PLAY_AND_BACKWARDS',
  instagram: 'HOVER_PLAY_AND_STOP',
  linkedin: 'HOVER_PLAY_AND_STOP',
  loading: 'LOOP_PLAY',
  loading2: 'LOOP_PLAY',
  loading3: 'LOOP_PLAY',
  loading4: 'LOOP_PLAY',
  lock: 'CLICK_PLAY_AND_BACKWARDS',
  mail: 'CLICK_PLAY',
  maximizeMinimize: 'CLICK_PLAY_AND_BACKWARDS',
  maximizeMinimize2: 'CLICK_PLAY_AND_BACKWARDS',
  menu: 'CLICK_PLAY_AND_BACKWARDS',
  menu2: 'CLICK_PLAY_AND_BACKWARDS',
  menu3: 'CLICK_PLAY_AND_BACKWARDS',
  menu4: 'CLICK_PLAY_AND_BACKWARDS',
  microphone: 'CLICK_PLAY_AND_BACKWARDS',
  microphone2: 'CLICK_PLAY_AND_BACKWARDS',
  notification: 'CLICK_PLAY_AND_BACKWARDS',
  notification2: 'CLICK_PLAY_AND_BACKWARDS',
  notification3: 'LOOP_PLAY',
  notification4: 'LOOP_PLAY',
  playPause: 'CLICK_PLAY_AND_BACKWARDS',
  playPauseCircle: 'CLICK_PLAY_AND_BACKWARDS',
  plusToX: 'CLICK_PLAY_AND_BACKWARDS',
  pocket: 'HOVER_PLAY_AND_STOP',
  radioButton: 'CLICK_PLAY_AND_BACKWARDS',
  scrollDown: 'LOOP_PLAY',
  searchToX: 'CLICK_PLAY_AND_BACKWARDS',
  settings: 'HOVER_PLAY_AND_BACKWARDS',
  settings2: 'CLICK_PLAY_AND_BACKWARDS',
  skipForward: 'CLICK_PLAY_AND_SEGMENTS',
  skipBack: 'CLICK_PLAY_AND_SEGMENTS',
  share: 'HOVER_PLAY_AND_BACKWARDS',
  star: 'CLICK_PLAY_AND_BACKWARDS',
  toggle: 'CLICK_PLAY_AND_BACKWARDS',
  visibility3: 'CLICK_PLAY_AND_BACKWARDS',
  filter: 'CLICK_PLAY_AND_BACKWARDS',
  refresh: 'CLICK_PLAY_AND_BACKWARDS',
  chevronLeft: 'CLICK_PLAY_AND_BACKWARDS',
  chevronRight: 'CLICK_PLAY_AND_BACKWARDS',
  trash: 'HOVER_PLAY_AND_BACKWARDS',
  trash2: 'HOVER_PLAY_AND_BACKWARDS',
  thumbUp: 'CLICK_PLAY_AND_BACKWARDS',
  twitter: 'HOVER_PLAY_AND_STOP',
  userMinus: 'HOVER_PLAY_AND_STOP',
  userPlus: 'HOVER_PLAY_AND_STOP',
  userX: 'HOVER_PLAY_AND_STOP',
  video: 'CLICK_PLAY_AND_BACKWARDS',
  video2: 'CLICK_PLAY_AND_BACKWARDS',
  visibility: 'CLICK_PLAY_AND_BACKWARDS',
  visibility2: 'CLICK_PLAY_AND_BACKWARDS',
  volume: 'CLICK_PLAY_AND_BACKWARDS',
  youtube: 'HOVER_PLAY_AND_STOP',
  youtube2: 'HOVER_PLAY_AND_STOP',
  zoomIn: 'HOVER_PLAY_AND_BACKWARDS',
  zoomOut: 'HOVER_PLAY_AND_BACKWARDS',
};

const getEffect = (animationKey: AnimationKey) => animations[animationKey] || '';

export default getEffect;
