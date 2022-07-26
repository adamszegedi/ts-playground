const divider = '###############################################';

export default function formatter(fn: () => void) {
  console.log(divider, fn, divider);
  fn();
  console.log(divider, fn, divider);
}