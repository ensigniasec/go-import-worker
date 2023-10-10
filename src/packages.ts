type Pkg = {
  pkg: string;
  repoPath: string;
};

export const packages: Record<string, Pkg> = {
  "/operator": {
    pkg: "ensignia.dev/operator",
    repoPath: "ensigniasec/operator",
  },
  "/controlplane": {
    pkg: "ensignia.dev/controlplane",
    repoPath: "ensigniasec/controlplane",
  },
  "/apiserver": {
    pkg: "ensignia.dev/apiserver",
    repoPath: "ensigniasec/apiserver",
  },
  "/verde": {
    pkg: "ensignia.dev/verde",
    repoPath: "ensigniasec/verde",
  },
};
