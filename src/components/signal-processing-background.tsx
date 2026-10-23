'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

type Point = { x: number; y: number };

type Cubic = {
  from: Point;
  c1: Point;
  c2: Point;
  to: Point;
};

type Pair = { input: string; output: string };

type NodeDef = { id: string; x: number; y: number };

type LinkDef = { id: string; from: string; to: string; bend: number };

type Template = {
  id: string;
  w: number;
  h: number;
  nodes: NodeDef[];
  links: LinkDef[];
};

type SignalState = {
  group: SVGGElement;
  marker: SVGCircleElement;
  input: SVGTextElement;
  output: SVGTextElement;
  link: SVGPathElement;
  route: Array<{ link: SVGPathElement; label: Pair }>;
  routeIndex: number;
  elapsed: number;
  duration: number;
  rest: number;
  label: Pair;
};

type Box = { left: number; top: number; width: number; height: number };

type ProcessState = {
  wrap: HTMLDivElement;
  links: SVGPathElement[];
  signals: SignalState[];
  age: number;
  delay: number;
  fadeIn: number;
  hold: number;
  fadeOut: number;
  gap: number;
  peak: number;
  box: Box;
  templateId: string | null;
};

const FRAME_MS = 32;
let lastTemplateId: string | null = null;

type StepLabel = { en: string; nl: string };
type ProcessCopy = {
  steps: Record<string, StepLabel>;
  routes?: string[][];
};

const PROCESSES: Record<string, ProcessCopy> = {
  'small-line': {
    steps: {
      a: { en: 'Invoice received', nl: 'Factuur ontvangen' },
      b: { en: 'Payment scheduled', nl: 'Betaling ingepland' },
    },
  },
  'small-steep': {
    steps: {
      a: { en: 'Lead captured', nl: 'Lead binnen' },
      b: { en: 'Meeting booked', nl: 'Afspraak gepland' },
    },
  },
  'small-arc': {
    steps: {
      a: { en: 'Draft written', nl: 'Concept geschreven' },
      b: { en: 'Review requested', nl: 'Review gevraagd' },
      c: { en: 'Changes applied', nl: 'Wijzigingen verwerkt' },
    },
  },
  'small-dip': {
    steps: {
      a: { en: 'Order placed', nl: 'Bestelling geplaatst' },
      b: { en: 'Stock checked', nl: 'Voorraad gecheckt' },
      c: { en: 'Order confirmed', nl: 'Bestelling bevestigd' },
    },
  },
  'small-turn': {
    steps: {
      a: { en: 'Ticket opened', nl: 'Ticket geopend' },
      b: { en: 'Cause found', nl: 'Oorzaak gevonden' },
      c: { en: 'Fix deployed', nl: 'Oplossing live' },
    },
  },
  'small-hook': {
    steps: {
      a: { en: 'Application in', nl: 'Aanvraag binnen' },
      b: { en: 'Approved', nl: 'Goedgekeurd' },
      c: { en: 'Declined', nl: 'Afgewezen' },
    },
    routes: [['ab'], ['ac']],
  },
  'small-join': {
    steps: {
      a: { en: 'Contract signed', nl: 'Contract getekend' },
      b: { en: 'Details checked', nl: 'Gegevens gecheckt' },
      c: { en: 'Account opened', nl: 'Account geopend' },
    },
    routes: [['ac'], ['bc']],
  },
  'medium-wide': {
    steps: {
      a: { en: 'Brief received', nl: 'Briefing ontvangen' },
      b: { en: 'Proposal drafted', nl: 'Voorstel geschreven' },
      c: { en: 'Proposal sent', nl: 'Voorstel verstuurd' },
    },
  },
  'medium-tall': {
    steps: {
      a: { en: 'Issue reported', nl: 'Probleem gemeld' },
      b: { en: 'Owner assigned', nl: 'Eigenaar gekozen' },
      c: { en: 'Issue resolved', nl: 'Probleem opgelost' },
    },
  },
  'medium-step': {
    steps: {
      a: { en: 'Request logged', nl: 'Verzoek vastgelegd' },
      b: { en: 'Needs assessed', nl: 'Behoefte bepaald' },
      c: { en: 'Solution chosen', nl: 'Oplossing gekozen' },
      d: { en: 'Work started', nl: 'Werk gestart' },
    },
  },
  'medium-rise': {
    steps: {
      a: { en: 'Idea noted', nl: 'Idee genoteerd' },
      b: { en: 'Scope defined', nl: 'Scope bepaald' },
      c: { en: 'Prototype built', nl: 'Prototype gebouwd' },
      d: { en: 'Ready to launch', nl: 'Klaar voor lancering' },
    },
  },
  'medium-fork': {
    steps: {
      a: { en: 'Order received', nl: 'Order ontvangen' },
      b: { en: 'Pick items', nl: 'Artikelen pakken' },
      c: { en: 'Plan route', nl: 'Route plannen' },
      d: { en: 'Ready to ship', nl: 'Klaar voor verzending' },
    },
    routes: [
      ['ab', 'bd'],
      ['ac', 'cd'],
    ],
  },
  'medium-branch': {
    steps: {
      a: { en: 'Candidate applied', nl: 'Sollicitatie binnen' },
      b: { en: 'Interview done', nl: 'Gesprek geweest' },
      c: { en: 'Offer sent', nl: 'Aanbod verstuurd' },
      d: { en: 'Put on hold', nl: 'In de wacht' },
    },
    routes: [['ab', 'bc'], ['bd']],
  },
  'medium-triangle': {
    steps: {
      a: { en: 'Plan sprint', nl: 'Sprint plannen' },
      b: { en: 'Build the work', nl: 'Werk bouwen' },
      c: { en: 'Review results', nl: 'Resultaat reviewen' },
    },
    routes: [['ab', 'bc', 'ca']],
  },
  'large-wide': {
    steps: {
      a: { en: 'Email received', nl: 'E-mail ontvangen' },
      b: { en: 'Write response', nl: 'Antwoord schrijven' },
      c: { en: 'Await approval', nl: 'Wacht op akkoord' },
      d: { en: 'Approved, send email', nl: 'Akkoord, verstuur mail' },
    },
  },
  'large-cascade': {
    steps: {
      a: { en: 'Data exported', nl: 'Data geëxporteerd' },
      b: { en: 'Records cleaned', nl: 'Records opgeschoond' },
      c: { en: 'Report compiled', nl: 'Rapport gemaakt' },
      d: { en: 'Report shared', nl: 'Rapport gedeeld' },
    },
  },
  'large-hook': {
    steps: {
      a: { en: 'Quote requested', nl: 'Offerte aangevraagd' },
      b: { en: 'Price calculated', nl: 'Prijs berekend' },
      c: { en: 'Quote sent', nl: 'Offerte verstuurd' },
      d: { en: 'Quote accepted', nl: 'Offerte geaccepteerd' },
    },
  },
  'large-cluster': {
    steps: {
      a: { en: 'Campaign brief', nl: 'Campagnebrief' },
      b: { en: 'Write copy', nl: 'Tekst schrijven' },
      c: { en: 'Design assets', nl: 'Beeld maken' },
      d: { en: 'Campaign live', nl: 'Campagne live' },
    },
    routes: [
      ['ab', 'bd'],
      ['ac', 'cd'],
    ],
  },
  'large-split': {
    steps: {
      a: { en: 'Request received', nl: 'Verzoek ontvangen' },
      b: { en: 'Route to sales', nl: 'Naar sales' },
      c: { en: 'Route to support', nl: 'Naar support' },
      d: { en: 'Deal opened', nl: 'Deal geopend' },
      e: { en: 'Case logged', nl: 'Melding vastgelegd' },
    },
    routes: [
      ['ab', 'bd'],
      ['ac', 'ce'],
    ],
  },
  'large-spine': {
    steps: {
      a: { en: 'Shift started', nl: 'Dienst gestart' },
      b: { en: 'Tasks assigned', nl: 'Taken verdeeld' },
      c: { en: 'Work checked', nl: 'Werk gecontroleerd' },
      d: { en: 'Shift closed', nl: 'Dienst afgesloten' },
      e: { en: 'Exception flagged', nl: 'Uitzondering gemeld' },
    },
    routes: [['ab', 'bc', 'cd'], ['be']],
  },
};

const TEMPLATES: Template[] = [
  {
    id: 'small-line',
    w: 220,
    h: 72,
    nodes: [
      { id: 'a', x: 16, y: 40 },
      { id: 'b', x: 204, y: 32 },
    ],
    links: [{ id: 'ab', from: 'a', to: 'b', bend: 16 }],
  },
  {
    id: 'small-arc',
    w: 240,
    h: 140,
    nodes: [
      { id: 'a', x: 20, y: 36 },
      { id: 'b', x: 214, y: 28 },
      { id: 'c', x: 120, y: 118 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -18 },
      { id: 'bc', from: 'b', to: 'c', bend: 20 },
    ],
  },
  {
    id: 'medium-wide',
    w: 400,
    h: 110,
    nodes: [
      { id: 'a', x: 18, y: 72 },
      { id: 'b', x: 200, y: 28 },
      { id: 'c', x: 382, y: 76 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -22 },
      { id: 'bc', from: 'b', to: 'c', bend: 18 },
    ],
  },
  {
    id: 'medium-tall',
    w: 160,
    h: 320,
    nodes: [
      { id: 'a', x: 88, y: 18 },
      { id: 'b', x: 42, y: 156 },
      { id: 'c', x: 112, y: 298 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: 24 },
      { id: 'bc', from: 'b', to: 'c', bend: -20 },
    ],
  },
  {
    id: 'large-wide',
    w: 580,
    h: 140,
    nodes: [
      { id: 'a', x: 18, y: 96 },
      { id: 'b', x: 210, y: 32 },
      { id: 'c', x: 400, y: 100 },
      { id: 'd', x: 560, y: 40 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -26 },
      { id: 'bc', from: 'b', to: 'c', bend: 22 },
      { id: 'cd', from: 'c', to: 'd', bend: -18 },
    ],
  },
  {
    id: 'large-cluster',
    w: 460,
    h: 280,
    nodes: [
      { id: 'a', x: 36, y: 48 },
      { id: 'b', x: 400, y: 36 },
      { id: 'c', x: 48, y: 230 },
      { id: 'd', x: 390, y: 240 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -28 },
      { id: 'ac', from: 'a', to: 'c', bend: -20 },
      { id: 'bd', from: 'b', to: 'd', bend: 24 },
      { id: 'cd', from: 'c', to: 'd', bend: 16 },
    ],
  },
  {
    id: 'small-steep',
    w: 150,
    h: 190,
    nodes: [
      { id: 'a', x: 28, y: 18 },
      { id: 'b', x: 118, y: 168 },
    ],
    links: [{ id: 'ab', from: 'a', to: 'b', bend: 28 }],
  },
  {
    id: 'small-hook',
    w: 210,
    h: 160,
    nodes: [
      { id: 'a', x: 24, y: 28 },
      { id: 'b', x: 184, y: 36 },
      { id: 'c', x: 36, y: 136 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: 14 },
      { id: 'ac', from: 'a', to: 'c', bend: -16 },
    ],
  },
  {
    id: 'medium-fork',
    w: 380,
    h: 190,
    nodes: [
      { id: 'a', x: 22, y: 96 },
      { id: 'b', x: 180, y: 32 },
      { id: 'c', x: 176, y: 156 },
      { id: 'd', x: 356, y: 96 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -16 },
      { id: 'ac', from: 'a', to: 'c', bend: 16 },
      { id: 'bd', from: 'b', to: 'd', bend: 18 },
      { id: 'cd', from: 'c', to: 'd', bend: -14 },
    ],
  },
  {
    id: 'medium-step',
    w: 360,
    h: 220,
    nodes: [
      { id: 'a', x: 22, y: 36 },
      { id: 'b', x: 168, y: 40 },
      { id: 'c', x: 176, y: 180 },
      { id: 'd', x: 336, y: 176 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -12 },
      { id: 'bc', from: 'b', to: 'c', bend: 20 },
      { id: 'cd', from: 'c', to: 'd', bend: 12 },
    ],
  },
  {
    id: 'medium-triangle',
    w: 300,
    h: 210,
    nodes: [
      { id: 'a', x: 150, y: 24 },
      { id: 'b', x: 28, y: 180 },
      { id: 'c', x: 268, y: 176 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -18 },
      { id: 'bc', from: 'b', to: 'c', bend: 16 },
      { id: 'ca', from: 'c', to: 'a', bend: 18 },
    ],
  },
  {
    id: 'large-cascade',
    w: 540,
    h: 300,
    nodes: [
      { id: 'a', x: 24, y: 36 },
      { id: 'b', x: 180, y: 100 },
      { id: 'c', x: 320, y: 190 },
      { id: 'd', x: 500, y: 260 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -22 },
      { id: 'bc', from: 'b', to: 'c', bend: 20 },
      { id: 'cd', from: 'c', to: 'd', bend: -18 },
    ],
  },
  {
    id: 'large-split',
    w: 520,
    h: 230,
    nodes: [
      { id: 'a', x: 24, y: 114 },
      { id: 'b', x: 190, y: 36 },
      { id: 'c', x: 186, y: 194 },
      { id: 'd', x: 490, y: 32 },
      { id: 'e', x: 486, y: 196 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -14 },
      { id: 'ac', from: 'a', to: 'c', bend: 14 },
      { id: 'bd', from: 'b', to: 'd', bend: -16 },
      { id: 'ce', from: 'c', to: 'e', bend: 16 },
    ],
  },
  {
    id: 'small-dip',
    w: 230,
    h: 100,
    nodes: [
      { id: 'a', x: 16, y: 26 },
      { id: 'b', x: 114, y: 78 },
      { id: 'c', x: 212, y: 24 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: 12 },
      { id: 'bc', from: 'b', to: 'c', bend: -10 },
    ],
  },
  {
    id: 'small-turn',
    w: 200,
    h: 160,
    nodes: [
      { id: 'a', x: 18, y: 28 },
      { id: 'b', x: 168, y: 36 },
      { id: 'c', x: 150, y: 136 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -12 },
      { id: 'bc', from: 'b', to: 'c', bend: 16 },
    ],
  },
  {
    id: 'small-join',
    w: 250,
    h: 150,
    nodes: [
      { id: 'a', x: 20, y: 28 },
      { id: 'b', x: 28, y: 122 },
      { id: 'c', x: 214, y: 78 },
    ],
    links: [
      { id: 'ac', from: 'a', to: 'c', bend: 14 },
      { id: 'bc', from: 'b', to: 'c', bend: -12 },
    ],
  },
  {
    id: 'medium-branch',
    w: 340,
    h: 200,
    nodes: [
      { id: 'a', x: 22, y: 36 },
      { id: 'b', x: 150, y: 72 },
      { id: 'c', x: 310, y: 34 },
      { id: 'd', x: 188, y: 172 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: 14 },
      { id: 'bc', from: 'b', to: 'c', bend: -16 },
      { id: 'bd', from: 'b', to: 'd', bend: 18 },
    ],
  },
  {
    id: 'medium-rise',
    w: 380,
    h: 180,
    nodes: [
      { id: 'a', x: 20, y: 148 },
      { id: 'b', x: 130, y: 78 },
      { id: 'c', x: 230, y: 124 },
      { id: 'd', x: 352, y: 32 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -16 },
      { id: 'bc', from: 'b', to: 'c', bend: 18 },
      { id: 'cd', from: 'c', to: 'd', bend: -14 },
    ],
  },
  {
    id: 'large-spine',
    w: 230,
    h: 340,
    nodes: [
      { id: 'a', x: 90, y: 20 },
      { id: 'b', x: 70, y: 120 },
      { id: 'c', x: 120, y: 220 },
      { id: 'd', x: 78, y: 318 },
      { id: 'e', x: 196, y: 108 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -14 },
      { id: 'bc', from: 'b', to: 'c', bend: 16 },
      { id: 'cd', from: 'c', to: 'd', bend: -12 },
      { id: 'be', from: 'b', to: 'e', bend: -10 },
    ],
  },
  {
    id: 'large-hook',
    w: 480,
    h: 190,
    nodes: [
      { id: 'a', x: 20, y: 40 },
      { id: 'b', x: 180, y: 32 },
      { id: 'c', x: 340, y: 48 },
      { id: 'd', x: 400, y: 156 },
    ],
    links: [
      { id: 'ab', from: 'a', to: 'b', bend: -14 },
      { id: 'bc', from: 'b', to: 'c', bend: 12 },
      { id: 'cd', from: 'c', to: 'd', bend: 18 },
    ],
  },
];

function bend(a: Point, b: Point, amount: number): Cubic {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  return {
    from: a,
    to: b,
    c1: {
      x: a.x + dx * 0.34 + nx * amount,
      y: a.y + dy * 0.34 + ny * amount,
    },
    c2: {
      x: a.x + dx * 0.68 + nx * amount * 0.45,
      y: a.y + dy * 0.68 + ny * amount * 0.45,
    },
  };
}

function pathD(cubic: Cubic) {
  const n = (value: number) => Math.round(value * 10) / 10;
  return `M ${n(cubic.from.x)} ${n(cubic.from.y)} C ${n(cubic.c1.x)} ${n(cubic.c1.y)} ${n(cubic.c2.x)} ${n(cubic.c2.y)} ${n(cubic.to.x)} ${n(cubic.to.y)}`;
}

function easeOut(t: number) {
  return 1 - (1 - t) ** 2;
}

function clamp01(t: number) {
  return Math.min(1, Math.max(0, t));
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function svgEl<T extends keyof SVGElementTagNameMap>(name: T) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function mixMarker(warmth: number) {
  const muted = [143, 164, 190];
  const yellow = [255, 224, 0];
  const amount = clamp01(warmth) * 0.72;
  const channels = muted.map((channel, index) =>
    Math.round(channel + ((yellow[index] ?? channel) - channel) * amount),
  );
  return `rgb(${channels[0]} ${channels[1]} ${channels[2]})`;
}

function stepText(step: StepLabel | undefined, language: string) {
  if (!step) return '';
  return language.startsWith('nl') ? step.nl : step.en;
}

function showStep(
  signal: SignalState,
  step: { link: SVGPathElement; label: Pair },
) {
  signal.link = step.link;
  signal.label = step.label;
  signal.input.textContent = step.label.input;
  signal.output.textContent = step.label.output;
}

function buildProcess(template: Template, language: string) {
  const svg = svgEl('svg');
  svg.setAttribute('viewBox', `0 0 ${template.w} ${template.h}`);
  svg.setAttribute('width', String(template.w));
  svg.setAttribute('height', String(template.h));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.overflow = 'visible';
  svg.style.fontFamily = 'inherit';

  const nodes = new Map(template.nodes.map((node) => [node.id, node]));
  const pathById = new Map<string, SVGPathElement>();
  const links: SVGPathElement[] = [];

  for (const link of template.links) {
    const from = nodes.get(link.from);
    const to = nodes.get(link.to);
    if (!from || !to) continue;
    const bendAmount = link.bend * rand(0.8, 1.25);
    const path = svgEl('path');
    path.setAttribute('data-link', link.id);
    path.setAttribute('d', pathD(bend(from, to, bendAmount)));
    path.setAttribute('stroke', '#2e466f');
    path.setAttribute('stroke-width', '1.4');
    path.setAttribute('stroke-opacity', '0.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(path);
    pathById.set(link.id, path);
    links.push(path);
  }

  for (const node of template.nodes) {
    const ring = svgEl('circle');
    ring.setAttribute('data-ring', node.id);
    ring.setAttribute('cx', String(node.x));
    ring.setAttribute('cy', String(node.y));
    ring.setAttribute('r', '9');
    ring.setAttribute('stroke', '#ffe000');
    ring.setAttribute('stroke-width', '1.25');
    ring.setAttribute('stroke-opacity', '0');
    ring.setAttribute('vector-effect', 'non-scaling-stroke');
    const core = svgEl('circle');
    core.setAttribute('cx', String(node.x));
    core.setAttribute('cy', String(node.y));
    core.setAttribute('r', '3.4');
    core.setAttribute('fill', '#8fa4be');
    core.setAttribute('fill-opacity', '0.9');
    svg.append(ring, core);
  }

  const copy = PROCESSES[template.id];
  const routeIds = copy?.routes ?? [template.links.map((link) => link.id)];
  const routes = routeIds
    .map((ids) =>
      ids.flatMap((id) => {
        const link = template.links.find((item) => item.id === id);
        const path = pathById.get(id);
        const from = link ? copy?.steps[link.from] : undefined;
        const to = link ? copy?.steps[link.to] : undefined;
        if (!link || !path || !from || !to) return [];
        return [
          {
            link: path,
            label: {
              input: stepText(from, language),
              output: stepText(to, language),
            },
          },
        ];
      }),
    )
    .filter((route) => route.length > 0);

  const makeSignal = (
    route: Array<{ link: SVGPathElement; label: Pair }>,
    delay: number,
    index: number,
  ): SignalState => {
    const group = svgEl('g');
    group.setAttribute('opacity', '0');
    const marker = svgEl('circle');
    marker.setAttribute('r', '3.6');
    marker.setAttribute('fill', '#8fa4be');
    const input = svgEl('text');
    const output = svgEl('text');
    for (const text of [input, output]) {
      text.setAttribute('fill', '#9aafc4');
      text.setAttribute('font-size', '11');
      text.setAttribute('font-weight', '400');
      text.setAttribute('dy', '0.32em');
    }
    output.setAttribute('opacity', '0');
    group.append(marker, input, output);
    svg.appendChild(group);
    const signal: SignalState = {
      group,
      marker,
      input,
      output,
      link: route[0]?.link ?? svgEl('path'),
      route,
      routeIndex: 0,
      elapsed: -delay - index * 120,
      duration: rand(2200, 3400),
      rest: rand(500, 900),
      label: route[0]?.label ?? { input: '', output: '' },
    };
    const first = route[0];
    if (first) showStep(signal, first);
    return signal;
  };

  const signals: SignalState[] = [];
  const shown = routes.slice(0, 2);
  for (let index = 0; index < shown.length; index++) {
    const route = shown[index];
    if (!route) continue;
    signals.push(makeSignal(route, index === 0 ? 0 : rand(900, 1800), index));
  }
  const only = shown[0];
  if (shown.length === 1 && only) {
    signals.push(makeSignal(only, rand(1400, 2800), 1));
  }

  return { svg, links, signals };
}

function intersects(a: Box, b: Box) {
  return (
    a.left < b.left + b.width &&
    a.left + a.width > b.left &&
    a.top < b.top + b.height &&
    a.top + a.height > b.top
  );
}

function viewportBand() {
  const nav = document.querySelector('nav')?.getBoundingClientRect();
  return {
    minTop: window.scrollY + (nav && nav.height > 0 ? nav.bottom : 72) + 8,
    maxTop: window.scrollY + window.innerHeight,
  };
}

function contentObstacles(field: HTMLElement) {
  const content = field.nextElementSibling;
  if (!content) return [];
  const boxes: Box[] = [];
  const nav = document.querySelector('nav');
  if (nav) {
    const rect = nav.getBoundingClientRect();
    boxes.push({
      left: 0,
      top: window.scrollY,
      width: window.innerWidth,
      height: rect.height + 12,
    });
  }

  for (const node of content.querySelectorAll(
    'h1, h2, h3, p, a, button, img, li',
  )) {
    if (node.closest('nav')) continue;
    const rect = node.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) continue;
    if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
    boxes.push({
      left: rect.left + window.scrollX - 28,
      top: rect.top + window.scrollY - 22,
      width: rect.width + 56,
      height: rect.height + 44,
    });
  }

  return boxes;
}

function mostlyInView(wrap: HTMLElement) {
  const rect = wrap.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return true;
  const visible =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return visible > rect.height * 0.45;
}

function phaseRemaining(process: ProcessState) {
  const visibleFor =
    process.delay + process.fadeIn + process.hold + process.fadeOut;
  return visibleFor - process.age;
}

function followDelay(self: ProcessState, others: ProcessState[]) {
  let remaining = 0;
  for (const other of others) {
    if (other === self || other.signals.length === 0) continue;
    if (!mostlyInView(other.wrap)) continue;
    const left = phaseRemaining(other);
    const showing = other.age >= other.delay && left > 0;
    if (!showing || left <= remaining) continue;
    remaining = left;
  }
  if (remaining < 800) return rand(0, 280);
  return remaining * rand(0.4, 0.72);
}

function findSpot(
  width: number,
  height: number,
  bounds: { width: number; height: number },
  obstacles: Box[],
  others: ProcessState[],
  self: ProcessState,
  band?: { minTop: number; maxTop: number },
) {
  const maxLeft = bounds.width - width - 16;
  const minTop = Math.max(8, band?.minTop ?? 8);
  const maxTop =
    Math.min(bounds.height, band?.maxTop ?? bounds.height) - height - 16;
  if (maxLeft < 8 || maxTop < minTop) return null;

  const fits = (left: number, top: number) => {
    const box: Box = {
      left: left - 12,
      top: top - 24,
      width: width + 168,
      height: height + 40,
    };
    const hitsText = obstacles.some((obstacle) => intersects(box, obstacle));
    const hitsProcess = others.some(
      (other) =>
        other !== self && other.box.width > 0 && intersects(box, other.box),
    );
    if (hitsText || hitsProcess) return null;
    return { left, top, width, height };
  };

  for (let attempt = 0; attempt < 36; attempt++) {
    const spot = fits(rand(8, maxLeft), rand(minTop, maxTop));
    if (spot) return spot;
  }

  for (let top = minTop; top <= maxTop; top += 72) {
    for (let left = 8; left <= maxLeft; left += 80) {
      const spot = fits(
        Math.min(maxLeft, left + rand(0, 28)),
        Math.min(maxTop, top + rand(0, 28)),
      );
      if (spot) return spot;
    }
  }

  return null;
}

function placeProcess(
  process: ProcessState,
  language: string,
  bounds: { width: number; height: number },
  others: ProcessState[],
  band?: { minTop: number; maxTop: number },
) {
  const obstacles = contentObstacles(process.wrap.parentElement as HTMLElement);
  const blocked = new Set<string>();
  if (process.templateId) blocked.add(process.templateId);
  for (const other of others) {
    if (other !== process && other.templateId) blocked.add(other.templateId);
  }
  const notCurrent = TEMPLATES.filter((template) => !blocked.has(template.id));
  const notRecent = notCurrent.filter(
    (template) => template.id !== lastTemplateId,
  );
  const templates = (notRecent.length > 0 ? notRecent : notCurrent).sort(
    () => Math.random() - 0.5,
  );

  const mount = (
    template: Template,
    limit?: { minTop: number; maxTop: number },
  ) => {
    const spot = findSpot(
      template.w,
      template.h,
      bounds,
      obstacles,
      others,
      process,
      limit,
    );
    if (!spot) return false;

    const built = buildProcess(template, language);
    process.wrap.replaceChildren(built.svg);
    process.wrap.style.width = `${template.w}px`;
    process.wrap.style.height = `${template.h}px`;
    process.wrap.style.left = `${spot.left}px`;
    process.wrap.style.top = `${spot.top}px`;
    process.links = built.links;
    process.signals = built.signals;
    process.box = {
      left: spot.left - 12,
      top: spot.top - 24,
      width: spot.width + 168,
      height: spot.height + 40,
    };
    process.age = 0;
    process.fadeIn = rand(500, 1300);
    process.hold = rand(3200, 8600);
    process.fadeOut = rand(550, 1300);
    process.gap = rand(1400, 3800);
    process.peak = rand(0.55, 1);
    process.templateId = template.id;
    lastTemplateId = template.id;
    process.wrap.dataset.template = template.id;
    return true;
  };

  for (const template of templates) {
    if (mount(template, band ?? viewportBand())) return;
  }

  process.wrap.replaceChildren();
  process.wrap.style.opacity = '0';
  delete process.wrap.dataset.template;
  process.links = [];
  process.signals = [];
  process.box = { left: 0, top: 0, width: 0, height: 0 };
  process.age = 0;
  process.fadeIn = 0;
  process.hold = 0;
  process.fadeOut = 0;
  process.gap = 2500;
  process.peak = 0;
}

function paintSignal(signal: SignalState, time: number, slot: number) {
  const progress = clamp01(time / signal.duration);
  const eased = easeOut(progress);
  const spot = signal.link.getPointAtLength(
    signal.link.getTotalLength() * eased,
  );
  const fadeIn = Math.min(1, time / 280);
  const fadeOut = Math.min(1, (signal.duration - time) / 420);
  const warmth =
    progress < 0.55
      ? 0
      : progress < 0.82
        ? (progress - 0.55) / 0.27
        : (1 - progress) / 0.18;

  signal.group.setAttribute('opacity', String(Math.min(fadeIn, fadeOut)));
  signal.marker.setAttribute('cx', String(spot.x));
  signal.marker.setAttribute('cy', String(spot.y));
  signal.marker.setAttribute('fill', mixMarker(warmth));

  const outputAmount = easeOut(clamp01((progress - 0.46) / 0.18));
  const labelX = spot.x + 10;
  const labelY = spot.y + (slot % 2 === 0 ? -12 : 14);
  for (const label of [signal.input, signal.output]) {
    label.setAttribute('x', String(labelX));
    label.setAttribute('y', String(labelY));
  }
  signal.input.setAttribute('opacity', String(1 - outputAmount));
  signal.output.setAttribute('opacity', String(outputAmount));
}

function startField(root: HTMLElement, language: string) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;

  const count = window.innerWidth < 1024 ? 1 : 2;
  const processes: ProcessState[] = [];
  const pageBounds = () => ({
    width: root.clientWidth,
    height: root.clientHeight,
  });

  for (let index = 0; index < count; index++) {
    const wrap = document.createElement('div');
    wrap.className = 'pointer-events-none absolute';
    wrap.style.opacity = '0';
    root.appendChild(wrap);
    const process: ProcessState = {
      wrap,
      links: [],
      signals: [],
      age: 0,
      delay: 0,
      fadeIn: 1800,
      hold: 12000,
      fadeOut: 2000,
      gap: 18000,
      peak: 0.8,
      box: { left: 0, top: 0, width: 0, height: 0 },
      templateId: null,
    };
    if (index === 0) {
      placeProcess(process, language, pageBounds(), processes, viewportBand());
    }
    if (index === 0 && process.signals.length > 0) {
      process.delay = 0;
      process.fadeIn = 0;
      process.hold = rand(6000, 10000);
      process.peak = rand(0.82, 1);
      process.age = 0;
      const lead = process.signals[0];
      if (lead) lead.elapsed = lead.duration * rand(0.2, 0.55);
      process.wrap.style.opacity = String(process.peak);
    } else {
      const lead = processes[0];
      process.delay = lead
        ? rand(Math.max(2200, lead.hold * 0.35), lead.hold * 0.72)
        : rand(2800, 5200);
      process.age = 0;
    }
    processes.push(process);
  }

  let timer = 0;
  let visible = true;

  const advance = () => {
    const bounds = pageBounds();
    const band = viewportBand();
    for (const process of processes) {
      const waiting = process.signals.length === 0;
      if (waiting) {
        process.age += FRAME_MS;
        if (process.peak === 0 && process.age < process.gap) continue;
        if (process.age < process.delay) continue;
        placeProcess(process, language, bounds, processes, band);
        process.delay = 0;
        process.age = 0;
        if (process.signals.length === 0) continue;
      } else if (!mostlyInView(process.wrap)) {
        process.wrap.style.opacity = '0';
        if (process.age < 500) {
          process.age += FRAME_MS;
          continue;
        }
        placeProcess(process, language, bounds, processes, band);
        process.delay = followDelay(process, processes);
        process.age = 0;
        if (process.signals.length === 0) continue;
      }

      const visibleFor =
        process.delay + process.fadeIn + process.hold + process.fadeOut;
      const cycle = visibleFor + process.gap;
      let opacity = 0;
      if (process.age < process.delay) opacity = 0;
      else if (process.age < process.delay + process.fadeIn) {
        opacity = (process.age - process.delay) / process.fadeIn;
      } else if (process.age < process.delay + process.fadeIn + process.hold) {
        opacity = 1;
      } else if (process.age < visibleFor) {
        opacity =
          1 - (process.age - (visibleFor - process.fadeOut)) / process.fadeOut;
      }

      process.wrap.style.opacity = String(clamp01(opacity) * process.peak);
      const showing = opacity > 0.04;
      const busy = new Set<SVGPathElement>();

      process.signals.forEach((signal, index) => {
        if (!showing) {
          signal.group.setAttribute('opacity', '0');
          return;
        }
        const trip = signal.duration + signal.rest;
        if (signal.elapsed >= 0 && signal.elapsed < signal.duration) {
          paintSignal(signal, signal.elapsed, index);
          busy.add(signal.link);
        } else {
          signal.group.setAttribute('opacity', '0');
        }
        signal.elapsed += FRAME_MS;
        if (signal.elapsed >= trip) {
          signal.elapsed = 0;
          if (signal.route.length > 1) {
            signal.routeIndex = (signal.routeIndex + 1) % signal.route.length;
            const step = signal.route[signal.routeIndex];
            if (step) showStep(signal, step);
          }
        }
      });

      for (const link of process.links) {
        const active = busy.has(link);
        link.setAttribute('stroke', active ? '#8ea3bd' : '#2e466f');
        link.setAttribute('stroke-opacity', active ? '0.85' : '0.45');
      }

      process.age += FRAME_MS;
      if (process.age < cycle) continue;
      placeProcess(process, language, bounds, processes, band);
      process.delay = followDelay(process, processes);
      process.age = 0;
    }
  };

  const stop = () => {
    if (!timer) return;
    window.clearInterval(timer);
    timer = 0;
  };

  const ensure = () => {
    if (timer || document.hidden || !visible || reduced.matches) return;
    timer = window.setInterval(() => {
      if (document.hidden || !visible || reduced.matches) {
        stop();
        return;
      }
      advance();
    }, FRAME_MS);
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? false;
    ensure();
  });
  observer.observe(root);
  const onReduce = () => {
    if (reduced.matches) stop();
    else ensure();
  };

  document.addEventListener('visibilitychange', ensure);
  reduced.addEventListener('change', onReduce);
  advance();
  ensure();

  return () => {
    stop();
    observer.disconnect();
    document.removeEventListener('visibilitychange', ensure);
    reduced.removeEventListener('change', onReduce);
    lastTemplateId = null;
    root.replaceChildren();
  };
}

export function SignalProcessingBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return startField(root, i18n.language);
  }, [i18n.language]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    />
  );
}
