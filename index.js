function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinHeap();
  for (const interval of intervals) {
    if (minHeap.size() > 0 && minHeap.peek() <= interval[0]) {
      minHeap.pop();
    }
    minHeap.push(interval[1]);
  }
  return minHeap.size();
}
