// 日志工具对象
export const mconsole = {
  name: '[m-list]',
  log(msg: any) {
    console.log(`${this.name} log:${msg}`);
  },
  error(msg: any) {
    console.error(`${this.name} error:${msg}`);
  },
};

export default mconsole;
