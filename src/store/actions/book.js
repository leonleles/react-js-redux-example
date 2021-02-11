export function toggleBook(module, lesson) {
  return {
    type: 'TOGGLE_BOOK',
    module,
    lesson,
  }
}