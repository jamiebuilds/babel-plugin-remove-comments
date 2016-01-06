export default function({types: t}) {
  return {
    visitor: {
      Program(path, state) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node);
          }
        });
      }
    }
  };
}
