// let meetings = [
//   {
//     start: 1,
//     end: 3
//   },
//   {
//     start: 5,
//     end: 6
//   },
//   {
//     start: 2,
//     end: 4
//   },
//   {
//     start: 5,
//     end: 8
//   },
//   { start: 6, end: 9 }
// ];

const sortMeetings = meetings => {
  return meetings.sort((a, b) => {
    return a.start - b.start;
  });
};

const mergeMeetings = (a, b) => {
  let start = 0,
    end = 0;
  if (a.start < b.start) start = a.start;
  else start = b.start;

  if (a.end > b.end) end = a.end;
  else end = b.end;

  return { start: start, end: end };
};

const mergeOverlaps = meetings => {
  let sorted = sortMeetings(meetings);
  let merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    last = merged[merged.length - 1];
    let curr = sorted[i];
    if (curr.start <= last.end)
      merged[merged.length - 1] = mergeMeetings(last, curr);
    else merged.push(curr);
  }
  return merged;
};
