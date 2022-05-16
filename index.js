const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');
module.exports = class Nhentai extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'nh',
      description: 'Generates a random nhentai link',
      usage: '{c} <your search>',
      executor: (args) => ({
          send: true,
          result: this.nh(args)
      })
    });
  }
  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('nh');
  }

  nh(args) {
    return `https://nhentai.net/g/${Math.floor(Math.random()*450000)}`
  }
}
