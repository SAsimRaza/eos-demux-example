const { BaseActionWatcher } = require("demux");
const { NodeosActionReader } = require("demux-eos");
const ObjectActionHandler = require("./ObjectActionHandler");
const handlerVersion = require("./handlerVersions/v1");

const actionHandler = new ObjectActionHandler([handlerVersion]);

const actionReader = new NodeosActionReader({
  startAtBlock: 1,
  onlyIrreversible: false,
  nodeosEndpoint: "http://127.0.0.1:8888",
});
// https://eos.greymass.com

const actionWatcher = new BaseActionWatcher(actionReader, actionHandler, 5);

actionWatcher.watch();
