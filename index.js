const { BaseActionWatcher } = require("demux");
const { AlanodeActionReader } = require("demux-ala");
// const { NodeosActionReader } = require("demux-eos");
const ObjectActionHandler = require("./ObjectActionHandler");
const handlerVersion = require("./handlerVersions/v1");

const actionHandler = new ObjectActionHandler([handlerVersion]);

console.log("Index is running");

const actionReader = new AlanodeActionReader({
  startAtBlock: 5000,
  onlyIrreversible: false,
  nodeosEndpoint: "https://hypertestapi.alacritys.net",
});

// http://34.204.67.213:8888 => Alacrity Network use by Xord
// Use this network, must replace "infratoken" with "alaio.token"

const actionWatcher = new BaseActionWatcher(actionReader, actionHandler, 5);

actionWatcher.watch();
