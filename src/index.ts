import * as Tone from 'Tone';

document.addEventListener('keydown', (e) => {
  const element: Element = document.querySelector(`[data-key='${e.which}']`);

  if (element) {
    play(element);
  }
});

document.querySelectorAll('[data-key]').forEach((element: Element) => {
  if (element) {
    element.addEventListener('mousedown', () => { play(element); });
    element.addEventListener('touchstart', () => { play(element); });
  }
});

const synth = new Tone.Synth({
  "oscillator" : {
    "type" : "amtriangle",
    "harmonicity" : 0.5,
    "modulationType" : "sine"
  },
  "envelope" : {
    "attackCurve" : "exponential",
    "attack" : 0.05,
    "decay" : 0.2,
    "sustain" : 0.2,
    "release" : 1.5,
  },
  "portamento" : 0.05
}).toMaster();

const play: Function = function(element: Element) {
  const note: string = element.getAttribute('data-note');

  synth.triggerAttackRelease(note, "8n");

  element.classList.add('active');

  setTimeout(() => element.classList.remove('active'), 100);
};
