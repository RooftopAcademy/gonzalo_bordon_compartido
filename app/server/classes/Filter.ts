export default class Filter {
  protected inRange(
    elem: number,
    min: number = null,
    max: number = null
  ): boolean {
    return (min ? elem >= min : true) && (max ? elem <= max : true);
  }
}
