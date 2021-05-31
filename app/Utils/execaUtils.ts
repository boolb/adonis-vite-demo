import execa from 'execa';

const execaOpts = {
  detached: false,
  windowsHide: false,
};

export default {
  execute(file: string, commandArgs : string[], opts: execa.Options = {}) {
    const pid = execa(file, commandArgs, {...execaOpts, ...opts});
    pid.stdout?.pipe(process.stdout);
    pid.stderr?.pipe(process.stderr);
    return pid;
  }
}