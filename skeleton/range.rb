def range(start,endofRange)
  return [start] if start == endofRange
  return range(start+1,endofRange).unshift(start)
end