type EventType = 'click' | 'scroll' | 'mouseover'

type ExcludeEvent = Exclude<EventType, 'scroll'>; // => click, mouseover

const eventType: ExcludeEvent = 'click';

console.log(eventType);