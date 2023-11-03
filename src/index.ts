import { HTMLResponse } from "@worker-tools/html";
import { baseLayout, importClause, pkgURL, sourceClause } from "./helpers";
import { defaultDomain, defaultOrg, packages } from "./packages";

export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    let url = new URL(request.url);

    let pkg = packages[url.pathname];

    // If the package is not found, try to parse the URL as a repo path
    if (pkg == null) {
      let repoName = url.pathname;

      // Might start with /
      if (repoName.startsWith("/")) {
        repoName = repoName.slice(1);
      }

      // If requested path contains a slash after the start
      // it is not a valid repo name
      if (repoName.includes("/")) {
        return new Response("Not found", { status: 404 });
      }

      pkg = {
        pkg: `${defaultDomain}/${repoName}`,
        repoPath: `${defaultOrg}/${repoName}`,
      };
    }

    return new HTMLResponse(
      baseLayout(
        importClause(pkg.pkg, pkg.repoPath),
        sourceClause(pkg.pkg, pkg.repoPath),
        pkgURL(pkg.pkg)
      )
    );
  },
};
