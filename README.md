# Go Import cloudflare worker

This is a simple Cloudflare worker for rendering the necessary HTML Meta tags to host Go modules on your own domain, or use your own domain as module import path.

For more information on how this works, [see the Go docs](https://pkg.go.dev/cmd/go#hdr-Remote_import_paths)

## Usage

1. Fork this repo
2. Edit [src/packages.ts](/src/packages.ts) to contain the packages you want host
3. Deploy this worker to Cloudflare using `wrangler publish`
4. Configure the worker in Cloudflare to respond to each path that you configured in step 2.