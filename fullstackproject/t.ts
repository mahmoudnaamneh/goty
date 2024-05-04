enum Direction {
    Up=1,
    Down=2,
    Left=7,
    Right=51,
}
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
const SDirection = {
    Up: 8,
    Down: 9,
    Left: 10,
    Right: 11,
} as const;

alert("Direction Down is:"+Direction.Down)
alert("Direction Left is:"+Direction.Left)
alert("Direction Right is:"+Direction.Right)
alert("Direction Up is:"+Direction.Up)

alert("ODirection Down is:"+ODirection.Down)
alert("ODirection Left is:"+ODirection.Left)
alert("ODirection Right is:"+ODirection.Right)
alert("ODirection Up is:"+ODirection.Up)

alert("SDirection Down is:"+SDirection.Down)
alert("SDirection Left is:"+SDirection.Left)
alert("SDirection Right is:"+SDirection.Right)
alert("SDirection Up is:"+SDirection.Up)