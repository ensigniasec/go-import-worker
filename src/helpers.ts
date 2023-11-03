import { html } from "@worker-tools/html";

export const baseLayout = (
  importClause: string,
  sourceClause: string,
  pkgURL: string
  // content: HTMLContent
) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="go-import" content="${importClause}" />
      <meta name="go-source" content="${sourceClause}" />
      <meta http-equiv="refresh" content="0; url=${pkgURL}" />
    </head>
    <body>
      Nothing to see here;
      <a href="${pkgURL}">move along</a>.
    </body>
  </html>
`;
export function importClause(
  pkg: string,
  repoPath: string,
  vcs: string = "git"
) {
  if (repoPath.startsWith("/")) repoPath = repoPath.slice(1);
  return `${pkg} ${vcs} https://github.com/${repoPath}`;
}
export function sourceClause(
  pkg: string,
  repoPath: string,
  defaultBranch: string = "main"
) {
  return `${pkg} https://github.com/${repoPath} https://github.com/${repoPath}/tree/${defaultBranch}{/dir} https://github.com/${repoPath}/blob/${defaultBranch}{/dir}/{file}#L{line}`;
}
export function pkgURL(pkg: string) {
  if (pkg.startsWith("/")) pkg = pkg.slice(1);
  return `https://pkg.go.dev/${pkg}`;
}
