/* eslint no-unused-vars:0 */
export default function ({Plugin, types: t}) {
  return new Plugin('remove-comments', {
    visitor: {
      Program(node, parent, path, file) {
        file.ast.comments = [];
      },
      enter(node) {
        node.leadingComments = null;
        node.trailingComments = null;
      }
    }
  });
}
