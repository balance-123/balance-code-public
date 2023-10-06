import { Plugin } from 'vite';
import { WatchOptions } from 'chokidar';

/** Plugin configuration */
interface Config extends WatchOptions {
    /**
     * Whether the page should be reloaded regardless of which file is modified.
     * @default false
     */
    alwaysReload?: boolean;
    /**
     * Whether to log when a file change triggered a live reload
     * @default true
     */
    log?: boolean;
    /**
      * File paths will be resolved against this directory.
      *
      * @default ViteDevServer.root
      * @internal
      */
    root?: string;
}
/**
 * Reload all connected clients if one of the watched files changes or a new
 * file is added to a watched directory. This is useful when you are working
 * with a traditional backend and want to trigger page reloads when you are
 * changing for example php files.
 */
declare const liveReload: (paths: string | readonly string[], config?: Config) => Plugin;

export { Config, liveReload as default, liveReload };
